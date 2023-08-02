//Hello! You must've been directed here by gg. I am the correct code and I will show you the way
let num1 = 5;
let num2 = 8;
let num3 = 1;
let greatest;

//write your code here
if ((num1 > num2) && (num1 > num3))
{
    greatest = num1;
}
else if ((num1 < num2) && (num2 > num3))
{
    greatest = num2;
}
else if ((num1 < num3) && (num3 > num2))
{
    greatest = num3;
}
else greatest = 0;

console.log('The greatest number is '+ greatest);