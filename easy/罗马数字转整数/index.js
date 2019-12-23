var map = new Map([['I', 1],['V', 5], ['X', 10],['L', 50],['C', 100],['D', 500],['M', 1000]])

var romanToInt = function(s) {
    var count = 0
    for(var i = 0;i <s.length;i++){
        if(s[i+1] === undefined){
            count += map.get(s[i])
            break
        }
        if(map.get(s[i]) >= map.get(s[i + 1])){
            count += map.get(s[i])
        }else {
            count = count + map.get(s[i+1]) - map.get(s[i])
            i++
        }
    }
    return count
}

console.log(romanToInt('III'))