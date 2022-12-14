require('dotenv').config();
const path = require('path');
const express = require('express');
const config = require('./config/serverConfig');
const { sequelize } = require('./db/models');
// подключить роуты

const loginRouter = require('./routes/loginRouter');
const logoutRouter = require('./routes/logoutRouter');
const registrationRouter = require('./routes/regoRoute');

const profileRouter = require('./routes/profileRouter');

const orderRouter = require('./routes/orderRouter');

const adminRouter = require('./routes/adminRouter');
const mainRouter = require('./routes/mainRouter');

const commentRouter = require('./routes/commentRouter');

const app = express();
const PORT = process.env.PORT ?? 4000;
config(app);

const frontendDir = path.join(__dirname, '..', 'frontend', 'build');

app.use(express.static(frontendDir));
// запускаем роуты
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/register', registrationRouter);

app.use('/api/profile', profileRouter);

app.use('/api/order', orderRouter);

app.use('/api/admin', adminRouter);
app.use('/api/main', mainRouter);
app.use('/api/comment', commentRouter);

app.get('*', (req, res) => res.redirect('/'));

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
