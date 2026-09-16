import { ChatMessage } from '../models/ChatMessage.js';

// marked/dompurify are only needed once an AI response actually arrives,
// so they're loaded on demand instead of shipping in the initial bundle
// for every visitor (most never open the chat).
let sanitizers = null;
function loadSanitizers() {
    if (!sanitizers) {
        sanitizers = Promise.all([import('marked'), import('dompurify')])
            .then(([markedModule, dompurifyModule]) => ({
                marked: markedModule.marked,
                DOMPurify: dompurifyModule.default
            }));
    }
    return sanitizers;
}

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
    static async createAIMessage(rawText) {
        const { marked, DOMPurify } = await loadSanitizers();
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
