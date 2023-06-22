// Time Complexity: O(n)
// Space Complexity: O(1)

const findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (nums[num] < 0) {
      return num;
    } else {
      nums[num] = -nums[num];
    }
  }
};
