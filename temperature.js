//Kelvin temp at 293
const kelvin = 293;
//Celsius is 273 less than Kelvin
const celsius = kelvin - 273;
//This is the formula for Celsius to Fehrenheit
let fahrenheit = celsius * (9/5) + 32;
//Rounding Fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//Kelvin temp at 0
const kelvinTwo = 0;
//Celsius is 273 less than Kelvin
const celsiusTwo = kelvinTwo - 273;
//This is the formula for Celsius to Fehrenheit
let fahrenheitTwo = celsiusTwo * (9/5) + 32;
//Rounding Fahrenheit
fahrenheitTwo = Math.floor(fahrenheitTwo);
console.log(`The temperature is ${fahrenheitTwo} degrees Fahrenheit`);

//Celsius to Newton 1
let newtonOne = celsius * (33/100);
newtonOne = Math.floor(newtonOne);
console.log(`The temperature is ${newtonOne} degrees of heat`);

//Celsius to Newton 2
let newtonTwo = celsiusTwo * (33/100);
newtonTwo = Math.floor(newtonTwo);
console.log(`The temperature is ${newtonTwo} degrees of heat`);
