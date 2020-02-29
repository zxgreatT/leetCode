/**
 * leetcode 64
 * @param {number[][]} grid
 * @return {number} 
 */
// 递归实现 公式到达当前的最小值只能是从上方或者左方进入的比较他们的的最小路径之和
// 超出时间限制
var grid = [[1,3,1],[1,5,1],[4,2,1]]
// var minPathSum = function(grid) {
//     const bijiao = (grid, i, j) => {
//         if(i === grid.length || j === grid[0].length) {
//             return Number.MAX_VALUE
//         }
//         if(i === grid.length - 1 && j === grid[0].length - 1) {
//             return grid[i][j]
//         }
        
//         return grid[i][j] + Math.min(bijiao(grid,i+1,j),bijiao(grid,i,j+1))
//     }
//     return bijiao(grid,0,0)
// };
// console.log(minPathSum(grid))

/**
 * @param {number[][]} grid
 * @return {number}
 * 建立一个额外的数组dp里面记录着到达终点的最优解
 */
// dp(i,j)=grid(i,j)+min(dp(i+1,j),dp(i,j+1))
var minPathSum = function(grid) {
    let dp = Array.from(new Array(grid.length),() => [])
    for(var i = grid.length-1;i > -1;i--) {
        for(var j = grid[0].length-1;j > -1;j--) {
            if(i === grid.length - 1 && j !== grid[0].length - 1) {
                dp[i][j] = grid[i][j] + dp[i][j+1]
            }else if(i !== grid.length -1 && j === grid[0].length - 1) {
                dp[i][j] = grid[i][j] + dp[i+1][j]
            }else if(i !== grid.length - 1 && j !== grid[0].length - 1) {
                dp[i][j] = grid[i][j] + Math.min(dp[i+1][j],dp[i][j+1])
            }else {
                dp[i][j] = grid[i][j]
            }
        }
    }
    return dp[0][0]
};
console.log(minPathSum(grid))