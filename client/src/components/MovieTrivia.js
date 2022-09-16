import React, { useEffect, useState, useCallback } from 'react';
import TriviaCard from './TriviaCard';
import spinner from '../components/spinner3.svg';

export default function MovieTrivia() {
  const [isLoading, setIsLoading] = useState(true);
  const [questionsData, setQuestionsData] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [currCard, setCurrCard] = useState({});
  const [score, setScore] = useState(0);
  
  const createNewCard = useCallback((cardData) => {
    const decodeEntities = (encodedString) => {
      var textArea = document.createElement('textarea');
      textArea.innerHTML = encodedString;
      return textArea.value;
    }
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
      allAnswers: allAnswers.sort(() => Math.random() - 0.5)
    });
  }, []);


  useEffect(() => {
    if (questionsData.length > 0) {
      return;
    }
    const loadMovieTrivia = async () => {
      // Fetch data
      const res = await fetch(`http://localhost:8080/api/firstTenMovies`);
      const resJson = await res.json();
      // Assign items
      const data = resJson.data.results;
      setQuestionsData(data);
      createNewCard(data[0]);
      setTimeout(() => setIsLoading(false), 1000);
    }
    
    loadMovieTrivia();
  }, [questionsData, createNewCard])
  return (
    <>
      {
        isLoading ? (
          <div className="spinner-div"><img className="spinner" src={spinner} alt="spinner"/></div>
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
              />
            </div>
          </div>
        )
      }
    </>
  )
}