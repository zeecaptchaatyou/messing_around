const acct_balance = 500000;
let critics_say;

 if (acct_balance <=10) 
    critics_say = "Broke Ass"
else if (acct_balance <=5000)
    critics_say = "You get money ooo"
else 
    critics_say = "This one na baller"
console.log(critics_say);

let agge = 11;
let day = "Tuesday";
let discountCheck = agge < 12 || (agge >=65 && (day === "Monday" || day === "Tuesday"))
let isGivenDiscount = discountCheck;


//Write an expression given age and day to calculate if patron is given discount.
console.log("Yada " + isGivenDiscount);


let discountCode = "SUPERSENIOR";
let age = 45;
let getsDiscount;
if ((discountCode === "HAPPY" || discountCode === "TIGER") || (age > 65 && discountCode === "SUPERSENIOR")) {
    getsDiscount = true;
}
else {
    getsDiscount = false;
}
// write your expression here
console.log("This is " + getsDiscount);

/*let discountCode = 'SUPERSENIOR';
let age = 45;
let getsDiscount = ((discountCode === "HAPPY" || "TIGER") || ((age > 65) && (discountCode === "SUPERSENIOR")))
console.log(getsDiscount);*/


let m;
if ( 3 < 4 - 1 === false)
{ 
    m = "boo";
}
if ( 3 < (4 - 1) === false)
{
    m = "moo";
}
else m = "ga"
console.log(m);


let costOfApple = 2.5;
let costOfPear = 1.25;
let totalFruitsCost = (6 * costOfApple) + (4 * costOfPear);
let averagePrice = totalFruitsCost / 10;
console.log("Average price is $" + averagePrice);

let meeting1Start = 8;
let meeting1End = 12;
let meeting2Start = 11.5;
let meeting2End = 13;
let meetingsOverlap = meeting2Start > meeting1Start < meeting1End 
// (meeting1End > meeting2Start);
//write your code here
if (meetingsOverlap) {
  console.log('Meetings overlap');
}
else {
  console.log('Meetings do not overlap');
}

//0	If meeting1Start = 8, meeting1End = 12, meeting2Start = 11.5 and meeting2End = 13 output should be 'Meetings overlap'

// Function to calculate the tax of a salary earner. If a person earns above 50k, tax is 45% otherwise tax is 40%. If the person has children, tax is 3 percent less than what it should be.
function taxCalc(income, hasChildren)
{
    let taxPercentage = 0;
    
    if(income > 50000) 
    {
        taxPercentage = 45;
    }
    else taxPercentage = 40;
    
    if(hasChildren === true)
    {
        taxPercentage -= 2;
    }
    
    return taxPercentage;
}

console.log("The applicable tax percentage is " + taxCalc(60000, true) + "%");