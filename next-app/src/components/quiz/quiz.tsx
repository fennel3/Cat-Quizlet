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
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">
          Welcome to the Quiz!
            
            <p>
            Current Score: {score}
            </p>
        </h1>
      </div>
      <div>
        {children} 
      </div>
    </>
  );
}
