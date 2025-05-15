

const container = document.querySelector('.container-all')

for(let i = 0; i < 16 * 16; i++){ 
  const cell = document.createElement('div')
  container.appendChild(cell)
}

const button = document.createElement('button')
button.addEventListener('click', () => { 
  const input = prompt('How many squares per side? (max 100).')
  const size = parseInt(input)

  if(size > 0 && size <= 100){ 
    createGrid(size)
  } else { 
    alert('Please enter a number between 1 and 100.')
  }
})

document.body.insertBefore(button, container)

function createGrid(size) { 
  container.innerHTML = ''
  const squareSize = 640 / size

  for(let i = 0; i < size * size; i++){ 
    const cell = document.createElement('div')

    cell.style.width = `${squareSize}px`
    cell.style.height = `${squareSize}px`
    cell.style.border = `1px solid black`
    container.appendChild(cell)
  }
}