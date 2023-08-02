/**
 * Given an array of booleans change any false values to true that occur before the first true value.
 */

function falseToTrue(booleans)
{
    let i = 0, size = booleans.length;
    for (i=0; i<size; i++)
    {
        if (booleans[i] === true)
        {
            for(j = 0; j<i; j++)
            {
                booleans[j] === true;
            }
        }
    }

    return booleans;

}

let bools1 = [false, false, false, true, false, false, true];
console.log(falseToTrue(bools1)); // should print [true, true, true, true, false, false, true]

let bools2 = [false, false, false];
console.log(falseToTrue(bools2));// should print [true, true, true]

let bools3 = [true, false, true];
console.log(falseToTrue(bools3));// should print [true, false, true]