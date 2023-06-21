// Time Complexity: O(n log n)
// Space Complexity: O(n)

const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let previousInterval = intervals[0];
  let merged = [previousInterval];

  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];

    if (currentInterval[0] <= previousInterval[1]) {
      previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
    } else {
      merged.push(currentInterval);
      previousInterval = currentInterval;
    }
  }

  return merged;
};
