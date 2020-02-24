function firstDuplicate(arr) {
  const len = arr.length
  const nums = {}
  for (let i = 0; i < len; i++) {
    if (nums[arr[i]]) {
      nums[arr[i]] = i
    } else {
      nums[arr[i]] = true
    }
  }
  console.log(nums)
}

const nums = [1, 2, 1, 2, 3, 3]
console.log(firstDuplicate(nums))
