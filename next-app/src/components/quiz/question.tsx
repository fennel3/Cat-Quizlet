import Quizform from "@/components/quiz/form";
import allBreeds from "@/constants/Breeds";

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

  console.log(correctBreed);

  const incorrectOptions: BreedOption[] = allBreeds
    .filter((breed) => breed.id !== correctBreed.id)
    .toSorted(() => 0.5 - Math.random())
    .slice(0, 3);

  const allOptions = [...incorrectOptions, correctBreed].toSorted(
    () => 0.5 - Math.random()
  );

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
  <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 m-4 border-8 border-gray-300">
    <h2 className="text-xl font-bold text-gray-700 mb-4">Guess the breed</h2>
    <div className="sm:h-96 h-80 overflow-hidden">
      <img
        className="h-full w-full sm:object-cover object-contain"
        src={catData.url}
        alt="cat image"
      />
    </div>
  </div>

  <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
    <h3 className="text-lg font-semibold text-gray-600 mb-2">
      Choose the correct breed:
    </h3>
    <Quizform
      breedoptions={allOptions}
      catId={catData.id}
    />
  </div>
</div>
  );
}
