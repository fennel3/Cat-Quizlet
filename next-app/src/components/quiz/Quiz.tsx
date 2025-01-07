"use client";

import { type ReactNode, useEffect } from "react";
import { useQuizContext } from "@/context/QuizContext";
import { useRouter } from "next/navigation";
import { correctCat } from "@/actions/CorrectCat";

type Props = {
  children: ReactNode;
};

export default function Quiz({ children }: Props) {
  const { score, gameOver } = useQuizContext();
  const router = useRouter();

  useEffect(() => {
    if (score === 0) return;

    router.refresh();
  }, [score]);

  // const waitForAnswer = async () => {
  //   const result = await correctCat();
  //   console.log(result);
  // };

  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-800 text-white p-6">
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-lg text-center">
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
      </div>
    );
  }

  return (
    <>
      <div className="w-full min-h-screen bg-gray-800">
        <div className="flex flex-col items-center justify-center px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-200 text-center">
            Welcome to the Quiz
          </h1>
          <p className="text-sm text-gray-500 mt-2">Current Score: {score}</p>
        </div>

        <div className="flex justify-center">
          <div className="size-2/3  md:size-2/5 lg:size-1/3 flex flex-col max-w-5xl bg-slate-400 shadow-lg rounded-lg p-6 border-gray-300">
            <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
              Guess the Breed
            </h2>
            <div className="flex flex-col justify-center items-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
