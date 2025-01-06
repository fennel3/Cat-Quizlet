"use client";

import { type ReactNode, useEffect } from "react";
import { useQuizContext } from "@/context/QuizContext";
import { useRouter } from "next/navigation";

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
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-xl font-bold text-gray-700 text-center">
            Welcome to the Quiz
          </h1>
          <p className="text-sm text-gray-500 mt-1">Current Score: {score}</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
}
