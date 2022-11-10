require('dotenv').config();
const express = require('express');
const config = require('./config/serverConfig');
const { sequelize } = require('./db/models');
// подключить роуты

const loginRouter = require('./routes/loginRouter');
const logoutRouter = require('./routes/logoutRouter');
const registrationRouter = require('./routes/regoRoute');

const app = express();
const PORT = process.env.PORT ?? 4000;
config(app);

// запускаем роуты

// app.use('/', homeRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/registration', registrationRouter);

app
  .listen(PORT)
  .on('error', (error) => console.log('Не удалось запустить веб-сервер:', error.message))
  .on('listening', () => {
    console.log('Веб-сервер слушает порт', PORT);
    sequelize
      .authenticate({ logging: false })
      .then(() => console.log('БД подключена успешно'))
      .catch((error) => console.log('Ошибка подключения к БД:', error.message));
  });
