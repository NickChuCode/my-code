// Count the number of prime numbers less than a non-negative number, n.
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {

    function isPrime(num) {
        if (num === 1) {
            return false
        } else if (num === 2 || num === 3) {
            return true
        } else {
            // 注意，素数的判断方法，开根号，根号以下不能整除，就不可能整除了
            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false
                }
            }
            return true
        }
    }

    var count = 0
    for (var i = 1; i < n; i++) {
        if (isPrime(i)) {
            count++
        }
    }
    return count
};
