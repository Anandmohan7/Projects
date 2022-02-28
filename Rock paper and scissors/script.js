const game = () => {
  let pScore = 0;
  let cScore = 0;
  // start the game fun
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    // const variable issue it says .....
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach((hand) => {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
      });
    });
    //computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach((option) => {
      option.addEventListener('click', function () {
        //console.log(this);
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        //console.log(computerNumber);
        const computerChoice = computerOptions[computerNumber];
        //console.log(computerChoice);
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          //update images
          //PROBLEM HERE IN THESE TWO LINES
          playerHand.src = `./asets/${this.textContent}.png`;
          computerHand.src = `./asets/${computerChoice}.png`;
        }, 2000);

        //animation
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //update text
    const winner = document.querySelector('.winner');
    //checking for tie
    if (playerChoice == computerChoice) {
      winner.textContent = 'It is a tie';
      return;
    }

    //check for rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();

        return;
      }
    }
    //checking for paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();

        return;
      }
    }
    //check for scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();

        return;
      } else {
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();

        return;
      }
    }
  };

  //call all the inner functions
  startGame();
  playMatch();
  // updateScore();
};
//start the game
game();
