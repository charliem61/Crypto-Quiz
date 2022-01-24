const startButton = document.getElementById('startButton')
const time = document.getElementById('time')
const questionsElement = document.getElementById('questions')


let setTime = 60
let currentQuestion = 0

var questions = [
    {text:"Who created bitcoin?", choices: ["yes", "no"], correctAnswer: "yes"}, 
    {text:"What 2nd most common coin?", choices: ["Bitcoin","Litecoin","Ethereum","Dogecoin"], correctAnswer: "Ethereum"}, 
    {text:"What is Elon Musk's favorite coin?", choices: ["Shiba","Dogecoin","Musky","Litecoin"], correctAnswer: "Dogecoin"},
    {text:"Who is the famous creator of Bitcoin?", choices: ["Vitalik Buterin","Charles Hoskinson","Satoshi Nakamoto","Jeffrey Bezos"], correctAnswer: "Satoshi Nakamoto"},
    {text:"Who is creating the new metaverse META?", choices: ["Jeff Bezos","Mark Zuckerberg","Jack Dorsey","Elon Musk"], correctAnswer: "Jack Dorsey"},
    {text:"Which country of our world was the 1st to accept Bitcoin as legal currency?", choices: ["China","Japan","Ukraine","El Salvador"], correctAnswer: "El Salvador"},    
    {text:"Who bans Bitcoin the most often?", choices: ["US","United Kingdom","North Korea","China"], correctAnswer: "China"},    
    {text:"Pick one of the 2 easiest platforms for a new crypto investor? (2 of 4 correct answers)", choices: ["Sushi Swap","Coinbase","Crypto.com","Robinhood"], correctAnswer: "Coinbase"},    
    //{text:"Are you a crypto investor?", choices: ["yes","no"], correctAnswer: "yes", "no"},   
    {text:"Where is Snoop Dogg building Snoopland?", choices: ["Meta","Decentraland","Sandbox","Alice"], correctAnswer: "Sandbox"},    
   // {text:"Want to learn more about crypto?", choices: ["yes","no"], correctAnswer: "yes", "no"},
];

function timer (){
    let alottedTime = setInterval (function(){
        setTime--;
        time.textContent=setTime+ 'seconds left'
    },1000)
}

startButton.addEventListener('click',timer)

function questions(data){
    let questionBox = document.createElement('h2')
    let currentQuestion = questions[data]
    questionBox.innerHTML=currentQuestion["text"]
    questionsElement.append(questionBox)
}



// shows the first question, and has buttons to choose an answer
// when user answers question, show the next question..  (hide the previous question)

