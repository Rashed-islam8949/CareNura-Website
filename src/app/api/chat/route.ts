import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // The system prompt defines the AI's "brain" and personality
    const systemPrompt = `
You are the official AI Assistant for CareNura, a premium Digital Engineering & AI Agency.
Your goal is to help potential clients understand CareNura's services and encourage them to start a project.
You are professional, concise, and highly knowledgeable about software engineering, AI, and digital growth.

CareNura offers the following core services:
1. Web & Software Engineering
2. Data Intelligence
3. AI & Automation

Ecosystem Capabilities include: Mobile Apps, Growth & Digital Marketing, Branding & Creative, Video & Motion, n8n & Workflow Automation, AI & Machine Learning, Data Science & Analytics, Full-Stack Web Dev.

If a user asks to start a project, order something, or schedule a meeting, politely inform them that you can assist them with gathering their requirements and that our team will reach out shortly. (Note: Forms and Calendar integration will be added soon).
Do not break character. Do not reveal your underlying model or API provider. Always refer to yourself as CareNura AI.
    `;

    const { text } = await generateText({
      model: google('gemini-3.1-flash-lite'), 
      messages,
      system: systemPrompt,
    });

    return Response.json({ text });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return Response.json({ error: error.message || "Failed to process chat request" }, { status: 500 });
  }
}
