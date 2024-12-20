
type catImagesResponse = {
  id: string,
    url: string,
    width: number,
    height: number
}

type catData = {
  id: string,
  name: string,

}

export default async function Quiz() {

  const apiKey = process.env.API_KEY; 

  
  const imagesResponse = await fetch('https://api.thecatapi.com/v1/images/search?limit=1&order=RAND&has_breeds=1', {
    method: 'GET',
    headers: {
      'x-api-key': apiKey, 
    },
  });

  const imagesData: catImagesResponse[] = await imagesResponse.json();

  const idToInsert = imagesData[0].id

  const catResponse = await fetch('https://api.thecatapi.com/v1/images/' + idToInsert);

  const catData = await catResponse.json();

  console.log(catData);

  return (
   <div>
    Quiz
   </div>
  );
}
