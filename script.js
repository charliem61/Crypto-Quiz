const startButton = document.getElementById("startButton")
let time = document.getElementById("time")
let questionsElement = document.getElementById("questions")

let setTime = 60
let current = 0

var questions = 

[
    {question:"What 2nd most common coin?",
    
    answers: [
        
        { answer: "Bitcoin",},

        {answer: "Litecoin",},

        {answer: "Ethereum", correct: true },

        {answer: "Dogecoin",}

    ],},  
  
  {question: "Where is Snoop Dogg building Snoopland?", 
  
    answers: [
      
        { answer: "Meta"},

        { answer: "Decentraland" },

        { answer: "Sandbox" , correct: true },

        { answer: "Alice" },
    ],},

    {question: "Where is Snoop Dogg building Snoopland?", 
  
    answers: [
      
        { answer: "Meta"},

        { answer: "Decentraland" },

        { answer: "Sandbox" , correct: true },

        { answer: "Alice" },
    ],},

    {question: "Where is Snoop Dogg building Snoopland?", 
  
    answers: [
      
        { answer: "Meta"},

        { answer: "Decentraland" },

        { answer: "Sandbox" , correct: true },

        { answer: "Alice" },
    ],}

]

function timer (){
    let alottedTime = setInterval (function(){
        setTime--;
        time.textContent=setTime+ "seconds left"
    },1000)
}

startButton.addEventListener("click",startQuiz)

function cryptoQuestions(data)
{   let questionBox = document.createElement("div")
    let questionHeader = document.createElement("h2")
    let currentQuestion = questions[data]
    questionHeader.innerHTML = currentQuestion["question"]
    questionsElement.appendChild(questionHeader)
    for (let index = 0; index < currentQuestion["answers"].length; index++) 
    
    {   const element = currentQuestion[index];
        let btn = document.createElement("button")
        btn.innerHTML = currentQuestion["answers"][index]["answer"]
        answer.value = currentQuestion["answers"][index]["correct"]
        answer.setAttribute("onClick","answerLog(this.value)")
        questionsBox.appendChild(answer)

    }   
        questionsElement.appendChild(questionBox)
}


// have buttons display


function startQuiz (){
    timer()
    cryptoQuestions(0)

}

// shows the first question, and has buttons to choose an answer
// when user answers question, show the next question..  (hide the previous question)
