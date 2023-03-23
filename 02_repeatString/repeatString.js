const repeatString = function(string, num) {
    let finalString = ""
    if (num < 0){
        finalString = "ERROR"
    }
    else {
        while (num){
            finalString += string
            num--
        }
    }

    return finalString
};

// Do not edit below this line
module.exports = repeatString;
