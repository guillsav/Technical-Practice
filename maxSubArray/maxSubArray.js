/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
*/

function maxSubArray(nums) {
    let maxSum = 0;
    if (!nums.length) return 0;

    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i - 1] > 0) nums[i] += nums[i - 1];
        maxSum = Math.max(nums[i], maxSum);
    }
    return maxSum;
}

const n = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(n));
