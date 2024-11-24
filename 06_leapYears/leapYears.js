// Pseudocode
// Leap Year -> Year % 4 === 0 
// Years % 100 not leap years, except those divisible by 400

const leapYears = function(year) {
    const yearDivisibleByFourHundred = year % 400 === 0;
    const yearIsCentury = year % 100 === 0;
    const yearDivisibleByFour = year % 4 === 0;

    if (yearDivisibleByFour && 
        (!yearIsCentury || yearDivisibleByFourHundred)) 
        {return true} 
        else {
        return false}

};

// Do not edit below this line
module.exports = leapYears;

//Leap years are years divisible by four (like 1984 and 2004). 
//However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 
//(like 1600 and 2000, which were in fact leap years). 
