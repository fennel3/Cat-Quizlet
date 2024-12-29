'use client';

import { FormEvent, Fragment } from "react";
import { checkUserAnswer } from "@/actions";
import { BreedOption } from "./question";
import { useQuizContext } from "@/context/QuizContext";


type Props = {
  breedoptions: BreedOption[],
  catId: string
}

export default function QuizForm({ breedoptions, catId }: Props) {
  const { setScore, setGameOver } = useQuizContext();


  const handleChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await checkUserAnswer(formData);
    console.log(result);
    if (result){
      setScore(previousValue => previousValue + 1);
    } else {
      setGameOver(true);
    }

  }

  return (
    <>
      <form onSubmit={handleChange}>
        <input type='hidden' name='cat' value={catId} />
        {breedoptions.map(breedOption => (
          <Fragment key={breedOption.id}>
            <label>
                <input
                  type="radio"
                  name="option"
                  value={breedOption.id}
                /> {breedOption.name}
            </label>
            <br/>
          </Fragment>
        ))}
      <button type='submit'> Submit </button>
      </form>
    </>
  );
}
