// 完成 getChildAttributes 函数，它接受一个 DOM 元素作为参数和一个属性名作为参数，你需要返回这个 DOM 的 直接 子元素的特定属性列表。例如：
//
// <ul id='list'>
//   <li data-name="Jerry" class="item"><span>1</span></li>
//   <li data-name="Lucy" class="item"><span>2</span></li>
//   <li data-name="Tomy"><span>3</span></li>
// </ul>
// getChildAttributes(el, 'data-name') // => ['Jerry', 'Lucy', 'Tomy']
// getChildAttributes(el, 'class') // => ['item', 'item', null]
// 只需要完成 getChildAttributes 的编写。
const getChildAttributes = (el, attr) => {
    // children和childNodes属性的区别在于，
    // childNodes属性包括元素节点和文本节点,
    // 而children只包括元素节点
    var children = Array.prototype.slice.call(el.children)
    return children.map((item) => {
        return item.getAttribute(attr)
    })
}

// 另一个版本
const getChildAttributes = (el, attr) => {
    // 将array like的object转换为array有两种方法，
    // 一种是Array.prototype.slice.call
    // 一种是[...el.children]
    var children = [...el.children]
    return children.map((item) => {
        return item.getAttribute(attr)
    })
}