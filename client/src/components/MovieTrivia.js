import React, { useEffect, useState } from 'react';
import TriviaCard from './TriviaCard';

export default function MovieTrivia() {
  const [isLoading, setIsLoading] = useState(true);
  const [questionsData, setQuestionsData] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [currCard, setCurrCard] = useState({});
  // const [currentQuestion, setCurrentQuestion] = useState('');
  // const [answers, setAnswers] = useState([]);
  // const [correctAnswer, setCorrectAnswer] = useState('');
  const [score, setScore] = useState(0);
  
  const decodeEntities = (encodedString) => {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
  }
  
  const createNewCard = (cardData) => {
    const card = cardData;
    const question = decodeEntities(card.question);
    const correctAnswer = decodeEntities(card.correct_answer);
    const allAnswers = [];
    for (let ans of card.incorrect_answers) {
      allAnswers.push(decodeEntities(ans));
    }
    allAnswers.push(correctAnswer);

    setCurrCard({
      question: question,
      correctAnswer: correctAnswer,
      allAnswers: allAnswers
    });
    
  }

  useEffect(() => {
    const loadMovieTrivia = async () => {
      // Fetch data
      const res = await fetch(`http://localhost:8080/api/firstTenMovies`);
      const resJson = await res.json();
      // Assign items
      const data = resJson.data.results;
      setQuestionsData(data);
      // const questionOne = data[qIndex];
      // const question = decodeEntities(questionOne.question);
      // const correctAnswer = decodeEntities(questionOne.correct_answer);
      // const allAnswers = [];
      // for (let ans in questionOne.incorrect_answers) {
      //   allAnswers.push(decodeEntities(ans));
      // }
      // allAnswers.push(correctAnswer);

      // setCurrCard({
      //   question: question,
      //   correctAnswer: correctAnswer,
      //   allAnswers: allAnswers
      // });
      createNewCard(data[0]);
      setTimeout(() => setIsLoading(false), 1000);
      // setCurrentQuestion(question);
      // setAnswers([...questionOne.incorrect_answers, questionOne.correct_answer]);
      // setCorrectAnswer(questionOne.correct_answer);
  

    }
    
    loadMovieTrivia();
  }, [])
  
  // useEffect(() => {
  //   setIsLoading(false);
  // }, [currentQuestion])
  return (
    <>
      {
        isLoading ? (
          <h1>One sec!</h1>
        ) :
          (
            <div className="movie-trivia-container">
              <div className="trivia-card-div">
                <TriviaCard
                  score={score}
                  setScore={setScore}  
                  currCard={currCard}
                  setCurrCard={setCurrCard}
                  qIndex={qIndex}
                  setQIndex={setQIndex}
                  questionsData={questionsData}
                  createNewCard={createNewCard}
                  // currentQuestion={currentQuestion}
                  // setCurrentQuestion={setCurrentQuestion}
                  // answers={answers}
                  // setAnswers={setAnswers}
                  // correctAnswer={correctAnswer} 
                  // setCorrectAnswer={setCorrectAnswer}
              />
            </div>
          </div>
        )
      }
    </>
  )
}