/*
Karl has an array of integers. He wants to reduce the array until all remaining elements are equal. Determine the minimum number of elements to delete to reach his goal.

For example, if his array is arr=[1, 2, 2, 3], we see that he can delete the 2 elements 1 and 3 leaving arr=[2, 2]. He could also delete both twos and either 1 or the 3. But that would take 3 deletions. The minimum number of deletions is 2.
*/

// function equalizeArray(arr) {
//   const len = arr.length
//   const nums = {}
//   const numsValues = []

//   for (let i = 0; i < len; i++) {
//     if (!nums[arr[i]]) nums[arr[i]] = 0
//     else nums[arr[i]]++
//   }

//   for (const [key, val] of Object.entries(nums)) {
//     numsValues.push(val)
//   }

//   const length = numCount.length
//   let maxCount = null

//   for (let i = 0; i < length - 1; i++) {
//     maxCount = Math.max(numsValues[i], numsValues[i + 1])
//   }

//   return len - maxCount
// }

function equalizeArray(arr) {
  const len = arr.length
  const nums = {}

  for (let i = 0; i < len; i++) {
    nums[arr[i]] = (nums[arr[i]] || 0) + 1
  }

  const numsValues = Object.values(nums)
  const maxCount = Math.max(...numsValues)
  return len - maxCount
}

console.log(equalizeArray([1, 2, 2, 3]))
