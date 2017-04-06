// let url = "http://putsreq.com/vOQkEXW0WPbVlv9zo0Ru";
//
// function fetchInit (data) {
//   return {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }
// }
//
// order = {
//
// }





function getData(thisIsAnObject) {
  console.log(thisIsAnObject);
  return new MultipleChoiceQuestion(thisIsAnObject.question, thisIsAnObject.correct_answer, thisIsAnObject.incorrect_answers)
}


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
        document.querySelector('#quiz article.multi:last-of-type ul').addEventListener('click', this.isCorrect.bind(this))
    }

    // this.isCorrectSA = function(event) {
    //     let submit = event.target;
    //     let pickles = submit.previousElementSibling;
    //     let picklesInput = pickles.value;
    //     let yourAnswer = submit.nextElementSibling;
    //     if (picklesInput == this.answer) {
    //         yourAnswer.textContent = "Exactly My Dear Watson!";
    //     } else {
    //         yourAnswer.textContent = "Nada";
    //     }
    // }
    // this.displaySA = function() {
    //     let source = document.querySelector('#shortAnswer').innerHTML;
    //     let template = Handlebars.compile(source);
    //     let html = template(this);
    //     document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
    //     document.querySelector('#quiz article.shortA:last-of-type button.submitButton').addEventListener('click', this.isCorrectSA.bind(this))
    // }

}

function MultipleChoiceQuestion (text, answer, choices){
  Question.call(this, text, answer);
  this.choices = choices;
  console.log(answer);
}

// MultipleChoiceQuestion.prototype = Object.create(Question.prototype);

MultipleChoiceQuestion.prototype.choices = function () {
  this.question = this.question + this.answer + this.choices;
}

function ShortAnswerQuestion (text,answer) {
  Question.call(this, text, answer);
  console.log(answer);
}


let q1 = new MultipleChoiceQuestion ('JavaScript is …', 'object based', ['subjective', 'objective', 'evil', 'object based']);
//
// let q2 = new MultipleChoiceQuestion ('Which of the following variable types does not exist in JavaScript?', 'double', ['boolean', 'number', 'object', 'double']);
//
// let q3 = new MultipleChoiceQuestion ('What does the “break” statement do?', 'Aborts the current loop or switch statement.', ['Cancels the current event.', 'Aborts the current function.', 'Aborts the current loop or switch statement.', 'Simulates a JavaScript crash.']);
//
// let q4 = new MultipleChoiceQuestion ('Who is the instructor of TIY Front End Engineering course?', 'Brian', ['Luigi', 'Brian', 'Susanna', 'Logan']);
//
// let q5 = new MultipleChoiceQuestion ('What year was JavaScript created?', '1995', ['1970', '1983', '1995', '2030']);
//
// let q6 = new ShortAnswerQuestion ('What BootCamp are you currently attending?', 'The Iron Yard');



// [q1, q2, q3, q4, q5].forEach(question => question.display());
// [q6].forEach(question => question.displaySA());


// ShortAnswerQuestion.prototype = Object.create(Question.prototype);

// ShortAnswerQuestion.prototype.choices = function () {
//   this.question = this.question + this.answer;
// }
fetch('https://opentdb.com/api.php?amount=5&category=16&difficulty=medium')
.then(response => response.json())
.then (object => object.results)
.then (apiArr => apiArr.map(getData))//getData is being invoked by running it through getData
.then (apiArr => apiArr.forEach(question => question.display()));
// .then(jsonData => console.log(jsonData))
