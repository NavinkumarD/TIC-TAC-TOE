document.addEventListener('DOMContentLoaded', () => {
  const boardElement = document.getElementById('board');
  const cellElements = document.querySelectorAll('.cell');
  const statusElement = document.getElementById('status');
  const restartButton = document.getElementById('restartButton');

  let currentPlayer = 'X';
  let gameActive = true;
  let gameState = ['', '', '', '', '', '', '', '', ''];

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const checkWin = () => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        gameActive = false;
        statusElement.textContent = `${currentPlayer} wins!`;
        statusElement.style.color = currentPlayer === 'X' ? '#ff6347' : '#00ced1'; // Red for X, Blue for O
        animateWin(pattern); // Animate winning cells
        return;
      }
    }

    if (!gameState.includes('')) {
      gameActive = false;
      statusElement.textContent = "It's a draw!";
      statusElement.style.color = '#000080'; // Navy
    }
  };

  const animateWin = (pattern) => {
    for (let index of pattern) {
      cellElements[index].classList.add('win-animation');
    }
  };

  const handleCellClick = (e) => {
    const cell = e.target;
    const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

    if (gameState[cellIndex] !== '' || !gameActive) return;

    gameState[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.style.color = currentPlayer === 'X' ? '#ff6347' : '#00ced1'; // Red for X, Blue for O
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  };

  const handleRestart = () => {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusElement.textContent = '';
    cellElements.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('win-animation');
    });
  };

  cellElements.forEach(cell => cell.addEventListener('click', handleCellClick));
  restartButton.addEventListener('click', handleRestart);
});
