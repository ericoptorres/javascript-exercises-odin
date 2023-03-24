const removeFromArray = function(array, ...toRemove) {
    let finalArray = []
    let i = 0
    let j = 0
    let willStay = true
    

    while (i < array.length){
        while (j < toRemove.length){
            if (array[i] === toRemove[j]){
                willStay = false
            }
            j++
        }
        j = 0
        if (willStay == true){
            finalArray.push(array[i])
        }
        willStay = true
        i++
    }
    return finalArray
};

// Do not edit below this line
module.exports = removeFromArray;

