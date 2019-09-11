const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const PORT = 3000;

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/public/views'));
app.use(express.static('public'));
app.use('/', indexRouter);
app.listen(PORT, () => console.log(`Started on port: ${PORT}`));
