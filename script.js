const questions = [
    {
        question: "নোবেল পুরস্কার কবে থেকে দেওয়া শুরু হয়?",
        options: ["1901", "1905", "1910", "1920"],
        answer: "1901"
    },
    {
        question: "চিকিৎসাবিজ্ঞানে নোবেল পুরস্কার কে দেন?",
        options: ["করোলিনস্কা ইনস্টিটিউট", "সুইডিশ অ্যাকাডেমি অফ সায়েন্সেস", "নরওয়েজিয়ান নোবেল কমিটি", "সুইডিশ অ্যাকাডেমি"],
        answer: "করোলিনস্কা ইনস্টিটিউট"
    },
    {
        question: "শান্তিতে নোবেল পুরস্কার কোন শহর থেকে দেওয়া হয়?",
        options: ["স্টকহোম", "অসলো", "কোপেনহেগেন", "হেলসিঙ্কি"],
        answer: "অসলো"
    },
    {
        question: "অর্থনীতিতে নোবেল পুরস্কার কবে থেকে দেওয়া শুরু হয়?",
        options: ["1901", "1968", "1969", "1975"],
        answer: "1969"
    },
    {
        question: "নোবেল পুরস্কার কয়টি বিভাগে দেওয়া হয়?",
        options: ["5", "6", "7", "8"],
        answer: "6"
    },
    {
        question: "প্রথম এশীয় হিসেবে নোবেল পুরস্কার কে পেয়েছিলেন?",
        options: ["সি.ভি. রমন", "রবীন্দ্রনাথ ঠাকুর", "মাদার টেরেসা", "অমর্ত্য সেন"],
        answer: "রবীন্দ্রনাথ ঠাকুর"
    },
    {
        question: "কোন ভারতীয় অর্থনীতিতে নোবেল পুরস্কার পেয়েছেন?",
        options: ["সি.ভি. রমন", "হরগোবিন্দ খোরানা", "অমর্ত্য সেন", "অভিজিৎ বিনায়ক বন্দ্যোপাধ্যায়"],
        answer: "অমর্ত্য সেন"
    },
    {
        question: "মাদার টেরেসা কোন বিভাগে নোবেল পুরস্কার পেয়েছিলেন?",
        options: ["শান্তি", "সাহিত্য", "চিকিৎসাবিজ্ঞান", "রসায়ন"],
        answer: "শান্তি"
    },
    {
        question: "আর্নেস্ট হেমিংওয়ে কোন বিভাগে নোবেল পেয়েছিলেন?",
        options: ["শান্তি", "সাহিত্য", "চিকিৎসাবিজ্ঞান", "পদার্থবিজ্ঞান"],
        answer: "সাহিত্য"
    },
    {
        question: "সর্বকনিষ্ঠ নোবেল বিজয়ী কে?",
        options: ["মালালা ইউসুফজাই", "লরেন্স ব্র্যাগ", "রবীন্দ্রনাথ ঠাকুর", "আলবার্ট আইনস্টাইন"],
        answer: "মালালা ইউসুফজাই"
    },
    {
        question: "সর্বোচ্চ সংখ্যক নোবেল পুরস্কার বিজয়ী প্রতিষ্ঠান কোনটি?",
        options: ["আন্তর্জাতিক রেড ক্রস কমিটি", "জাতিসংঘ", "চিকিৎসকদের আন্তর্জাতিক সংস্থা", "অ্যামনেস্টি ইন্টারন্যাশনাল"],
        answer: "আন্তর্জাতিক রেড ক্রস কমিটি"
    },
    {
        question: "আলফ্রেড নোবেল কোন দেশের নাগরিক ছিলেন?",
        options: ["সুইডেন", "নরওয়ে", "ডেনমার্ক", "ফিনল্যান্ড"],
        answer: "সুইডেন"
    },
    {
        question: "রসায়নে নোবেল পুরস্কার কোন সংস্থা প্রদান করে?",
        options: ["সুইডিশ অ্যাকাডেমি অফ সায়েন্সেস", "করোলিনস্কা ইনস্টিটিউট", "সুইডিশ অ্যাকাডেমি", "নরওয়েজিয়ান নোবেল কমিটি"],
        answer: "সুইডিশ অ্যাকাডেমি অফ সায়েন্সেস"
    },
    {
        question: "দুবার নোবেল পুরস্কার পেয়েছেন এমন একজন বিজ্ঞানী কে?",
        options: ["আলবার্ট আইনস্টাইন", "মেরি কুরি", "লুই পাস্তুর", "আইজ্যাক নিউটন"],
        answer: "মেরি কুরি"
    },
    {
        question: "শান্তিতে নোবেল পুরস্কারের জন্য মনোনয়ন কে নির্বাচন করে?",
        options: ["নরওয়েজিয়ান নোবেল কমিটি", "সুইডিশ অ্যাকাডেমি", "করোলিনস্কা ইনস্টিটিউট", "সুইডিশ অ্যাকাডেমি অফ সায়েন্সেস"],
        answer: "নরওয়েজিয়ান নোবেল কমিটি"
    },
    {
        question: "নোবেল পুরস্কার ঘোষণার তারিখ কোনটি?",
        options: ["10 অক্টোবর", "10 ডিসেম্বর", "1 সেপ্টেম্বর", "1 জানুয়ারি"],
        answer: "10 অক্টোবর"
    },
    {
        question: "অর্থনীতিতে নোবেল পুরস্কারের আনুষ্ঠানিক নাম কী?",
        options: ["আলফ্রেড নোবেলের স্মৃতিতে অর্থনীতিতে ব্যাংক অফ সুইডেনের পুরস্কার", "অর্থনীতিতে নোবেল স্মৃতি পুরস্কার", "অর্থনৈতিক বিজ্ঞানে নোবেল পুরস্কার", "অর্থনীতিতে সুইডিশ পুরস্কার"],
        answer: "আলফ্রেড নোবেলের স্মৃতিতে অর্থনীতিতে ব্যাংক অফ সুইডেনের পুরস্কার"
    },
    {
        question: "নোবেল পুরস্কারের অর্থমূল্য কোথা থেকে আসে?",
        options: ["সুইডিশ সরকারের তহবিল", "আলফ্রেড নোবেলের উইল থেকে প্রাপ্ত তহবিল", "বিভিন্ন দেশের অনুদান", "জাতিসংঘের তহবিল"],
        answer: "আলফ্রেড নোবেলের উইল থেকে প্রাপ্ত তহবিল"
    },
    {
        question: "কোন বছর দ্বিতীয় বিশ্বযুদ্ধের কারণে নোবেল পুরস্কার দেওয়া হয়নি?",
        options: ["1939-1942", "1943-1945", "1940-1942", "1941-1946"],
        answer: "1940-1942"
    },
    {
        question: "রবীন্দ্রনাথ ঠাকুর কত সালে সাহিত্যে নোবেল পেয়েছিলেন?",
        options: ["1910", "1912", "1913", "1915"],
        answer: "1913"
    },
    {
        question: "সি.ভি. রমন কোন বিভাগে নোবেল পুরস্কার পেয়েছিলেন?",
        options: ["পদার্থবিজ্ঞান", "রসায়ন", "চিকিৎসাবিজ্ঞান", "সাহিত্য"],
        answer: "পদার্থবিজ্ঞান"
    },
    {
        question: "অভিজিৎ বিনায়ক বন্দ্যোপাধ্যায় কোন বিভাগে নোবেল পুরস্কার পেয়েছেন?",
        options: ["শান্তি", "অর্থনীতি", "সাহিত্য", "পদার্থবিজ্ঞান"],
        answer: "অর্থনীতি"
    },
    {
        question: "কোনো ব্যক্তি মরণোত্তর নোবেল পুরস্কার পাবে না, এই নিয়মটি কবে থেকে কার্যকর হয়?",
        options: ["1969", "1974", "1980", "1999"],
        answer: "1974"
    },
    {
        question: "আলফ্রেড নোবেল কিসের আবিষ্কারক ছিলেন?",
        options: ["বিদ্যুৎ", "ডিনামাইট", "পেনিসিলিন", "টেলিফোন"],
        answer: "ডিনামাইট"
    },
    {
        question: "প্রথম ভারতীয় নারী হিসেবে নোবেল পুরস্কার কে পেয়েছিলেন?",
        options: ["ইন্দিরা গান্ধী", "মাদার টেরেসা", "সরোজিনী নাইডু", "অরুণধতী রায়"],
        answer: "মাদার টেরেসা"
    }
];

