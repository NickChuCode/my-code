// 完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。

// 例如，输入 emoji.png，返回 .png。

// 普通版本
const extname = (filename) => {
  /* TODO */
  var index = filename.lastIndexOf(".")
  if (index <= 0) {
    return ""
  } else {
    return filename.substring(index)
  }
}

// 正则表达式版本
