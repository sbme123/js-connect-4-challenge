document.addEventListener('DOMContentLoaded', () => {

// Testing that it's linked
const body1 = document.getElementById("test") 
body1.style.backgroundColor = "red"

let currentPlayer = 1

// grabbing the game grid div to add the divs for the game slots / board layout
const gameGrid = document.querySelector('.game-grid')


// Create a grid for the game, will create the divs with JS rather than adding them manually
const createGameGrid = () => {
    for(i = 0; i < 42; i++) {
        const slots = document.createElement('div');
        slots.setAttribute('id', i)
        slots.innerHTML = `<p>Slot ${slots.id}</p>` 
        gameGrid.appendChild(slots) 
        // console.dir(slots)
        if (slots.id >= 35) {
            slots.className = "taken"
        } else {
            slots.className = 'slot'
        }
    }    
}

createGameGrid()

// Adding the onclick to identify the slots

const slots = document.querySelectorAll(`.slot, .taken`) 

for (let i = 0; i < slots.length; i++) {
    slots[i].onclick = () => {
    
    // Connect 4 works with gravity. So if the square below your current square is taken, you can go on top of it
    if (slots[i].classList.contains('taken')) {
        if (currentPlayer == 1) {
        slots[i].classList.add('taken')
        slots[i].classList.add('playerRed')
        currentPlayer == 2
    } 
    if (currentPlayer == 2) {
        slots[i].classList.add('taken')
        slots[i].classList.add('playerRed')
        currentPlayer == 2
    }
}
    
    else {

    }


        // testign the correct slot is selected
    console.log(`You have selected slot ${i}`)
    }
}


const displayCurrentPlayer = document.getElementById("score") 
displayCurrentPlayer.innerHTML = `<p>${currentPlayer}</p>`



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