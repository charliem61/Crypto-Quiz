const startButton = document.getElementById("startButton");
let time = document.getElementById("time");
let questionsElement = document.getElementById("questions");

let score = 0;
let setTime = 60;
let current = 0;

// var array1 = [1, 2, 3];

// array1.length - 1, refers to last element in array

var questions = [
  {
    question: "What 2nd most common coin?",
    answers: [
      { answer: "Bitcoin" },
      { answer: "Litecoin" },
      { answer: "Ethereum", correct: true },
      { answer: "Dogecoin" },
    ],
  },
  {
    question: "Who is the famous creator of Bitcoin?",

    answers: [
      { answer: "Vitalik Buterin" },
      { answer: "Charles Hoskinson" },
      { answer: "Ada Lovelace" },
      { answer: "Satoshi Nakamoto", correct: true },
    ],
  },
  {
    question: "What is Elon Musk's favorite coin?",

    answers: [
      { answer: "Shiba" },
      { answer: "Dogecoin", correct: true },
      { answer: "Musky" },
      { answer: "Litecoin" },
    ],
  },
  {
    question: "Where is Snoop Dogg building Snoopland?",

    answers: [
      { answer: "Sandbox", correct: true },
      { answer: "Decentraland" },
      { answer: "Meta" },
      { answer: "Alice" },
    ],
  },
  {
    question: "Who is changing their old popular name and creating the new metaverse META?",

    answers: [
      { answer: "Jeff Bezos" },
      { answer: "Mark Zuckerberg", correct: true },
      { answer: "Jack Dorsey" },
      { answer: "Jack Ma" },
    ],
  },
  {
    question: "Which country of our world was the 1st to accept Bitcoin as legal currency?",

    answers: [
      { answer: "China" },
      { answer: "Ukraine" },
      { answer: "El Salvador", correct: true },
      { answer: "Thailand" },
    ],
  },
  {
    question: "Who bans Bitcoin the most often?",

    answers: [
      { answer: "China", correct: true },
      { answer: "North Korea" },
      { answer: "United Kingdom" },
      { answer: "US" },
    ],
  },
  {
    question: "Pick one of the 2 easiest platforms for a new crypto investor?",

    answers: [
      { answer: "Sundae Swap" },
      { answer: "Coinbase", correct: true },
      { answer: "Crypto.com" },
      { answer: "Robinhood", correct: true },
    ],
  },
  {
    question: "Are you a crypto investor?",

    answers: [
      { answer: "Yes", correct: true },
      { answer: "No", correct: true },
    ],
  },
  {
    question: "Do you want to learn more about Crypto currency and Blockchain technology?",

    answers: [
      { answer: "Yes", correct: true },
      { answer: "No", correct: true },
    ],
  },
];

function timer() {
  let alottedTime = setInterval(function () {
    setTime--;
    time.textContent = setTime + "seconds left";
    if (setTime === 0) {
      clearInterval(alottedTime);
      confirm("GAME OVER. Out of time.");
    }
  }, 1000);
}

startButton.addEventListener("click", startQuiz);

// function answerClickHandler(userAnswer, possibleAnswers) {

// }

function cryptoQuestions(questionindex) {
  // puts the question on the page
  let questionsBox = document.createElement("div");
  let questionHeader = document.createElement("h2");
  let currentQuestion = questions[questionindex];

  questionHeader.innerHTML = currentQuestion["question"];
  questionsElement.appendChild(questionHeader);

  // puts the answer buttons on the page
  for (let index = 0; index < currentQuestion["answers"].length; index++) {
    let btn = document.createElement("button");
    btn.addEventListener("click", function (event) {
      // console.log('yes',event);
      // console.log(userAnswer, possibleAnswers);

      console.log(event.target.dataset.isCorrect);
      //console.log(event);

      //-checks is answer is correct
      if (event.target.dataset.isCorrect === "yes") {
        score = score + 5;
        //score += 5  (ABOVE IS SAME AS ABOVE)
        console.log(score);

        confirm("Correct!");
        //prompt("Correct!");
        //prompt()
      } else {
        confirm("Wrong :(");
      }

      // Check if it's the last question

      if (current === questions.length - 1) {
        //
        // THen end game
        confirm(
          "GAME OVER! To learn more about crypto, log onto Coinbase.com and follow Charles Hoskinson on Youtube! You scored " +
            score
        );
      } else {
        //ELSE -moves onto next question
        current += 1;
        cryptoQuestions(current);
      }
    });

    btn.innerHTML = currentQuestion["answers"][index]["answer"];

    btn.dataset.isCorrect = currentQuestion["answers"][index]["correct"]
      ? "yes"
      : "no";
    // if (currentQuestion["answers"][index]["correct"]) {
    //     btn.dataset.isCorrect = 'yes';
    // } else {
    //     btn.dataset.isCorrect = 'no';
    // }                                    (ABOVE IS SAME AS ABOVE)

    // btn.value = currentQuestion["answers"][index]["correct"];

    questionsBox.appendChild(btn);
  }

  questionsElement.appendChild(questionsBox);
}

// have buttons display

function startQuiz() {
  startButton.style.display = "none";
  timer();
  cryptoQuestions(current);
}

// shows the first question, and has buttons to choose an answer
// when user answers question, show the next question..  (hide the previous question)
