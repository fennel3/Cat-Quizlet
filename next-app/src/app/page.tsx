import Link from "next/link";

export default async function Home() {
  
  return (
    <div className="w-full min-h-screen p-6 min-h-screen bg-gray-800 text-gray-300">
      <div className="w-full flex flex-col items-center mb-4">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">
            About - Cat Quizlet
          </h1>
          <p className="my-4 text-sm sm:text-base">
            Welcome to Cat Quizlet v1.0.
          </p>
          <p className="my-4 text-sm sm:text-base">
            The current version involves a multiple-choice question consisting
            of 1 right answer and 3 wrong answers.
          </p>
          <p className="my-4 text-sm sm:text-base">
            The game ends when an answer submitted is incorrect. So be careful!
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full mb-6">
        <Link href="/quiz">
          <button className="m-3 px-4 py-2 bg-gray-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            START QUIZ
          </button>
        </Link>
        <Link href="/highscores">
          <button className="m-3 px-4 py-2 bg-gray-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            VIEW HIGHSCORES
          </button>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-800 ">
        <div>
          <img
            className="max-w-s max-h-96 object-cover rounded-lg "
            src="/bogglingquestion.jpg"
            alt="cat image"
          />
        </div>
      </div>
    </div>
  );
}
