/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0;
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    for(var j=0;j<nums.length-i-1;j++) {
        nums.pop()
    }
    return i;
}

var nums = [3,2,2,3]
console.log(removeElement(nums, 3),nums)