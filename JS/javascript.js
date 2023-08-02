/* Date: 3:24
time: 17th January 2023*/

function functionWithArgs(param1, param2)
{
  console.log(1 + 2);
}
 functionWithArgs(7,9)
{
 console.log(7 + 9);
}
    

let result = 700 / 32;
console.log(result);

let seconds = 20*60;
console.log(seconds);

let greeting = "hello";
let salutation = "goodbye";
let c = 4;
salutation = greeting;
c = c + 2;
greeting = c - 3;
console.log(greeting, salutation, c);


let x = 8 
x = x + "zee";
console.log(x);
x = x - 2;
console.log(x, typeof x );

var titleCase = function(m) {
return m.slice(0,1).toUpperCase() + m.slice(1);
};
var titleCase = function(m) {
return m.slice(0,1).toUpperCase() + m.slice(1);
};
"batman, spider-man, iron man".replace(/\b\w+\b/g, titleCase);
console.log(titleCase);

var villains = "Green Goblin, Doctor Octopus, Venom, Hobgoblin, Sandman";
villains.split("o");
// ["Green Goblin", "Doctor Octopus", "Venom", "Hobgoblin", "Sandman"]
console.log(villains);

alert("Hello Bitches");