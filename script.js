var startButton = document.getElementById("startbtn");

var correctAnswer = true;

startButton.addEventListener("click", function() {
    var question1 = document.getElementById("question-1");
    question1.style.visibility = "visible";
    var startquiz = document.getElementById("start-quiz");
    startquiz.style.visibility = "hidden";


})

var answer1 = document.getElementById("answer-1");
var answer2 = document.getElementById("answer-2");
var answer3 = document.getElementById("answer-3");
var answer4 = document.getElementById("answer-4");

answer1.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-1");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-2");
    unhide2.style.visibility = "visible";

})

answer2.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-1");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-2");
    unhide2.style.visibility = "visible";

})
answer3.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-1");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-2");
    unhide2.style.visibility = "visible";

})
answer4.addEventListener("click", function() {
    correctAnswer = true;
    var hide = document.getElementById("question-1");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-2");
    unhide2.style.visibility = "visible";


})
var answer5 = document.getElementById("answer-5");
var answer6 = document.getElementById("answer-6");
var answer7 = document.getElementById("answer-7");
var answer8 = document.getElementById("answer-8");

answer5.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-2");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-3");
    unhide2.style.visibility = "visible";

})

answer6.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-2");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-3");
    unhide2.style.visibility = "visible";

})

answer7.addEventListener("click", function() {
    correctAnswer = true;
    var hide = document.getElementById("question-2");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-3");
    unhide2.style.visibility = "visible";

})
answer8.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-2");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-3");
    unhide2.style.visibility = "visible";


})
var answer9 = document.getElementById("answer-9");
var answer10 = document.getElementById("answer-10");
var answer11 = document.getElementById("answer-11");
var answer12 = document.getElementById("answer-12");

answer9.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-3");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-4");
    unhide2.style.visibility = "visible";

})

answer10.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-3");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-4");
    unhide2.style.visibility = "visible";

})

answer11.addEventListener("click", function() {
    correctAnswer = true;
    var hide = document.getElementById("question-3");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-4");
    unhide2.style.visibility = "visible";

})
answer12.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-3");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-4");
    unhide2.style.visibility = "visible";


})
var answer13 = document.getElementById("answer-13");
var answer14 = document.getElementById("answer-14");
var answer15 = document.getElementById("answer-15");
var answer16 = document.getElementById("answer-16");

answer13.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-4");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("all-done");
    unhide2.style.visibility = "visible";

})

answer14.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-4");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("all-done");
    unhide2.style.visibility = "visible";

})

answer15.addEventListener("click", function() {
    correctAnswer = true;
    var hide = document.getElementById("question-4");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("all-done");
    unhide2.style.visibility = "visible";

})
answer16.addEventListener("click", function() {
    correctAnswer = false;
    var hide = document.getElementById("question-4");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("all-done");
    unhide2.style.visibility = "visible";


})





console.log(correctAnswer);