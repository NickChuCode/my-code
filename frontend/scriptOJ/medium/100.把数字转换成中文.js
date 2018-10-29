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
            count = mynum % 10
            mynum = Math.floor(mynum / 10)
            str = (count ? counts[count] + unit[i] : str[0] == '零' ? '' : str.length && i ? '零' : '') + str
            i++
        }
        return str
    }

    return pre ? getfour(pre) + '万' + getfour(next, true) : getfour(num)
}
