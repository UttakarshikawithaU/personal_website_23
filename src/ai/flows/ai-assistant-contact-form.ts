'use server';

/**
 * @fileOverview An AI assistant for the contact form on the landing page.
 *
 * - aiAssistant - A function that answers questions about Uttakarshika's experience and skills.
 * - AiAssistantInput - The input type for the aiAssistant function.
 * - AiAssistantOutput - The return type for the aiAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiAssistantInputSchema = z.object({
  query: z.string().describe('The question from the website visitor.'),
});
export type AiAssistantInput = z.infer<typeof AiAssistantInputSchema>;

const AiAssistantOutputSchema = z.object({
  answer: z.string().describe('The AI assistant answer to the question.'),
});
export type AiAssistantOutput = z.infer<typeof AiAssistantOutputSchema>;

export async function aiAssistant(input: AiAssistantInput): Promise<AiAssistantOutput> {
  return aiAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAssistantPrompt',
  input: {schema: AiAssistantInputSchema},
  output: {schema: AiAssistantOutputSchema},
  prompt: `You are an AI assistant on Uttakarshika\'s personal landing page. Your goal is to answer basic questions from website visitors about her experience and skills, using the information provided below.

Uttakarshika is a Data Analyst | Graduate Research Assistant @BGSW | AWS Deepracer\'23 Top 20 India | Numerai Top 8% Global | Big Data Analysis | Ex-PR Team@ IIITR | CSE \'24 IIITR | CDAC\'25

She has experience as a Data Engineer at IAV India Tech and Tata Technologies Limited, and as a Graduate Research Assistant at Bosch Global Software Technologies.

She is currently pursuing a Postgraduate Diploma in Big Data Analysis at the Centre for Development of Advanced Computing (C-DAC).

She graduated in 2024 from the Indian Institute of Information Technology, Raichur, Karnataka, with a B.Tech in Computer Science and Engineering.

She is skilled in Big Data Analytics, PySpark, and other data-related technologies.  She has a strong interest in leveraging data to solve complex problems and drive real-world impact. 

Featured Projects:
An Open-Source Framework for Breast Cancer Diagnosis leveraging Pathology, Radiology, and Medical History | Bosch Global Software Technologies

Here is the visitor\'s question:
{{{query}}}`,
});

const aiAssistantFlow = ai.defineFlow(
  {
    name: 'aiAssistantFlow',
    inputSchema: AiAssistantInputSchema,
    outputSchema: AiAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
