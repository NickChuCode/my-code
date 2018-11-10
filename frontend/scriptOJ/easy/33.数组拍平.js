// 编写一个 JavaScript 函数，接受一个仅包含数字的 多维数组 ，返回拍平以后的结果。例如传入：[1, [[2], 3, 4], 5]，返回 [1, 2, 3, 4, 5]。
//
// （本题来源：阿里巴巴前端笔试题）
const flatten = (arr) => {
    var res = []
    function flat(ar) {
        for (var i = 0; i < ar.length; i++) {
            if (Array.isArray(ar[i])) {
                flat(ar[i])
            } else {
                res.push(ar[i])
            }
        }
    }
    // 记得还要调用一次
    flat(arr)
    return res
}