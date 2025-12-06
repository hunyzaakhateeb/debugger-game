// Language-specific snippets
const SNIPPETS_BY_LANGUAGE = {
  javascript: [
    {
      code: `let names = ["Riya", "Sam", "Asha"];
console.log(names[3]);`,
      bugType: "Wrong index (out-of-range)",
      options: [
        "Type mismatch",
        "Null reference",
        "Wrong index (out-of-range)",
        "Missing loop",
      ],
    },
    {
      code: `const num = "42";
let total = num + 8;
console.log(total);`,
      bugType: "Wrong data type",
      options: [
        "Missing semicolon",
        "Wrong data type",
        "Undeclared variable",
        "Wrong operator",
      ],
    },
    {
      code: `if (user = null) {
  console.log("No user");
}`,
      bugType: "Assignment instead of comparison",
      options: [
        "Assignment instead of comparison",
        "Missing semicolon",
        "Wrong data type",
        "Undefined variable",
      ],
    },
    {
      code: `function greet(name) {
  console.log("Hello " + Name);
}`,
      bugType: "Incorrect variable name",
      options: [
        "Missing return",
        "Incorrect variable name",
        "Wrong data type",
        "Wrong operator",
      ],
    },
    {
      code: `if (x > 10)
  console.log("big");
console.log("done");`,
      bugType: "Missing braces",
      options: [
        "Missing semicolon",
        "Wrong operator",
        "Missing braces",
        "Off-by-one error",
      ],
    },
    {
      code: `let obj = {a:1, b:2}
console.log(obj["c"].toString());`,
      bugType: "Null / undefined property access",
      options: [
        "Wrong index",
        "Missing property",
        "Null / undefined property access",
        "Type mismatch",
      ],
    },
    {
      code: `const arr = [1, 2, 3];
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}`,
      bugType: "Off-by-one error",
      options: [
        "Infinite loop",
        "Off-by-one error",
        "Missing initialization",
        "Type error",
      ],
    },
    {
      code: `let x = [1, 2, 3];
x.map(item => item * 2)
console.log(x);`,
      bugType: "Missing assignment",
      options: [
        "Type error",
        "Missing semicolon",
        "Missing assignment",
        "Wrong method",
      ],
    },
  ],
  c: [
    {
      code: `int main() {
  int i = 0;
  for (i = 0; i < 10; i++);
    printf("%d", i);
  return 0;
}`,
      bugType: "Stray semicolon causing empty loop",
      options: [
        "Missing semicolon",
        "Wrong loop condition",
        "Off-by-one error",
        "Stray semicolon causing empty loop",
      ],
    },
    {
      code: `int *p = malloc(sizeof(int)*5);
free(p);
*p = 10;`,
      bugType: "Use after free",
      options: [
        "Memory leak",
        "Use after free",
        "Null pointer dereference",
        "Buffer overflow",
      ],
    },
    {
      code: `char *str = "hello";
str[0] = 'H';
printf("%s", str);`,
      bugType: "String literal modification",
      options: [
        "Memory leak",
        "Wrong syntax",
        "String literal modification",
        "Undefined variable",
      ],
    },
    {
      code: `int arr[5];
arr[5] = 10;
printf("%d", arr[5]);`,
      bugType: "Buffer overflow",
      options: [
        "Type mismatch",
        "Off-by-one error",
        "Buffer overflow",
        "Missing initialization",
      ],
    },
    {
      code: `int *ptr;
printf("%d", *ptr);`,
      bugType: "Uninitialized pointer dereference",
      options: [
        "Memory leak",
        "Uninitialized pointer dereference",
        "Type error",
        "Wrong operator",
      ],
    },
    {
      code: `for (int i = 0; i < 10, i++) {
  printf("%d", i);
}`,
      bugType: "Wrong operator in loop",
      options: [
        "Syntax error",
        "Wrong operator in loop",
        "Off-by-one error",
        "Missing semicolon",
      ],
    },
    {
      code: `void swap(int a, int b) {
  int temp = a;
  a = b;
  b = temp;
}`,
      bugType: "Pass by value (no effect)",
      options: [
        "Type error",
        "Memory leak",
        "Pass by value (no effect)",
        "Infinite recursion",
      ],
    },
    {
      code: `int arr[] = {1, 2, 3};
printf("%d", sizeof(arr) / sizeof(arr[0]));
free(arr);`,
      bugType: "Freeing stack-allocated memory",
      options: [
        "Syntax error",
        "Off-by-one error",
        "Freeing stack-allocated memory",
        "Type mismatch",
      ],
    },
  ],
  python: [
    {
      code: `for i in range(5)
    print(i)`,
      bugType: "Incorrect indentation",
      options: [
        "Missing colon",
        "Incorrect indentation",
        "Wrong function name",
        "Type error",
      ],
    },
    {
      code: `numbers = [1, 2, 3, 4, 5]
print(numbers[5])`,
      bugType: "Wrong index (out-of-range)",
      options: [
        "Type error",
        "Wrong method",
        "Wrong index (out-of-range)",
        "Missing variable",
      ],
    },
    {
      code: `def greet(name):
    print("Hello " + name + 1)`,
      bugType: "Type error (string + int)",
      options: [
        "Syntax error",
        "Type error (string + int)",
        "Missing return",
        "Undefined variable",
      ],
    },
    {
      code: `x = 10
x = x + x
print(x)
print(y)`,
      bugType: "Undefined variable",
      options: [
        "Type error",
        "Indentation error",
        "Undefined variable",
        "Wrong operator",
      ],
    },
    {
      code: `my_dict = {"a": 1, "b": 2}
print(my_dict["c"])`,
      bugType: "Key not found",
      options: [
        "Type error",
        "Syntax error",
        "Key not found",
        "Wrong method",
      ],
    },
    {
      code: `x = [1, 2, 3]
x.append(4)
print(x)`,
      bugType: "No bug",
      options: [
        "Type error",
        "No bug",
        "Wrong method",
        "Indentation error",
      ],
    },
    {
      code: `def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
print(factorial(5))`,
      bugType: "No bug (but could timeout)",
      options: [
        "Infinite recursion",
        "No bug (but could timeout)",
        "Type error",
        "Missing return",
      ],
    },
    {
      code: `for i in [1, 2, 3]:
    i = i * 2
print(i)`,
      bugType: "Loop variable doesn't affect original list",
      options: [
        "Syntax error",
        "Loop variable doesn't affect original list",
        "Type error",
        "Indentation error",
      ],
    },
  ],
  java: [
    {
      code: `String s = null;
if (s.equals("ok")) 
    System.out.println("yes");`,
      bugType: "Null pointer dereference",
      options: [
        "Null pointer dereference",
        "Wrong operator",
        "Missing import",
        "Type mismatch",
      ],
    },
    {
      code: `int[] arr = new int[5];
for (int i = 0; i <= 5; i++) {
    arr[i] = i;
}`,
      bugType: "Array out of bounds",
      options: [
        "Type error",
        "Array out of bounds",
        "Infinite loop",
        "Syntax error",
      ],
    },
    {
      code: `public class Test {
    public void display() {
        System.out.println(this);
    }
}`,
      bugType: "No bug",
      options: [
        "Missing return",
        "Type error",
        "No bug",
        "Wrong method",
      ],
    },
    {
      code: `List list = new ArrayList();
list.add("hello");
String s = (String) list.get(1);`,
      bugType: "Wrong index (out-of-bounds)",
      options: [
        "Type cast error",
        "Wrong index (out-of-bounds)",
        "Missing import",
        "Null reference",
      ],
    },
    {
      code: `int x = 10;
int y = x / 0;
System.out.println(y);`,
      bugType: "Division by zero",
      options: [
        "Type error",
        "Division by zero",
        "Syntax error",
        "Variable shadowing",
      ],
    },
    {
      code: `static int value = 0;
public void increment() {
    value++;
}`,
      bugType: "No bug (static is fine here)",
      options: [
        "Thread safety issue",
        "Memory leak",
        "No bug (static is fine here)",
        "Missing return",
      ],
    },
    {
      code: `String str = "Java";
str.replace("J", "P");
System.out.println(str);`,
      bugType: "String immutability (missing assignment)",
      options: [
        "Type error",
        "String immutability (missing assignment)",
        "Wrong method",
        "Null reference",
      ],
    },
    {
      code: `for (int i = 0; i < 10; i++);
    System.out.println(i);`,
      bugType: "Empty loop (stray semicolon)",
      options: [
        "Type error",
        "Empty loop (stray semicolon)",
        "Variable scope",
        "Syntax error",
      ],
    },
  ],
};

