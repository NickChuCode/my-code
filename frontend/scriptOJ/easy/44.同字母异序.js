// 同字母异序指的是两个字符串字母种类和字母的数量相同，但是顺序可能不同。
//
// 完成 isAnagram，接受两个字符串作为参数，返回true 或者 false 表示这两个字符串是否同字母异序。例如：
//
// isAnagram("anagram", "nagaram") // => return true.
// isAnagram("rat", "car") // => return false.

// 字母数量相同，类型相同
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false
    for (var i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) < 0) return false
    }
    return true
}

// 如果需要字母一一对应
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false
    var str = str1.split("")
    var i = 0
    while (str.length > 0) {
        if (str.indexOf(str2[i]) < 0) {
            return false
        } else {
            str.splice(str.indexOf(str2[i]), 1)
            i++
        }
    }
    return true
}
