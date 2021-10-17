const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const dotenv = require('dotenv');
const calculateMaxIsland = require('./landCalculator');

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
dotenv.config();

app.post('/', (req, res) => {
  let board = req.body;
  //   console.log('🚀 ~ file: index.js ~ line 19 ~ app.post ~ board', board);
  let max = calculateMaxIsland.calculateMaxIsland(board).toString();
  console.log('🚀 ~ file: index.js ~ line 20 ~ app.post ~ max', max);
  res.send(max);
});

app.get('/', (req, res) => {
  res.send('Hellllllooooo');
});

// Port
const port = process.env.PORT || 3001;
// console.log('🚀 ~ file: index.js ~ line 10 ~ process.env', process.env.PORT);
app.listen(port, () => console.log(`Listening port ${port}....`));
