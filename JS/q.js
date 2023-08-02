/**
 * Given an array of booleans change any false values to true that occur before the first true value.
 */

function falseToTrue(booleans)
{
    let i = 0;
    while(booleans[i] === false)
    {
        booleans[i] = true;
        i++;
    }
    return booleans;
}

let bools1 = [false, false, false, true, false, false, true];
console.log(falseToTrue(bools1)); // should print [true, true, true, true, false, false, true]

let bools2 = [false, false, false];
console.log(falseToTrue(bools2));// should print [true, true, true]


let bools3 = [true, false, true];
console.log(falseToTrue(bools3));// should print [true, false, true]


function lengthOfVacationSpots(vacationSpots){
    let i = 0, j=0;
    while (vacationSpots[i] === undefined) {
      
      console.log(i-1)  ;
    }
	// write your code here
}
let vacationSpots = ['Bali', 'Phuket', 'Goa', 'Kochi', 'Sydney', 'Barcelona', 'Las Vegas'];
console.log(lengthOfVacationSpots(vacationSpots));//7


function numberOfTrues(arr)
{
    let i = 0, count = 0;
    while (arr[i] === true)
    {
        count = arr.length;
        i++;
    }
    while (arr[i] !== true)
    {
        count = arr[i];
        i++;
    }
    return count;
}
console.log(numberOfTrues([true, true, false, false, true, true]));// 2
console.log(numberOfTrues([false, true, false, false, true, true]));// 0
console.log(numberOfTrues([true, true, true, true, true, true]));// 6
console.log(numberOfTrues([]));// 0
console.log(numberOfTrues([false, false, false]));// 0

