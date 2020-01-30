function mergeTwoSortedArrays(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n;

    while (i >= 0 || j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            j--;
        } else {
            nums1[k] = nums1[i];
            i--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
}

console.log(mergeTwoSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
