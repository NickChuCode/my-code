// 完成函数 hexToRGB，它的作用将 16 进制颜色值转换成 RGB 值：
//
// hexToRGB('#F0F0F0') // => rgb(240, 240, 240)
// hexToRGB('#9fc') // => rgb(153, 255, 204)
// hexToRGB('无效颜色') // => null

const hexToRGB = (hex) => {
    var reg = /^\#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
    if (!reg.test(hex)) return null
    let h = hex.slice(1)
    const result = []
    if (h.length === 3) h = h.replace(/(.)/g, '$&$&')
    h.replace(/(..)/g, color => result.push(parseInt(color, 16)))
    return `rgb(${result.join(', ')})`
}