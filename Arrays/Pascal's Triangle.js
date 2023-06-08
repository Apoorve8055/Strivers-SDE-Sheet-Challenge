// Pascal's Triangle

// Time Complexity: O(n²).
// Space Complexity: O(n²).
// generate Pascal's Triangle
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

// other Solution
const pascalRow = (n) => {
  let curr = 1;
  let arr = [];
  arr.push(curr);

  for (let i = 1; i < n; i++) {
    curr = (curr * (n - i)) / i;
    arr.push(curr);
  }

  return arr;
};

const rowOfTriangle = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(pascalRow(i));
  }
  return arr;
};
console.log(rowOfTriangle(5));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// we are given the row number r and the column number c, and we need to find out the element at position (r,c)
const ncr = (n, r) => {
  let result = 1;
  let j = 0;

  for (let i = 1; i <= r; i++) {
    result = result * ((n - j) / i);
    j++;
  }

  return result;
};

const pascalTrianglePosition = (n, r) => {
  return ncr(n, r);
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Given the row number n. Print the n-th row of Pascal’s triangle.

const ncr = (n, r) => {
  let result = 1;
  let j = 0;

  for (let i = 1; i <= r; i++) {
    result = result * ((n - j) / i);
    j++;
  }

  return result;
};

const rowOfTriangle = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(ncr(n - 1, i - 1));
  }
  return arr;
};
console.log(rowOfTriangle(5));

// other Solution
const rowOfTriangle = (n) => {
  let curr = 1;
  let arr = [];
  arr.push(curr);

  for (let i = 1; i < n; i++) {
    curr = (curr * (n - i)) / i;
    arr.push(curr);
  }

  return arr;
};
console.log(rowOfTriangle(5));