// Create a flattened snippets array (for backward compatibility)
const SNIPPETS = Object.values(SNIPPETS_BY_LANGUAGE).flat();


const ROUNDS_TOTAL = 8; 
const MAX_LIVES = 2;

const START_TIMERS = [25, 25, 20, 15, 12];

const AVAILABLE_LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "JS" },
  { id: "python", name: "Python", icon: "PY" },
  { id: "java", name: "Java", icon: "JV" },
  { id: "c", name: "C", icon: "C" },
];

const SPEED_POINTS = (secondsLeft, roundStartSeconds) => {
  const ratio = secondsLeft / roundStartSeconds;
  if (ratio >= 0.75) return 5;
  if (ratio >= 0.40) return 3;
  if (ratio > 0) return 1;
  return 0;
};


const startBtn = document.getElementById("startBtn");
const viewScoresBtn = document.getElementById("viewScoresBtn");
const playerNameInput = document.getElementById("playerName");
const languageSelect = document.getElementById("languageSelect");

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const scoreScreen = document.getElementById("scoreScreen");

const codeArea = document.getElementById("codeArea");
const optionsContainer = document.getElementById("optionsContainer");

const submitBtn = document.getElementById("submitBtn");
const skipBtn = document.getElementById("skipBtn");
const quitBtn = document.getElementById("quitBtn");

