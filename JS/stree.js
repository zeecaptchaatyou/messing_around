const arr1 = [[1,2,3], [1,2,2], [4,3]];
const addArr = [3,3,3];

const result = [].concat(arr1 , [addArr] );
console.log(result);

/**
 * mclaren guess output question
 */

let fromNum = 5;
let toNum = 10;

let sum = 0;

while (fromNum <= toNum){
 if (fromNum % 3 === 0){
   sum = sum + fromNum + 1;
   console.log(sum);
 } 
 fromNum++;
}
console.log(sum);

let arr = [1, 1, 3, 0];
for (let i = arr[3]; i<= arr[arr[i]]; i+= arr[i] % 2) {
    console.log(arr[i]);
}

console.log('\n');

let num = 1;
let sum1 = 0;
while(num < 100){
    console.log(num);
    sum1 = sum1 + num;
    num = num * 2;
    console.log(num + "+" + sum);
}
console.log(num, sum1);