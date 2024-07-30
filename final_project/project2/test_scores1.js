var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function addScore(){
    var name = $("name").value;
    var score = $("score").value;
    var nameError = $("name_error");
    var scoreError = $("score_error");

    nameError.innerHTML = "";
    scoreError.innerHTML = "";

    if (!name) {
        nameError.innerHTML = "Name cannot be empty.";
    } else if (!score) {
        scoreError.innerHTML = "Score cannot be empty.";
    } else if (isNaN(parseInt(score)) || parseInt(score) < 0 || parseInt(score) > 100) { 
        scoreError.innerHTML = "Please enter a valid score between 0 and 100.";
    } else {
        names.push(name);
        scores.push(parseInt(score));
        $("name").value = "";
        $("score").value = "";
    }
}

function displayResults(){
    var totalScore = 0;
    var highestScore = 0;
    var highestScorer = "";
    for (let i = 0; i < scores.length; i++) {
        totalScore += scores[i];
        if (scores[i] > highestScore) {
            highestScore = scores[i];
            highestScorer = names[i];
        }
    }
    var avgScore = totalScore / scores.length;

    var resultsDiv = $("results");
    resultsDiv.className = "section";
    resultsDiv.innerHTML = "<h2>Results</h2>";
    resultsDiv.innerHTML += "<p>Average Score = " + avgScore + "</p>";
    resultsDiv.innerHTML += "<p>Highest Score = " + highestScorer + " with a score of " + highestScore + "</p>";
}

function displayScores(){
    var scoresTable = $("scores_table");
    $("sco").className = "section";
    $("sco").innerHTML = "<h3>Scores</h3>";
    scoresTable.innerHTML = "<tr><th>Name</th><th>Score</th></tr>";
    for (let i = 0; i < names.length; i++) {
        scoresTable.innerHTML += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }
}

window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};