const feedbackEl = document.getElementById("feedback");
const livesDisplay = document.getElementById("livesDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");
const languageDisplay = document.getElementById("languageDisplay");
const roundDisplay = document.getElementById("roundDisplay");
const highscoreDisplay = document.getElementById("highscoreDisplay");

const timerBar = document.getElementById("timerBar");
const timerText = document.getElementById("timerText");

const playAgainBtn = document.getElementById("playAgainBtn");
const backToStartBtn = document.getElementById("backToStartBtn");

const scoreList = document.getElementById("scoreList");
const clearScoresBtn = document.getElementById("clearScoresBtn");


let shuffledSnippets = [];
let currentRoundIndex = 0;
let currentSnippet = null;
let selectedLanguage = "javascript"; // Add language selection

let lives = MAX_LIVES;
let score = 0;
let selectedOptionIndex = null;

let roundTimerId = null;
let roundTimeLeft = 0;
let roundTimeStart = 0;

let playerName = "";
let scoreboard = loadScores();

updateHighscoreUI();


const AUDIO_CTX = new (window.AudioContext || window.webkitAudioContext)();

function beep(frequency, duration = 0.12, type = "sine") {
  const osc = AUDIO_CTX.createOscillator();
  const gain = AUDIO_CTX.createGain();

  osc.frequency.value = frequency;
  osc.type = type;

  osc.connect(gain);
  gain.connect(AUDIO_CTX.destination);

  gain.gain.value = 0.0001;
  const now = AUDIO_CTX.currentTime;

  gain.gain.exponentialRampToValueAtTime(0.2, now + 0.01);
  osc.start(now);

  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.stop(now + duration + 0.02);
}

function sfxCorrect() {
  beep(880, 0.12, "triangle");
  beep(1320, 0.08, "sine");
}

function sfxWrong() {
  beep(220, 0.18, "sawtooth");
}

function sfxTick() {
  beep(1200, 0.03, "sine");
}

function pickRounds(count) {
  const pool = [...(SNIPPETS_BY_LANGUAGE[selectedLanguage] || SNIPPETS)];
  const result = [];

  while (result.length < count && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    const [picked] = pool.splice(idx, 1);
    result.push(picked);
  }

  return result;
}

function formatCode(code) {
  return code;
}

function updateLivesUI() {
  const heartsFull = "❤".repeat(lives);
  const heartsEmpty = "♡".repeat(Math.max(0, MAX_LIVES - lives));
  livesDisplay.textContent = heartsFull + heartsEmpty;
}

