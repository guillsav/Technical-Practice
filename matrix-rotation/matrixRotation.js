/*
Matrix Rotation

You are given a 2D matrix of dimension and a positive integer. You have to rotate the matrix times and print the resultant matrix.
Rotation should be in anti-clockwise direction.

Rotation of a matrix is represented by the following figure.
Note that in one rotation, you have to shilft elements by one step only.

Start       First        Second
1 2 3 4     2 3 4  5     3  4  5  6
12 1 2 5 -> 1 2 3  6  -> 2  3  4  7
11 4 3 6    12 1  4 7    1  2  1  8
10 9 8 7    11 10 9 8    12 11 10 9
*/

// Sam Solution.
// function solution(A, n) {
//     for (let i = 0; i < n; i++) {
//         helper2(A);
//     }
//     return A;
// }

// function helper2(A) {
//     // Your code goes here.
//     let endRow = A.length;
//     let endCol = A[0].length;
//     let startRow = 0;
//     let startCol = 0;

//     while (startRow <= endRow && startCol <= endCol) {
//         helper(A, startCol, endCol, startRow, endRow);
//         startCol++;
//         endCol--;
//         startRow++;
//         endRow--;
//     }
// }

// function helper(A, startCol, endCol, startRow, endRow) {
//     const res = [];

//     for (let i = startCol; i < endCol; i++) {
//         res.push(A[startRow][i]);
//     }

//     for (let i = startRow + 1; i < endRow; i++) {
//         res.push(A[i][endCol - 1]);
//     }

//     for (let i = endCol - 2; i >= startCol; i--) {
//         res.push(A[endRow - 1][i]);
//     }

//     for (let i = endRow - 2; i > startRow; i--) {
//         res.push(A[i][startCol]);
//     }

//     let count = 1;

//     for (let i = startCol; i < endCol; i++) {
//         A[startRow][i] = res[count];
//         count++;
//     }

//     for (let i = startRow + 1; i < endRow; i++) {
//         A[i][endCol - 1] = res[count];
//         count++;
//     }

//     for (let i = endCol - 2; i >= startCol; i--) {
//         if (count === res.length) {
//             count = 0;
//             A[endRow - 1][i] = res[count];
//         } else {
//             A[endRow - 1][i] = res[count];
//             count++;
//         }
//     }

//     for (let i = endRow - 2; i > startRow; i--) {
//         A[i][startCol] = res[count];
//         if (count === res.length - 1) {
//             count = 0;
//         } else {
//             count++;
//         }
//     }
// }

function solution(A, n) {
    while (n > 0) {
        let row = (col = 0);
        let nRow = A.length - 1;
        let nCol = A[0].length - 1;

        while (row <= nRow && col <= nCol) {
            let bottomLeft = A[nRow][col];
            let bottomRight = A[nRow][nCol];
            let topRight = A[row][nCol];

            // Move left
            for (let i = nRow; i > row; i--) {
                A[i][col] = A[i - 1][col];
                row--;
            }

            // Move Bottom
            for (let j = nCol; i > col; j--) {
                A[nRow][j] = A[nRow][j - 1];
                col++;
            }

            // Move right
            for (let j = row; i > nRow; j++) {
                A[j][nCol] = A[j + 1][nCol];
                nRow--;
            }

            // Move top
            for (let i = col; i > nCol; i++) {
                A[row][i] = A[row][i + 1];
                nCol--;
            }

            A[nRow][col + 1] = bottomLeft;
            A[nRow - 1][nCol] = bottomRight;
            A[row][nCol - 1] = topRight;
        }
    }
    n--;
    return A;
}
const A = [
    [1, 2, 3, 4],
    [12, 1, 2, 5],
    [11, 4, 3, 6],
    [10, 9, 8, 7]
];

console.log(solution(A, 2));
