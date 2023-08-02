/* A person is trying to decide which mode of transportation to use based on the distance they need to travel and whether it's a weekend or not. They have three choices:

Walk if the distance is less than or equal to 2 km.
Take a bike if the distance is between 2 and 10 km.
Take a car if the distance is greater than 10 km.
However, they prefer not to use a car on weekends, so if it's a weekend and the distance is greater than 10 km, they will take a bike instead.

Determine which mode of transportation the person should use based on the given distance and day of the week.
*/

let distance = 12; // in kilometers
let dayOfWeek = 'Tuesday';
let transportation = '';
// Write your code here
if (distance <= 2)
{
    transportation = "Walk";
}
else if (distance >= 2 && distance <= 10)
{
    transportation = "Bike";
}
else if (distance > 10)
{
    transportation = "Car";
}
if ((dayOfWeek === "Sunday" || dayOfWeek === "Saturday")  && (distance > 10))
{
    transportation = "Bike";
}


console.log('The person should use ' + transportation);