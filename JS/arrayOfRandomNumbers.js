/**
 * Using a while loop create an array of a given size equal to the value of the size variable filling in random numbers between 0 and 10.

HINT : Use Math.random()*10 to generate the random numbers between 0 and 10
 */

let rand = [], size = 5, i = 0;
while (i < size) {
    rand[i] = Math.random()*10;
    i++;
}
console.log(rand);

/**Below is a guess outpush in-class qestion from McLaren */
let n = 1;
console.log('start', n);
while(n < 20) {
    console.log(n);
    n = n * -2;
}
console.log('finish', n);

/**Below is another guess outpush in-class qestion from McLaren */

let a = [27, 60, 47, 2, 0, 72];

let j= a[0];
while(a[j % 5] > 10)
{
    console.log(j);
    j += 3;
}

/**  Given the number of rows ,create a function to print the following pattern using a while loop such that  printpattern(4) prints *, **, ***, **** 
 */

function printPattern(a)
{
    let i = 0, pattern = "", star = "";
    while (i < a) {
        star += "*";
        pattern = console.log(star);
        i++;
    }
    return (pattern);
}

printPattern(4);
printPattern(3);

/**
 * Given the following array "arr", write the expression to increment the element 11 by 1 .

Tip: Draw a diagram!
 */

let arr = [[[1,[10,11]],[5,6]],[2,3],[5,6]];
(arr[0][0][1][1]) += 1;
console.log(JSON.stringify(arr));

/**
 * Write a function which takes an array of 4 names, and returns a count of the number of times the name 'Anil' appears in the array.

Tip: Use four if statements

 */

function countAnils(names)
{
    let j = names.length, i = 0, count = 0;
    while (i < j) 
    {
       if(names[i] === "Anil")
       {
            count += 1;
       }
       i++;

    }
    return count;
}

console.log(countAnils(['Paul', 'Anil', 'Kim', 'Anil'])); // Should print 2
console.log(countAnils(['Paul', 'Sam', 'Kim', 'Rajesh'])); // Should print 0