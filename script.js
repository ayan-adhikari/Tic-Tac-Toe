//Sends a console.log when page loads
window.addEventListener(`load`, pageLoaded)
function pageLoaded()
{
    console.log(`Page loaded`)
}
//Function for generating numbers between min to max (includinng min and max)
function generateRandomNumber(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Assigning elements to variables
const cells = [
  ``,
  document.getElementById(`cell-1`),
  document.getElementById(`cell-2`),
  document.getElementById(`cell-3`),
  document.getElementById(`cell-4`),
  document.getElementById(`cell-5`),
  document.getElementById(`cell-6`),
  document.getElementById(`cell-7`),
  document.getElementById(`cell-8`),
  document.getElementById(`cell-9`)
];
const reset = document.getElementById(`reset-button`)
//Event listeners
//Loops through cells and adds event listeners with correct functions for each one
for (let i = 1;  i<=9; i++)
{
  cells[i].addEventListener(`click`, ()=> {
    cellClicked(cells[i])
  })
}
reset.addEventListener(`click`, resetCells)
//Variables
let player = 1 //Which player's turn it is
let winner = 0//Which player won (0 is no one)
//Function that runs after cell is clicked
function cellClicked(cell)
{
  if (winner == 0)
  {
    if (cell.textContent != `X` && cell.textContent != `O`)
    {
      cell.classList.remove(`not-taken`)
      if (player == 1)
      {
        cell.textContent = `X`
        cell.classList.add(`X`)
        player = 2
      }
      else if (player == 2)
      {
        cell.textContent = `O`
        cell.classList.add(`O`)
        player = 1
      }
    }
    else
    {
      console.log(`${cell} is already taken`)
    }
    checkWinner()
  }
  else
  {
    console.log()
  }
}
//Reset function
function resetCells()
{
  for (let i = 1;  i<=9; i++)
  {
    cells[i].textContent = `_`
    cells[i].classList.add(`not-taken`)
    cells[i].classList.remove(`X`)
    cells[i].classList.remove(`O`)
    cells[i].classList.remove(`winner`)
  }
  player = 1
  winner = 0
}
//Function to check winner
function checkWinner()
{
  //Object of winning positions
  const winningPositions = 
  {
    //Horizontal positions
    horizontal:
    {
      position1: [1, 2, 3],
      position2: [4, 5, 6],
      position3: [7, 8, 9]
    },
    //Vertical positions
    vertical:
    {
      position1: [1, 4, 7],
      position2: [2, 5, 8],
      position3: [3, 6, 9],
    },
    //Diagonal positions
    diagonal: 
    {
      position1: [1, 5, 9],
      position2: [3, 5, 7],
    }
  }
//Checking if each winning position has happened for player 1 and 2
/************************************************************************************/
  /*
███  ██  ███      ███   ██  █   █
 █  █  █ █  █     █  █ █  █ █   █
 █  █  █ ███      ███  █  █ █   █
 █  █  █ █        █ █  █  █ █ █ █
 █   ██  █        █  █  ██   █ █
*/
/************************************************************************************/
  //Very long if statement to detect if player 1 has 3 X's in a row in the top row
  if (cells[winningPositions.horizontal.position1[0]].textContent == `X` && 
    cells[winningPositions.horizontal.position1[1]].textContent == `X` && 
    cells[winningPositions.horizontal.position1[2]].textContent == `X`)
  {
    console.log(`Player 1 wins!`)
    winner = 1
    //Turn winning cells green
    cells[winningPositions.horizontal.position1[0]].classList.add(`winner`)
    cells[winningPositions.horizontal.position1[1]].classList.add(`winner`)
    cells[winningPositions.horizontal.position1[2]].classList.add(`winner`)
  }
/************************************************************************************/
  //Very long if statement to detect if player 2 has 3 O's in a row in the top row
  else if (cells[winningPositions.horizontal.position1[0]].textContent == `O` && 
    cells[winningPositions.horizontal.position1[1]].textContent == `O` && 
    cells[winningPositions.horizontal.position1[2]].textContent == `O`)
  {
    console.log(`Player 2 wins!`)
    winner = 2
    //Turn winning cells green
    cells[winningPositions.horizontal.position1[0]].classList.add(`winner`)
    cells[winningPositions.horizontal.position1[1]].classList.add(`winner`)
    cells[winningPositions.horizontal.position1[2]].classList.add(`winner`)
  }
/************************************************************************************/
/*
█   █ █ ███  ███  █   ████     ███   ██  █   █
██ ██ █ █  █ █  █ █   █        █  █ █  █ █   █
█ █ █ █ █  █ █  █ █   ███      ███  █  █ █   █
█   █ █ █  █ █  █ █   █        █ █  █  █ █ █ █
█   █ █ ███  ███  ███ ████     █  █  ██   █ █
*/
/************************************************************************************/
  //Very long if statement to detect if player 1 has 3 X's in a row the in middle row
  else if (cells[winningPositions.horizontal.position2[0]].textContent == `X` && 
    cells[winningPositions.horizontal.position2[1]].textContent == `X` && 
    cells[winningPositions.horizontal.position2[2]].textContent == `X`)
  {
    console.log(`Player 1 wins!`)
    winner = 1
    cells[winningPositions.horizontal.position2[0]].classList.add(`winner`)
    cells[winningPositions.horizontal.position2[1]].classList.add(`winner`)
    cells[winningPositions.horizontal.position2[2]].classList.add(`winner`)
  }
/************************************************************************************/
  //Very long if statement to detect if player 2 has 3 O's in a row the in middle row
  else if (cells[winningPositions.horizontal.position2[0]].textContent == `O` && 
    cells[winningPositions.horizontal.position2[1]].textContent == `O` && 
    cells[winningPositions.horizontal.position2[2]].textContent == `O`)
  {
    console.log(`Player 2 wins!`)
    winner = 2
    cells[winningPositions.horizontal.position2[0]].classList.add(`winner`)
    cells[winningPositions.horizontal.position2[1]].classList.add(`winner`)
    cells[winningPositions.horizontal.position2[2]].classList.add(`winner`)
  }
/************************************************************************************/
  /*
  ███   ██  ███ ███  ██  █   █     ███   ██  █   █
  █  █ █  █  █   █  █  █ ██ ██     █  █ █  █ █   █
  ███  █  █  █   █  █  █ █ █ █     ███  █  █ █   █
  █  █ █  █  █   █  █  █ █   █     █ █  █  █ █ █ █
  ███   ██   █   █   ██  █   █     █  █  ██   █ █
  */
/************************************************************************************/
  //Very long if statement to detect if player 1 has 3 X's in a row the in bottom row
  else if (cells[winningPositions.horizontal.position3[0]].textContent == `X` && 
    cells[winningPositions.horizontal.position3[1]].textContent == `X` && 
    cells[winningPositions.horizontal.position3[2]].textContent == `X`)
  {
    console.log(`Player 1 wins!`)
    winner = 1
    cells[winningPositions.horizontal.position3[0]].classList.add(`winner`)
    cells[winningPositions.horizontal.position3[1]].classList.add(`winner`)
    cells[winningPositions.horizontal.position3[2]].classList.add(`winner`)
  }
/************************************************************************************/
  //Very long if statement to detect if player 2 has 3 O's in a row the in bottom row
  else if (cells[winningPositions.horizontal.position3[0]].textContent == `O` && 
    cells[winningPositions.horizontal.position3[1]].textContent == `O` && 
    cells[winningPositions.horizontal.position3[2]].textContent == `O`)
  {
    console.log(`Player 2 wins!`)
    winner = 2
    cells[winningPositions.horizontal.position3[0]].classList.add(`winner`)
    cells[winningPositions.horizontal.position3[1]].classList.add(`winner`)
    cells[winningPositions.horizontal.position3[2]].classList.add(`winner`)
  }
/************************************************************************************/
  /*
   ███  ██  █   █  █ █   █ █  █      ██  █  █ ████
  █    █  █ █   █  █ ██ ██ ██ █     █  █ ██ █ █
  █    █  █ █   █  █ █ █ █ █ ██     █  █ █ ██ ███
  █    █  █ █   █  █ █   █ █  █     █  █ █  █ █
   ███  ██  ███ ████ █   █ █  █      ██  █  █ ████
  */
/************************************************************************************/
  //Very long if statement to detect if player 1 has 3 X's in a row the in the left column (column 1)
  else if (cells[winningPositions.vertical.position1[0]].textContent == `X` && 
    cells[winningPositions.vertical.position1[1]].textContent == `X` && 
    cells[winningPositions.vertical.position1[2]].textContent == `X`)
  {
    console.log(`Player 1 wins!`)
    winner = 1
    cells[winningPositions.vertical.position1[0]].classList.add(`winner`)
    cells[winningPositions.vertical.position1[1]].classList.add(`winner`)
    cells[winningPositions.vertical.position1[2]].classList.add(`winner`)
  }
/************************************************************************************/
  //Very long if statement to detect if player 2 has 3 O's in a row the in the left column (column 1)
  else if (cells[winningPositions.vertical.position1[0]].textContent == `O` && 
    cells[winningPositions.vertical.position1[1]].textContent == `O` && 
    cells[winningPositions.vertical.position1[2]].textContent == `O`)
  {
    console.log(`Player 2 wins!`)
    winner = 2
    cells[winningPositions.vertical.position1[0]].classList.add(`winner`)
    cells[winningPositions.vertical.position1[1]].classList.add(`winner`)
    cells[winningPositions.vertical.position1[2]].classList.add(`winner`)
  }
/************************************************************************************/
  /*
   ███  ██  █   █  █ █   █ █  █     ███ █   █  ██
  █    █  █ █   █  █ ██ ██ ██ █      █  █   █ █  █
  █    █  █ █   █  █ █ █ █ █ ██      █  █   █ █  █
  █    █  █ █   █  █ █   █ █  █      █  █ █ █ █  █
   ███  ██  ███ ████ █   █ █  █      █   █ █   ██
  */
/************************************************************************************/
  //Very long if statement to detect if player 1 has 3 X's in a row the in the middle column (column 2)
  else if (cells[winningPositions.vertical.position2[0]].textContent == `X` && 
    cells[winningPositions.vertical.position2[1]].textContent == `X` && 
    cells[winningPositions.vertical.position2[2]].textContent == `X`)
  {
    console.log(`Player 1 wins!`)
    winner = 1
    cells[winningPositions.vertical.position2[0]].classList.add(`winner`)
    cells[winningPositions.vertical.position2[1]].classList.add(`winner`)
    cells[winningPositions.vertical.position2[2]].classList.add(`winner`)
  }
/************************************************************************************/
  //Very long if statement to detect if player 2 has 3 O's in a row the in the middle column (column 2)
  else if (cells[winningPositions.vertical.position2[0]].textContent == `O` && 
    cells[winningPositions.vertical.position2[1]].textContent == `O` && 
    cells[winningPositions.vertical.position2[2]].textContent == `O`)
  {
    console.log(`Player 2 wins!`)
    winner = 2
    cells[winningPositions.vertical.position2[0]].classList.add(`winner`)
    cells[winningPositions.vertical.position2[1]].classList.add(`winner`)
    cells[winningPositions.vertical.position2[2]].classList.add(`winner`)
  }
/************************************************************************************/
  /*
   ███  ██  █   █  █ █   █ █  █     ███ █  █ ███  ████ ████
  █    █  █ █   █  █ ██ ██ ██ █      █  █  █ █  █ █    █
  █    █  █ █   █  █ █ █ █ █ ██      █  ████ ███  ███  ███
  █    █  █ █   █  █ █   █ █  █      █  █  █ █ █  █    █
   ███  ██  ███ ████ █   █ █  █      █  █  █ █  █ ████ ████
  */
/************************************************************************************/
  //Very long if statement to detect if player 1 has 3 X's in a row the in the right column (column 3)
  else if (cells[winningPositions.vertical.position3[0]].textContent == `X` && 
    cells[winningPositions.vertical.position3[1]].textContent == `X` && 
    cells[winningPositions.vertical.position3[2]].textContent == `X`)
  {
    console.log(`Player 1 wins!`)
    winner = 1
    cells[winningPositions.vertical.position3[0]].classList.add(`winner`)
    cells[winningPositions.vertical.position3[1]].classList.add(`winner`)
    cells[winningPositions.vertical.position3[2]].classList.add(`winner`)
  }
/************************************************************************************/
  //Very long if statement to detect if player 2 has 3 O's in a row the in the right column (column 3)
  else if (cells[winningPositions.vertical.position3[0]].textContent == `O` && 
    cells[winningPositions.vertical.position3[1]].textContent == `O` && 
    cells[winningPositions.vertical.position3[2]].textContent == `O`)
  {
    console.log(`Player 2 wins!`)
    winner = 2
    cells[winningPositions.vertical.position3[0]].classList.add(`winner`)
    cells[winningPositions.vertical.position3[1]].classList.add(`winner`)
    cells[winningPositions.vertical.position3[2]].classList.add(`winner`)
  }
/************************************************************************************/
  /*
  ███  █  ██   ███  ██  █  █  ██  █        ██  █  █ ████
  █  █ █ █  █ █    █  █ ██ █ █  █ █       █  █ ██ █ █
  █  █ █ ████ █ ██ █  █ █ ██ ████ █       █  █ █ ██ ███
  █  █ █ █  █ █  █ █  █ █  █ █  █ █       █  █ █  █ █
  ███  █ █  █  ███  ██  █  █ █  █ ███      ██  █  █ ████
  (Top left to bottom right)*/
/************************************************************************************/
  //Very long if statement to detect if player 1 has 3 X's in a row the in diagonal one (top left to bottom right)
  else if (cells[winningPositions.diagonal.position1[0]].textContent == `X` && 
    cells[winningPositions.diagonal.position1[1]].textContent == `X` && 
    cells[winningPositions.diagonal.position1[2]].textContent == `X`)
  {
    console.log(`Player 1 wins!`)
    winner = 1
    cells[winningPositions.diagonal.position1[0]].classList.add(`winner`)
    cells[winningPositions.diagonal.position1[1]].classList.add(`winner`)
    cells[winningPositions.diagonal.position1[2]].classList.add(`winner`)
  }
/************************************************************************************/
  //Very long if statement to detect if player 2 has 3 O's in a row the in diagonal one (top left to bottom right)
  else if (cells[winningPositions.diagonal.position1[0]].textContent == `O` && 
    cells[winningPositions.diagonal.position1[1]].textContent == `O` && 
    cells[winningPositions.diagonal.position1[2]].textContent == `O`)
  {
    console.log(`Player 2 wins!`)
    winner = 2
    cells[winningPositions.diagonal.position1[0]].classList.add(`winner`)
    cells[winningPositions.diagonal.position1[1]].classList.add(`winner`)
    cells[winningPositions.diagonal.position1[2]].classList.add(`winner`)
  }
/************************************************************************************/
  /*
  ███  █  ██   ███  ██  █  █  ██  █       ███ █   █  ██
  █  █ █ █  █ █    █  █ ██ █ █  █ █        █  █   █ █  █
  █  █ █ ████ █ ██ █  █ █ ██ ████ █        █  █   █ █  █
  █  █ █ █  █ █  █ █  █ █  █ █  █ █        █  █ █ █ █  █
  ███  █ █  █  ███  ██  █  █ █  █ ███      █   █ █   ██
  (Top right to bottom left)*/
/************************************************************************************/
  //Very long if statement to detect if player 1 has 3 X's in a row the in diagonal two (top right to bottom left)
  else if (cells[winningPositions.diagonal.position2[0]].textContent == `X` && 
    cells[winningPositions.diagonal.position2[1]].textContent == `X` && 
    cells[winningPositions.diagonal.position2[2]].textContent == `X`)
  {
    console.log(`Player 1 wins!`)
    winner = 1
    cells[winningPositions.diagonal.position2[0]].classList.add(`winner`)
    cells[winningPositions.diagonal.position2[1]].classList.add(`winner`)
    cells[winningPositions.diagonal.position2[2]].classList.add(`winner`)
  }
/************************************************************************************/
  //Very long if statement to detect if player 2 has 3 O's in a row the in diagonal two (top right to bottom left)
  else if (cells[winningPositions.diagonal.position2[0]].textContent == `O` && 
    cells[winningPositions.diagonal.position2[1]].textContent == `O` && 
    cells[winningPositions.diagonal.position2[2]].textContent == `O`)
  {
    console.log(`Player 2 wins!`)
    winner = 2
    cells[winningPositions.diagonal.position2[0]].classList.add(`winner`)
    cells[winningPositions.diagonal.position2[1]].classList.add(`winner`)
    cells[winningPositions.diagonal.position2[2]].classList.add(`winner`)
  }
/************************************************************************************/
}