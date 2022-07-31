let todaysDate = new Date().getTime() // gets todays date and turns it into a milliseconds format
let birthday = new Date(`November 03 ${new Date().getFullYear()}`).getTime() // gets Birthday from current year and turns it into a milliseconds format

// finds the difference between todays date and birthday and converts it from milliseconds to days
let dateDifference = Math.ceil((birthday - todaysDate)/(1000 * 60 * 60 * 24))

// checks to see if birthday this year has passed
if(dateDifference < 0){
    // update birthday to next year and calculate difference again
    birthday = new Date(`October 03 ${new Date().getFullYear() + 1}`).getTime()
    dateDifference = Math.ceil((birthday - todaysDate)/(1000 * 60 * 60 * 24))  
}
// console.log how many days until next birthday
console.log(`My birthday is in ${dateDifference} days`)
