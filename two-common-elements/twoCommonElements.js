function twoCommonElements(arrA, arrB) {
    // Write your code here.
    const arrADict = {};
    const res = [];

    for (const num of arrA) {
        if (num in arrADict) {
            arrADict[num]++;
        }
        arrADict[num] = 1;
    }

    for (const num of arrB) {
        if (num in arrADict) {
            arrADict[num]--;
            if (arrADict[num] < 1) {
                res.push(num);
            }
        }
    }
    return res;
}

module.exports = twoCommonElements;
