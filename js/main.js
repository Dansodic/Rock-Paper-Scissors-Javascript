//Daniel Kenny 28/08/19
//A rock paper scissors game based on a tutorial project

const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player:0,
  computer:0
}

//firstToTen
function firstToTen(){
  player10 = scoreboard.player;
  pc10 = scoreboard.computer;
  console.log(player10,pc10);
  if(player10 == 10){
    //show result
    result.innerHTML = `<h1 class = "text-win">You Got to Ten First!</h1>
    <p>The Computer scored <strong>${pc10}</strong></p>`;
    modal.style.display ='block';
    resetScore();
  }else if(pc10 === 10){
    result.innerHTML = `<h1 class = "text-win">The Computer Got to Ten First!</h1>
    <p>You scored <strong>${player10}</strong></p>`;
    modal.style.display ='block';
    resetScore();
  }

  

}

//Play Function
function play(e){
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice );
  displayWinner(winner,computerChoice);
  firstToTen();
}

// Get Computer Choice
function getComputerChoice(){
  const rand = Math.random();
  if(rand < 0.34){
    return 'rock';
  }
  else if(rand<= 0.67){
    return 'paper';
  }else{
    return 'scissors';
  }
}

// Get winner of the game
function getWinner(p,c){
  if(p === c){
    return 'draw';
  }
  else if(p === 'rock'){
    if(c === 'paper'){
      return 'computer';
    }else{
      return 'player';
    }
  }
  else if(p === 'paper'){
    if(c === 'scissors'){
      return 'computer';
    }else{
      return 'player';
    }
  }
  else if(p === 'scissors'){
    if(c === 'rock'){
      return 'computer';
    }else{
      return 'player';
    }
  }
}

//Display the winner
function displayWinner(winner, computerChoice){
  if(winner === 'player'){
    //increment player score
    scoreboard.player++;
    //show result
    result.innerHTML = `<h1 class = "text-win">You Win!</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>The Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
  }else if(winner === 'computer'){
    //increment computer score
    scoreboard.computer++;
    //show result
    result.innerHTML = `<h1 class = "text-lose">You Lose!</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>The Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
  }else{
    //show result
    result.innerHTML = `<h1>it's a Draw!</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>The Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
  }

  //Show the score
  score.innerHTML = `<p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>`;

  modal.style.display ='block';
}

//Clear the modal after click
function clearModal(e){
  if(e.target == modal){
    modal.style.display ='none';
  }
}

//reset the score
function resetScore(){
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = 
  `<p>Player: 0</p>
  <p>Computer: 0</p>`;
  restart.style.display = 'none';
}

//Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click',resetScore);