/**
 * @param {string} s
 * @return {boolean}
 * 利用栈的特性来进行入栈出栈来进行操作
 */

var map = new Map([['(',-1],[')',1],['{',-2],['}',2],['[',-3],[']',3]])
var isValid = function(s) {
    if(s == ''){
        return true
    }
    var strArr = [...s]
    var stack = []
    for(var i=0;i<s.length;i++) {
        if(map.get(strArr[i]) < 0){
            stack.push(map.get(strArr[i]))
        }else {
            if(stack[stack.length-1]+ map.get(strArr[i]) == 0){
                stack.pop()
            }else {
                return false
            }
        }
    }
    if(stack.length === 0){
        return true
    }else {
        return false
    }
}