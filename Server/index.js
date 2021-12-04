const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const router = require('./router.js');
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/recipes', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})