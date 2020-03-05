function twoSum(nums, target) {
  const numbers = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in numbers) {
      return [numbers[target - nums[i]], i]
    } else {
      numbers[nums[i]] = i
    }
  }
  return []
}

module.exports = twoSum
