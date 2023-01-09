let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 17;

if (registeredEarly === true && age > 18){
  raceNumber += 1000;
  console.log(`Your racer number is ${raceNumber}`);
}
else{
  console.log(`Your racer number is ${raceNumber}`);
}

if(age > 18){
  if (registeredEarly){
    console.log('Your race starts at 9:30 A.M');
  }
  else{
    console.log('Your race starts at 11:00 A.M.');
  }
}
else if (age < 18){
  console.log('Your race starts at 12:30 P.M.');
}
else{
  console.log('See registration desk')
}
