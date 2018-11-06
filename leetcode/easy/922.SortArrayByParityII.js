// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
//
// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
//
// You may return any answer array that satisfies this condition.
//
//
//
// Example 1:
//
// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
/**
 * @param {Array} A
 * @return {Array}
 */
var sortArrayByParityII = function(A) {
    var even = []
    var odd = []
    for (var i = 0; i < A.length; i++) {
        if (isEven(A[i]) && !isEven(i)) {
            even.push(i)
        } else if (isOdd(A[i]) && !isOdd(i)) {
            odd.push(i)
        }
    }
    for (var j = 0; j < even.length; j++) {
        swap(A, even[j], odd[j])
    }
    return A
};

function swap(arr, i, j) {
    var tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

function isEven(num) {
    return num % 2 === 0
}

function isOdd(num) {
    return !isEven(num)
}
