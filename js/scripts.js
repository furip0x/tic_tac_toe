const welcomeSection = document.getElementById('welcome-section')
const choosePlayerBtn = document.querySelector('.choose-player__btn')
const restartBtn = document.querySelector('.restart-btn')
const grid = document.getElementById('grid')
const gridItems = grid.querySelectorAll('.grid__item')

const startGame = (() => {
  const welcomeSection = document.getElementById('welcome-section')
  const choosePlayerBtn = document.querySelector('.choose-player__btn')
  const grid = document.getElementById('grid')
  const gridItems = grid.querySelectorAll('.grid__item')

  const gameBoard = new Array(9)

  choosePlayerBtn.addEventListener('click', () => {
    welcomeSection.classList.add('hidden')
    grid.classList.remove('hidden')
  })

  // Creates players
  const player = (name, mark, turn) => {
    return {
      name,
      mark,
      turn
    }
  }

  const player1 = player('player 1', 'X', true)
  const player2 = player('Player 2', 'O', false)

  const winCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [0, 4, 8]
  ]

  const winner = null
  const turns = 0
  const board = []
  const winnerCombo = []

  const playerTurn = (() => {
    gridItems.forEach(grid => {
      grid.addEventListener('click', (e) => {
        if (player1.turn === true && grid.textContent === '') {
          board[e.target.id] = player1.mark
          grid.textContent = player1.mark
          grid.style.color = '#f1cd78'
          player1.turn = false
          player2.turn = true
          if (gameEnd()) restartBtn.classList.remove('hidden')
        } else if (player2.turn === true & grid.textContent === '') {
          board[e.target.id] = player2.mark
          grid.textContent = player2.mark
          grid.style.color = '#b82058'
          player2.turn = false
          player1.turn = true
          if (gameEnd()) restartBtn.classList.remove('hidden')
        }
      })
    })
  })()

  const gameEnd = () => {
    const gridItemsArray = Array.from(gridItems);
    return gridItemsArray.every(elem => elem.textContent !== '')
  }
})()
