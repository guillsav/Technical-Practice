/*
Transpose Matrix

Given a matrix A, return the transpose of A.
The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

Example 1:

Input: [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Ouput: [
  [1, 4, 7],
	[2, 5, 8],
  [3, 6, 9]`
]
*/

// function tranposeMatrix(A) {
//     const rows = A.length;
//     const cols = A[0].length;
//     const matrix = Array(row)
//         .fill(0)
//         .map(() => Array(cols).fill(0));

//     if (rows === 0) return matrix;

//     for (let i = 0; i < cols; i++) {
//         for (let j = 0; j < rows; j++) {
//             matrix[i][j] = A[j][i];
//         }
//     }
//     return matrix;
// }

function transposeMatrix(matrix) {
  const len = matrix.length

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < Math.floor(len / 2); j++) {
      ;[matrix[i][j], matrix[i][len - 1 - j]] = [
        matrix[i][len - 1 - j],
        matrix[i][j]
      ]
    }
  }

  return matrix
}

const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(transposeMatrix(A))
