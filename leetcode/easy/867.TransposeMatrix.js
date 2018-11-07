// Given a matrix A, return the transpose of A.
//
// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.
//
//
//
// Example 1:
//
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    var row = A.length
    var col = A[0].length
    var res = new Array(col)
    // 原来这里用 var res = new Array(col).fill(new Array(row).fill(0))
    // 发现fill是将一个Array(row)同时赋值给Array(col)，
    // 导致改一个，其他的也会变，所以改成循环，每次new一个新的Array
    for (var k = 0; k < res.length; k++) {
        res[k] = new Array(row).fill(0)
    }
    for(var i = 0; i < A.length; i++) {
        for (var j = 0; j < A[0].length; j++) {
            res[j][i] = A[i][j]
        }
    }
    return res
};
