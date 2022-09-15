import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

// Cors middleware
app.use(cors());

app.listen(PORT, () => {
  console.log(`Hola, server running on port ${PORT}.`);
});

app.get('/', (req, res) => {
  res.send('Helloooo we work');
});

// Movies game fetch
app.get('/api/firstTenMovies', (req, res) => {
  const url = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple';

  fetch(url)
    .then(r => r.json())
    .then(data => res.send({ data }))
    .catch(err => console.log(err));

}) 

// Custom Trivia Fetch
app.get(`/api/customTrivia`, (req, res) => {
  const params = new URLSearchParams({
    amount: req.query.amount,
    category: req.query.category
  })

  const url = `https://opentdb.com/api.php?${params}}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => console.log(err));
})