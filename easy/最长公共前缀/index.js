/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var comStrs = ''
    if(!strs.length) {
        return comStrs
    }
    for(var j=0;j<strs[0].length;j++) {
        for(var i=1;i<strs.length;i++) {
            if(strs[0][j] !== strs[i][j]) {
               return comStrs
            }
        }
        comStrs += strs[0][j]
    }
    return comStrs
};
