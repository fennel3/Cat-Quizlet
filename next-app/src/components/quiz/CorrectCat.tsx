"use client"

import { BreedOption } from "./Question";

type Props = {
  correctBreed: BreedOption;
};

export default function CorrectCat( { correctBreed }: Props ) {
    return(
        <>
        <div>{correctBreed.name}</div>
        </>
    )

}