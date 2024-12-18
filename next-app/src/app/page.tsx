import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"


export default function Home() {
  return (
   <div>
    <Link className={buttonVariants({ variant: "outline" })}  href='/quiz'> Start quiz </Link>
   </div>
  );
}
