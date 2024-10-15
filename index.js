const express = require('express');
const app = express();
const port = 3000;
const { getQuestion, isCorrectAnswer } = require('./utils/mathUtilities');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let currentQuestion = null;
let streak = 0;
let leaderboards = [];

app.get('/', (req, res) => {
    res.render('index', { streak, leaderboards });
});

app.get('/quiz', (req, res) => {
    currentQuestion = getQuestion();
    res.render('quiz', { question: currentQuestion.question, streak });
});

app.post('/quiz', (req, res) => {
    const { answer } = req.body;
    const userAnswer = parseFloat(answer);

    if (isCorrectAnswer(currentQuestion, userAnswer).correct) {
        streak++;
        res.render('quizcompletion', { correct: true, streak});
    } else {
        if (streak > 0) {
            leaderboards.push(streak);
            leaderboards.sort((a, b) => b - a);
            leaderboards = leaderboards.slice(0, 10);
        }
        res.render('quizcompletion', { correct: false, streak});
        streak = 0;
    }
});

app.get('/leaderboards', (req, res) => {
    res.render('leaderboards', { leaderboards });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});