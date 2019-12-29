const arr = new Array(1, 3, 2, 8, 9, 1, 5)
const maopaoSort = (arr) => {
    const length = arr.length
    if(arr == null || length < 2){
        return arr
    }
    for(let i=0;i<length-1;i++) {
        for(let j=0;j<length-1;j++){
            if(arr[j] > arr[j+1]) {
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(maopaoSort(arr))