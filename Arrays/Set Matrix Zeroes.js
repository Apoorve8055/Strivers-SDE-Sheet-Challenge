// Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/

const setZeroes = (matrix) => {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;

  const zeroRows = new Set();
  const zeroCols = new Set();

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (zeroRows.has(i) || zeroCols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};
