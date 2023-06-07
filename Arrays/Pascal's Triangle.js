// Pascal's Triangle

// Time Complexity: O(n²).
// Space Complexity: O(n²).

const generate = (numRows) => {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    let subArray = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || i === j) {
        subArray.push(1);
      } else {
        subArray.push(arr[i - 1][j - 1] + arr[i - 1][j]);
      }
    }
    arr.push(subArray);
  }
  return arr;
};
