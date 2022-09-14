import React, { useEffect, useState } from 'react';

export default function MovieTrivia() {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    const loadMovieTrivia = async () => {
      const res = await fetch(`http://localhost:8080/api/firstTenMovies`);
      const resJson = await res.json();
      setQuestions(resJson.data.results);
      console.log('123');
      console.log('resJson', resJson.data.results);
      setIsLoading(false);
    }
    loadMovieTrivia();
  }, [])
  
  return (
    <>
      {
        isLoading ? (
          <h1>One sec!</h1>
        ) :
        (
          <div className="movie-trivia-container">
            {questions.map((q, ind) => {
              return (
                <div>
                  <p>{q.category}</p>
                  <p>{q.question}</p>
                </div>
              )  
            })}
          </div>
        )
      }
    </>
  )
}