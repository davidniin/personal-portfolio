import { ChatMessage } from '../models/ChatMessage.js';

/**
 * ChatService - Domain Service
 * Handles chat business logic
 */
export class ChatService {
    /**
     * Create initial welcome message
     */
    static createWelcomeMessage() {
        return new ChatMessage({
            text: "Hola! Soy <strong>NinIA</strong>.<br/>Pregúntame sobre la experiencia de David, sus habilidades de liderazgo o sus proyectos en Vue y Angular.",
            sender: 'ai'
        });
    }

    /**
     * Create user message
     */
    static createUserMessage(text) {
        return new ChatMessage({
            text: text.trim(),
            sender: 'user'
        });
    }

    /**
     * Create AI response message
     */
    static createAIMessage(text) {
        return new ChatMessage({
            text,
            sender: 'ai'
        });
    }

    /**
     * Create error message
     */
    static createErrorMessage(errorType = 'connection') {
        const messages = {
            connection: '⚠️ Connection error.',
            api: '⚠️ Error connecting to NinIA.',
            unknown: '⚠️ An unexpected error occurred.'
        };

        return new ChatMessage({
            text: messages[errorType] || messages.unknown,
            sender: 'ai'
        });
    }

    /**
     * Validate user input
     */
    static validateInput(text) {
        if (!text || typeof text !== 'string') {
            return { valid: false, error: 'Invalid input' };
        }

        const trimmed = text.trim();
        if (trimmed.length === 0) {
            return { valid: false, error: 'Empty message' };
        }

        if (trimmed.length > 500) {
            return { valid: false, error: 'Message too long' };
        }

        return { valid: true, text: trimmed };
    }
}
