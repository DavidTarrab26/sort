let arr = [9,2,6,1,4,3,8,7]

const bubbleSort = () =>{
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let mayor = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = mayor
            }
        }
    }
    return arr
}

console.log(bubbleSort())