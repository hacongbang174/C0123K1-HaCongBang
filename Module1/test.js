// let ar = [1, 3, 2, 6, 1, 2];
// function divisibleSumPairs(n, k, ar) {
//     let sum = 0;
//     let count = 0;
//     if (2 <= n && n <= 100 && 1 <= k && k <= 100) {
//         for (let i = 0; i < ar.length; i++) {
//             for (let j = i + 1; j < ar.length; j++) {
//                 if (1 <= ar[i], ar[j] && ar[i], ar[j] <= 100) {
//                     sum = ar[i] + ar[j];
//                     if (sum % k == 0) {
//                         count += 1;
//                     }
//                 }
//             }
//         }
//     }
//     return count;
// }
// console.log(divisibleSumPairs(6, 3, ar));

// let bill = [3,10,2,9];
// function bonAppetit(bill, k, b) {
//     let sum = 0;
//     for (let i = 0 ; i < bill.length; i++) {
//         if (i != k) {
//             sum += bill[i];
//         }
//     }
//     if (b == sum/2) {
//         return 'Bon Appetit';
//     }else {
//         return b - (sum/2);
//     }
// }
// console.log(bonAppetit(bill, 1, 7));
let a1 = [2,4];
let b1 = [16,32,96];
function getTotalX(a, b) {
    a.sort();
    b.sort();
    let arr = [];
    let point = 0;
    for (let i = a[a.length-1]; i <= b[0]; i++) {
        let count1 = 0;
        for (let j = 0; j < a.length; j++) {
            if (i % a[j] == 0) {
                count1 +=1;
            }
        }
        if(count1 == a.length) {
            arr.push(i);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let count2 = 0;
        for (let k = 0; k < b.length; k++) {
            if (b[k] % arr[i] == 0) {
                count2 +=1;
            }
        }
        if(count2 == b.length) {
            point += 1;
        }
    }
    return point;
}
let result = getTotalX(a1, b1);
console.log(result);
