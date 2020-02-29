/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 方法一
    // return [...new Set(nums)]
    // 方法二
    // var tempArr = []
    // var tempObj = {}
    // for(var i=0;i<nums.length;i++) {
    //      if(!tempObj[nums[i]]) {
    //         tempObj[nums[i]] = 1
    //         tempArr.push(nums[i])
    //      }
    // }
    // return tempArr.length

    var count = 1
    for(var i=0;i<nums.length-1;i++) {
        if(nums[i] != nums[i+1]) {
            nums[count] = nums[i+1];
             count++
        }            
    }
    return count
}

console.log(removeDuplicates([1,1,1,2]))