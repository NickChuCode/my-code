// 设计一个链表，实现常用方法，这里是单链表，双链表类似，在node中加一个prev属性即可，此外，这个链表使用了虚拟头节点
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = new Node("head")
    this.length = 0
};

var Node = function(val) {
    this.val = val
    this.next = null
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (typeof index !== 'number' || this.length === 0 || index >= this.length) return -1
    var res = this.head.next
    var i = 0

    while (i < index) {
        res = res.next
        i++
    }
    return res.val
};

MyLinkedList.prototype.getNode = function(index) {
    if (typeof index !== 'number' || this.length === 0 || index >= this.length) return -1
    var res = this.head.next
    var i = 0

    while (i < index) {
        res = res.next
        i++
    }
    return res
};

MyLinkedList.prototype.toString = function() {
    var res = 'head => '
    var cur = this.head.next
    while (cur !== null) {
        res = res + cur.val + " => "
        cur = cur.next
    }
    return res
}
/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var newNode = new Node(val)
    if (this.length === 0) {
        this.head.next = newNode
    } else {
        var firstNode = this.head.next
        this.head.next = newNode
        newNode.next = firstNode
    }
    this.length++
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var newNode = new Node(val)
    if (this.length === 0) {
        this.head.next = newNode
    } else {
        var tailNode = this.getNode(this.length - 1)
        tailNode.next = newNode
    }
    this.length++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === this.length) {
        this.addAtTail(val)
    } else if (index > this.length) {
        return
    } else if (index === 0) {
        this.addAtHead(val)
    } else {
        var oldBNode = this.getNode(index -1)
        var oldANode = this.getNode(index)
        var node = new Node(val)
        oldBNode.next = node
        node.next = oldANode
        this.length++
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.length || index < 0) return
    if (index === 0) {
        var deleteANode = this.head.next.next
        this.head.next = deleteANode
        this.length--
    } else {
        var deleteNode = this.getNode(index)
        var deleteANode = this.getNode(index + 1)
        var deleteBNode = this.getNode(index - 1)
        deleteBNode.next = deleteANode
        this.length--
    }

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
