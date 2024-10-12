const express = require('express');
const app = express();
const port = 3000;
const { getQuestion, isCorrectAnswer, getCurrentStreak } = require('./utils/mathUtilities');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static('public')); // To serve static files (e.g., CSS)

// Initialize question, streak, leaderboards
let currStreak = 0;
let leaderboards = [];
let currQuestion = getQuestion(); 


//Some routes required for full functionality are missing here. Only get routes should be required
app.get('/', (req, res) => {
    const currentStreak = getCurrentStreak();
    res.render('index', { currentStreak });
});

app.get('/quiz', (req, res) => {
    res.render('quiz', {Question: currQuestion});
});

app.get('/leaderboards', (req, res) => {
    res.render('leaderboards', {leaderboards});
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});