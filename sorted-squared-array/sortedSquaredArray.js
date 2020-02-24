/*
You have a sorted array of integers. Write a function that returns a sorted array containing the square of those integers.
*/

// O(n) time | O(n) space
function sortedSquaredArray(arr) {
  const len = arr.length
  const output = new Array(len).fill(0)

  let left = 0
  let right = len - 1

  for (let i = len - 1; i >= 0; i--) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      output[i] = arr[left] * arr[left]
      left++
    } else {
      output[i] = arr[right] * arr[right]
      right--
    }
  }
  return output
}

nums = [-6, -4, 1, 2, 3, 5]
console.log(sortedSquaredArray(nums))
