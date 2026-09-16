import { getDavidContext } from './_lib/context.js';

/**
 * Vercel serverless function — proxies chat messages to Groq.
 * Keeps the provider API key server-side (never shipped to the client bundle).
 */
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message, language } = req.body || {};

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
        return res.status(400).json({ error: 'Message is required' });
    }

    if (message.length > 500) {
        return res.status(400).json({ error: 'Message too long' });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        console.error('GROQ_API_KEY is not configured');
        return res.status(500).json({ error: 'AI service not configured' });
    }

    const systemPrompt = getDavidContext(language === 'es' ? 'es' : 'en');

    try {
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message.trim() }
                ],
                max_tokens: 400,
                temperature: 0.7
            })
        });

        const data = await groqResponse.json();

        if (!groqResponse.ok) {
            throw new Error(data.error?.message || `Groq API error (${groqResponse.status})`);
        }

        const text = data.choices?.[0]?.message?.content;
        if (!text) {
            throw new Error('Empty response from AI provider');
        }

        return res.status(200).json({ text });
    } catch (error) {
        console.error('NinIA chat error:', error);
        return res.status(502).json({ error: 'AI service unavailable' });
    }
}
