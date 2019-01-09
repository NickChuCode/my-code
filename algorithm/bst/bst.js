function Node(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
}

function BST() {
  this.root = null
  this.size = 0
}

BST.prototype.add = function (data) {
  this.root = _add(this.root, data)
}

function _add(node, data) {
  if (node === null) {
    return new Node(data, null, null)
  }

  if (node.data > data) {
    node.left = _add(node.left, data)
  } else if (node.data < data) {
    node.right = _add(node.right, data)
  }

  return node
}

var testData = [3, 4, 5, 9, 1, 2]

var bst = new BST()

for (var i = 0; i < testData.length; i++) {
  bst.add(testData[i])
}