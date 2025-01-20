"use client";

import { type ReactNode, useEffect } from "react";
import { useQuizContext } from "@/context/QuizContext";
import { useRouter } from "next/navigation";
import GameOver from "./GameOver";


type Props = {
  children: ReactNode;
};

export default function Quiz({ children }: Props) {
  const { score, gameover } = useQuizContext();
  const router = useRouter();

  useEffect(() => {
    if (score === 0) return;

    router.refresh();
  }, [score]);

  if (gameover) {
    return <GameOver />;
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
          <div className=" flex flex-col max-w-5xl bg-slate-400 shadow-lg rounded-lg p-6 border-gray-300">
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
