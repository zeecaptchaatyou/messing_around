/*
Print the location and temperature in Celsius or Fahrenheit based on the users preference. Prefix the temprature with an emoji as follows:

🥵 if temperature in Celsius is above 30
😊 if temperature in Celsius is between 12 and 30
🥶 if temperature in Celsius is below 12
Your output should be in the following format:

In ________ it is currently ______
For example:

In Vancouver it is currently 🥶 37.4°F 
In New Delhi it is currently 🥵 35°C 
In Sydney it is currently 😊 17°C 
In Miami it is currently 🥵 104°F
*/
let preferCelsius = false;
let tempC = 3;
let location = 'Vancouver';
let CtoF = (tempC * 9 / 5) + 32;
let feeling;
let tempType;

// Write your code here

if (tempC > 30)
{
    feeling = "🥵";
}
else if ((tempC >= 12) && (tempC < 30))
{
    feeling = "😊";
}
else if (tempC < 12)
{
    feeling = "🥶";
}

if (preferCelsius === true)
{
    tempType = "°C"
}
else
{
    tempType = "°F"
}
if (preferCelsius === false)
{
    tempC = CtoF;
}

console.log("In " + location + " it is currently " + feeling + " " + tempC + tempType);