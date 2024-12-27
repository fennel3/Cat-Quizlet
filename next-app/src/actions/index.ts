import { CatData } from "@/app/quiz/page";

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

  if (!catResponse.ok) {
    console.error('Error fetching cat data:', catResponse.status, catResponse.statusText);
    return { success: false };
  }

  const catData: CatData = await catResponse.json();

  console.log(catData.breeds[0].id)
  

  if (formData.get('option') === catData.breeds[0].id) {
    return { success: true };
  }

  return { success: false };
}