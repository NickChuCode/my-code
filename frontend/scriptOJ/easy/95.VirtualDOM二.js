// 在 Virtual DOM 的基础上给 VNode 类添加 render 方法，render 方法把一个虚拟的 DOM 节点渲染成真正的 DOM 节点，例如：
//
// const ul = h('ul', {id: 'list', style: 'color: red'}, [
//   h('li', {class: 'item'}, ['Item 1']),
//   h('li', {class: 'item'}, ['Item 2']),
//   h('li', {class: 'item'}, ['Item 3'])
// ]
//
// const urlDom = ul.render() // 渲染 DOM 节点和它的子节点
// ulDom.getAttribute('id') === 'list' // true
// ulDom.querySelectorAll('li').length === 3 // true

// 这个才是virtual dom (#93)的完整版
class VNode {
    /* TODO */
    constructor(tagName, props, children=null) {
        this.tagName = tagName
        this.props = props
        this.children = children
    }
    render() {
        const dom = document.createElement(this.tagName)
        if (this.props) {
            const props = Object.keys(this.props)
            props.forEach((prop) => {
                dom.setAttribute(prop, this.props[prop])
            })
        }
        if (this.children) {
            this.children.forEach((child) => {
                dom.appendChild(child instanceof VNode ? child.render() : document.createTextNode(child))
            })
        }
        return dom
    }
}

const h = function (tagName, props, children) {
    var res = new VNode(tagName, props, children)
    return res
}