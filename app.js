function populate() {
    if(quiz.isEnded()) {
        showScore();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getCurrentIndex().text;

        //show choices
        var choices = quiz.getCurrentIndex().choices;
        for(var i=0; i<choices.length; i++) {
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn"+i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, userChoice) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(userChoice);
        populate();
    }
}

function showProgress() {
    var currentQuestionIndex = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question "+currentQuestionIndex+" of "+quiz.questions.length+" .";
}

function showScore() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your score :"+quiz.score+ " </h2>"
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "jQuery", "CSS", "XML"], "CSS"),
    new Question("There are _____ main components of object oriented programmin.", ["1", "6", "2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "JavaScript", "All"],"All"),
    new Question("MVC is a __________ .", ["Language", "Library", "Framework", "All"], "Framework")
 ];

 var quiz = new Quiz(questions);

 populate();