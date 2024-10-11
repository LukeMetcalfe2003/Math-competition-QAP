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

    return{num1, num2, operator};

}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 * 
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(question, answer) {
    const { num1, num2, operator } = question;
    let correctAnswer;

    if (operator === "+") {
        correctAnswer = num1 + num2;
    } else if (operator === "-") {
        correctAnswer = num1 - num2;
    } else if (operator === "*") {
        correctAnswer = num1 * num2;
    } else if (operator === "/") {
        correctAnswer = num1 / num2;
    } else {
        return false;
    }
    
    return answer === correctAnswer;
}

module.exports = {
    getQuestion,
    isCorrectAnswer
}