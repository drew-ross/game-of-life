/* Rules
1. Any live cell with fewer than two live neighbors dies
2. Any live cell with more than three live neighbours dies
3. Any live cell with two or three live neighbours lives, unchanged, to the next generation.
4. Any dead cell with exactly three live neighbours will come to life. */

export const calculateCells = (cells) => {
  const newCells = cells.map((row, rowI) => {
    return row.map((cell, colI) => {
      const near = [
        cells[rowI][colI - 1],
        cells[rowI][colI + 1],
      ];

      if (cells[rowI - 1]) {
        near.push(
          cells[rowI - 1][colI - 1],
          cells[rowI - 1][colI],
          cells[rowI - 1][colI + 1]
        );
      };

      if (cells[rowI + 1]) {
        near.push(
          cells[rowI + 1][colI - 1],
          cells[rowI + 1][colI],
          cells[rowI + 1][colI + 1],
        );
      };

      let alive = 0;
      near.forEach(n => n ? alive += 1 : null);

      if (!cell && alive === 3) {
        cell = true;
      }
      else if (cell && (alive < 2 || alive > 3)) {
        cell = false;
      }

      return cell;
    });
  });
  return newCells;
};