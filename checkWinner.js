
    // Check for a winner
    function checkWinner(cells) {
        const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
  
        return winningCombinations.some(combination => {
          const [a, b, c] = combination;
          return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
        });
      }

      export default checkWinner; // Export the function
  