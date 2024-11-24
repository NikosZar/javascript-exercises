// pseudocode
// function takes as arguments a first integer and a second integer
// first integer should be less than or equal to the second integer
// (second_integer - first_integer) - 1 is the number of integers between the two
// for loop for i = 0; i < value; i++. first_integer + 1
// append new value in a list. 
// when i === value, append second_integer
// add every element in the array


const sumAll = function(first_integer, second_integer) {

    const integer_array = []
    let integer_sum = 0;

    if (second_integer < 0 || first_integer < 0) {
        return "ERROR";
    } else if (!Number.isInteger(first_integer) || !Number.isInteger(second_integer)) {
        return "ERROR";
    }

    const number_of_integers = Math.abs(second_integer - first_integer)-1;
    
    if (first_integer <= second_integer) {
        integer_array.push(first_integer);
    } else {
        integer_array.push(second_integer);
    }


    for (let i = 0; i <= number_of_integers; i++) {
        let incremented_value = integer_array[i]+1
        integer_array.push(incremented_value);
    }

    for (value in integer_array) {
        integer_sum += integer_array[value];
    }

    return integer_sum;

};

sumAll(123,1)


// Alternate Solution using arithmetic mean 

const sumAllAlternate = function(first_integer, second_integer) {
    // Input validation
    if (second_integer < 0 || first_integer < 0) {
        return "ERROR";
    } else if (!Number.isInteger(first_integer) || !Number.isInteger(second_integer)) {
        return "ERROR";
    }
    
    // Ensure we have min and max values
    const min = Math.min(first_integer, second_integer);
    const max = Math.max(first_integer, second_integer);
    
    // Number of terms in sequence
    const n = max - min + 1;
    
    // Calculate sum using arithmetic sequence formula
    return n * (min + max) / 2;
};


// Do not edit below this line
module.exports = sumAll;
