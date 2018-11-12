// Max Howell 参加了谷歌的面试，出题人竟然要求 Max Howell 在白板上作出解答，Max Howell 当然愤怒地拒绝了，回家以后马上在微博上跟我们分享他的吐槽：
//
// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
//
// 看来在白板上作出反转二叉树的解答并不容易呢？那么在 ScriptOJ 有上 OJ 系统会不会更方便一些呢？
//
// 假如有这样一个二叉树，
//
//           4
//         /   \
//       3      2
//     /  \    / \
//   7     1  2   3
//  / \   /
// 6   5 9
// 使用广度优先的原则用数组的表示就是 [4, 3, 2, 7, 1, 2, 3, 6, 5, 9, null, null, null, null, null]，二叉树中的空位用 null 表示。
//
// 进行反转以后会变成
//
//           4
//         /   \
//       2      3
//     /  \    /  \
//   3     2  1     7
//             \   /  \
//              9 5    6
// 使用广度优先的原则用数组的表示就是 [4, 2, 3, 3, 2, 1, 7, null, null, null, null, null, 9, 5, 6]。
//
// 请实现函数 invertTree，它接受一个表示二叉树的数组，返回表示这个反转二叉树的数组。
//
// 请注意，提交后提示中显示的 1,2,3,,,4,5 表示的是 1, 2, 3, null, null, 4, 5。


// 这是用数组实现的tree的循环遍历版本，指针版本的在leetcode的226中
const invertTree = (tree) => {
    /* TODO */
    if (!Array.isArray(tree) || tree.length <= 1) {
        return tree
    }
    let res = []
    let queue = [0]
    while (queue.length > 0) {
        let nodeIdx = queue.shift()
        res.push(tree[nodeIdx])
        let left = 2 * nodeIdx + 1
        let right = 2 * nodeIdx + 2
        if (right < tree.length) {
            queue.push(right)
        }
        if (left < tree.length) {
            queue.push(left)
        }
    }
    return res
}