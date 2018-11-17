function Quiz(questions) {
    this.score = 0;
    this.questionIndex = 0;
    this.questions = questions;
}

Quiz.prototype.getCurrentIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    if(this.getCurrentIndex().correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}