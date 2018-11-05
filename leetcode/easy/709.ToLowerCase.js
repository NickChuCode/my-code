// Implement function ToLowerCase() that has a string parameter str,
// and returns the same string in lowercase.
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var res = []
    for (var i = 0; i < str.length; i++) {
        res.push(str[i].toLowerCase())
    }
    return res.join("")
};

