function playGame (playerInput){
    function getMoveName (moveNumber) {
        if (moveNumber == 1) {
            return 'kamień'
        } else if (moveNumber == 2) {
            return "papier"
        } else if (moveNumber == 3) {
            return 'nozyce'
        } else {
            return "nieznany ruch"
        }
    }


    
    function displayResult (argComputerMove, argPlayerMove) {
        if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Ty Wygrywasz');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
            printMessage('Ty Wygrywasz');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
            printMessage('Ty Wygrywasz');
        } else if (argComputerMove == argPlayerMove){
            printMessage('Remis');
        } else if (argPlayerMove == 'nieznany ruch'){
            printMessage('Wpisales nieprawidlowa odpowiedz');
        } else {
            printMessage('Przegrales');
        }
    }

    clearMessages ();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName (playerInput)
    printMessage('Mój ruch to: ' + computerMove);
    displayResult(computerMove, playerMove)
}

document.getElementById('play-rock').addEventListener('click',function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click',function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click',function(){
    playGame(3);
});