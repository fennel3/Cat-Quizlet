'use server';

import { type CatData } from "@/components/quiz/Question";

export async function correctCat(formData: FormData) {
    const apiKey = process.env.API_KEY!;

    const catResponse = await fetch(
        "https://api.thecatapi.com/v1/images/" + formData.get('cat'),
        {
          method: "GET",
          headers: {
            "x-api-key": apiKey,
          },
          cache: 'no-cache',
        }
      );

      const catData: CatData = await catResponse.json();

      return catData
}