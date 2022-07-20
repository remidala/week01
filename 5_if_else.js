// if, else, else if, statement
/*if (condition1) {
    //  block of code to be executed if condition1 is true
  } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }
*/
var age = 20;
if (age<18) {
  console.log(`Younger than 20`)
} else if (age >18 && age <30) {
  console.log(`Older than 18 but younger than 30`)
} else {
  console.log(`Older then 30`)
}