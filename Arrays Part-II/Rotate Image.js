// Time Complexity: O(n^2)
// Space Complexity: O(1)

const rotate = (matrix) => {
  const n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
  }

  // Reverse each row of the matrix
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};
