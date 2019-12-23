var isPalindrome = function(x) {
    x = x.toString()
    x = [...x]
    var i = 0
    var j = ~~(x.length / 2)
    var flag = true
    while(i < j) {
        if(x[i] !== x[x.length-(i+1)]){
            flag = false
            break
        }
        i++
    }
    return flag
}

console.log(isPalindrome(121))