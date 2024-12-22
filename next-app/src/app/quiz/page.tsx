import Quizform from "@/components/notuilol/quizform";
import allBreeds from "@/constants/Breeds";

type catImagesResponse = {
  id: string;
  url: string;
  width: number;
  height: number;
};

type catData = {
  id: string;
  url: string;
  breeds: breed[];
};

type breed = {
  id: string;
  name: string;
}

export default async function Quiz() {
  const apiKey = process.env.API_KEY !;

  const imagesResponse = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=1&order=RAND&has_breeds=1",
    {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
      },
    }
  );

  const imagesData: catImagesResponse[] = await imagesResponse.json();

  const idToInsert = imagesData[0].id;

  const catResponse = await fetch(
    "https://api.thecatapi.com/v1/images/" + idToInsert,
    {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
      },
    }
  );

  const catData: catData = await catResponse.json();
  console.log(catData);

  const correctBreed: breed = {
    name: catData.breeds[0].name,
    id: catData.breeds[0].id,
  };

  console.log(correctBreed);

  const incorrectOptions: breed[] = allBreeds
    .filter(breed => breed.id !== correctBreed.id)
    .toSorted(() => 0.5 - Math.random())
    .slice(0, 3);

  const allOptions = [
    ...incorrectOptions,
    correctBreed,
  ].toSorted(() => 0.5 - Math.random());

  console.log(allOptions);

  return (
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
              <div className="size-full flex items-center justify-center"></div>
      </div>

      </div>
      <div>
        <Quizform names={catData.name}/>
      </div>
    </>
  );
}
