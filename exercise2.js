function maxMin(...arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let arrMaxMin = []; 

    // console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        } 

        if (arr[i] < min) {
            min = arr[i]; 
        } 
    } 

    arrMaxMin.push(max);
    arrMaxMin.push(min);

    return arrMaxMin;
} 

console.log(maxMin(-1, 2, 9, 1));