/**
 * ChatMessage Domain Model
 * Represents a chat message in the conversation
 */
export class ChatMessage {
    constructor({ text, sender, timestamp = new Date() }) {
        this.text = text;
        this.sender = sender; // 'user' | 'ai'
        this.timestamp = timestamp;
    }

    /**
     * Check if message is from user
     */
    isUserMessage() {
        return this.sender === 'user';
    }

    /**
     * Check if message is from AI
     */
    isAIMessage() {
        return this.sender === 'ai';
    }

    /**
     * Get formatted timestamp
     */
    getFormattedTime() {
        return this.timestamp.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}
