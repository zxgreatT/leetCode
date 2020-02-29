// 206链表反转
function ListNode(val){
    this.val = val
    this.next = null
}
// 指针方法
let reverseList = function(head) {
    if(!head)
        return null
    let pre = null
    let cur = head
    while(cur) {
        let tempNext = cur.next
        cur.next = pre
        pre = cur
        cur = tempNext
    }
    return pre
}
// 递归方法
let reverseList = function(head) {
    if(!head)
        return null
    let zhihuan = function(pre, cur) {
        if(!cur)
            return pre
        let temp = cur.next
        cur.next = pre
        return zhihuan(cur, temp)
    } 
    return zhihuan(null, head)  
}

// 92 链表区间反转 
/**
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
   输出: 1->4->3->2->5->NULL
 */
var reverseBetween = function(head, m, n) {
    if(!head || m > n)
        return null
    let p = q = new ListNode()
    let front, pre, tail
    p.next = head
    const count = n -m
    let i = 0
    while(i < m - 1) {
        p = p.next
        i++
    }
    front = p
    pre = tail = p.next
    cur = pre.next
    for(let i = 0;i<count;i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    tail.next = cur
    front.next = pre
    return q.next
}

// 24 两个一组反转链表
var swapPairs = function(head) {
    if(head == null || head.next == null) {
        return head
    }
    let dummyHead = p = new ListNode()
    let node1,node2
    dummyHead.next = head
    while((node1 = p.next) && (node2 = p.next.next)) {
        node1.next = node2.next
        node2.next = node1
        p.next = node2
        p = node1
    }
    return dummyHead.next
};