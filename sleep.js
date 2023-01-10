function getSleepHours(day){
  if(day === 'monday'){
    return 7;
  }
  else if(day === 'tuesday'){
    return 9;
  }
  else if(day === 'wednesday'){
    return 6;
  }
  else if(day === 'thursday'){
    return 8;
  }
  else if(day === 'friday'){
    return 9;
  }
  else if(day === 'saturday'){
    return 5;
  }
  else if(day === 'sunday'){
    return 6;
  }
  else{
    return 'That\'s not a day, you silly goose!';
  }
}

function getActualSleepHours(){
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

function getIdealSleepHours(){
  const idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt(){
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    return 'You got the perfect amount of sleep';
  }
  else if(actualSleepHours > idealSleepHours){
    const over = actualSleepHours - idealSleepHours;
    return `You got ${over} hours more sleep than needed`;
  }
  else{
    const under = idealSleepHours - actualSleepHours;
    return `Sleep...what\'s that? What could ${under} more hours of sleep actually do?`
  }
}

console.log(calculateSleepDebt());
