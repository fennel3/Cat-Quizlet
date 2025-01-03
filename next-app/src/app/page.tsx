import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white shadow-lg rounded-lg p-6 border-8 border-gray-300">
      <div className="flex justify-center items-center w-full h-60 text-xl font-bold text-gray-700 mb-4">
        <Link className={buttonVariants({ variant: "outline" })} href="/quiz">
          {" "}
          START QUIZ{" "}
        </Link>
      </div>
      <div className="w-full h-60 flex justify-center text-xl font-bold text-gray-700 mb-4">
        <div className="size-2/3">
          <h1 className="text-lg">About</h1>
          <p className="my-4">
            Welcome to Cat Quizlet v1.0.
          </p>
          <p className="my-4">
            The current version involves a multiple choice question consisting of 1 right answer and 3 wrong answers.
          </p>
          <p className="my-4">
            The game ends when an answer submitted is incorrect. So be careful!
          </p>
        </div>
      </div>
    </div>
  );
}
