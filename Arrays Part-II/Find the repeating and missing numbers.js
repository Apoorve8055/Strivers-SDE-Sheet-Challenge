// Time Complexity: O(n)
// Space Complexity: O(1)

const missingNumber = (nums) => {
  const n = nums.length;
  let repeatedNum;

  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]);
    if (nums[index] < 0) {
      repeatedNum = index;
    } else {
      nums[index] = -nums[index];
    }
  }

  const sumOfTn = (n * (n + 1)) / 2;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);
    if (count < 1 && repeatedNum === num) {
      count++;
    } else {
      sum += num;
    }
  }

  return [repeatedNum, sumOfTn - sum];
};

// Time Complexity: O(n)
// Space Complexity: O(1)
function missingAndRepeating(arr) {
  let a, b;

  for (let i = 0; i < arr.length; i++) {
    if (arr[Math.abs(arr[i]) - 1] < 0) {
      a = Math.abs(arr[i]);
    } else {
      arr[Math.abs(arr[i]) - 1] = -arr[Math.abs(arr[i]) - 1];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      b = i + 1;
      break;
    }
  }

  return [a, b];
}
console.log(missingNumber([3, 1, 2, 5, 4, 6, 7, 5]));
