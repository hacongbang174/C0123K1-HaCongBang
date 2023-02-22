

//Bài 1
var arr = [2, 22, 17, 24, 1, 5, 9];
function sumArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
let result1 = sumArr(arr);
console.log(`Bài 1: Tổng các giá trị trong mảng là: ${result1}`);

//Bài 2
var arr = [2, 22, 17, 24, 1, 5, 9];
function displayEven(array) {
    let display ="";
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            display += array[i] + " ";
        }
    }
    return display;
}
let result2 = displayEven(arr);
console.log(`Bài 2: Các số chẵn trong mảng là: ${result2}`);

//Bài 3
var arr = [2, 22, 17, 24, 1, 5, 9];
function displayPrime(array) {
    let display ="";
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 1) {
            // display += `${array[i]} không phải là số nguyên tố \n`;
        }else {
            let count =  0;
            for (let j = 1; j <= array[i]; j++) {
                if (array[i] % j == 0) {
                    count += 1;
                }
            }
            if (count == 2) {
                display += `${array[i]} là số nguyên tố \n`;
            }else {
                // display += `${array[i]} không phải là số nguyên tố \n`;
            }
        }
    }
    return display;
}
let result3 = displayPrime(arr);
console.log(`Bài 3: Các số nguyên tố trong mảng là:\n${result3}`);

//Bài 4
var arr = [2, 22, 17, 24, 1, 5, 9];
function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
let result4 = findMax(arr);
console.log(`Bài 4: Giá trị lớn nhất của mảng là: ${result4}`);

//Bài 5
var arr = [2, 22, 17, 24, 1, 5, 9];
function findMin(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
let result5 = findMin(arr);
console.log(`Bài 5: Giá trị nhỏ nhất của mảng là: ${result5}`);

//Bài 6
var arr = [2, 22, 17, 24, 1, 5, 9];
let arr2 = [3, 6, 10];
function connectArr(array, array2) {
    let connect = array.concat(array2);
    return connect;
}
let result6 = connectArr(arr,arr2);
console.log(`Bài 6: Mảng sau khi nối mảng arr2 là: ${result6}`);

//Bài 7
var arr = [2, 22, 17, 24, 1, 5, 9];
function reverseArr(array) {
    for (let i = 0; i < array.length/2; i++) {
        let temp = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = temp;
    }
    return array;
}
let result7 = reverseArr(arr);
console.log(`Bài 7: Mảng sau khi đổi ngược là: ${result7}`);

//Bài 8
var arr = [2, 22, 17, 24, 1, 5, 9];
function joinArr(array) {
    let str ="";
    str = array.join('-');
    return str;
}
let result8 = joinArr(arr);
console.log(`Bài 8: Chuỗi là: ${result8}`);

//Bài 9
var arr = [2, 22, 17, 2, 24, 1, 5, 9];
function findPosition(number,array) {
    let position = 0;
    let count = 0;
    let display = ""
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) {
            position = i;
            display += `${number} có vị trí thứ ${position} trong mảng\n`;
            count += 1;
        }
    }
    if(count > 0) {
        return display;
    }else {
        return '-1';
    }
}
let result9 = findPosition(2,arr);
console.log(`Bài 9:\n${result9}`);

//Bài 10
var arr = [2, 22, 17, 2, 24, 1, 5, 9];
function pushArr(number, array) {
    array.push(number);
    return array;
}
let result10 = pushArr(10,arr);
console.log(`Bài 10: Hàm sau khi thêm số 10 là ${result10}`);