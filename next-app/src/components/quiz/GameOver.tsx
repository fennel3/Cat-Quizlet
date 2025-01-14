import { useQuizContext } from "@/context/QuizContext";

export default function GameOver() {
  const { score, catAnswer } = useQuizContext();
  if (catAnswer) {
    <GameOver />;
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-800 text-white p-6">
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 max-w-lg text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-red-500">
            Game Over
          </h1>
          <p className="text-xl sm:text-2xl mb-4">
            Your score was{" "}
            <span className="font-bold text-yellow-400">{score}</span>
          </p>
          <p className="text-base sm:text-lg mb-6 text-gray-400">
            Don’t give up! Give it another go.
          </p>
          <button
            className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        </div>
        <div className=" flex justify-center p-8">
          <div className="flex flex-col justify-center items-center max-w-5xl bg-gray-700 shadow-lg rounded-lg p-6 border-gray-300">
            the correct answer was: {catAnswer.breeds[0].name}
            <img
              className="mt-7 max-w-s max-h-80 object-cover rounded-lg border-gray-300"
              src={catAnswer.url}
              alt="cat image"
            />
          </div>
        </div>
      </div>
    );
  }
}
