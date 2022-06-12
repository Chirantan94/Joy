// 1. find largest number

let arr = [23, 45, 12, 78, 67];

// compare with the current largest number

// let x = arr[0];

// for (let i=1; i < arr.length; i++) {
//     // if current number is greater then do nothing
//     // if current number is less then replace current number with the element
//     if (x < arr[i]){
//         x = arr[i];
//     }
// }

// console.log(x);

function getMax(a) {
    a.sort();
    return a[a.length-1];
}
console.log(getMax(arr));
