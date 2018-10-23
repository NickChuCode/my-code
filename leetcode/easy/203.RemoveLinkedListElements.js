/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // 如果链表为空时
    if (!head) return head

    // 如果链表长度为1时
    if (head.next === null) {
        if (head.val === val) {
            return []
        } else {
            return head
        }
    }

    // 如果链表头部符合删除规则时
    while (head.val === val) {
        head = head.next
        if (!head) return head
    }

    // 遍历链表，寻找符合删除规则的节点
    var prev = head
    var cur = head.next
    while (cur !== null) {
        if (cur.val === val) {
            cur = cur.next
            prev.next = cur
        } else {
            prev = cur
            cur = cur.next
        }
    }
    return head
};
