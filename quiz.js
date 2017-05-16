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
    .then(object => object.results)
    .then(apiArr => apiArr.map(getData)) //getData is being invoked by running it through getData
    .then(apiArr => apiArr.forEach(question => question.display()));
// .then(jsonData => console.log(jsonData))

//True or False Questions
fetch('https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=boolean')
    .then(response => response.json())
    // .then(jsonData => console.log(jsonData))
    .then(object => object.results)
    .then(apiArr => apiArr.map(getData))
    .then(apiArr => apiArr.forEach(question => question.display()));
// .then(jsonData => console.log(jsonData))


function getData(thisIsAnObject) {
    console.log(thisIsAnObject);
    return new MultipleChoiceQuestion(thisIsAnObject.question, thisIsAnObject.correct_answer, thisIsAnObject.incorrect_answers)
}

function Question(text, answer) {
    this.text = text;
    this.answer = answer;

    this.genericDisplay = function(question) {
        let source = document.querySelector(question).innerHTML;
        let template = Handlebars.compile(source);
        let html = template(this);
        document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
    }
}

function MultipleChoiceQuestion(text, answer, choices) {
    Question.call(this, text, answer);
    this.choices = choices;
    console.log(answer);
}

MultipleChoiceQuestion.prototype.display = function() {
    this.genericDisplay('#question') //This line is telling js to do all of the following that now lives in the genericDisplay area above
    document.querySelector('#quiz article.multi:last-of-type ul').addEventListener('click', this.isCorrect.bind(this))
}


MultipleChoiceQuestion.prototype.isCorrect = function (event) {
    let li = event.target;
    let feedbackSpace = li.parentElement.nextElementSibling;
    this.provideFeedback(li, feedbackSpace);
}

MultipleChoiceQuestion.prototype.provideFeedback = function(li, feedbackSpace){
  if (li.textContent === this.answer) {
      feedbackSpace.textContent = "Exactly My Dear Watson!";
  } else {
      feedbackSpace.textContent = "Nada";
  }
}
