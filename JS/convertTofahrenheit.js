// Write your function here

function convertToFahrenheit(tempInC)
{
    tempInF = (tempInC *9 / 5) + 32;
    return tempInF;
}


let freezing = convertToFahrenheit(0);
console.log(freezing); // should print 32

let ovenTemp = convertToFahrenheit(200);
console.log(ovenTemp); // should print 392

let  n = 100;
while (n >= 70) {
    console.log(n);
    n - 2;
    n === 70 ? exit : n - 2;
}