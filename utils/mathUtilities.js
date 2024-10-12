/**
 * Gets a random multiplication, division, subtraction or addition question
 * 
 * @returns {} The randomly generated math question
 */
function getQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    // generate random operator 
    const operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];

    // get a question
    const question = `${num1} ${operator} ${num2}`;
    let correctAnswer;
    switch(operator) {
        case "+":
            correctAnswer = num1 + num2;
            break;
        case "-":
            correctAnswer = num1 - num2;
            break;
        case "*":
            correctAnswer = num1 * num2;
            break;
        case "/":
            correctAnswer = num1 / num2;
            break;
    }

    return{
        question: question, answer: correctAnswer,
    };

}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 * 
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */

let currentStreak = 0;

let leaderboards = [];

// Leaderboards function
function addToLeaderboard(currentStreak) {
    let scoreToAdd = {
        currentStreak: currentStreak,
    };

    if (leaderboards.length < 10) {
        leaderboards.push(scoreToAdd);
    }else{
        let lowestStreak = Math.min(...leaderboards.map(entry => entry.currentStreak));
        // if da new score is higher than the lowest score, replace it and resort later
        if (currentStreak > lowestStreak) {
            let lowestIndex = leaderboards.findIndex(entry => entry.currentStreak === lowestStreak);
            leaderboards[lowestIndex] = scoreToAdd;
        }else{
            console.log("Did not make it to the leaderboard... Try again!");
        }
    }

    // sort the leaderboard
    leaderboards.sort((a, b) => b.currentStreak - a.currentStreak);
    leaderboards = leaderboards.slice(0, 10);

    return leaderboards;
}

function getCurrentStreak(){
    return currentStreak;
}

function isCorrectAnswer(question, answer) {
    if(answer != question.answer){
        return {correct: false, currentStreak: currentStreak};
    } else {
        currentStreak++;
        return {correct: true, currentStreak: currentStreak};
    }
}

module.exports = {
    getQuestion,
    isCorrectAnswer,
    getCurrentStreak,
}