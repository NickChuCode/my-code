Array.prototype.uniq = function () {
    var res = []
    var flag = false
    for (var i = 0; i < this.length; i++) {
        if (res.indexOf(this[i]) < 0) {
            // 数组去重需要考虑NaN的情况，因为NaN === NaN为false
            if (this[i] !== this[i]){
                if (!flag) {
                    res.push(this[i])
                }
                flag = true
            } else {
                res.push(this[i])
            }
        }
    }
    return res
}

// ES6的写法
// Array.prototype.uniq = function () {
//     return [...new Set(this)]
// }

