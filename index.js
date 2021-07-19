function scuberGreetingForFeet(someValue){
  let result;
  if (someValue <= 400){
    result = `This one is on me!`;
  }
  else if (someValue >= 2500){
    result = `No can do.`;
  }
  else if (someValue >= 2000){
    result = `I will gladly take your thirty bucks.`;
  }
  return result;
  
}

function ternaryCheckCity(newYork){
  return newYork === 'NYC'?'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return "Thank you."
    default:
      return 'Bye.'
  }
}