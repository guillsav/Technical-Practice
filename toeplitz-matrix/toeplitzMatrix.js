/*
Toeplitz Matrix

A matrix is Toelplitz if every diagonal from top-left to bottom-right has the same element. Now  given an M x N matrix, return True if  and only if the matrix is Toeplitz.

Example 1:

Input: 
matrix = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2]
]

Output: True

Explanation:
In the above grid, the diagonals are:

[9], [5, 5], [1, 1, 1], [2, 2, 2], [3, 3], [4]

In each diagonal all elements are the same, so the answer is True.
*/

function solution(A) {
    const rows = A.length - 1;

    for (let i = 0; i < rows; i++) {
        const cols = A[i].length - 1;
        for (let j = 0; j < cols; j++) {
            if (A[i + 1][j + 1] !== A[i][j]) return false;
        }
    }
    return true;
}

const A = [
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
];

console.log(solution(A));
