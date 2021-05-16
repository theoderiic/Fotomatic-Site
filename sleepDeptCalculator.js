
const getSleepHours = (day) =>{
  switch(day){
    case 'monday':
    return 8
      break;
         case 'tuesday':
    return 7
      break;
          case 'wednesday':
    return 8
      break;
          case 'thursday':
    return 5
      break;
          case 'friday':
    return 8
      break;
          case 'saturday':
    return 7
      break;
          case 'sunday':
    return 8
      break;
    default:
    return 'Error!'  
  }
}

const getActualSleepHours = () => {
  return  getSleepHours('monday') + getSleepHours('tuesday') + 
  getSleepHours('wednesday') + getSleepHours('thursday') + 
  getSleepHours('friday') + getSleepHours('saturday') + 
  getSleepHours('sunday');
}

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours *7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(); 
  
  if (actualSleepHours === idealSleepHours){
    console.log(`You have slept ${actualSleepHours}. So you did well!`);
  }
  else if (actualSleepHours < idealSleepHours){
   console.log(`You should get some rest!`);
    console.log("You have to sleep " + (idealSleepHours - actualSleepHours) + ' hours!');
      }

     else {
      console.log(`You have slept too much man! Are you fu*king lazy?`);
    }
}

console.log(calculateSleepDebt());


