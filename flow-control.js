function basicTeenager(age) {


   if (age >= 13 && age <= 19){


return 'You are a teenager!'
   }
}
basicTeenager(age)
function teenager(age) {

  if (age >= 13 && age <=19){
    return 'You are a teenager!'
  } else {
    return 'You are not a teenager'
  }

}
teenager(age)
function ageChecker(age) {
  if(age >= 13 && age <=19){
    return 'You are a teenager!'
  } else if (age <= 12) {
    return "You are a kid"
}else if (age >=19) {
      return "You are a grownup"

  }

}
  ageChecker(age)
function ternaryTeenager(age) {

age >= 13 && age <= 19 ? `You are not a teenager` :  `"You are a teenager"`

return age >= 13 && age <= 19 ? 'You are a teenager' :  'You are not a teenager'


}
ternaryTeenager()

function switchAge(age) {

  switch (age >= 13 && age <= 19){
    case 13:
    
    return 'You are a teenager';

    case 14:

   return 'You are a teenager';

    case 15:

    return 'You are a teenager';

    case 16:

    return 'You are a teenager';

    case 17:

    return 'You are a teenager';

    case 18:

  return 'You are a teenager';

    case 19:

    return 'You are a teenager';

    default :
    return 'You have an age';
  }


}
switchAge()
