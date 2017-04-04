let source = document.querySelector('#quiz-template').innerHTML;
let template = Handlebars.compile(source);


function Quiz (quizQuestion, correctAnswer, possibleAnswers) {
  this.question = quizQuestion;
  this.correct = correctAnswer;
  this.possible = possibleAnswers;
  this.display = function(){

  let questionArray = [question1];

  // console.log(questionArray);

  let html = questionArray.map(object => template(object));
  let destination = document.querySelector('.handlebars-demo');
  destination.innerHTML = html;

  let correctAnswer = document.querySelector("span.answer");
  let possibleAnswers = document.querySelectorAll('li');
  for (i=0; i<possibleAnswers.length; i++){
    let possibleAnswer i
  }
  rightAnswer.addEventListener('click', pickles)
  function pickles(event) {
    console.log(event);
  }
  }
    }

let question1 = new Quiz ('In general, event handler is nothing but', 'Function', ['Interface', 'Event', 'Handler'] )
// console.log(question1);






question1.display();
