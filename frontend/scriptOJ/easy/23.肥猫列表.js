// 现在有很多只猫，都很肥：
//
// const cats = [
//   { name: 'Tom', weight: 300 },
//   { name: 'Lucy', weight: 400 },
//   { name: 'Lily', weight: 700 },
//   { name: 'Jerry', weight: 600 },
//   ...
// ]
// 现在你需要把它们按照由胖到瘦的顺序把它们渲染到 id 为 cats-list 的 div 元素当中：
//
// <div id="cat-list">
//   <div class='cat'>
//     <span class='cat-name'>Lily</span>
//     <span class='cat-weight'>700</span>
//   </div>
//   <div class='cat'>
//     <span class='cat-name'>Jerry</span>
//     <span class='cat-weight'>600</span>
//   </div>
//   <div class='cat'>
//     <span class='cat-name'>Lucy</span>
//     <span class='cat-weight'>400</span>
//   </div>
//   <div class='cat'>
//     <span class='cat-name'>Tom</span>
//     <span class='cat-weight'>300</span>
//   </div>
//   ...
// </div>
// 完成 renderFatCats 函数，接受一个 cats 数组作为参数，然后它会往 div#cats-list 元素内渲染类似以上的结果。
// 注意类名需要保持一致；另外renderFatCats 可能会被多次调用，注意清空上一次渲染的数据。
//
// 你可以使用 jQuery、React.js 等方式来完成。
//
// （你不需要调用 renderFatCats）。

// HTML：<div id="cats-list"></div>

// 一道很好的考察dom的题
function renderFatCats (cats) {
    /* TODO */
    cats.sort((cat1, cat2) => cat2.weight - cat1.weight)
    let catList = document.getElementById('cats-list')
    catList.innerHTML = ''
    let catDiv, catName, catWeight
    cats.map((cat) => {
        catDiv = document.createElement('div')
        catName = document.createElement('span')
        catWeight = document.createElement('span')
        catDiv.classList.add('cat')
        catName.classList.add('cat-name')
        catName.innerText = cat.name
        catWeight.classList.add('cat-weight')
        catWeight.innerText = cat.weight
        catDiv.appendChild(catName)
        catDiv.appendChild(catWeight)
        catList.appendChild(catDiv)
    })
}
