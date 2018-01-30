function Question(text, choices, answer){
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}

function Quiz(questions) {
	this.score = 0
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
	return this.questions(this.questionIndex);
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
 }

 Quiz.prototype.guess = function(answer) {
 	if (this.getQuestionIndex().corretAnswer(answer)) {
 		this.score++;
 	}
 	this.questionIndex++;
 }

function populate() {
	if(quiz.isEnded()) {
		
	}
	else {
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i< choices.length; i++) {
			var element = document.getElementById("choices" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}

}

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;

}

function showScores(){
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;

}


var questions = [
	new Question("What is the most visited tourist attraction in the world?", ['Time Square','Disney World', 'Eifle Tower', 'Great Wall'], "A"),
	new Question("Which major Canadian city has not hosted the Olympics?", ['Montreal','Toronto', 'Calgary', 'Vancouver'], "B"),
	new Question("Finish this phrase with a well-known Italian city: “All roads lead to _____", ['Naples','Florence', 'Rome', 'Milan'], "C"),
	new Question("In the movie “National Lampoon’s Vacation,” where is the Griswold family traveling?", ['Walley World','Disney World', 'Sea World', 'Disneyland'], "A"),
];

var quiz = new Quiz(questions);

populate();