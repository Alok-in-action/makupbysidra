'use server';

/**
 * @fileOverview Provides AI-powered personalized makeup suggestions based on a user's uploaded photo.
 *
 * - `getMakeupSuggestions` -  A function that takes a photo and returns personalized makeup suggestions.
 * - `MakeupSuggestionsInput` - The input type for the `getMakeupSuggestions` function.
 * - `MakeupSuggestionsOutput` - The return type for the `getMakeupSuggestions` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MakeupSuggestionsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type MakeupSuggestionsInput = z.infer<typeof MakeupSuggestionsInputSchema>;

const MakeupSuggestionsOutputSchema = z.object({
  suggestions: z.string().describe('Personalized makeup suggestions based on the photo.'),
});
export type MakeupSuggestionsOutput = z.infer<typeof MakeupSuggestionsOutputSchema>;

export async function getMakeupSuggestions(input: MakeupSuggestionsInput): Promise<MakeupSuggestionsOutput> {
  return makeupSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'makeupSuggestionsPrompt',
  input: {schema: MakeupSuggestionsInputSchema},
  output: {schema: MakeupSuggestionsOutputSchema},
  prompt: `You are a professional makeup artist. Analyze the user's photo and provide personalized makeup suggestions that highlight their features.

Photo: {{media url=photoDataUri}}

Suggestions:`,
});

const makeupSuggestionsFlow = ai.defineFlow(
  {
    name: 'makeupSuggestionsFlow',
    inputSchema: MakeupSuggestionsInputSchema,
    outputSchema: MakeupSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
