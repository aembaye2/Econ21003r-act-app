import React from "react"
//import QuizManual from "@/components/Quiz";
import QuestionsComponent from "../../components/QuestionsComponent"
//import { quiz } from "./data"; // Import the quiz data from data.ts
import { quiz } from "./data" // Import the quiz data from data2.ts

const quizName = "hw03" // Name of the quiz

const user = {
  data: {
    user: {
      id: "1345",
    },
  },
}

const Hw02Comp = () => {
  const questions = quiz.questions.filter((q) => q !== undefined) // Filter out undefined elementslist
  const userId = user?.data.user.id

  return (
    <>
      {/* <Quiz questions={questions} userId={userId} quizName={quizName} /> */}
      <QuestionsComponent
        questions={questions}
        userId={userId}
        quizName={quizName}
      />
    </>
  )
}

export default Hw02Comp
