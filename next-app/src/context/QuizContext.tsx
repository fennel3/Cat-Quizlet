// UserContext.tsx
import { CatAnswer } from "@/components/quiz/Question";
import { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react";

type QuizContextType = {
  score: number
  setScore: Dispatch<SetStateAction<number>>
  catAnswer: CatAnswer
  setCatAnswer: Dispatch<SetStateAction<CatAnswer>>
}

type Props = {
  children: ReactNode
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: Props) => {
  const [score, setScore] = useState<number>(0);
  const [catAnswer, setCatAnswer] = useState<CatAnswer>(null);

  return (
    <QuizContext.Provider value={{ score, setScore, catAnswer, setCatAnswer }}>
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
