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
const feedback = document.getElementById(`feedback`) 
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
let output; //The feedback text 
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
  //What the feedback text displays
  output = ``
  checkWinner()
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
//Note if has been used instead of elseif ot make sure the game detects multiple winning positions at the same time
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
      winner = 1
      //Turn winning cells green
      cells[winningPositions.horizontal.position1[0]].classList.add(`winner`)
      cells[winningPositions.horizontal.position1[1]].classList.add(`winner`)
      cells[winningPositions.horizontal.position1[2]].classList.add(`winner`)
    }
  /************************************************************************************/
    //Very long if statement to detect if player 2 has 3 O's in a row in the top row
    if (cells[winningPositions.horizontal.position1[0]].textContent == `O` && 
      cells[winningPositions.horizontal.position1[1]].textContent == `O` && 
      cells[winningPositions.horizontal.position1[2]].textContent == `O`)
    {
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
    if (cells[winningPositions.horizontal.position2[0]].textContent == `X` && 
      cells[winningPositions.horizontal.position2[1]].textContent == `X` && 
      cells[winningPositions.horizontal.position2[2]].textContent == `X`)
    {
      winner = 1
      cells[winningPositions.horizontal.position2[0]].classList.add(`winner`)
      cells[winningPositions.horizontal.position2[1]].classList.add(`winner`)
      cells[winningPositions.horizontal.position2[2]].classList.add(`winner`)
    }
  /************************************************************************************/
    //Very long if statement to detect if player 2 has 3 O's in a row the in middle row
    if (cells[winningPositions.horizontal.position2[0]].textContent == `O` && 
      cells[winningPositions.horizontal.position2[1]].textContent == `O` && 
      cells[winningPositions.horizontal.position2[2]].textContent == `O`)
    {
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
    if (cells[winningPositions.horizontal.position3[0]].textContent == `X` && 
      cells[winningPositions.horizontal.position3[1]].textContent == `X` && 
      cells[winningPositions.horizontal.position3[2]].textContent == `X`)
    {
      winner = 1
      cells[winningPositions.horizontal.position3[0]].classList.add(`winner`)
      cells[winningPositions.horizontal.position3[1]].classList.add(`winner`)
      cells[winningPositions.horizontal.position3[2]].classList.add(`winner`)
    }
  /************************************************************************************/
    //Very long if statement to detect if player 2 has 3 O's in a row the in bottom row
    if (cells[winningPositions.horizontal.position3[0]].textContent == `O` && 
      cells[winningPositions.horizontal.position3[1]].textContent == `O` && 
      cells[winningPositions.horizontal.position3[2]].textContent == `O`)
    {
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
    if (cells[winningPositions.vertical.position1[0]].textContent == `X` && 
      cells[winningPositions.vertical.position1[1]].textContent == `X` && 
      cells[winningPositions.vertical.position1[2]].textContent == `X`)
    {
      winner = 1
      cells[winningPositions.vertical.position1[0]].classList.add(`winner`)
      cells[winningPositions.vertical.position1[1]].classList.add(`winner`)
      cells[winningPositions.vertical.position1[2]].classList.add(`winner`)
    }
  /************************************************************************************/
    //Very long if statement to detect if player 2 has 3 O's in a row the in the left column (column 1)
    if (cells[winningPositions.vertical.position1[0]].textContent == `O` && 
      cells[winningPositions.vertical.position1[1]].textContent == `O` && 
      cells[winningPositions.vertical.position1[2]].textContent == `O`)
    {
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
    if (cells[winningPositions.vertical.position2[0]].textContent == `X` && 
      cells[winningPositions.vertical.position2[1]].textContent == `X` && 
      cells[winningPositions.vertical.position2[2]].textContent == `X`)
    {
      winner = 1
      cells[winningPositions.vertical.position2[0]].classList.add(`winner`)
      cells[winningPositions.vertical.position2[1]].classList.add(`winner`)
      cells[winningPositions.vertical.position2[2]].classList.add(`winner`)
    }
  /************************************************************************************/
    //Very long if statement to detect if player 2 has 3 O's in a row the in the middle column (column 2)
    if (cells[winningPositions.vertical.position2[0]].textContent == `O` && 
      cells[winningPositions.vertical.position2[1]].textContent == `O` && 
      cells[winningPositions.vertical.position2[2]].textContent == `O`)
    {
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
    if (cells[winningPositions.vertical.position3[0]].textContent == `X` && 
      cells[winningPositions.vertical.position3[1]].textContent == `X` && 
      cells[winningPositions.vertical.position3[2]].textContent == `X`)
    {
      winner = 1
      cells[winningPositions.vertical.position3[0]].classList.add(`winner`)
      cells[winningPositions.vertical.position3[1]].classList.add(`winner`)
      cells[winningPositions.vertical.position3[2]].classList.add(`winner`)
    }
  /************************************************************************************/
    //Very long if statement to detect if player 2 has 3 O's in a row the in the right column (column 3)
    if (cells[winningPositions.vertical.position3[0]].textContent == `O` && 
      cells[winningPositions.vertical.position3[1]].textContent == `O` && 
      cells[winningPositions.vertical.position3[2]].textContent == `O`)
    {
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
    if (cells[winningPositions.diagonal.position1[0]].textContent == `X` && 
      cells[winningPositions.diagonal.position1[1]].textContent == `X` && 
      cells[winningPositions.diagonal.position1[2]].textContent == `X`)
    {
      winner = 1
      cells[winningPositions.diagonal.position1[0]].classList.add(`winner`)
      cells[winningPositions.diagonal.position1[1]].classList.add(`winner`)
      cells[winningPositions.diagonal.position1[2]].classList.add(`winner`)
    }
  /************************************************************************************/
    //Very long if statement to detect if player 2 has 3 O's in a row the in diagonal one (top left to bottom right)
    if (cells[winningPositions.diagonal.position1[0]].textContent == `O` && 
      cells[winningPositions.diagonal.position1[1]].textContent == `O` && 
      cells[winningPositions.diagonal.position1[2]].textContent == `O`)
    {
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
    if (cells[winningPositions.diagonal.position2[0]].textContent == `X` && 
      cells[winningPositions.diagonal.position2[1]].textContent == `X` && 
      cells[winningPositions.diagonal.position2[2]].textContent == `X`)
    {
      winner = 1
      cells[winningPositions.diagonal.position2[0]].classList.add(`winner`)
      cells[winningPositions.diagonal.position2[1]].classList.add(`winner`)
      cells[winningPositions.diagonal.position2[2]].classList.add(`winner`)
    }
  /************************************************************************************/
    //Very long if statement to detect if player 2 has 3 O's in a row the in diagonal two (top right to bottom left)
    if (cells[winningPositions.diagonal.position2[0]].textContent == `O` && 
      cells[winningPositions.diagonal.position2[1]].textContent == `O` && 
      cells[winningPositions.diagonal.position2[2]].textContent == `O`)
    {
      winner = 2
      cells[winningPositions.diagonal.position2[0]].classList.add(`winner`)
      cells[winningPositions.diagonal.position2[1]].classList.add(`winner`)
      cells[winningPositions.diagonal.position2[2]].classList.add(`winner`)
    }
  /************************************************************************************/
  if (winner != 0)
  {
    output = `Player ${winner} won!`
  }
  else
  {
    //Checking whether every cell is filled by updating an array
    let filledCells = [`filled`, ``, ``, ``, ``, ``, ``, ``, ``, ``]
    function updateCellStatus(cellNumber)
    {
      if (cells[cellNumber].textContent != `_`)
      {
        filledCells[cellNumber] = `filled`
      }
    }
    let amountOfFilledCells;
    //Updates each cell's status in the array and checks it's status
    //After this it updates the number of filled cells
    for (let i = 0; i <= cells.length-1; i++)
    {
      updateCellStatus(i)
      if (filledCells[i] == `filled`)
      {
        amountOfFilledCells += 1
      }
    }
    //Checks for draw based on amount of filled cells
    if (amountOfFilledCells >= 8)
    {
      output = `No one won!`
    }
    else if (cells[1].textContent != `_` &&
      cells[2].textContent != `_` &&
      cells[3].textContent != `_` &&
      cells[4].textContent != `_` &&
      cells[5].textContent != `_` &&
      cells[6].textContent != `_` &&
      cells[7].textContent != `_` &&
      cells[8].textContent != `_` &&
      cells[9].textContent != `_`
    )
    {
      output = `No one won!`
    }
    else
    {
      output = ``
    }
  }
  //Outputting winner
  feedback.textContent = `${output}`
}