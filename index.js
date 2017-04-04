let source = document.querySelector('#quiz').innerHTML;
let template = Handlebars.compile(source);


function Quiz(quizQuestion, correctAnswer, possibleAnswers) {
    this.question = quizQuestion;
    this.correct = correctAnswer;
    this.possible = possibleAnswers;
    this.display = function() {

        //maybe get rid of this line
        let questionArray = [question1];

        //let html = template(this): FROM CLASS

        // console.log(questionArray);

        let html = questionArray.map(object => template(object));
        let destination = document.querySelector('.handlebars-demo');
        destination.innerHTML = html;

        let correctAnswer = document.querySelector("span.answer");
        let clickedAnswer = document.querySelector('.correct');
        clickedAnswer.addEventListener('click', theCorrectAnswer);

        function theCorrectAnswer(event) {
          correctAnswer.innerText = "yippeeee";
        }


        // let possibleAnswers = document.querySelectorAll('li');
        // for (i = 0; i < possibleAnswers.length; i++) {
        //     let possibleAnswers = [i];
        // }
        //   let
        //   rightAnswer.addEventListener('click', pickles)
        //
        // function pickles(event) {
        //     console.log(event);
        // }
    }
}

let question1 = new Quiz('In general, event handler is nothing but', 'Function', ['Interface', 'Event', 'Handler'])
// console.log(question1);






question1.display();
