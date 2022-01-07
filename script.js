const body1 = document.getElementById("test") 
body1.style.backgroundColor = "red"

// Conenct 4 requires two players 
// red vs yellow
// It needs to be 6 grids wide and 7 grids high 

// Start a new game

// Create a grid for the game, will create the divs with JS


for( g = 0; g < 9; g++) {
let gameGrid = document.querySelector(".game-grid")
    
document.addEventListener('DOMContentLoaded', () => {
    let slot = document.createElement('div');
    slot.innerHTML = '<p>Hi there!</p>';
    slot.className = 'slot';
 
    document.body.appendChild(slot);
}, false);
}




// To win, a player will need to get 4 colours in a row 

// if quare below is taking the next player can go on top

// check for win on every click maybe? 

// We'll need to keep score 

// Restart the game 