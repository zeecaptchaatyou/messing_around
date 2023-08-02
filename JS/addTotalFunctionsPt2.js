/** 
 * Part 2 : (refer to addTotalFunctions.js for part 1)
Write a function called 'addTotalsToGrid' which takes an array of 3 subarrays, where each sub-array has 4 numbers. The function should add the total to the end of each sub-array and return the modified array. You should call the function addTotal in Part 1 three times.

Tip: To start, create a variable called 'sub' and point it to the first element in the grid array. Then call the function addTotal you wrote earlier, passing sub as the paramter. Then change sub to point to the second element in the grid array, etc. */
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

function addTotalsToGrid(grid)
{
  let count = grid.length, i =0;
  let sub = 0; 
        while (sub < count)
        {
            let value = 0;
            let mem = 0;
            while (mem < 4)
            {
                value += grid[sub][mem]; 
                mem++;
            }
            grid[sub].push(value);
            sub++;
        }
        return grid
}

let myGrid = [[1, 2, 3, 4], [0, 0, 1, 0], [10, 12, 5, 10]];
console.log(addTotalsToGrid(myGrid));

let simpleGrid = [[0, 0, 0, 0], [3, 3, 3, 3], [5, 5, 5, 5]];
console.log(addTotalsToGrid(simpleGrid));