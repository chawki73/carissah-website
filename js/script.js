function submitQuiz() {
    let score = 0;
    const totalQuestions = 5;
    let feedbackHTML = "";

    // 1. Fill-in-the-blank: HTTPS "S" (Requirement: filling-blank [cite: 10])
    const q1Answer = document.getElementById('q1').value.trim().toLowerCase();
    if (q1Answer === "secure") {
        score++;
        feedbackHTML += "<p class='correct'>Question 1: Correct! (Secure)</p>";
    } else {
        feedbackHTML += "<p class='incorrect'>Question 1: Incorrect. The 'S' stands for Secure.</p>";
    }

    // 2. Multiple Choice: Multiplexing (Requirement: 3 multiple-choice [cite: 10])
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "HTTP/2") {
        score++;
        feedbackHTML += "<p class='correct'>Question 2: Correct! (HTTP/2)</p>";
    } else {
        feedbackHTML += "<p class='incorrect'>Question 2: Incorrect. HTTP/2 introduced multiplexing.</p>";
    }

    // 3. Multiple Choice: Standardized Year
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "1996") {
        score++;
        feedbackHTML += "<p class='correct'>Question 3: Correct! (1996)</p>";
    } else {
        feedbackHTML += "<p class='incorrect'>Question 3: Incorrect. HTTP/1.0 was standardized in 1996.</p>";
    }

    // 4. Multiple Choice: HTTP/3 Foundation
    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "QUIC") {
        score++;
        feedbackHTML += "<p class='correct'>Question 4: Correct! (QUIC)</p>";
    } else {
        feedbackHTML += "<p class='incorrect'>Question 4: Incorrect. QUIC is the foundation for HTTP/3.</p>";
    }

    // 5. Multi-selection: HTTPS Benefits (Requirement: multi-selection [cite: 10])
    const q5a = document.getElementById('q5a').checked;
    const q5b = document.getElementById('q5b').checked;
    const q5c = document.getElementById('q5c').checked; // This is the wrong option

    if (q5a && q5b && !q5c) {
        score++;
        feedbackHTML += "<p class='correct'>Question 5: Correct! (Encryption & Integrity)</p>";
    } else {
        feedbackHTML += "<p class='incorrect'>Question 5: Incorrect. The benefits are Encryption and Data Integrity.</p>";
    }

    // Display Results (Requirement: Show score, pass/fail, and details [cite: 16, 17, 18])
    const resultsDiv = document.getElementById('results');
    const scoreDisplay = document.getElementById('score-display');
    const detailedFeedback = document.getElementById('detailed-feedback');

    resultsDiv.style.display = "block";
    scoreDisplay.innerHTML = "Total Score: " + score + "/" + totalQuestions;
    
    if (score >= 4) {
        scoreDisplay.innerHTML += " - <strong>PASS</strong>";
        scoreDisplay.style.color = "#27ae60";
    } else {
        scoreDisplay.innerHTML += " - <strong>FAIL</strong>";
        scoreDisplay.style.color = "#e74c3c";
    }

    detailedFeedback.innerHTML = feedbackHTML;
}

function resetQuiz() {
    // Requirement: Reset must clear all inputs and results 
    document.getElementById('quiz-form').reset();
    document.getElementById('results').style.display = "none";
}
