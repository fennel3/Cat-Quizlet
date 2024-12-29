
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

export const dynamic = 'force-dynamic';

export default async function Question(){
  const apiKey = process.env.API_KEY !;

  const imagesResponse = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=1&order=RAND&has_breeds=1",
    {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
      },
      cache: 'no-cache',
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
      cache: 'no-cache',
    }
  );

  const catData: CatData = await catResponse.json();

  const correctBreed: BreedOption = {
    name: catData.breeds[0].name,
    id: catData.breeds[0].id,
  };

  console.log(correctBreed);

  const incorrectOptions: BreedOption[] = allBreeds
    .filter(breed => breed.id !== correctBreed.id)
    .toSorted(() => 0.5 - Math.random())
    .slice(0, 3);

  const allOptions = [
    ...incorrectOptions,
    correctBreed,
  ].toSorted(() => 0.5 - Math.random());

  return(
    <>
      <div className="flex items-center justify-center m-10">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Quiz! Now tell me... What breed is this cat!
      </h1>

      <div>
          <div className="size-full flex items-center justify-center">
            <img
              className=" justify-center m-10 size-2/6"
              src={catData.url}
              alt="cat image"
            />
          </div>
      </div>

      </div>
      <div>
        <Quizform breedoptions={allOptions} catId = {catData.id}/>
      </div>
    </>

  )

}