// আপনি এই ডেটা ব্যবহার করে একটি কুইজ অ্যাপ তৈরি করতে পারেন।
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0;
let selectedOption = null;
let answeredQuestions = new Array(questions.length).fill(false);
let questionTimerInterval;
const questionTimeLimit = 30;
let questionTimeLeft;

const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const totalQuestionsInfo = document.getElementById('totalQuestionsInfo');
const fullMarksInfo = document.getElementById('fullMarksInfo');
const timeLimitInfo = document.getElementById('timeLimitInfo');

const scoreDisplayElem = document.getElementById('scoreDisplay');
const questionIndexDisplayElem = document.getElementById('questionIndexDisplay');

const questionTextBox = document.getElementById('questionTextBox'); // New element for question text
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const nextButton = document.getElementById('nextButton');
const skipButton = document.getElementById('skipButton');
const submitButton = document.getElementById('submitButton');


const questionTimerTextElem = document.getElementById('questionTimer');
const progressRingBar = document.querySelector('.progress-ring-bar');
const circumference = 2 * Math.PI * 35;
progressRingBar.style.strokeDasharray = circumference;
progressRingBar.style.strokeDashoffset = circumference;


// Set initial info on start screen
totalQuestionsInfo.textContent = questions.length;
fullMarksInfo.textContent = questions.length;
timeLimitInfo.textContent = Math.ceil(questions.length * questionTimeLimit / 60);

// Event Listeners
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', handleNextQuestion);
skipButton.addEventListener('click', handleSkipQuestion);
submitButton.addEventListener('click', handleSubmitQuiz);


