'use server';

/**
 * @fileOverview An AI assistant that provides personalized style suggestions for a website based on client branding.
 *
 * - getStyleSuggestions - A function that handles the style suggestion process.
 * - StyleSuggestionsInput - The input type for the getStyleSuggestions function.
 * - StyleSuggestionsOutput - The return type for the getStyleSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StyleSuggestionsInputSchema = z.object({
  brandingDescription: z
    .string()
    .describe('A detailed description of the client\u2019s existing branding, including mission, values, and target audience.'),
  designPreferences: z
    .string()
    .optional()
    .describe('Optional: Any specific design preferences or examples the client has in mind.'),
});
export type StyleSuggestionsInput = z.infer<typeof StyleSuggestionsInputSchema>;

const StyleSuggestionsOutputSchema = z.object({
  layoutSuggestions: z
    .string()
    .describe('Personalized layout suggestions for the website.'),
  colorPaletteRecommendations: z
    .string()
    .describe('Recommended color palette to align with the brand identity.'),
  typographyChoices: z
    .string()
    .describe('Suggested typography choices, including font pairings.'),
  overallStyleDescription: z
    .string()
    .describe('An overall description of the suggested style for the website.'),
});
export type StyleSuggestionsOutput = z.infer<typeof StyleSuggestionsOutputSchema>;

export async function getStyleSuggestions(input: StyleSuggestionsInput): Promise<StyleSuggestionsOutput> {
  return styleSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'styleSuggestionsPrompt',
  input: {schema: StyleSuggestionsInputSchema},
  output: {schema: StyleSuggestionsOutputSchema},
  prompt: `You are an AI Style Assistant that specializes in providing personalized style suggestions for websites based on client branding.

  Analyze the provided branding description and design preferences (if any) to offer tailored suggestions for website layout, color palette, and typography.

  Branding Description: {{{brandingDescription}}}
  Design Preferences: {{{designPreferences}}}

  Consider the brand identity, target audience, and overall message when generating the style suggestions.  The suggestions should be presented as concise and actionable recommendations.

  Your suggestions should be specific to the branding description, and follow these instructions.

  - For layout suggestions, think about modern design principles, user experience, and the type of content that will be displayed on the website.
  - For the color palette, consider the emotional impact of colors and how they align with the brand\u2019s values and personality. Suggest specific hex codes.
  - For typography choices, recommend font pairings that are both visually appealing and easy to read.  Refer to the fonts by name.
`,
});

const styleSuggestionsFlow = ai.defineFlow(
  {
    name: 'styleSuggestionsFlow',
    inputSchema: StyleSuggestionsInputSchema,
    outputSchema: StyleSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
