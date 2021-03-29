const getSleepHours = (day) =>{
    day = day.toLowerCase();
    switch (day) {
      case 'monday':
        return 7;
        break;
      case 'tuesday':
        return 6;
        break;
      case 'wednesday' :
        return 6
        break;
      case 'thursday':
        return 6
        break;
      case 'friday' :
        return 8
        break;
      case 'saturday':
        return 10
        break;
      case 'sunday' :
        return 10
        break;
    }
}

//Concise body with implicit return
const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday')+ getSleepHours('wednesday') + getSleepHours('thursday') +getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')

const getIdealSleepHours = idealHours => {
  return idealHours * 8;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);

  if(actualSleepHours === idealSleepHours){
    console.log('Perfect amount of sleep!')
    
  } 
  actualSleepHours > idealSleepHours ? console.log('More sleep than needed!') : console.log('Get some rest!')

  console.log(actualSleepHours - idealSleepHours)
}

calculateSleepDebt();