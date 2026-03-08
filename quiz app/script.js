document.addEventListener("DOMContentLoaded",()=>{

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const choicesList = document.getElementById("choices-list");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");


 const questions = [
   {
     question: "What is the capital of France?",
     choices: ["Paris", "London", "Berlin", "Madrid"],
     answer: "Paris",
     score: 2,
   },
   {
     question: "Which planet is known as the Red Planet?",
     choices: ["Mars", "Venus", "Jupiter", "Saturn"],
     answer: "Mars",
     score: 4,
   },
   {
     question: "Who wrote 'Hamlet'?",
     choices: [
       "Charles Dickens",
       "Jane Austen",
       "William Shakespeare",
       "Mark Twain",
     ],
     answer: "William Shakespeare",
     score: 6,
   },
 ];

 let currentquestionindex=0
 let score=0
 const totalscore=questions[0].score+questions[1].score+questions[2].score

 startBtn.addEventListener("click",startQuiz)// we want only reference
nextBtn.addEventListener("click",()=>{
    currentquestionindex++
    if(currentquestionindex<questions.length){
        showQuestion()
    }else{
        showresult()
    }
})


restartBtn.addEventListener("click", () => {
    currentquestionindex=0
    score=0
  resultContainer.classList.add("hidden");
  // startBtn.classList.remove("hidden");
  // questionContainer.classList.add("hidden");
  // bcz we want to restart the game and in we are calling startQuiz() so it actevily hide the start button
  startQuiz();
});

 function startQuiz(){
    startBtn.classList.add("hidden")
    resultContainer.classList.add("hidden")
    questionContainer.classList.remove("hidden")
    showQuestion()
 }

 function showQuestion(){
   nextBtn.classList.add("hidden");
   questionText.textContent = questions[currentquestionindex].question;
   choicesList.innerHTML = ""; // clear previous choices
   questions[currentquestionindex].choices.forEach((choice) => {
     const li = document.createElement("li");
     li.textContent = choice;
     li.addEventListener("click", () => {
       // Remove .selected from all options before selecting a new one
       /*
Before applying a new selection, you must clear previous highlights.

querySelectorAll("#choices-list li") finds all the list items inside #choices-list.

Then .forEach() removes the selected class from all of them.

       */
       document.querySelectorAll("#choices-list li").forEach((item) => {
         item.classList.remove("selected");
       });

       // Add .selected class to the clicked option
       li.classList.add("selected");

       // Save or check answer
       selectanswer(choice);
     });

     choicesList.appendChild(li);
   });
 }

function selectanswer(choice){
 const correctanswer=questions[currentquestionindex].answer
 if(choice!==correctanswer){
    score=score
 }else{
    score=score+questions[currentquestionindex].score
 }
 nextBtn.classList.remove("hidden")
}

function showresult(){
    questionContainer.classList.add("hidden")
    resultContainer.classList.remove("hidden")
    scoreDisplay.textContent=`${score} out of ${totalscore}`
}

})