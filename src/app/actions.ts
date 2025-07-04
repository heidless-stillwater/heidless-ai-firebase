'use server';

import { getStyleSuggestions, type StyleSuggestionsInput, type StyleSuggestionsOutput } from '@/ai/flows/style-suggestions';
import { z } from 'zod';

const formSchema = z.object({
  brandingDescription: z.string().min(20, {
    message: "Branding description must be at least 20 characters.",
  }),
  designPreferences: z.string().optional(),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: StyleSuggestionsOutput;
};

export async function generateStyleSuggestions(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const formData = {
      brandingDescription: data.get('brandingDescription'),
      designPreferences: data.get('designPreferences'),
  }
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Invalid form data',
      issues,
      fields: {
        brandingDescription: formData.brandingDescription?.toString() ?? '',
        designPreferences: formData.designPreferences?.toString() ?? '',
      }
    };
  }

  try {
    const aiResponse = await getStyleSuggestions(parsed.data as StyleSuggestionsInput);
    return {
      message: 'Suggestions generated successfully.',
      data: aiResponse,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Failed to generate suggestions due to a server error. Please try again later.',
      fields: parsed.data,
    };
  }
}
