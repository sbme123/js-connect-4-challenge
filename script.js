document.addEventListener('DOMContentLoaded', () => {

// Testing that it's linked
const body1 = document.getElementById("test") 
body1.style.backgroundColor = "blue"

// display the result 

const result = document.getElementById('result')
result.innerHTML = `result:`

// Display what player it is 
const displayCurrentPlayer = document.getElementById("score") 
let currentPlayer = 1
displayCurrentPlayer.innerHTML = currentPlayer

// grabbing the game grid div to add the divs for the game slots / board layout
const gameGrid = document.querySelector('.game-grid')

// Hard coded winning results 

 const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ]

// Create a grid for the game, will create the divs with JS rather than adding them manually
const createGameGrid = () => {
    for(i = 0; i < 49; i++) {
        const slots = document.createElement('div');
        slots.setAttribute('id', i)
        slots.innerHTML = `<p>Slot ${slots.id}</p>` 
        gameGrid.appendChild(slots) 
        // console.dir(slots)
        if (slots.id >= 42) {
            slots.className = "taken"
        } else {
            slots.className = 'slot'
        }
    }    
}

createGameGrid()

// Grabbing the slot classes 

const slots = document.querySelectorAll(`.slot, .taken`) 

// Cheking the score 

const checkScore = () => {

    // Loop to loop through the winning arrays 

    for (let i = 0; i < winningArrays.length; i++) {
        // looping into the slots array with the winnings array indexes 
        const slot1 = slots[winningArrays[i][0]]
        const slot2 = slots[winningArrays[i][1]]
        const slot3 = slots[winningArrays[i][2]]
        const slot4 = slots[winningArrays[i][3]]
        
        // Check the slots to see if they all hae the class of playerRed

        if (
            slot1.classList.contains('playerRed') &&
            slot2.classList.contains('playerRed') &&
            slot3.classList.contains('playerRed') &&
            slot4.classList.contains('playerRed')
        ) {
            result.innerHTML = "result: Player Red Wins"
            alert("PLAYER RED WINS")
        } if (
           
            slot1.classList.contains('playerYellow') &&
            slot2.classList.contains('playerYellow') &&
            slot3.classList.contains('playerYellow') &&
            slot4.classList.contains('playerYellow')

        ) {
            result.innerHTML = "result: Player Yellow Wins" 
            alert("PLAYER YELLOW WINS")
        }
    } /* END OF FOR LOOP*/
} /* END OF CHECK SCORE FUNCTION */ 


// Adding the onclick to identify the slots

for (let i = 0; i < slots.length; i++) {
    slots[i].onclick = () => {
    
    // Connect 4 works with gravity. So if the square below your current square is taken, you can go on top of it
    
    if (slots[i + 7].classList.contains('taken') &&!slots[i].classList.contains('taken')) {
        if (currentPlayer == 1) {
        slots[i].classList.add('taken')
        slots[i].classList.add('playerRed')
        slots[i].classList.remove('slot')
        currentPlayer = 2
        displayCurrentPlayer.innerHTML = currentPlayer  
    } else if (currentPlayer == 2) {
        slots[i].classList.add('taken')
        slots[i].classList.add('playerYellow')
        slots[i].classList.remove('slot')
        currentPlayer = 1
        displayCurrentPlayer.innerHTML = currentPlayer 
    } 
} else alert("Can't play here")
checkScore()

        // testign the correct slot is selected
    console.log(`You have selected slot ${i}`)
    console.dir(slots[i])
    } /* END OF ONCLICK */ 
  
} /* EEND OF FOOR LOOP */ 






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