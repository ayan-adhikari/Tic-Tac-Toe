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
//Variable for player
let player = 1
//Function that runs after cell is clicked
function cellClicked(cell)
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
  }
}