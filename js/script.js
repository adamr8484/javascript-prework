{
    const playGame = function(playerInput) {
        const getMoveName = function(moveNumber) {
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
    
        const displayResult = function(argComputerMove, argPlayerMove) {
            if( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty Wygrywasz');
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
                printMessage('Ty Wygrywasz');
            } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
                printMessage('Ty Wygrywasz');
            } else if (argComputerMove == argPlayerMove) {
                printMessage('Remis');
            } else if (argPlayerMove == 'nieznany ruch') {
                printMessage('Wpisales nieprawidlowa odpowiedz');
            } else {
                printMessage('Przegrales');
            }
        }

        clearMessages();

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        const computerMove = getMoveName(randomNumber);
        const playerMove = getMoveName (playerInput)
        printMessage('Mój ruch to: ' + computerMove);
        displayResult(computerMove, playerMove)
    }

    document.getElementById('play-rock').addEventListener('click', function() {
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function() {
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function() {
        playGame(3);
    });
}