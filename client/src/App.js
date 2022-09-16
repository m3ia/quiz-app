import React, { useState } from 'react';
import MiniTrivia from './components/MiniTrivia';
import MovieTrivia from './components/MovieTrivia';
import CustomTrivia from './components/CustomTrivia';

export default function App() {
  const [view, setView] = useState('home');

  const games = [
    { name: 'Mini Trivia' },
    { name: 'Movie Trivia' },
    {name: 'Custom Trivia'}
  ]
  const updateView = (viewName)=> {
    setView(viewName);
  }
  return (
    <div className="container">
      <div className="title-div" onClick={() => setView('home')}>
        <div><h1 className="title">
          GoodGames
          </h1>
        </div>
        <div>
          <h1>
            <span className="material-symbols-outlined menu-icon">menu
          </span>
          </h1>
        </div>

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
      {view === 'Custom Trivia' && (
        <CustomTrivia/>
      )}
    </div>
	);
}