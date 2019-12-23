//转换成数组来进行操作
var reverse = function(x) {
    if(x >= 0) {
        x = x.toString()
        x = [...x].reverse().join('')
    }else {
        x = x.toString().split('-')[1]
        console.log(x)
        x = '-' + [...x].reverse().join('')
        console.log(x)
    }
    x = Number(x)
    console.log(x)
    if(x >= Math.pow(2,31) || x <= Math.pow(-2, 31)) {
        return 0
    }
    return x
}

console.log(reverse(-123456780))