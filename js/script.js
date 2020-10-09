let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber == 2){
    computerMove = 'papier';
  }

else if(randomNumber == 3){
    computerMove = 'nozyce';
  }

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2'){
    playerMove = 'papier';
  }
else if (playerInput == '3'){
    playerMove = 'nozyce';
  }

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('Przegrywasz!');
  }
else if( computerMove == 'kamień' && playerMove == 'kamien'){
    printMessage('Remis!');
  }
else if( computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Wygrywasz!');
  }
else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }
else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wygrywasz!');
  }
else if( computerMove == 'nozyce' && playerMove == 'kamień'){
    printMessage('Wygrywasz!');
  }
else if( computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Przegrywasz!');
  }
else if( computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('Remis!');
  }
else if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('Wpisana nieprawidlowa odpowiedz');
  }
else if( computerMove == 'nozyce' && playerMove == 'nieznany ruch'){
    printMessage('Wpisana nieprawidlowa odpowiedz');
  }
else if ( computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('Wpisana nieprawidlowa odpowiedz');
  }