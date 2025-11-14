let num1, num2, correctAnswer;
let score = 0;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    correctAnswer = num1 + num2;

    document.getElementById("question").textContent =
        `${num1} + ${num2} = ?`;
}

document.getElementById("submit").addEventListener("click", function () {
    const userAnswer = Number(document.getElementById("answer").value);

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "✅ Correct!";
        score++;
    } else {
        document.getElementById("feedback").textContent =
            `❌ Wrong! Correct answer: ${correctAnswer}`;
    }

    document.getElementById("score").textContent = `Score: ${score}`;

    document.getElementById("answer").value = "";
    generateQuestion();
});

generateQuestion();
