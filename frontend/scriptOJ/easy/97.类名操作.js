// 完成几个 DOM 元素类名操作的工具方法：
//
// addClass(dom, name)：给 dom 元素添加类名 name
// removeClass(dom, name)：把 dom 元素的类名 name 删除
// hasClass(dom, name)：判断 dom 元素是否有类名 name

const addClass = (dom, name) => {
    dom.classList.add(name)
}
const removeClass = (dom, name) => {
    dom.classList.remove(name)
}
const hasClass = (dom, name) => {
    return dom.classList.contains(name)
}