import { ref, nextTick } from 'vue';
import { ChatService } from '../../domain/services/ChatService.js';
import { GeminiClient } from '../../infrastructure/api/GeminiClient.js';

/**
 * useChat Composable
 * Manages chat widget state and message handling
 */
export function useChat(apiKey = '') {
    const isChatOpen = ref(false);
    const chatMessages = ref([ChatService.createWelcomeMessage()]);
    const userInput = ref('');
    const isThinking = ref(false);
    const chatContainerRef = ref(null);

    const geminiClient = new GeminiClient(apiKey);

    const scrollToBottom = () => {
        if (chatContainerRef.value) {
            chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight;
        }
    };

    const toggleChat = () => {
        isChatOpen.value = !isChatOpen.value;
        if (isChatOpen.value) {
            setTimeout(() => scrollToBottom(), 100);
        }
    };

    const sendMessage = async () => {
        const validation = ChatService.validateInput(userInput.value);

        if (!validation.valid) {
            return;
        }

        // Add user message
        const userMessage = ChatService.createUserMessage(validation.text);
        chatMessages.value.push(userMessage);
        userInput.value = '';
        isThinking.value = true;

        await nextTick();
        scrollToBottom();

        try {
            const aiResponse = await geminiClient.generateContent(
                validation.text,
                GeminiClient.getDavidContext()
            );

            chatMessages.value.push(ChatService.createAIMessage(aiResponse));
        } catch (error) {
            const errorType = error.message.includes('API') ? 'api' : 'connection';
            chatMessages.value.push(ChatService.createErrorMessage(errorType));
        } finally {
            isThinking.value = false;
            await nextTick();
            scrollToBottom();
        }
    };

    return {
        isChatOpen,
        chatMessages,
        userInput,
        isThinking,
        chatContainerRef,
        toggleChat,
        sendMessage,
        scrollToBottom
    };
}
