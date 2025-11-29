import { marked } from 'marked';

/**
 * GeminiClient - Infrastructure Layer
 * Handles communication with Google Gemini API
 */
export class GeminiClient {
    constructor(apiKey = '') {
        this.apiKey = apiKey;
        this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models';
        this.model = 'gemini-1.5-flash';
    }

    /**
     * Generate content using Gemini API
     */
    async generateContent(userMessage, systemContext) {
        if (!this.apiKey) {
            throw new Error('API key not configured');
        }

        const url = `${this.baseUrl}/${this.model}:generateContent?key=${this.apiKey}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ role: 'user', parts: [{ text: userMessage }] }],
                    systemInstruction: { parts: [{ text: systemContext }] }
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error.message || 'API Error');
            }

            const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!aiText) {
                throw new Error('No response from AI');
            }

            // Parse markdown to HTML
            return marked.parse(aiText);
        } catch (error) {
            console.error('Gemini API Error:', error);
            throw error;
        }
    }

    /**
     * Get system context for David's portfolio
     */
    static getDavidContext() {
        return `You are NinIA, an AI assistant for David Nin's portfolio website.

**About David:**
- Senior Frontend Developer at Amadeus (Barcelona)
- 6+ years of experience in web development
- Expert in Vue.js, Angular, TypeScript, and modern frontend architectures
- Strong focus on code quality, testing, and mentorship

**Key Experience:**
- Amadeus (2023-Present): Code quality, agile collaboration, mentorship, performance optimization
- T2C (2020-2023): Led Vue 2 to Vue 3 migration, microservices architecture, Vuex state management
- Quantion (2019-2020): Angular upgrades, testing culture, full-stack Node.js
- Sigma (2018-2019): Java enterprise development

**Technical Skills:**
- Frontend: Vue.js (ecosystem), Angular, TypeScript, Tailwind CSS
- Testing: Jest, Mocha, Jasmine
- Backend: Node.js
- Soft Skills: Mentoring, Agile methodologies, code reviews

**Instructions:**
- Be concise and professional
- Highlight David's technical expertise and leadership skills
- Use specific examples from his experience when relevant
- Keep responses under 150 words
- Format responses in markdown when helpful`;
    }
}
