const fibonacci = function(num) {
    let current = 1
    let previous = 1
    let total = 1
    let i = 2
    if (num == 1 || num == 2){
        return total
    }
    else if (num < 0){
        return "OOPS"
    }
    while (i < num){
        total = current + previous
        previous = current
        current = total
        i++
    }
    return total
};

// Do not edit below this line
module.exports = fibonacci;
