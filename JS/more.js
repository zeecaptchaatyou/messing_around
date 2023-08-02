let income = 60000;
let hasChildren = true;
let taxPercentage;


function taxCalc(income, hasChildren) 
{
    if (income > 50000)
    {
        taxPercentage = "45%";
    }
    else
    {
        taxPercentage = "40%";
    }
    if (hasChildren = true) 
    {
        taxPercentage -= 2;
    }
    console.log(taxPercentage);
}

taxCalc(5000, true,)