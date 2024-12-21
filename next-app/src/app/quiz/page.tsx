import Optioncard from "@/components/notuilol/optioncard";

type catImagesResponse = {
  id: string;
  url: string;
  width: number;
  height: number;
};

type catData = {
  id: string;
  name: string;
  image: string;
};

export default async function Quiz() {
  const apiKey = process.env.API_KEY;

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

  return (
    <>
      <div className="flex items-center justify-center m-10">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Quiz! Now tell me... What breed is this cat!
      </h1>

      </div>
      <div>
        <Optioncard catData={catData}/>
      </div>
    </>
  );
}