function updateScoreUI() {
  scoreDisplay.textContent = String(score);
}

function updateRoundUI() {
  const current = Math.min(currentRoundIndex + 1, ROUNDS_TOTAL);
  roundDisplay.textContent = `${current} / ${ROUNDS_TOTAL}`;
}

function updateHighscoreUI() {
  if (scoreboard.length === 0) {
    highscoreDisplay.textContent = "0";
    return;
  }
  highscoreDisplay.textContent = String(scoreboard[0].score);
}

function updateLanguageUI() {
  const langName = AVAILABLE_LANGUAGES.find(l => l.id === selectedLanguage)?.name || "JavaScript";
  languageDisplay.textContent = langName;
}

function setFeedback(message = "", type = "") {
  feedbackEl.textContent = message;
  feedbackEl.classList.remove("correct", "wrong");
  if (type) feedbackEl.classList.add(type);
}


startBtn.addEventListener("click", () => {
  playerName = (playerNameInput.value || "").trim() || "Player";
  selectedLanguage = languageSelect.value || "javascript";
  startGame();
});

viewScoresBtn.addEventListener("click", showScores);

playAgainBtn.addEventListener("click", () => {
  scoreScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  playerName = (playerNameInput.value || "").trim() || "Player";
  selectedLanguage = languageSelect.value || "javascript";
  startGame();
});

backToStartBtn.addEventListener("click", () => {
  scoreScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});

clearScoresBtn.addEventListener("click", () => {
  const shouldClear = window.confirm("Clear all saved scores?");
  if (!shouldClear) return;

  localStorage.removeItem("ef_scores");
  scoreboard = [];
  renderScores();
  updateHighscoreUI();
});

quitBtn.addEventListener("click", endGameImmediate);

skipBtn.addEventListener("click", () => {
  lives -= 1;
  setFeedback("Skipped: -1 life", "wrong");
  sfxWrong();
  updateLivesUI();
  checkLivesOrContinue();
});

submitBtn.addEventListener("click", submitAnswer);

window.addEventListener("keydown", (event) => {
  if (gameScreen.classList.contains("hidden")) return;

  if (event.key >= "1" && event.key <= "4") {
    const idx = parseInt(event.key, 10) - 1;
    selectOption(idx);
  } else if (event.key === "Enter") {
    submitAnswer();
  } else if (event.key === "Escape") {
    endGameImmediate();
  }
});


function startGame() {
  shuffledSnippets = pickRounds(ROUNDS_TOTAL);
  currentRoundIndex = 0;
  lives = MAX_LIVES;
  score = 0;
  selectedOptionIndex = null;

  startScreen.classList.add("hidden");
  scoreScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  updateLivesUI();
  updateScoreUI();
  updateLanguageUI();
  updateRoundUI();

  nextRound();
}

function nextRound() {
  if (currentRoundIndex >= shuffledSnippets.length) {
    gameOver(true);
    return;
  }

  currentSnippet = shuffledSnippets[currentRoundIndex];
  selectedOptionIndex = null;
  setFeedback("");

  codeArea.textContent = formatCode(currentSnippet.code);

  optionsContainer.innerHTML = "";
  currentSnippet.options.forEach((optionText, index) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.dataset.idx = String(index);
    btn.innerHTML = `<strong>${index + 1}.</strong> ${optionText}`;
    btn.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(btn);
  });

  updateRoundUI();

  const timerIdx = Math.min(START_TIMERS.length - 1, currentRoundIndex);
  roundTimeStart = START_TIMERS[timerIdx];

  startTimer(roundTimeStart);
}

function selectOption(index) {
  const optionButtons = optionsContainer.querySelectorAll(".option");
  optionButtons.forEach((btn) => btn.classList.remove("selected"));

  const chosenBtn = optionButtons[index];
  if (!chosenBtn) return;

  chosenBtn.classList.add("selected");
  selectedOptionIndex = index;
}

