
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
        return grid;
}

let myGrid = [[1, 2, 3, 4], [0, 0, 1, 0], [10, 12, 5, 10]];
console.log(addTotalsToGrid(myGrid));

let simpleGrid = [[0, 0, 0, 0], [3, 3, 3, 3], [5, 5, 5, 5]];
console.log(addTotalsToGrid(simpleGrid));