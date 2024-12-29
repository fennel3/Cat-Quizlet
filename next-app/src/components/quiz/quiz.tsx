'use client'

import { type ReactNode, useEffect } from 'react';
import { useQuizContext } from '@/context/QuizContext';
import { useRouter } from 'next/navigation';

type Props = {
  children: ReactNode
};

export default function Quiz({ children }: Props) {
  const { score, gameOver } = useQuizContext();
  const router = useRouter();

  useEffect(() => {
    if (score === 0) return;

    router.refresh();
  }, [score]);

  if (gameOver){
    return(
      <h1>Game over</h1>
    )
  }

  return (
    <>
      <div className="flex items-center justify-center m-10">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to the Quiz!
        </h1>
      </div>
      <p>Score: {score}</p>
      <div>
        {children}
      </div>
    </>
  );
}