function submitAnswer() {
  if (selectedOptionIndex === null) {
    setFeedback("Select an option first (1–4).", "wrong");
    sfxWrong();
    return;
  }

  stopTimer();

  const chosenText = currentSnippet.options[selectedOptionIndex];
  const correctText = currentSnippet.bugType;

  const isExact = chosenText === correctText;
  const firstWord = correctText.split(" ")[0].toLowerCase();
  const isLoose =
    !isExact && chosenText.toLowerCase().includes(firstWord);

  if (isExact || isLoose) {
    const gained = SPEED_POINTS(roundTimeLeft, roundTimeStart);
    score += gained;
    setFeedback(`Correct! +${gained} points`, "correct");
    sfxCorrect();
  } else {
    lives -= 1;
    setFeedback(`Wrong! Correct: ${correctText}`, "wrong");
    sfxWrong();
  }

  updateLivesUI();
  updateScoreUI();
  setTimeout(() => {
    currentRoundIndex += 1;
    checkLivesOrContinue();
  }, 900);
}

function checkLivesOrContinue() {
  if (lives <= 0) {
    gameOver(false);
  } else {
    nextRound();
  }
}

function endGameImmediate() {
  const sure = window.confirm(
    "Quit the game? Your score will be recorded."
  );
  if (!sure) return;

  gameOver(false);
}

function startTimer(seconds) {
  stopTimer(); 

  roundTimeLeft = seconds;
  timerText.textContent = `${roundTimeLeft}s`;
  timerBar.style.width = "100%";

  const startMs = Date.now();

  roundTimerId = window.setInterval(() => {
    const elapsedSeconds = Math.floor((Date.now() - startMs) / 1000);
    roundTimeLeft = Math.max(0, seconds - elapsedSeconds);

    timerText.textContent = `${roundTimeLeft}s`;

    const pct = Math.max(0, (roundTimeLeft / seconds) * 100);
    timerBar.style.width = `${pct}%`;

    if (roundTimeLeft <= 5 && roundTimeLeft > 0) {
      sfxTick();
    }

    if (roundTimeLeft <= 0) {
      stopTimer();

      lives -= 1;
      setFeedback("Time up! -1 life", "wrong");
      sfxWrong();
      updateLivesUI();

      setTimeout(() => {
        currentRoundIndex += 1;
        checkLivesOrContinue();
      }, 900);
    }
  }, 1000);
}

function stopTimer() {
  if (roundTimerId !== null) {
    window.clearInterval(roundTimerId);
    roundTimerId = null;
  }
}


function gameOver(clearedAllRounds) {
  stopTimer();

  let message = clearedAllRounds
    ? "You cleared all rounds!"
    : "Game Over!";
  message += ` Score: ${score}`;

  setFeedback(message, "");

  saveScore(score);
  renderScores();

  finalScoreDisplay.textContent = score;

  gameScreen.classList.add("hidden");
  scoreScreen.classList.remove("hidden");
}

function saveScore(finalScore) {
  const nameFromInput = (playerName || "").trim();
  const name =
    nameFromInput || window.prompt("Enter name to save score:", "Player") || "Player";

  const entry = {
    name,
    score: finalScore,
    time: new Date().toISOString(),
  };

  scoreboard.push(entry);

  scoreboard.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return new Date(b.time) - new Date(a.time);
  });

  scoreboard = scoreboard.slice(0, 20);

  localStorage.setItem("ef_scores", JSON.stringify(scoreboard));
  updateHighscoreUI();
}


function loadScores() {
  try {
    const raw = localStorage.getItem("ef_scores");
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Failed to load scores", err);
    return [];
  }
}

function renderScores() {
  scoreList.innerHTML = "";

  if (!scoreboard.length) {
    scoreList.textContent = "No scores yet. Play a game first!";
    return;
  }

  const list = document.createElement("ol");

  // gives date too
  /*scoreboard.forEach((entry) => {
    const li = document.createElement("li");
    const date = new Date(entry.time);
    const dateStr = isNaN(date.getTime())
      ? ""
      : ` — ${date.toLocaleString()}`;
    li.textContent = `${entry.name}: ${entry.score}`;
    list.appendChild(li);
  });*/

  scoreboard.forEach((entry) => {
  const li = document.createElement("li");
  li.textContent = `${entry.name}: ${entry.score}`; 
  list.appendChild(li);
});

  scoreList.appendChild(list);
}

function showScores() {
  renderScores();
  startScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  scoreScreen.classList.remove("hidden");
}