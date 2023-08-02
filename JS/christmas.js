function timeForMilkAndCookies(month, day)
{
    if ((month === 11) && (day === 24)) 
    {
        return true;
    }
    else 
    {
        return false;
    }
}

timeForMilkAndCookies(11, 24); // should return true

timeForMilkAndCookies(0, 23); // should return false

timeForMilkAndCookies(11, 24); // should return true

let n = 100
while (n >= 70) {
    console.log(n);
    n -= 2;
}

function lengthOfVacationSpots(Spots){
    let i = 0;
    /*while (Spots[i] !== undefined) {
    i++;
    }*/
    //return i;
    return Spots.length;
	// write your code here
}
let vacationSpots = ['Bali', 'Phuket', 'Goa', 'Kochi', 'Sydney', 'Barcelona', 'Las Vegas'];
console.log(lengthOfVacationSpots(vacationSpots));//7