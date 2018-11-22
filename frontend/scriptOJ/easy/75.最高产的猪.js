// 我们用一个 HTML 结构来表示一头猪的子子孙孙：
//
// <div class="pig">
//   <div class="pig">
//     <div class="pig">
//       <div class="pig"></div>
//     </div>
//     <div class="pig">
//       <div class="pig"></div>
//     </div>
//     <div class="pig">
//       <div class="pig"></div>
//     </div>
//   </div>
//   <div class="pig">
//     <div class="pig"></div>
//     <div class="pig"></div>
//   </div>
//   <div class="pig">
//     <div class="pig">
//       <div class="pig"></div>
//       <div class="pig"></div>
//       <div class="pig"></div>
//       <div class="pig"></div>
//       <div class="pig"></div>
//     </div>
//   </div>
// </div>
// 每个 DOM 节点都是一头猪，子节点就是这头猪的孩子。
//
// 请你完成一个函数 findMostProductivePigChildrenCount 它接受一个 DOM 节点作为参数，返回一个数组。存放同代猪最高产的猪的孩子的数量。例如：
//
// 1:          o
// 2:    o     o     o
// 3:  o o o  o o    o
// 4:  o o o       ooooo
// 上面的结果是 [3, 3, 5, 0]，解释如下：
//
// 第一代猪有三个孩子，所以数组第一项是 3。
//
// 第二代的三头猪中，第一头猪生了 3 个，第二头猪生了 2 个，第三头猪生了 1 个。最高产的是第一头猪，它的孩子数是 3，所以数组第二项为 3。
//
// 第三代的前三头猪都有一个后代，中间两头猪绝后，而最后一头猪惊人地生出了 5 头猪。这一代最高产的猪的孩子数是 5，所以数组项是 5。
//
// 最后一代无后，所以是 0。

const findMostProductivePigChildrenCount = (dom) => {
    /* TODO */
    var res = [dom.children.length]
    var curs = [...dom.children]
    while (curs.length) {
        var c = []
        res.push(Math.max(...curs.map((node) => node.children.length)))
        curs.forEach((node) => {
            c.push(...node.children)
        })
        curs = c
    }
    return res
}