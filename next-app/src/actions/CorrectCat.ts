"use server";

import { type CatData } from "@/components/quiz/Question";

export async function correctCat(catId: string) {
  const apiKey = process.env.API_KEY!;

  const catResponse = await fetch(
    "https://api.thecatapi.com/v1/images/" + catId,
    {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
      },
      cache: "no-cache",
    }
  );

  const catData: CatData = await catResponse.json();

  const correctBreed = catData.breeds[0].name;

  return correctBreed;
}
