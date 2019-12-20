function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let halfLength = Math.floor(arr.length / 2);
    let left = arr.slice(0, halfLength);
    let right = arr.slice(halfLength);
    return helper(mergeSort(left), mergeSort(right), arr.length);
}

function helper(arrA, arrB, length) {
    const sortedArray = new Array(length);
    let i = (j = k = 0);

    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] <= arrB[j]) {
            sortedArray[k++] = arrA[i++];
        } else {
            sortedArray[k++] = arrB[j++];
        }
    }

    while (i < arrA.length) sortedArray[k++] = arrA[i++];
    while (j < arrB.length) sortedArray[k++] = arrB[j++];
    return sortedArray;
}

module.exports = mergeSort;
