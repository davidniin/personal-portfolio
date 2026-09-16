import { describe, it, expect } from 'vitest';
import { ChatService } from './ChatService.js';

describe('ChatService.validateInput', () => {
    it('accepts and trims normal text', () => {
        const result = ChatService.validateInput('  Hello there  ');
        expect(result).toEqual({ valid: true, text: 'Hello there' });
    });

    it('rejects empty strings', () => {
        expect(ChatService.validateInput('').valid).toBe(false);
        expect(ChatService.validateInput('   ').valid).toBe(false);
    });

    it('rejects non-string input', () => {
        expect(ChatService.validateInput(null).valid).toBe(false);
        expect(ChatService.validateInput(undefined).valid).toBe(false);
    });

    it('rejects messages over 500 characters', () => {
        const longText = 'a'.repeat(501);
        expect(ChatService.validateInput(longText).valid).toBe(false);
    });

    it('accepts messages at exactly 500 characters', () => {
        const text = 'a'.repeat(500);
        expect(ChatService.validateInput(text).valid).toBe(true);
    });
});

describe('ChatService message factories', () => {
    it('createUserMessage trims text and tags the sender as user', () => {
        const msg = ChatService.createUserMessage('  hi  ');
        expect(msg.text).toBe('hi');
        expect(msg.sender).toBe('user');
        expect(msg.isUserMessage()).toBe(true);
    });

    it('createWelcomeMessage uses the given (pre-translated) text as-is', () => {
        const msg = ChatService.createWelcomeMessage('Hola desde i18n');
        expect(msg.text).toBe('Hola desde i18n');
        expect(msg.isAIMessage()).toBe(true);
    });

    it('createErrorMessage uses the given (pre-translated) text as-is', () => {
        const msg = ChatService.createErrorMessage('Algo salió mal');
        expect(msg.text).toBe('Algo salió mal');
        expect(msg.isAIMessage()).toBe(true);
    });
});

describe('ChatService.createAIMessage', () => {
    it('renders markdown to HTML', async () => {
        const msg = await ChatService.createAIMessage('This is **bold** text.');
        expect(msg.text).toContain('<strong>bold</strong>');
        expect(msg.isAIMessage()).toBe(true);
    });

    it('strips <script> tags from the AI response before rendering', async () => {
        const malicious = 'Hello<script>alert("xss")</script> world';
        const msg = await ChatService.createAIMessage(malicious);
        expect(msg.text).not.toContain('<script>');
        expect(msg.text).not.toContain('alert(');
    });

    it('strips inline event handler attributes (e.g. onerror)', async () => {
        const malicious = '<img src="x" onerror="alert(1)">';
        const msg = await ChatService.createAIMessage(malicious);
        expect(msg.text).not.toContain('onerror');
    });
});
