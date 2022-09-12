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
  res.json('Helloooo we work');
});