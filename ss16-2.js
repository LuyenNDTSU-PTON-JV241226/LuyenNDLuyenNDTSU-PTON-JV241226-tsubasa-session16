function minOfArr(array){
    let min =  array[0];   
    for (let i = 0; i < array.length-1; i= i + 1) {
        if (min > array[i]) { 
            min = array[i];
        };
    };
    return min;
};
let arr1 = [3, 5, 1, 8, -3, 7 ,8 ];
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0, 0];
let min1 =minOfArr(arr1);
let min2 =minOfArr(arr2);
let min3 =minOfArr(arr3);
let min4 =minOfArr(arr4);
console.log(min1, min2, min3, min4);