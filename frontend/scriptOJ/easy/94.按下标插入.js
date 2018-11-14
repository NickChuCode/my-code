// 现在有一个数组存放字符串数据：
//
// ['item1', 'item2', 'item3', 'item4', 'item5']
// 有另外一个数组存放一组对象：
//
// [
//   { content: 'section1', index: 0 },
//   { content: 'section2', index: 2 }
// ]
// 它每个对象表示的是会往原来的数组的 index 坐标插入 content 数据（index 不会重复）：
//
//        0      1      2      3      4
//      item1  itme2  item3  item4  item5
//     ^             ^
//     |             |
//  section1     section2
//
// 最后结果是：['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']
// 请你完成 injectSections 函数，可以达到上述的功能：
//
// injectSections(
//   ['item1', 'item2', 'item3', 'item4', 'item5'],
//   [
//     { content: 'section1', index: 0 },
//     { content: 'section2', index: 2 }
//   ]
// ) // => ['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']

const injectSections = (items, sections) => {
    // 因为插入会改变原来的数组，所以先将sections倒排序，先插后面的，就不会影响前面的插入了
    sections.sort((x, y) => y.index - x.index)
    sections.forEach((item) => {
        items.splice(item.index, 0, item.content)
    })
    return items
}