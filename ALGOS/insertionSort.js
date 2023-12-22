/* 
  - Visualization with playing cards (scroll down):
      https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - Array / bar visualization:
      https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
  - Stable sort, efficient for small data sets or mostly sorted data sets.
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  - this sort splits the array into two portions (conceptually, not literally).
  - the left portion will become sorted, the right portion
      (that hasn't been iterated over yet) is unsorted.
  can shift OR swap target element until it reaches desired position

  PSEUDOCODE
  1. Cosnider the first element as sorted (the only element in the sorted sub-array)
  2. Create a for loop that starts at index 1.
  3. Store the current element in a variable (temp)
  4. Create a pointer to the leftIdx (i-1)
  5. Create a while Loop - think about the conditions 
  6. inside the while loop, shift to the right
  7. after while loop, insert save element (temp)


*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = [2, 3, 9, 5, 1, 6];
const expectedArr1 = [1, 2, 3, 5, 6, 9];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    // store the current
    const current = nums[i];
    // store the leftIdx
    let leftIdx = i - 1;

    // while loop
    // while current is less than val at leftIdx
    // and while we are in bounds
    while (leftIdx >= 0 && current < nums[leftIdx]) {
      // shift to the right
      nums[leftIdx + 1] = nums[leftIdx];
      leftIdx--;
    }
    console.log("the left index value is:", leftIdx);
    console.log("i value is:", i);
    nums[leftIdx + 1] = current;
  }
  return nums;
}

console.log(insertionSort(arr1));
