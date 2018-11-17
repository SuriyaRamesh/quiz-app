function populate() {
    if(quiz.isEnded()) {
        //show score
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getCurrentIndex().text;
    }
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