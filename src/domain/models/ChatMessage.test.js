import { describe, it, expect } from 'vitest';
import { ChatMessage } from './ChatMessage.js';

describe('ChatMessage', () => {
    it('identifies a user message', () => {
        const msg = new ChatMessage({ text: 'hi', sender: 'user' });
        expect(msg.isUserMessage()).toBe(true);
        expect(msg.isAIMessage()).toBe(false);
    });

    it('identifies an AI message', () => {
        const msg = new ChatMessage({ text: 'hi', sender: 'ai' });
        expect(msg.isAIMessage()).toBe(true);
        expect(msg.isUserMessage()).toBe(false);
    });

    it('defaults the timestamp to now when not provided', () => {
        const before = Date.now();
        const msg = new ChatMessage({ text: 'hi', sender: 'user' });
        const after = Date.now();
        expect(msg.timestamp.getTime()).toBeGreaterThanOrEqual(before);
        expect(msg.timestamp.getTime()).toBeLessThanOrEqual(after);
    });
});
