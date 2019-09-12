const express = require('express');
const axios = require('axios');
const path = require('path');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
// const dealRouter = require('./routes/deal');

const PORT = 3000;

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/user', userRouter);
// app.use('/deal', dealRouter);
app.listen(PORT, () => console.log(`Started on port: ${PORT}`));

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
