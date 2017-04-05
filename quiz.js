function Question(text, answer) {
    this.text = text;
    this.answer = answer;
    // this.choices = choices;

    this.isCorrect = function(event) {
        let li = event.target;
        let answerSpace = li.parentElement.nextElementSibling;
        if (li.textContent === this.answer) {
            answerSpace.textContent = "Exactly My Dear Watson!";
        } else {
            answerSpace.textContent = "Nada";
        }
    }
    this.display = function() {
        let source = document.querySelector('#question').innerHTML;
        let template = Handlebars.compile(source);
        let html = template(this);
        document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
        document.querySelector('#quiz article:last-of-type ul').addEventListener('click', this.isCorrect.bind(this))
    }
}

function MultipleChoiceQuestion (text, answer, choices){
  Question.call(this, text, answer);
  this.choices = choices;
}
Question.prototype = Object.create(MultipleChoiceQuestion.prototype);

MultipleChoiceQuestion.prototype.choices = function () {
  this.question = this.question + this.answer + this.choices;
}
let question

// function ShortAnswerQuestion (openAnswer) {
//   this.openAnswer = openAnswer;
// }


let q1 = new Question("q1", ['a1', 'a2', 'a3', 'a4']);
let q2 = new Question("q2", ['b1', 'b2', 'b3', 'b4'], 'an array');
[q1, q2].forEach(question => question.display());
