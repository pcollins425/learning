//Dog years act roughly as the first two years are about ten and a half each year
//The following years are about four years each year

//My current age
const myAge = 32;
//Early years
let earlyYears = 2;
earlyYears *= 10.5;
//Rest of my years
let laterYears = myAge - 2;
laterYears *= 4;
//Dog years
const myAgeInDogYears = earlyYears + laterYears;
//My Name
let myName = 'Paul Collins'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
