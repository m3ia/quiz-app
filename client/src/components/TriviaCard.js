import React, {useEffect, useState} from 'react';

export default function TriviaCard({ score, setScore, currCard, qIndex,  setQIndex, questionsData, createNewCard }) {
  const [showScore, setShowScore] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const nextQuestion = (curr, corrA, e) => {
    setShowIcons(true);
    setIsActive(false);

    // Actions for clicking the correct answer
    if (curr === corrA) {
      setScore(s => s + 1);
      e.target.style.backgroundColor = '#9ee8aa';
      e.target.style.borderColor = '#9ee8aa';
      e.target.style.color = 'black';
    } else {
      e.target.style.backgroundColor = 'rgb(255, 70, 70)';
      e.target.style.borderColor = 'rgb(255, 70, 70)';
      e.target.style.color = 'black';
    }

    // Actions for if we should show the score
    if (qIndex + 1 < questionsData.length) {
      setQIndex(i => i + 1);
      setTimeout(() => createNewCard(questionsData[qIndex + 1]), 2200);
    } else {
      setShowScore(true);
    }

    // Reset answer icons and reactivate buttons
    setTimeout(() => setShowIcons(false), 2200);
    setTimeout(() => setIsActive(true), 2200);
  }


  return (
    <>
      {
        showScore ? (<h1>Score: {score}/{questionsData.length}</h1>) : 
          (
            <>
              <p className="trivia-question">Question {qIndex+1}/{questionsData.length}: {currCard.question}</p>
                {currCard.allAnswers.map((answer, ind) => {
                  return <p className='trivia-answer-p' key={`${answer}-p`}>
                    <button
                    key={ind}
                    onClick={(e) => nextQuestion(answer, currCard.correctAnswer, e)}
                    disabled={!isActive}
                    className={`trivia-answer-btn ${isActive ? "" : "disabled"}`}
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
