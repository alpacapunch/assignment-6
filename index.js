const battleship = () => {
  //random number generator
  getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  
  let winner

  //start player1
  let player1 = {
    name: prompt("Who will be Player 1?  Enter name."),
    lives: 3,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    guesses: [],
  };

  for (let i = 0; i < player1.lives; i++) {
    let randomX = getRandomNumber(4);
    let randomY = getRandomNumber(4);
    player1.gameBoard[randomX][randomY] = 1;
  }
  console.log(`tracking ${player1.name}'s board 0`, player1.gameBoard[0]);
  console.log(`tracking ${player1.name}'s board 1`, player1.gameBoard[1]);
  console.log(`tracking ${player1.name}'s board 2`, player1.gameBoard[2]);
  console.log(`tracking ${player1.name}'s board 3`, player1.gameBoard[3]);

  //start player2
  let player2 = {
    name: prompt("Who will be Player 2?  Enter name."),
    lives: 3,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    guesses: [],
  };

  for (let i = 0; i < player2.lives; i++) {
    let randomX = getRandomNumber(4);
    let randomY = getRandomNumber(4);
    player2.gameBoard[randomX][randomY] = 1;
  }
  console.log(`tracking ${player2.name}'s board 0`, player2.gameBoard[0]);
  console.log(`tracking ${player2.name}'s board 0`, player2.gameBoard[1]);
  console.log(`tracking ${player2.name}'s board 0`,player2.gameBoard[2]);
  console.log(`tracking ${player2.name}'s board 0`,player2.gameBoard[3]);
  
  //functions attempts!  DANGER, probably not stable or something.

  /*super redundant function, figure it out.
  function player1Attempt () {
    alert(`It is ${player1.name} 's time to try`)
    let attackX = parseInt(prompt('Choose your attack for X.  Choose a number from 0-3.'))
  }*/

  //start game
    playerTurn = (current, opponent) => {
    var attackX = parseInt(
    prompt("Choose your attack position for X.  Choose a number between 0-3.")
  );
  var attackY = parseInt(
    prompt("Choose your attack position for Y.  Choose a number between 0-3.")
  );
  
  if (opponent.gameBoard[attackX][attackY] === 1) {
    opponent.gameBoard[attackX][attackY] = 0;
    alert("You've hit your enemy, good job!");
    //take away from playerlives
    opponent.lives --;
    console.log(opponent.lives);
    opponent.guesses.push(`Position X is: ${attackX}.  Position Y is: ${attackY}`);
    if (opponent.lives == 0 && current == player1) {
      winner = current.name
      console.log(winner);
      return winner
      
    } else if (opponent.lives !== 0 && current == player1) {
      playerTurn(player2, player1)
    } else {
      playerTurn(player1, player2)
    }

  } else {
    alert("you missed");
    //next player's turn
    opponent.guesses.push(attackX, attackY);

    if (current == player1) {
    playerTurn(player2, player1)
  } else {
    playerTurn(player1, player2)
  }

  console.log(opponent.guesses);

  }
}
playerTurn(player1, player2);
return winner
}
const gameResult = battleship();

const htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult + " won the game!  Good job.";