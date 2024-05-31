# TIC-TAC-TOE
This repository contains files for simple, childish looking, aestical tic tac toe game build using HTML, CSS, Javascript. The HTML is used for structure and the CSS is used for styling the HTML programs and the Javascript is used for user-friendily interactivity for the game, all these files combines to give a simple yet compelling to play tic tac toe game. The description about each files are described below: -

The HTML file (index.html): contains the Tic Tac Toe game's structure. HTML elements such as '<div>' are used to design the layout of the game board, cells, status message, and restart button. It points to an external CSS file ('style.css') for styling and an external JavaScript file ('script.js') for functionality. The game board is made up of nine cells in a 3x3 grid configuration. Each cell has a unique 'data-cell-index' feature that identifies its position in the game.

CSS (style.css): Contains Tic Tac Toe game styles, such as fonts, colors, layout, and animations.It makes the game board, cells, title, status message, and restart button more visually appealing and fun.It creates animations for the victorious cells to emphasize their victory.

Javascript (script.js): This file contains the logic for the Tic Tac Toe game, which includes handling player moves, win conditions, and game state management. It begins by picking items from the HTML file, such as the game board, cells, status message, and restart button. It initializes variables to keep track of the current player, game state, and victory patterns. The 'checkWin' method iterates through victory patterns to determine whether a player has won or the game is tied. When a cell is clicked, the 'handleCellClick' function updates the game state, displays the player's symbol ('X' or 'O'), and verifies if the game is won or drawn. When the restart button is pressed, the 'handleRestart' method resets the game, clears the board, and eliminates any win animations. Event listeners are added to the cells and restart button, triggering the associated functions when clicked. 

