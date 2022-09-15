import React, {useEffect, useState} from 'react';

export default function TriviaCard({ score, setScore, currentQuestion, setCurrentQuestion, answers, setAnswers, correctAnswer, setCorrectAnswer, currCard, setCurrCard, qIndex,  setQIndex, questionsData, createNewCard }) {
  const [showScore, setShowScore] = useState(false);
  const nextQuestion = () => {
    if (qIndex < questionsData.length) {
      setQIndex(i => i + 1);
      createNewCard(questionsData[qIndex]);
    } else {
      setScore(s => s + 1);
      setShowScore(true);
    }

  }
  // useEffect(() => {

  // }, currentQuestion)
  return (
    <>
      {
        showScore ? (<p>{score}</p>) : 
          (
            <>
              <p>hi</p>
              <p>{currCard.question}</p>
              <p>
                {currCard.allAnswers.map(a => {
                  return <button key={a} onClick={nextQuestion}>{a}</button>
                })}
              </p>
            </>
          )
      }
    </>
  )
}
