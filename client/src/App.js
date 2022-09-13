import React, { useState } from 'react';
import MiniTrivia from './components/MiniTrivia';
import MovieTrivia from './components/MovieTrivia';

export default function App() {
  const games = [
    { name: 'Mini Trivia', component: MiniTrivia },
    {name: 'Movie Trivia', component: MovieTrivia },
  ]
  return (
    <div className="container">
      {games.map((game, index) => (
        <p>{game.name}</p>
      )
      )}
    </div>
	);
}