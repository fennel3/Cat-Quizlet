"use client";

import { FormEvent, Fragment } from "react";
import { checkUserAnswer } from "@/actions/CheckUserAnswer";
import { BreedOption } from "./Question";
import { useQuizContext } from "@/context/QuizContext";

type Props = {
  breedoptions: BreedOption[];
  catId: string;
};

export default function QuizForm({ breedoptions, catId }: Props) {
  const { setScore, setGameOver } = useQuizContext();

  const handleChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await checkUserAnswer(formData);
    if (result) {
      setScore((previousValue) => previousValue + 1);
    } else {
      setGameOver(true);
    }
  };

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
