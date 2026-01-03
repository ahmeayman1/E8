const questions = [

/* ================= PART 1 : MCQ ================= */

{
  type: "mcq",
  q: "What is defined as the process of sharing ideas, thoughts, and feelings and having them understood?",
  options: ["Management", "Communication", "Feedback", "Encoding"],
  a: 1
},
{
  type: "mcq",
  q: "When we communicate, we do three things: speak, listen, and...",
  options: ["Write", "Observe", "React", "Think"],
  a: 1
},
{
  type: "mcq",
  q: "Which of the following is NOT a goal of communication?",
  options: ["To change behavior", "To ensure understanding", "To avoid all conflicts", "To get action"],
  a: 2
},
{
  type: "mcq",
  q: "The sender's effectiveness depends on attitude and:",
  options: ["Physical appearance", "Selection of meaningful symbols", "Tone of voice", "Use of technology"],
  a: 1
},
{
  type: "mcq",
  q: "Translating a message into verbal and non-verbal symbols is:",
  options: ["Decoding", "Transmitting", "Encoding", "Feedback"],
  a: 2
},
{
  type: "mcq",
  q: "The communication process is complete only when:",
  options: ["Message is sent", "Channel is clear", "Feedback occurs", "Receiver listens"],
  a: 2
},
{
  type: "mcq",
  q: "Internal feedback refers to:",
  options: ["Something visible", "Verbal response", "Self-examination", "Electronic notification"],
  a: 2
},
{
  type: "mcq",
  q: "Self-talk and mental conversations are examples of:",
  options: ["Interpersonal", "Intrapersonal", "Mass", "Small group"],
  a: 1
},
{
  type: "mcq",
  q: "Which communication level shapes feelings, biases, and beliefs?",
  options: ["One-to-group", "Small group", "Intrapersonal", "Interpersonal"],
  a: 2
},
{
  type: "mcq",
  q: "Teacher–student discussion is an example of:",
  options: ["Intrapersonal", "Interpersonal", "Mass", "Diagonal"],
  a: 1
},
{
  type: "mcq",
  q: "Small group communication is mainly used for:",
  options: ["Self-reflection", "Large audiences", "Decision making", "Management charts"],
  a: 2
},
{
  type: "mcq",
  q: "In mass communication, feedback is usually:",
  options: ["Immediate", "Delayed", "Non-existent", "Verbal only"],
  a: 1
},
{
  type: "mcq",
  q: "Formal communication is established by:",
  options: ["Social relationships", "Management", "Grapevine", "Natural desire"],
  a: 1
},
{
  type: "mcq",
  q: "The grapevine refers to:",
  options: ["Downward communication", "Informal communication", "Verbal communication", "Electronic communication"],
  a: 1
},
{
  type: "mcq",
  q: "An effective verbal communication characteristic is:",
  options: ["Complexity", "Lengthy explanations", "Effective tone", "Abstract language"],
  a: 2
},
{
  type: "mcq",
  q: "Effective verbal messages require a tone that:",
  options: ["Is louder than words", "Matches the words", "Is always formal", "Changes constantly"],
  a: 1
},
{
  type: "mcq",
  q: "Which non-verbal method often has greater impact?",
  options: ["Email", "Body language", "Suggestion boxes", "Handbooks"],
  a: 1
},
{
  type: "mcq",
  q: "Attending behavior includes eye contact and:",
  options: ["Dress style", "Attentive listening", "Writing reports", "Encoding symbols"],
  a: 1
},
{
  type: "mcq",
  q: "The meaning of touch depends on relationship nature and:",
  options: ["Internet speed", "Cultural background", "Organizational chart", "Structure"],
  a: 1
},
{
  type: "mcq",
  q: "WhatsApp and Messenger are examples of:",
  options: ["Mass communication", "Instant messaging", "Downward communication", "Meetings"],
  a: 1
},
{
  type: "mcq",
  q: "Communication from manager to assistant manager is:",
  options: ["Upward", "Horizontal", "Downward", "Diagonal"],
  a: 2
},
{
  type: "mcq",
  q: "Suggestion boxes and appraisals are examples of:",
  options: ["Downward", "Upward", "Horizontal", "Mass"],
  a: 1
},
{
  type: "mcq",
  q: "Horizontal communication mainly helps to:",
  options: ["Give instructions", "Coordinate activities", "Self-reflect", "Motivate masses"],
  a: 1
},
{
  type: "mcq",
  q: "Diagonal communication occurs between people who:",
  options: ["Are on same level", "Report directly", "Have no direct reporting relationship", "Use email only"],
  a: 2
},
{
  type: "mcq",
  q: "Telemedicine uses technology to:",
  options: ["Discuss lunch", "Transmit health information", "Improve body language", "Create charts"],
  a: 1
},
{
  type: "mcq",
  q: "Why might a manager use the grapevine intentionally?",
  options: [
    "Follow authority lines",
    "Spread info informally and reduce rumors",
    "Ignore feedback",
    "Stop electronic communication"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Negative self-talk will likely:",
  options: ["Improve skills", "Lower self-image", "Improve patient care", "Speed communication"],
  a: 1
},
{
  type: "mcq",
  q: "Staff shortages are which type of barrier?",
  options: ["Attitudinal", "Physical", "System design", "Psychological"],
  a: 1
},
{
  type: "mcq",
  q: "Different rules when talking to a physician vs a friend relate to:",
  options: ["Mass communication", "Oral communication relationships", "Electronic barriers", "System design faults"],
  a: 1
},
{
  type: "mcq",
  q: "Clarifying ideas before communicating improves:",
  options: ["Feedback", "Channel", "Sender preparation", "Receiver decoding"],
  a: 2
},

/* ================= PART 2 : TRUE / FALSE ================= */

{ type: "tf", q: "Communication is a one-way process.", a: false },
{ type: "tf", q: "A positive sender attitude improves effectiveness.", a: true },
{ type: "tf", q: "Decoding is done by the sender.", a: false },
{ type: "tf", q: "Feedback allows message adjustment.", a: true },
{ type: "tf", q: "Thinking about clothing is interpersonal communication.", a: false },
{ type: "tf", q: "Feedback in mass communication is delayed.", a: true },
{ type: "tf", q: "Formal communication follows the organizational chart.", a: true },
{ type: "tf", q: "The grapevine helps understand public opinion.", a: true },
{ type: "tf", q: "Verbal communication includes spoken and written forms.", a: true },
{ type: "tf", q: "Effective verbal messages should be long.", a: false },
{ type: "tf", q: "Non-verbal communication includes gestures.", a: true },
{ type: "tf", q: "Personal appearance does not affect impressions.", a: false },
{ type: "tf", q: "Downward communication flows from subordinates upward.", a: false },
{ type: "tf", q: "Horizontal communication occurs on the same level.", a: true },
{ type: "tf", q: "Diagonal communication speeds information flow.", a: true },
{ type: "tf", q: "Noise and poor lighting are attitudinal barriers.", a: false },
{ type: "tf", q: "Without feedback, communication is incomplete.", a: true },
{ type: "tf", q: "Actions should match words for effective communication.", a: true },
{ type: "tf", q: "Lack of supervision is a physical barrier.", a: false },
{ type: "tf", q: "Personality conflicts may block communication.", a: true }

];

console.log(questions.length); 
let index = 0;
let answers = Array(questions.length).fill(null);
let reviewMode = false;
let shuffledQuestions = [];
/* ========= ELEMENTS ========= */

const qText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const counter = document.getElementById("counter");
const progress = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const resultScore = document.getElementById("resultScore");
const resultPercent = document.getElementById("resultPercent");
/* ========= OPTIONS ========= */
function shuffleOptions(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function createOption(text, isCorrect) {
  const b = document.createElement("button");
  b.innerText = text;
  b.onclick = () => select(isCorrect, b);
  optionsDiv.appendChild(b);
}
function select(isCorrect, btn) {
  if (answers[index] !== null) return;

  answers[index] = isCorrect;

  const q = shuffledQuestions[index];

  [...optionsDiv.children].forEach(b => {
    b.disabled = true;

    // لو MCQ
    if (q.type === "mcq") {
      const correctText = q.options[q.a];

      if (b.innerText === correctText) {
        b.style.background = "#27ae60"; // الصح أخضر
      } else if (b === btn) {
        b.style.background = "#e74c3c"; // الغلط أحمر
      }
    }

    // لو True / False
    if (q.type === "tf") {
      if (
        (b.innerText === "True" && q.a === true) ||
        (b.innerText === "False" && q.a === false)
      ) {
        b.style.background = "#27ae60";
      } else if (b === btn) {
        b.style.background = "#e74c3c";
      }
    }
  });

  nextBtn.style.display = "inline-block";
}
function startQuiz() {
  index = 0;
  answers = Array(questions.length).fill(null);
  reviewMode = false;

  // ✅ اعمل نسخة بدل ما تغيّر الأصل
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
document.getElementById("questionsBtn").innerText =
  `Questions (${shuffledQuestions.length})`;
  document.getElementById("result").classList.remove("show");
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  loadQuestion();
}
function loadQuestion() {
  optionsDiv.innerHTML = "";
  nextBtn.style.display = "none";

  const q = shuffledQuestions[index];
  qText.innerText = q.q;
  counter.innerText = `Question ${index + 1} / ${shuffledQuestions.length}`;
  progress.style.width = ((index + 1) / shuffledQuestions.length) * 100 + "%";

  if (q.type === "tf") {
    createOption("True", q.a === true);
createOption("False", q.a === false);
  } else {
    const options = q.options.map((text, i) => ({
  text,
  correct: i === q.a
}));

shuffleOptions(options).forEach(opt => {
  createOption(opt.text, opt.correct);
});
  }
}

function nextQuestion() {
  if (index < questions.length - 1) {
    index++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const score = answers.filter(a => a === true).length;
  const percent = Math.round((score / questions.length) * 100);

  // اخفي الكويز
  document.getElementById("quiz").style.display = "none";

  // النصوص
  resultScore.innerText = `Score: ${score} / ${questions.length}`;
  resultPercent.innerText = `Percentage: ${percent}%`;

  let title = "";
  if (percent >= 85) {
    title = "اول دفعععهه يعمممم";
  } else if (percent >= 70) {
    title = "شد شويه يعممم";
  } else {
    title = "انت اخرك تخش كليه البهاييييمممم";
  }

  document.getElementById("resultTitle").innerText = title;

  // أظهر النتيجة بالأنيميشن
  resultBox.classList.add("show");
}
function restartQuiz() {
  document.getElementById("result").classList.remove("show");
  startQuiz();
}
function toggleQuestions() {
  const list = document.getElementById("questionsList");
  list.classList.toggle("show");
  renderQuestionsList();
}

function renderQuestionsList() {
  const list = document.getElementById("questionsList");
  list.innerHTML = "";

  shuffledQuestions.forEach((q, i) => {
    const b = document.createElement("button");
    b.innerText = i + 1;

    if (answers[i] === null) {
      b.className = "q-unanswered";
    } else if (answers[i] === true) {
      b.className = "q-correct";
    } else {
      b.className = "q-wrong";
    }

    if (i === index) {
      b.style.outline = "3px solid #3498db";
    }

    b.onclick = () => {
      index = i;
      loadQuestion();
      renderQuestionsList();
    };

    list.appendChild(b);
  });
}
/* ========= MENU ========= */

const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sideMenu.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  sideMenu.classList.remove("show");
  overlay.classList.remove("show");
}

/* ========= DARK MODE ========= */

function toggleDark() {
  document.body.classList.toggle("dark");
}
