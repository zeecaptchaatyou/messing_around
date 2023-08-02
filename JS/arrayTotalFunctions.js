/**
 * PART 1: Write a function called addTotal which takes an array of 4 numbers, adds the total to the end of the array.
 */


function addTotal(arr)
{
    let value = 0;
    let size = arr.length, i = 0;
    while(i < size)
    {
        value += arr[i];
        console.log(value);
        i++;
    }
    arr.push(value);
    return arr;
}

console.log(addTotal([1, 2, 3, 4])); // [1, 2, 3, 4, 10]
console.log(addTotal([5, 5, 5, 5])); // [5, 5, 5, 5, 20]