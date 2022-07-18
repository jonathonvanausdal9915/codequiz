var startButton = document.getElementById("startbtn");
var correctAnswer = true;
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var pointsEl = document.getElementById("points");
var timeLeft = 50;
var points = 0;
var submitButton = document.getElementById("form-submit");
var highscores = document.getElementById("highscores");
var nameentered = document.getElementById("entname");
var pointentered = document.getElementById("entscore");
var goback = document.getElementById("gobackbtn");
var start = document.getElementById("start-quiz");


submitButton.addEventListener("click", function() {
    var nameentered = document.getElementById("ename").value;
    localStorage.setItem(nameentered, points);
    var pts = localStorage.getItem(nameentered);
    highscores.style.visibility = "visible";

    var key = "";
    var highest = 0;
    for (var i = 0; i < localStorage.length + 1; i++) {
        var score = localStorage.getItem(localStorage.key(i));
        if (score > 75) {
            highest = 100;
            key = localStorage.key(i);
        } else

        if (highest <= score) {
            highest = score;
            key = localStorage.key(i);
        }
    }


    entscore.textContent = localStorage.getItem(key);
    entname.textContent = key;



})


function addpoints() {
    points = points + 25;
    pointsEl.textContent = "final score=" + points;

}

function subtractpoints() {
    points = points - 25;
    pointsEl.textContent = "final score=" + points;
}

function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {

            timerEl.textContent = timeLeft + ' seconds remaining';

            timeLeft--;
        } else if (timeLeft === 1) {

            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {

            timerEl.textContent = '';

            clearInterval(timeInterval);

            displayMessage();
        }
    }, 1000);
}

function displayMessage() {
    var wordCount = 0;
}
startButton.addEventListener("click", function() {
    var question1 = document.getElementById("question-1");
    question1.style.visibility = "visible";
    var startquiz = document.getElementById("start-quiz");
    startquiz.style.visibility = "hidden";
    countdown();


})
var answer1 = document.getElementById("answer-1");
var answer2 = document.getElementById("answer-2");
var answer3 = document.getElementById("answer-3");
var answer4 = document.getElementById("answer-4");
var answer5 = document.getElementById("answer-5");
var answer6 = document.getElementById("answer-6");
var answer7 = document.getElementById("answer-7");
var answer8 = document.getElementById("answer-8");
var answer9 = document.getElementById("answer-9");
var answer10 = document.getElementById("answer-10");
var answer11 = document.getElementById("answer-11");
var answer12 = document.getElementById("answer-12");
var answer13 = document.getElementById("answer-13");
var answer14 = document.getElementById("answer-14");
var answer15 = document.getElementById("answer-15");
var answer16 = document.getElementById("answer-16");

answer1.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-1");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-2");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25 points");

})

answer2.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-1");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-2");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25  points");

})

answer3.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-1");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-2");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25 points");

})
answer4.addEventListener("click", function() {
    var hide = document.getElementById("question-1");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-2");
    unhide2.style.visibility = "visible";
    alert("Correct!!! +25 points");
    addpoints();
    console.log(points);


})

answer5.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-2");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-3");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25  points");

})

answer6.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-2");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-3");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25  points");

})

answer7.addEventListener("click", function() {
    var hide = document.getElementById("question-2");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-3");
    unhide2.style.visibility = "visible";
    addpoints();
    alert("Correct!!! +25 points");
    console.log(points);


})
answer8.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-2");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-3");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25  points");


})

answer9.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-3");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-4");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25  points");

})

answer10.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-3");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-4");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25  points");

})

answer11.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-3");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-4");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25  points");

})
answer12.addEventListener("click", function() {
    var hide = document.getElementById("question-3");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("question-4");
    unhide2.style.visibility = "visible";
    addpoints();
    alert("Correct!!! +25 points");
    console.log(points);
})


answer13.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-4");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("all-done");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25  points");

})

answer14.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-4");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("all-done");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25  points");

})

answer15.addEventListener("click", function() {
    var hide = document.getElementById("question-4");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("all-done");
    unhide2.style.visibility = "visible";
    addpoints();
    alert("Correct!!! +25 points");
    console.log(points);
})
answer16.addEventListener("click", function() {
    timeLeft -= 10;
    subtractpoints();
    var hide = document.getElementById("question-4");
    hide.style.visibility = "hidden";
    var unhide2 = document.getElementById("all-done");
    unhide2.style.visibility = "visible";
    alert("Wrong Answer!! -25  points");


})
console.log(points);
console.log(correctAnswer);