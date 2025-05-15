

const container = document.querySelector('.container-all')

let gridUnlocked = false

const buttonContainer = document.createElement('div')
buttonContainer.class = 'button-container'

const button = document.createElement('button')
button.className = 'button'
button.textContent = 'Add More Boxes'

buttonContainer.appendChild(button)

button.addEventListener('click', () => { 
  const input = prompt('How many squares per side? (max 100).')
  const size = parseInt(input)

  if(size > 0 && size <= 100){ 
    createGrid(size)
  } else { 
    alert('Please enter a number between 1 and 1000.')
  }
})


const divButton = document.createElement('div')
divButton.className = 'button-container'
document.body.insertBefore(divButton, container)


const buttonRefresh = document.createElement('button')
buttonRefresh.textContent = 'Refresh'
buttonRefresh.className = 'button-2'

buttonRefresh.addEventListener('click', () => { 
  const allBoxes = document.querySelectorAll('.container-all div')
  allBoxes.forEach((box) => { 
    box.style.backgroundColor = 'white'
    gridUnlocked = false
  })
})

divButton.append(button, buttonRefresh)

function createGrid(size) { 
  container.innerHTML = ''
  const squareSize = 640 / size

  for(let i = 0; i < size * size; i++){ 
    const cell = document.createElement('div')

    cell.style.width = `${squareSize}px`
    cell.style.height = `${squareSize}px`
    cell.style.border = `1px solid black`

    cell.dataset.activated = 'false'

    cell.addEventListener('click', () => {
      gridUnlocked = !gridUnlocked
    })

    cell.addEventListener('mouseover', () => {
      if(gridUnlocked) { 
        cell.style.backgroundColor = 'black';
      }
    });

    container.appendChild(cell)
  }

}
createGrid(16)