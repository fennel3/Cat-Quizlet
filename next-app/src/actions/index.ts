'use server';

import { type CatData } from "@/app/quiz/page";

export async function checkUserAnswer(formData: FormData) {
    const apiKey = process.env.API_KEY!;

    const catResponse = await fetch(
        "https://api.thecatapi.com/v1/images/" + formData.get('cat'),
        {
          method: "GET",
          headers: {
            "x-api-key": apiKey,
          },
        }
      );

      const catData: CatData = await catResponse.json();

      if(formData.get('option') === catData.breeds[0].id){
        return {success: true}

      }
      return  {success: false}
}
