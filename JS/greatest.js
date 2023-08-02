// code to find the greatest of 3 numbers using if-else
//this code doesn't work. hech file gg.js for correct code
let num1 = 5;
let num2 = 8;
let num3 = 1;
let greatest;

if (num1 > num2)
{
    greatest = num1;
}
else {
    greatest = num2;
}
if (num2 > num3)
{
    greatest = num2;
}
else { 
    greatest = num3;
}
if (num1 > num3)
{
    greatest = num1;
}
else {
    greatest = num3;
}
console.log('The greatest number is '+ greatest);