
function Quiz (quizQuestion, correctAnswer, possibleAnswers) {
  this.question = quizQuestion;
  this.correct = correctAnswer;
  this.possible = possibleAnswers;
  }

let question1 = new Quiz ('The type that specifies what kind of event occured is', 'event type', ['event type', 'even target', 'both a and b', 'none of the mentioned'] )
// console.log(question1);

let questionArray = [question1];
console.log(question1);


let source = document.querySelector('#quiz-template').innerHTML;
let template = Handlebars.compile(source);
let html =questionArray.map(object => template(object));
let destination = document.querySelector('.handlebars-demo');
destination.innerHTML = html
