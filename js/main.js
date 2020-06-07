const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const round = 0;
const scoreboard = {
    player: 0,
    computer: 0
}

// Play game
function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = computerPlay();
    const winner = playRound(playerChoice, computerChoice);
    showWinner(winner, computerChoice, playerChoice);
}

// Get computers choice
let RPS = ["rock", "paper", "scissors"];
function computerPlay() {
    return RPS[Math.floor(Math.random() * 3)];
    }

// Get game winner
function playRound(p, c) {
    if (p === 'rock' && c === 'scissors') {
        scoreboard.player++;
        return "player";

    } else if (p === 'rock' && c === 'paper') {
        scoreboard.computer++;
        return "computer";

    } else if (p === 'paper' && c === 'rock') {
        scoreboard.player++;
        return "player";

    } else if (p === 'paper' && c === 'scissors') {
        scoreboard.computer++;
        return "computer";

    } else if (p === 'scissors' && c === 'rock') {
        scoreboard.computer++;
        return "computer";

    } else if (p === 'scissors' && c === 'paper') {
        scoreboard.player++;
        return "player";

    } else if (p === c) {
        return "draw";

    }
}

function showWinner(winner, computerChoice, playerChoice, round) {
    for (let round = 0; round < 5; round++) 

    if (winner === 'player') {
        // Show result
        result.innerHTML = `
            <h1 class="text-win">You Win!</h1>
            <p>${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} 
            beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>
        `;
    } else if (winner === 'computer') {
        // Show result
        result.innerHTML = `
            <h1 class="text-lose">You Lose!</h1>
            <p>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} 
            beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}</p>
        `;
    } else {
        // Show result
        result.innerHTML = `
            <h1>It's A Draw</h1>
            <p>You both chose ${playerChoice.charAt(0).toUpperCase() + 
            playerChoice.slice(1)}...</p>
        `;
    }
    // Show score
    score.innerHTML = `
        <p>Player: ${scoreboard.player}
        <p>Computer: ${scoreboard.computer}
    `;
}

// play 5 rounds
function game(round) {
    for (let round = 0; round < 5; round++) 

    if (playerScore > computerScore) {
        result.innerHTML = `<h1>Congratulations, you win the game!</h1>`
    } else if (playerScore < computerScore) {
        result.innerHTML = `<h1>You lose the game!</h1>`
    } else {
        result.innerHTML = `<h1>It's a draw, there's no winner...</h1>`
    }
};

// Restart game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;
    result.innerHTML = ``;
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);