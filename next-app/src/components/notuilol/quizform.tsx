'use client';

import { Fragment } from "react";
import { type BreedOption } from "@/app/quiz/page";
import { checkUserAnswer } from "@/actions";


type Props = {
  breedoptions: BreedOption[],
  catId: string
}

export default function QuizForm({ breedoptions, catId }: Props) {
  return (
    <>
      <form action={checkUserAnswer}>
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
