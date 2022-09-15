import React, {useEffect, useState} from 'react';

export default function TriviaCard({ score, setScore, currCard, qIndex,  setQIndex, questionsData, createNewCard }) {
  const [showScore, setShowScore] = useState(false);

  const nextQuestion = (curr, corrA) => {
    console.log('testing: ', curr, corrA)
    console.log('score', score);
    if (curr === corrA) {
      setScore(s => s + 1);
    }
    if (qIndex + 1 < questionsData.length) {
      setQIndex(i => i + 1);
      createNewCard(questionsData[qIndex+1]);
    } else {
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
                  return <button key={a} onClick={() => nextQuestion(a, currCard.correctAnswer)}> { a }</button>
                })}
              </p>
            </>
          )
      }
    </>
  )
}
