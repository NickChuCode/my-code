// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
//
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
//
// Return a list of all uncommon words.
//
// You may return the list in any order.
//
//
//
// Example 1:
//
// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var res = []
    A = A.split(" ")
    B = B.split(" ")
    for (var i = 0; i < A.length; i++) {
        if (B.indexOf(A[i]) < 0 && A.indexOf(A[i]) === A.lastIndexOf(A[i])) {
            res.push(A[i])
        }
    }
    for (var j = 0; j < B.length; j++) {
        if (A.indexOf(B[j]) < 0 && B.indexOf(B[j]) === B.lastIndexOf(B[j])) {
            res.push(B[j])
        }
    }
    return res
};
