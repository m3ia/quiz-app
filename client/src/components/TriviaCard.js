import React, {useEffect, useState} from 'react';

export default function TriviaCard({ score, setScore, currCard, qIndex,  setQIndex, questionsData, createNewCard }) {
  const [showScore, setShowScore] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const nextQuestion = (curr, corrA) => {
    setShowIcons(true);

    if (curr === corrA) {
      setScore(s => s + 1);
    }
    if (qIndex + 1 < questionsData.length) {
      setQIndex(i => i + 1);
      setTimeout(() => createNewCard(questionsData[qIndex + 1]), 500);
    } else {
      setShowScore(true);
    }
    setTimeout(() => setShowIcons(false), 500);
  }


  return (
    <>
      {
        showScore ? (<h1>Score: {score}</h1>) : 
          (
            <>
              <p className="trivia-question">Question {qIndex+1}/{questionsData.length}: {currCard.question}</p>
                {currCard.allAnswers.map((answer, ind) => {
                  return <p className='trivia-answer-p' key={`${answer}-p`}>
                    <button
                    key={ind}
                    onClick={() => setTimeout(nextQuestion(answer, currCard.correctAnswer), 1000)}
                    className="trivia-answer-btn"
                  >{answer}</button>
                    <span className={`material-symbols-outlined ${answer === currCard.correctAnswer ? 'correct-answer-icon' : 'wrong-answer-icon'}`} key={`${answer}-icon`}> {showIcons && (answer === currCard.correctAnswer ? 'done' : 'close')} </span>
                  </p>
                })}
            </>
          )
      }
    </>
  )
}
