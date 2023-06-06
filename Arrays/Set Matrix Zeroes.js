// Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/

// Brute Force Approach:
// Time Complexity: O(n * m)
// Space Complexity: O(n + m)
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

// Optimal Approach:
// Time Complexity: O(n * m)
// Space Complexity: O(1)
const setZeroes = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;
  let col0 = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  if (col0 === 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};
