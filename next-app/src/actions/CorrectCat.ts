'use server';

import { type CatData } from "@/components/quiz/Question";

export async function correctCat() {
    const apiKey = process.env.API_KEY!;

    const catResponse = await fetch(
        "https://api.thecatapi.com/v1/images/",
        {
          method: "GET",
          headers: {
            "x-api-key": apiKey,
          },
          cache: 'no-cache',
        }
      );

      const catData: CatData = await catResponse.json();

      const correctBreed = {
          name: catData.breeds[0].name,
          id: catData.breeds[0].id,
        };

      return correctBreed
}
