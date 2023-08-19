const express = require('express');

const router = express.Router();

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
];

/* GET /home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Mini Messageboard', messages });
});

/* GET /new page. */
router.get('/new', (req, res, next) => {
    res.render('form');
});

/* POST new message */
router.post('/new', (req, res, next) => {
    const { messageUser, messageText } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
});

module.exports = router;
