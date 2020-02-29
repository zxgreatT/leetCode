// 深度优先遍历  用栈实现 解决的核心问题 能否能达到不关心最优解的问题
/**
 * 编号为1，2，3的三张扑克牌放入编号为1，2，3的三个盒子有多少种不同的算法
 */
// console.log(1)
// var flag = []
// var n = 4
// for(var i=1;i<=n;i++){
//     flag[i] = true
// }
// var a = []
// function bfs(step) {
//     if (step === n) {
//         console.log(a)
//         return
//     }
//     for (var i = 1; i <= n; i++) {
//         if (flag[i] === true) {
//             a[step] = i
//             flag[i] = false
//             bfs(step+1)
//             flag[i] = true
//         }
//     }
// }
// bfs(0)
/**
 * 解救小哈迷宫问题
 */

