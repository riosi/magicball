
var userQuestion = "";

function question() {
    userQuestion = document.getElementById('duvida').value;
    document.getElementById('resultado').innerHTML = userQuestion;
}