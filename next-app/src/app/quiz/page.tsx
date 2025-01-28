
import Question from "@/components/quiz/Question";
import Quiz from "@/components/quiz/Quiz";

export const dynamic = "force-dynamic";

export default function Page() {
  return(
    <Quiz>
      <Question/>
    </Quiz>
  );
}
