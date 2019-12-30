var arr = new Array(1, 3, 2, 8, 9, 1, 5)
var SelectionSort = (arr) => {
    var length = arr.length
    if(arr == null || length < 2){
        return arr
    }
    for(var i=0;i<length;i++){
        var minIndex = i
        for(var j = i+1;j<length;j++){
            minIndex = arr[j] < arr[minIndex] ? j : minIndex
        }
        var temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}
console.log(arr)
console.log(SelectionSort(arr))