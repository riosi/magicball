
function question() {
    userQuestion = document.getElementById('duvida').value;


var randomNumber = Math.floor(Math.random() * 8)
console.log(randomNumber)

var eightBall = ""; 

switch (randomNumber) {
    case 0: 
        eightBall = "Você ainda não está preparado para a resposta!"
    break;
    case 1:
        eightBall = "Se concentre e pergunte novamente!"
    break;
    case 2:
        eightBall = "Hmm, não consigo prever neste momento."
    break;
    case 3: 
        eightBall = "O tempo pode estar favorável."
    break;
    case 4: 
        eightBall = "Você conhece o grupo de rock Dreamcatcher?"
    break;
    case 5:
        eightBall = "É melhor tomar um sorvete."
    break; 
    case 6: 
        eightBall = "Estou um pouco ocupada, volte mais tarde."
    break;
    case 7:
        eightBall = "A resposta está em seu coração."
    break
}

document.getElementById('resultado').innerHTML = eightBall;
}


