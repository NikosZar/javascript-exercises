const removeFromArray = function(array, ...itemsToRemove) {
    let arrayWithRemove = [];
    
    for (let item of array) {
        if (!itemsToRemove.includes(item)) {
            arrayWithRemove.push(item)
        }
    }
    return arrayWithRemove;
};

// Do not edit below this line
module.exports = removeFromArray;
