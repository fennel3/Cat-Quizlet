import Quizform from "@/components/quiz/Form";
import allBreeds from "@/constants/Breeds";
import CorrectCat from "./CorrectCat";

type CatImagesResponse = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type CatData = {
  id: string;
  url: string;
  breeds: BreedOption[];
};

export type BreedOption = {
  id: string;
  name: string;
};

export const dynamic = "force-dynamic";

export default async function Question() {
  const apiKey = process.env.API_KEY!;

  const imagesResponse = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=1&order=RAND&has_breeds=1",
    {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
      },
      cache: "no-cache",
    }
  );

  const imagesData: CatImagesResponse[] = await imagesResponse.json();

  const idToInsert = imagesData[0].id;

  const catResponse = await fetch(
    "https://api.thecatapi.com/v1/images/" + idToInsert,
    {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
      },
      cache: "no-cache",
    }
  );

  const catData: CatData = await catResponse.json();

  const correctBreed: BreedOption = {
    name: catData.breeds[0].name,
    id: catData.breeds[0].id,
  };

  const incorrectOptions: BreedOption[] = allBreeds
    .filter((breed) => breed.id !== correctBreed.id)
    .toSorted(() => 0.5 - Math.random())
    .slice(0, 3);

  const allOptions = [...incorrectOptions, correctBreed].toSorted(
    () => 0.5 - Math.random()
  );

  return (
    <>
      <img
        className="h-full w-full object-cover max-h-[50vh] rounded-lg border-gray-300"
        src={catData.url}
        alt="cat image"
      />

      <Quizform breedoptions={allOptions} catId={catData.id} />
    </>
  );
}
