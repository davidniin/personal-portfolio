/**
 * ChatClient - Infrastructure Layer
 * Talks to our own /api/chat serverless function (never calls the AI provider
 * directly from the browser, so no provider key is ever shipped to the client).
 */
export class ChatClient {
    constructor() {
        this.endpoint = '/api/chat';
    }

    /**
     * Send a user message and get back the raw AI response text.
     */
    async generateContent(userMessage, language) {
        let response;

        try {
            response = await fetch(this.endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage, language })
            });
        } catch (networkError) {
            throw new Error('connection');
        }

        const data = await response.json().catch(() => ({}));

        if (!response.ok || !data.text) {
            throw new Error('api');
        }

        return data.text;
    }
}
