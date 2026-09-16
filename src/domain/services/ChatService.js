import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { ChatMessage } from '../models/ChatMessage.js';

/**
 * ChatService - Domain Service
 * Handles chat business logic. Stays framework-agnostic: callers pass in
 * already-translated text rather than this service depending on i18n directly.
 */
export class ChatService {
    /**
     * Create initial welcome message
     */
    static createWelcomeMessage(text) {
        return new ChatMessage({
            text,
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
     * Create AI response message from raw provider text (markdown).
     * Sanitized before being marked safe for v-html rendering.
     */
    static createAIMessage(rawText) {
        const html = DOMPurify.sanitize(marked.parse(rawText));
        return new ChatMessage({
            text: html,
            sender: 'ai'
        });
    }

    /**
     * Create error message
     */
    static createErrorMessage(text) {
        return new ChatMessage({
            text,
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
