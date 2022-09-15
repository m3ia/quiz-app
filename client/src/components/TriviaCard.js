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
              <p className="trivia-question">Question {qIndex+1}/{questionsData.length}: {currCard.question}</p>
                {currCard.allAnswers.map((answer, ind) => {
                  return <p className='trivia-answer-p' key={`${answer}-p`}>
                    <button
                    key={ind}
                    onClick={() => nextQuestion(answer, currCard.correctAnswer)}
                    className="trivia-answer-btn"
                  >{answer}</button>
                    <span className={`material-symbols-outlined ${answer === currCard.correctAnswer ? 'correct-answer-icon' : 'wrong-answer-icon'}`} key={`${answer}-icon`}> {answer === currCard.correctAnswer ? 'done' : 'close'} </span>
                  </p>
                })}
            </>
          )
      }
    </>
  )
}
