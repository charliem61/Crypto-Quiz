const startButton = document.getElementById("startButton");
let time = document.getElementById("time");
let questionsElement = document.getElementById("questions");


let score = 0;
let setTime = 60;
let current = 0;

// var questions1 = [

//     {text:"What 2nd most common coin?", choices: ["Bitcoin","Litecoin","Ethereum","Dogecoin"], correctAnswer: "Ethereum"},
//     {text:"What is Elon Musk's favorite coin?", choices: ["Shiba","Dogecoin","Musky","Litecoin"], correctAnswer: "Dogecoin"},
//     {text:"Who is the famous creator of Bitcoin?", choices: ["Vitalik Buterin","Charles Hoskinson","Satoshi Nakamoto","Jeffrey Bezos"], correctAnswer: "Satoshi Nakamoto"},
//     {text:"Who is creating the new metaverse META?", choices: ["Jeff Bezos","Mark Zuckerberg","Jack Dorsey","Elon Musk"], correctAnswer: "Jack Dorsey"},
//     {text:"Which country of our world was the 1st to accept Bitcoin as legal currency?", choices: ["China","Japan","Ukraine","El Salvador"], correctAnswer: "El Salvador"},
//     {text:"Who bans Bitcoin the most often?", choices: ["US","United Kingdom","North Korea","China"], correctAnswer: "China"},
//     {text:"Pick one of the 2 easiest platforms for a new crypto investor? (2 of 4 correct answers)", choices: ["Sushi Swap","Coinbase","Crypto.com","Robinhood"], correctAnswer: "Coinbase"},
//     {text:"Are you a crypto investor?", choices: ["yes","no"], correctAnswer: "yes", "no"},
//     {text:"Where is Snoop Dogg building Snoopland?", choices: ["Meta","Decentraland","Sandbox","Alice"], correctAnswer: "Sandbox"},
//     {text:"Want to learn more about crypto?", choices: ["yes","no"], correctAnswer: "yes", "no"},
// ];

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
    question: "Where is Snoop Dogg building Snoopland?",

    answers: [
      { answer: "" },

      { answer: "" },

      { answer: "", correct: true },

      { answer: "" },
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
      { answer: "Meta" },

      { answer: "Decentraland" },

      { answer: "Sandbox", correct: true },

      { answer: "Alice" },
    ],
  },
];

function timer() {
  let alottedTime = setInterval(function () {
    setTime--;
    time.textContent = setTime + "seconds left";
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
        if(event.target.dataset.isCorrect === "yes")  {
            
            score = score + 5;
            //score += 5  (ABOVE IS SAME AS ABOVE)
            console.log(score);

            confirm("Correct!");
            //prompt("Correct!");
            //prompt()
       } else {
           confirm("Wrong :(");
       }

       //move to the next question
       cryptoQuestions(current)

        // Check if it's the last question

            // THen end game

        //ELSE -moves onto next question
    });

    btn.innerHTML = currentQuestion["answers"][index]["answer"];

    btn.dataset.isCorrect = currentQuestion["answers"][index]["correct"] ? 'yes' : 'no';
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
