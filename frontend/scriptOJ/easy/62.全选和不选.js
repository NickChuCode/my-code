// 现在页面上有很多 checkbox，有一个 id 为 check-all 的 checkbox 表示全选。check-all 的勾选状态和其他的 checkbox 的状态紧密关联：
//
// 勾选了 check-all 表示全部选中其他 checkbox，不勾选 check-all 表示全部不选。
// 在勾选了 check-all 以后，再把其他任意 checkbox 去掉勾选，那么 check-all 也该也去掉勾选，因为已经不是全部选中了。
// 在不勾选 check-all 的情况下，其他的 checkbox 被手动一个个选中了，那么 check-all 也应该被选中。
// 请你完成 initCheckBox 函数，可以初始化上述功能。

// <ul>
//   <li>全选：<input type='checkbox' id='check-all'></li>
//   <li>1 选项 <input type='checkbox' class='check-item'></li>
//   <li>2 选项 <input type='checkbox' class='check-item'></li>
//   <li>3 选项 <input type='checkbox' class='check-item'></li>
//   <li>4 选项 <input type='checkbox' class='check-item'></li>
//   <li>5 选项 <input type='checkbox' class='check-item'></li>
//   <li>6 选项 <input type='checkbox' class='check-item'></li>
// </ul>

// ES6版本
function initCheckBox (checkAll = document.querySelector("#check-all"), options = Array.from(document.querySelectorAll(".check-item"))) {
    /* TODO */
    // 实现勾选check-all，全选其他checkbox，不勾选check-all表示全部不选
    checkAll.addEventListener("change", () => options.forEach((o) => o.checked = checkAll.checked))
    // 在勾选了 check-all 以后，再把其他任意 checkbox 去掉勾选，那么 check-all 也该也去掉勾选，因为已经不是全部选中了。
    // 以及，在不勾选 check-all 的情况下，其他的 checkbox 被手动一个个选中了，那么 check-all 也应该被选中。
    options.forEach((o) => o.addEventListener("change", () => checkAll.checked = options.every((o) => o.checked)))
}