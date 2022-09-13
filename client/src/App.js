import React, { useState } from 'react';
import MiniTrivia from './components/MiniTrivia';
import MovieTrivia from './components/MovieTrivia';

export default function App() {
  const [view, setView] = useState('home');

  const games = [
    { name: 'Mini Trivia' },
    { name: 'Movie Trivia'},
  ]
  const updateView = (viewName)=> {
    setView(viewName);
  }
  return (
    <div className="container">
      <div className="title">
        <h1>
          GoodGames
          <span class="material-symbols-outlined menu-icon" onClick={() => setView('home')}>home</span>
        </h1>
      </div>
      {view === 'home' && (
        <div className="game-cards-container">
          {games.map((game, index) => (
            <div
              className="game-card"
              key={index}
              onClick={() => updateView(game.name)}
            >
              <p>{game.name}</p>
            </div>
          ))}
        </div>)
      }
      {view === 'Mini Trivia' && (
        <MiniTrivia/>
      )}
      {view === 'Movie Trivia' && (
        <MovieTrivia/>
      )}
    </div>
	);
}