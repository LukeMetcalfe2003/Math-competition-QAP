const express = require('express');
const session = require('express-session'); 
const app = express();
const port = 3000;
const { getQuestion, isCorrectAnswer, getCurrentStreak, addToLeaderboard, leaderboards } = require('./utils/mathUtilities'); // Import leaderboards

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({ secret: 'test', resave: false, saveUninitialized: true })); 

app.get('/', (req, res) => {
    const currentStreak = getCurrentStreak();
    res.render('index', { currentStreak });
});

app.get('/leaderboards', (req, res) => {
    res.render('leaderboards', { leaderboards });
});

app.get('/quiz', (req, res) => {
    const quizQuestion = getQuestion();
    req.session.question = quizQuestion;
    res.render('quiz', { quizQuestion });
});

app.post('/quiz', (req, res) => {
    const { name, score } = req.body;
    addToLeaderboard(name, score);
    res.redirect('/leaderboards');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});