// 页面上有这么一个列表：
//
// <ul id='adjustable-list'>
//   <li>
//     <span>1</span>
//     <button class='up'>UP</button>
//     <button class='down'>DOWN</button>
//   </li>
//   <li>
//     <span>2</span>
//     <button class='up'>UP</button>
//     <button class='down'>DOWN</button>
//   </li>
//   <li>
//     <span>3</span>
//     <button class='up'>UP</button>
//     <button class='down'>DOWN</button>
//   </li>
//   ...
// </ul>
// 点击 UP 按钮会使得该 li 元素在列表中上升一个位置，点击 DOWN 按钮会使得该 li 元素下降一个位置。点击最后的元素的 DOWN 按钮会使得元素回到第一个位置，点击第一个元素的 UP 按钮会使其回到最后的位置。
//
// 页面上已经存在该列表，你只需要完成 initAdjustableList() 函数，给元素添加事件。
// 这道题考察的很全面，把dom的很多操作都用了
const initAdjustableList = function() {
    let ul = document.querySelector("#adjustable-list")
    ul.addEventListener('click', upOrDown)
    function upOrDown(e) {
        // 是为了更好的兼容IE浏览器和非ie浏览器。
        // 在ie浏览器中,window.event是全局变量,
        // 在非ie中，就需要自己传入一个参数来获取event，所以就有了var e = e||window.event
        let event = e || window.event
        let target = event.target
        target.classList.contains("up") ? up() : ''
        target.classList.contains("down") ? down() : ''
        function up() {
            let liNode = target.parentElement
            // insertBefore的第二个参数如果是null，则将liNode插入ul的最后
            ul.insertBefore(liNode, liNode.previousElementSibling)
        }
        function down() {
            let liNode = target.parentElement
            let nextNode = liNode.nextElementSibling
            liNode === ul.lastElementChild ? ul.insertBefore(liNode, ul.firstElementChild) : ul.insertBefore(nextNode, liNode)
        }
    }
}