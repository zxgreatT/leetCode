console.log('1')
function a(number) {
    let str = String(number)
    let sum = 1
    let count = 0
    while(Number(str) > 10) {
        for(let i=0;i<str.length;i++) {
            sum = sum * str[i]
        }
        str = String(sum)
        count ++
    }
    console.log(count)
}
a(28340)
var arr = [11,13,17,19,23,29,31,37,41,47,53,59,61,67,71,83,73,79,97,89]
for(var i=a;i<=b;i++) {
    for(var j=0;j<String(i).length;j++) {
        
    }
}