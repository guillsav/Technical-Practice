/*
Missing Ranges

Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

Example:

Input: nums = [0, 1, 3, 50,75], lower = 0 and upper = 99

Output: ["2", "4->49", "51->74", "76->99"]
*/

function missingRanges(nums, lower, upper) {
    // const res = [lower - 1, ...nums, upper + 1];
    const res = [];
    let prev = lower - 1;
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        let curr = i === len ? upper : nums[i];
        if (curr - prev >= 2) {
            if (prev + 1 === curr - 1) {
                res.push(`${prev + 1}`);
            } else {
                res.push(`${prev + 1}->${curr - 1}`);
            }
        }
        prev = curr;
    }
    return res;
}

console.log(missingRanges([0, 1, 3, 50, 75], 0, 99));
