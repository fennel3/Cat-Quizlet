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
    return <h1>Game over</h1>;
  }

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-xl font-bold text-gray-700 text-center">
            Welcome to the Quiz!
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
