// UserContext.tsx
import { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react";

type QuizContextType = {
  score: number
  setScore: Dispatch<SetStateAction<number>>
  gameOver: boolean
  setGameOver: Dispatch<SetStateAction<boolean>>
}

type Props = {
  children: ReactNode
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: Props) => {
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  return (
    <QuizContext.Provider value={{ score, setScore, gameOver, setGameOver }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};
