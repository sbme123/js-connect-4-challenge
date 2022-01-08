document.addEventListener('DOMContentLoaded', () => {

const gameGrid = document.querySelector('.game-grid')

// Create a grid for the game, will create the divs with JS
const createGameGrid = () => {
    for(i = 0; i < 42; i++) {
        const slot = document.createElement('div');
        slot.setAttribute('id', i)
        slot.className= 'slot';
        gameGrid.appendChild(slot)
    };

    
}
createGameGrid()
console.dir(gameGrid)

/*
I rewrote the for loop to create the game grid. Previous attempt was as follows: 
for(s = 0; s < 42; s++) {
    let gridDivs = document.createElement('div');
    gridDivs.className = 'slot';
    document.getElementsByClassName('game-grid').appendChild(gridDivs);
    gridDivs.innerHTML = `<p>slot</p>`
    console.dir(gridDivs)
};
*/


const body1 = document.getElementById("test") 
body1.style.backgroundColor = "red"

// Conenct 4 requires two players 

// red vs yellow

// It needs to be 6 grids wide and 7 grids high 

// Start a new game

// Connect the slots 


// probably need add an onclick to the slots 



// To win, a player will need to get 4 colours in a row 

// if quare below is taking the next player can go on top

// check for win on every click maybe? 

// We'll need to keep score 

// Restart the game 

})