const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const dealRouter = require('./routes/deal');

const PORT = 3000;

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/deal', dealRouter);
app.listen(PORT, () => console.log(`Started on port: ${PORT}`));
