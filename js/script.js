function playGame(playerInput){

    clearMessages ();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

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

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

   /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);*/

   /* function displayResult(argComputerMove, argPlayerMove){*/
    
        if( computerMove == 'papier' && playerMove == 'kamień'){
        } else if (computerMove == 'papier' && playerMove == 'nozyce'){
        } else if (computerMove == 'nozyce' && playerMove == 'kamień'){
            printMessage('Ty Wygrywasz');
        } else if (computerMove == playerMove){
            printMessage('Remis');
        } else if (playerMove == 'nieznany ruch'){
            printMessage('Wpisales nieprawidlowa odpowiedz');
        } else {
            printMessage('Przegrales');
        }
    /*}*/
} 

play-rock.addEventListener('click', buttonClicked);
play-paper.addEventListener('click', buttonClicked);
play-scissors.addEventListener('click', buttonClicked);