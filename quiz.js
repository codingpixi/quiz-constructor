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

//Multiple Choice Questions
fetch('https://opentdb.com/api.php?amount=5&category=11&difficulty=hard&type=multiple')
.then(response => response.json())
.then (object => object.results)
.then (apiArr => apiArr.map(getData))//getData is being invoked by running it through getData
.then (apiArr => apiArr.forEach(question => question.display()));
// .then(jsonData => console.log(jsonData))

//True or False Questions
fetch('https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=boolean')
.then(response => response.json())
// .then(jsonData => console.log(jsonData))
.then (object => object.results)
.then (apiArr => apiArr.map(getData))
.then (apiArr => apiArr.forEach(question => question.display()));
// .then(jsonData => console.log(jsonData))


function getData(thisIsAnObject) {
  console.log(thisIsAnObject);
  return new MultipleChoiceQuestion(thisIsAnObject.question, thisIsAnObject.correct_answer, thisIsAnObject.incorrect_answers)
}

function Question(text, answer) {
    this.text = text;
    this.answer = answer;

    this.isCorrect = function(event) {
        let li = event.target;
        let answerSpace = li.parentElement.nextElementSibling;
        if (li.textContent === this.answer) {
            answerSpace.textContent = "Exactly My Dear Watson!";
        } else {
            answerSpace.textContent = "Nada";
        }
    }
    //this.display = function() {
    //    document.querySelector('#quiz article.multi:last-of-type ul').addEventListener('click', this.isCorrect.bind(this))
    //}
    this.genericDisplay = function(question){
      let source = document.querySelector(question).innerHTML;
      let template = Handlebars.compile(source);
      let html = template(this);
      document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
    }

    this.isCorrectSA = function(event) {
        let submit = event.target;
        let pickles = submit.previousElementSibling;
        let picklesInput = pickles.value;
        let yourAnswer = submit.nextElementSibling;
        if (picklesInput == this.answer) {
            yourAnswer.textContent = "Exactly My Dear Watson!";
        } else {
            yourAnswer.textContent = "Nada";
        }
    }
    this.displaySA = function() {
        document.querySelector('#question article.shortA:last-of-type button.submitButton').addEventListener('click', this.isCorrectSA.bind(this))
    }

}

function MultipleChoiceQuestion (text, answer, choices){
  Question.call(this, text, answer);
  this.choices = choices;
  console.log(answer);
}

MultipleChoiceQuestion.prototype.display = function () {
  this.genericDisplay('#question')//This line is telling js to do all of the following that now lives in the genericDisplay area above
  // let source = document.querySelector('#question').innerHTML;
  // let template = Handlebars.compile(source);
  // let html = template(this);
  // document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
}

function ShortAnswerQuestion (text,answer) {
  Question.call(this, text, answer);
  console.log(answer);
}

ShortAnswerQuestion.prototype.display = function () {
  this.genericDisplay('#shortAnswer')
  // let source = document.querySelector('#shortAnswer').innerHTML;
  // let template = Handlebars.compile(source);
  // let html = template(this);
  // document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
}




// [q1, q2, q3, q4, q5, q6].forEach(question => question.display());


// ShortAnswerQuestion.prototype = Object.create(Question.prototype);
