const toChineseNum = (num) => {
    const unit = ['', '十', '百', '千']
    const counts = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']

    // 获取10000以上的部分
    const pre = Math.floor(num / 10000)
    // 获取10000以下的部分
    const next = num % 10000

    // 以4位数字为一组，进行转换, true表示4位数字都有意义，都要解析（适用于万以上数字）
    // false表示头部的零没有意义
    let getfour = (mynum, flag = false) => {
        if(!mynum){return ''}
        let i = 0, str = ''

        while(flag ? i < 4 : mynum > 0 ) {
            var count = mynum % 10
            mynum = Math.floor(mynum / 10)
            if (count > 0) {
                // 当前位不为0的时候，也是最简单的情况，直接取对应的数字+位数即可
                // 因为是从低位开始加，所以加到原来str的前面
                str = counts[count] + unit[i] + str
            } else {
                // 当前位为0的时候，情况有点复杂
                if (str[0] == '零') {
                    // 如果当前位的紧邻低位也是0，则什么都不加
                    str = '' + str
                } else {
                    if (str.length && i) {
                        // str不为空（即从最低位开始，之前有数字不为0）
                        // 或者不是4位数中的最低位
                        str = '零' + str
                    } else {
                        // 当前位是4位数中的第一位（也就是最低位，i=0的情况）
                        // 或者str为空（比如当前为最低位，或者从最低位开始，一直都是0）
                        str = '' + str
                    }
                }
            }
            // 下面是上面复杂判断的一行写法
            // str = (count ? counts[count] + unit[i] : str[0] == '零' ? '' : str.length && i ? '零' : '') + str
            i++
        }
        return str
    }

    return pre ? getfour(pre) + '万' + getfour(next, true) : getfour(num)
}
