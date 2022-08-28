function merge(arr1, arr2){
    const counter = arr1.length + arr2.length;
    let arr3 = []
    for(let i = 0; i<counter; i++){
        if(arr1.length <= 0){
            arr3.push(arr2[0]);
            arr2.shift();
        } else if (arr2.length <= 0){
            arr3.push(arr1[0]);
            arr1.shift()
        } else if (arr1[0] <= arr2[0]){
            arr3.push(arr1[0]);
            arr1.shift();
        } else {
            arr3.push(arr2[0]);
            arr2.shift();
        }
    }
    return arr3;
};

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    let arr1 = mergeSort(arr.slice(0, arr.length/2));
    let arr2 = mergeSort(arr.slice(arr.length/2, arr.length));
    let arr3 = [];
    arr3 = merge(arr1, arr2);
    return arr3;
}

const testArray = [1, 5, 7, 2, 4, 8, 10, 1]

//console.log(merge([1,3], [2,4]));
console.log(mergeSort(testArray));