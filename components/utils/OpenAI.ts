import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI,
    dangerouslyAllowBrowser: true
});

async function generatePrompts(prompt: string) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Who won the world series in 2020?"},
        ]
    });
    return response.choices[0].message.content;
};

export default generatePrompts;