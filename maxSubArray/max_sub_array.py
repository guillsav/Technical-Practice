"""
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
"""

def max_sub_array(nums) -> int:
    max_sum = 0
    length = len(nums)
    if length == 0:
        return 0;
    for i in range(0, length):
        if nums[i - 1] > 0:
            nums[i] += nums[i - 1]
        max_sum = max(nums[i], max_sum)

    return max_sum


n = [-2,1,-3,4,-1,2,1,-5,4]
print(max_sub_array(n))