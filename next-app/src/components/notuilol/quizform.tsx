"use client";

import { Fragment, useState } from "react";
import { type BreedOption } from "@/app/quiz/page";
import { checkUserAnswer } from "@/actions";

type Props = {
  breedoptions: BreedOption[];
  catId: string;
  onAnswerResponse: (response: { success: boolean }) => void; 
};

export default function QuizForm({
  breedoptions,
  catId,
  onAnswerResponse,
}: Props) {
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    setIsSubmitting(true); // Set submitting state to true

    const formData = new FormData(event.currentTarget);

    try {
      const response = await checkUserAnswer(formData); // Check the user's answer

      // Call the onAnswerResponse function passed from parent with the response
      onAnswerResponse(response);
    } catch (error) {
      console.error("Error checking answer:", error);
    } finally {
      setIsSubmitting(false); // Reset submitting state to false
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}> {/* Use onSubmit instead of action */}
        <input type="hidden" name="cat" value={catId} />
        {breedoptions.map((breedOption) => (
          <Fragment key={breedOption.id}>
            <label>
              <input type="radio" name="option" value={breedOption.id} />{" "}
              {breedOption.name}
            </label>
            <br />
          </Fragment>
        ))}
        <button type="submit" disabled={isSubmitting}> {/* Disable button while submitting */}
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}