function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
    scoreDisplayElem.textContent = score;
}


function updateQuestionTimerDisplay() {
    questionTimerTextElem.textContent = questionTimeLeft;

    const offset = circumference - (questionTimeLeft / questionTimeLimit) * circumference;
    progressRingBar.style.strokeDashoffset = offset;

    // Change color based on time left
    if (questionTimeLeft <= 10) {
        progressRingBar.style.stroke = '#FF6347';
    } else if (questionTimeLeft <= 20) {
        progressRingBar.style.stroke = '#FFD700';
    } else {
        progressRingBar.style.stroke = '#28a745';
    }
}

function startQuestionTimer() {
    clearInterval(questionTimerInterval);
    questionTimeLeft = questionTimeLimit;
    updateQuestionTimerDisplay();
    questionTimerInterval = setInterval(() => {
        questionTimeLeft--;
        updateQuestionTimerDisplay();
        if (questionTimeLeft <= 0) {
            clearInterval(questionTimerInterval);
            handleTimeUp();
        }
    }, 1000);
}


function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        handleSubmitQuiz();
        return;
    }
    clearInterval(questionTimerInterval);
    startQuestionTimer();

    const currentQuestion = questions[currentQuestionIndex];
    questionIndexDisplayElem.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

    questionTextBox.textContent = currentQuestion.question; // Set question text here
    optionsContainer.innerHTML = '';
    feedbackMessage.textContent = '';
    feedbackMessage.style.color = 'transparent';
    selectedOption = null;

    nextButton.style.display = 'none';
    skipButton.style.display = 'inline-block';
    submitButton.style.display = 'none';

    if (currentQuestionIndex === questions.length - 1) {
        submitButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
        skipButton.style.display = 'none';
    }

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button, option));
        optionsContainer.appendChild(button);
    });

    enableOptions();
}


function selectOption(selectedButton, selectedAnswer) {
    if (answeredQuestions[currentQuestionIndex]) return;

    clearInterval(questionTimerInterval);

    disableOptions();

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer; 

    selectedButton.classList.add('selected');

    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add('correct');
        score += 1;
        correctCount++;
        feedbackMessage.textContent = 'সঠিক উত্তর!';
        feedbackMessage.style.color = '#28a745';
    } else {
        selectedButton.classList.add('wrong');
        score -= 0.33;
        wrongCount++;
        feedbackMessage.textContent = `ভুল উত্তর। সঠিক উত্তর: ${correctAnswer}`;
        feedbackMessage.style.color = '#dc3545';
        
        Array.from(optionsContainer.children).forEach(optionBtn => {
            if (optionBtn.textContent === correctAnswer) {
                optionBtn.classList.add('correct');
            }
        });
    }

    scoreDisplayElem.textContent = score.toFixed(2);
    answeredQuestions[currentQuestionIndex] = true;

    nextButton.style.display = 'inline-block';
    skipButton.style.display = 'none';
    submitButton.style.display = (currentQuestionIndex === questions.length - 1) ? 'inline-block' : 'none';
}


function handleTimeUp() {
    if (answeredQuestions[currentQuestionIndex]) return;

    skippedCount++;
    answeredQuestions[currentQuestionIndex] = true;
    
    showAnswer();
    disableOptions();
    
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

function showAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer; 

    Array.from(optionsContainer.children).forEach(optionBtn => {
        optionBtn.style.pointerEvents = 'none';
        if (optionBtn.textContent === correctAnswer) {
                optionBtn.classList.add('correct');
        }
    });
    feedbackMessage.textContent = `সঠিক উত্তর: ${correctAnswer}`;
    feedbackMessage.style.color = '#ffc107';
    
    nextButton.style.display = 'inline-block';
    skipButton.style.display = 'none';
    submitButton.style.display = (currentQuestionIndex === questions.length - 1) ? 'inline-block' : 'none';
}


function disableOptions() {
    Array.from(optionsContainer.children).forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
}

function enableOptions() {
    Array.from(optionsContainer.children).forEach(opt => {
        opt.style.pointerEvents = 'auto';
        opt.classList.remove('selected', 'correct', 'wrong');
    });
}


function handleNextQuestion() {
    if (!answeredQuestions[currentQuestionIndex]) {
        skippedCount++;
        answeredQuestions[currentQuestionIndex] = true;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function handleSkipQuestion() {
    if (!answeredQuestions[currentQuestionIndex]) {
        clearInterval(questionTimerInterval);
        skippedCount++;
        answeredQuestions[currentQuestionIndex] = true;
        
        showAnswer();
        disableOptions();
        
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 2000);
    }
}


function handleSubmitQuiz() {
    clearInterval(questionTimerInterval);
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    document.getElementById('finalTotalQuestions').textContent = questions.length;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('wrongAnswers').textContent = wrongCount;
    document.getElementById('skippedQuestions').textContent = skippedCount;
    document.getElementById('finalScore').textContent = score.toFixed(2);
    document.getElementById('finalFullMarks').textContent = questions.length;
}