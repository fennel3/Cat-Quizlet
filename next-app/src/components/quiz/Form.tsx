"use client";

import { FormEvent, Fragment, useEffect, useState } from "react";
import { BreedOption, CatData } from "./Question";
import { useQuizContext } from "@/context/QuizContext";
import { correctCat } from "@/actions/CorrectCat";

type Props = {
  breedoptions: BreedOption[];
  catId: string;
};

export default function QuizForm({ breedoptions, catId }: Props) {
  const { setScore, catAnswer, setCatAnswer } = useQuizContext();

  const handleChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const catData: CatData = await correctCat(formData);

    if (formData.get('option') === catData.breeds[0].id) {
      setScore((previousValue) => previousValue + 1);
    } else {
      setCatAnswer(catData);
    }
  };

  //formData.get('option') === catData.breeds[0].id

  if (catAnswer) {
    return (
      <>
        
      </>
    );
  }

  return (
    <>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          Choose the correct breed:
        </h3>
        <form onSubmit={handleChange}>
          <input type="hidden" name="cat" value={catId} />
          {breedoptions.map((breedOption) => (
            <Fragment key={breedOption.id}>
              <p>
                <label>
                  <input
                    className="m-2"
                    type="radio"
                    name="option"
                    value={breedOption.id}
                  />{" "}
                  {breedOption.name}
                </label>
              </p>
            </Fragment>
          ))}
          <button
            type="submit"
            className="m-3 px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
