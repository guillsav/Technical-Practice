/*
Spiral Matrix

Given a matrix of M x N elements (M rows, n columns), return all elements of the 
matrix in spiral order.

Example 1:

Input :
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
*/

function solution(A) {
    if (A.length === 0) return [];
    const res = [];
    let firstRow = 0;
    let firstCol = 0;
    let rows = A.length - 1;
    let cols = A[0].length - 1;
    while (firstRow <= rows && firstCol <= cols) {
        // Copy from left to right
        for (let i = firstCol; i < cols + 1; i++) {
            res.push(A[firstRow][i]);
        }
        firstRow++;

        // Copy from top right to bottom right.
        for (let i = firstRow; i < rows + 1; i++) {
            res.push(A[i][cols]);
        }
        cols--;

        //  Copy from bottom right to left bottom.
        for (let i = cols; i > firstCol - 1; i--) {
            res.push(A[rows][i]);
        }
        rows--;

        // Copy from bottom left to top left.
        for (let i = rows; i > firstRow - 1; i--) {
            res.push(A[rows][firstCol]);
        }
        firstCol++;
    }
    return res;
}

const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(solution(A));
