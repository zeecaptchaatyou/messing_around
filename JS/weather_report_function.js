// Copy the convertToEmoji function you wrote earlier here:
let check;
function convertToEmojiFace(tempC)
{
    if (tempC > 30)
    {
        return "🥵"; 
    }
    else if (tempC >= 12 && tempC <=30)
    {
        return "😊";
    }
    else if (tempC < 12) 
    {
        return "🥶";
    }
 
}

// Call your function here passing 30 and print 
// the resulting emoji to console...


// Copy the convertToFahrenheit function you wrote earlier here:
// Write your function here

function convertToFahrenheit(tempC)
{
    tempF = (tempC *9 / 5) + 32;
    return tempF;
}


// Copy the formatTemperatureAsString function you wrote earlier here:
function formatTemperatureAsString(tempC, check) 
{   
    if (check === true)
    {
    let string = convertToFahrenheit(tempC) + "°" + "F";
    return string;
    }
    else return tempC + "°" + "C";
}

// Write your new formatWeatherReport function here:
function formatWeatherReport(cityName, tempC, showFahrenheit)
{   
    let check = showFahrenheit;
    formatTemperatureAsString(tempC, check); 


    let value = "In " + cityName + " it is currently " + convertToEmojiFace(tempC) + " " + formatTemperatureAsString(tempC, check);
    return value;
}


let msgForRajOnMonday = formatWeatherReport('Vancouver', 3, true);
console.log(msgForRajOnMonday);

let msgForTonyOnMonday = formatWeatherReport('Sydney', 17, false);
console.log(msgForTonyOnMonday);

let msgForJohnOnSunday = formatWeatherReport('Miami', 40, true);
console.log(msgForJohnOnSunday);