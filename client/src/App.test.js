import { render, screen } from '@testing-library/react';
import App from './App';
import MovieTrivia from './components/MovieTrivia'
import ReactDOM from 'react-dom';

// React Tests
test('renders title on main page', () => {
  render(<App />);
  const linkElement = screen.getByText(/goodgames/i);
  expect(linkElement).toBeInTheDocument();
});

describe("MovieTrivia", () => {
  test("renders movie trivia component", () => {
    render(<MovieTrivia />);
  });
});

// test("renders add Button", () => {
//   render(<App />);
//   screen.getByRole("game-card", {
//     name: /Mini Trivia/i
//   });
// });