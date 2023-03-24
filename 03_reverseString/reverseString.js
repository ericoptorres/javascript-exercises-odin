const reverseString = function(string) {
    let stringedArray = string.split('')
    let i = 0
    let reversedArray = []
    while (i <= stringedArray.length - 1){
        reversedArray.unshift(stringedArray[i])
        i++
    }
    let reversed = reversedArray.join('')
    return reversed
};

// Do not edit below this line
module.exports = reverseString;

