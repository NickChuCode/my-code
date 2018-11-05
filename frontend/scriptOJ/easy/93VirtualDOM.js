// 这个题目很大，但题本身很简单，没什么考点
class VNode {
    /* TODO */
    constructor(tagName, props, children=null) {
        this.tagName = tagName
        this.props = props
        this.children = children
    }
}

const h = function (tagName, props, children) {
    var res = new VNode(tagName, props, children)
    return res
}
