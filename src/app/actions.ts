"use server";

import { getMakeupSuggestions, MakeupSuggestionsInput } from "@/ai/flows/personalized-makeup-suggestions";

export async function handleAiConsultation(input: MakeupSuggestionsInput): Promise<{ suggestions?: string; error?: string }> {
  try {
    const result = await getMakeupSuggestions(input);
    return { suggestions: result.suggestions };
  } catch (e: any) {
    console.error("AI Consultation Error:", e);
    return { error: "Sorry, we couldn't generate suggestions at this time. The AI might be busy, or the uploaded image is not supported. Please try again later with a clear, well-lit photo." };
  }
}
