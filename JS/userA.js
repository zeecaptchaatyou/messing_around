let userA = [
22,
false,
"vivek",
"India",
["Hiking", "Fishing", "Reading"],
[
[72, 60],
[88, 20],
[50, 36],
 ],
];

userA[0] += 1;
console.log(userA[0]);
userA[4].push("Swimming");
console.log(userA[4]);
let ocation = userA[5];
userA[5][3] = [50, 70];
userA[5][0][1] += 1;
ocation = userA[5];
console.log(ocation);