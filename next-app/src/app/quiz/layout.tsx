'use client'

import { QuizProvider } from "@/context/QuizContext"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Layout({children} : Props){
  return(
    <QuizProvider>
      {children}
    </QuizProvider>
  )

}
