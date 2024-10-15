/**
 * Gets a random math question
 *
 * @returns {} The random math question
 */
function getQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
    let answer;
    let question;

    switch(operator) {
        case "+":
            answer = num1 + num2;
            question = `${num1} + ${num2}`;
            break;
        case "-":
            answer = num1 - num2;
            question = `${num1} - ${num2}`;
            break;
        case "*":
            answer = num1 * num2;
            question = `${num1} * ${num2}`;
            break;
        case "/":
            answer = num1 / num2;
            question = `${num1} / ${num2}`;
            break;
    }

    return { question, answer };
}
  
  /**
   * Parses the provided question and gets whether or not the provided answer is correct
   *
   * @param {*} question The question being answered
   * @param {*} answer The potential answer
   * @returns {boolean} True if the answer was correct, false otherwise.
   */
  
// function to give the correct answr
function isCorrectAnswer(question, answer) {
    const correctAnswer = question.answer;
    const userAnswer = parseFloat(answer);

    return { correct: correctAnswer === userAnswer };
}

module.exports = {
    getQuestion,
    isCorrectAnswer,
};