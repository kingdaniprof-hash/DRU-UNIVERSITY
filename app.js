// Navigation System
function showSection(sectionId) {
    // Hide all panels
    document.querySelectorAll('.portal-card').forEach(sec => sec.classList.add('hidden'));
    // Remove active design from navigation tabs
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    // Show selected panel and update active tab styling
    document.getElementById(sectionId).classList.remove('hidden');
    document.getElementById(`tab-${sectionId}`).classList.add('active');
}

// Attendance Logging Engine
function markAttendance() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
    
    const statusBox = document.getElementById('attendance-status');
    statusBox.innerHTML = `✓ Verified present on ${dateString} at ${timeString}`;
    
    const actionBtn = document.getElementById('mark-attendance-btn');
    actionBtn.disabled = true;
    actionBtn.style.opacity = "0.6";
    actionBtn.innerText = "Attendance Logged";
}

// Academic Assessment Dataset
const quizData = [
    {
        question: "What primary networking protocol serves as the foundation for modern data communication across the World Wide Web?",
        options: ["FTP (File Transfer)", "HTTP (Hypertext Transfer)", "SSH (Secure Shell)", "SMTP (Simple Mail)"],
        answer: 1
    },
    {
        question: "Which style rules sheet technology is explicitly utilized to design the layout structure of hybrid application documents?",
        options: ["HTML Frameworks", "Python Compilation", "CSS (Cascading Style Sheets)", "SQL Schema Tables"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    const currentQuiz = quizData[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuiz.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = (e) => selectAnswer(index, e.target);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex, element) {
    // Visual indicator management for selected option
    document.querySelectorAll('.options-list button').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');

    const currentQuiz = quizData[currentQuestionIndex];
    // Cache standard score evaluations
    if (selectedIndex === currentQuiz.answer) {
        score++;
    }
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById('next-btn').classList.add('hidden');
    
    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    
    const calculatedPercentage = Math.round((score / quizData.length) * 100);
    document.getElementById('score-percentage').innerText = `${calculatedPercentage}%`;
    document.getElementById('score').innerText = `Assessment finalized. Core score output: ${score} out of ${quizData.length} valid marks.`;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    loadQuiz();
}

// Run initial system loader
document.addEventListener("DOMContentLoaded", () => {
    loadQuiz();
});
