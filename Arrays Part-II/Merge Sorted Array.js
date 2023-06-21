// Time Complexity: O((m + n) log (m + n))
// Space Complexity: O(1)

var merge = function (nums1, m, nums2, n) {
  if (nums1.length !== m + n) return [];
  if (nums2.length !== n) return [];
  let count = 0;
  for (let i = m; i < m + n; i++) {
    if (nums1[i] === 0) {
      nums1[i] = nums2[count];
      count++;
    }
  }
  nums1.sort((a, b) => a - b);
};

// Time Complexity: O(m + n)
// Space Complexity: O(1)
// Algo: two-pointer approach

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1; // Pointer for nums1
  let p2 = n - 1; // Pointer for nums2
  let p = m + n - 1; // Pointer for merged array

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // If there are remaining elements in nums2, copy them to nums1
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};
