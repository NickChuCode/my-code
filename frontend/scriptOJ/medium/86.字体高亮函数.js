// 请你完成 highlight 函数，可以把模版字符串中的插入内容替换掉，并且插入文档以后显示红色。例如：
//
// const yourName = 'ScriptOJ'
// const myName = 'Jerry'
// document.body.innerHTML = highlight`Hello, ${yourName}. I am ${myName}.`

// /* 你可能需要样式 */
// span {
//   color: red;
// }

// 主要考察了template string的用法，他的用法是很灵活的，作为参数时，可以拆开，
// 而且可以通过拆开后的数组检索到其中的string部分和表达式部分
// 这道题用到了标签模板（深入ES6：P32）
const highlight = (strings, ...values) => {
    var res = ""
    for (var i = 0; i < values.length; i++) {
        res += strings[i] + `<span>${values[i]}</span>`
    }
    return res
}
