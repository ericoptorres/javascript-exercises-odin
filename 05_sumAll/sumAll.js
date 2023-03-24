const sumAll = function(start, end) {
    if ((typeof start) == 'number' && (typeof end) == 'number'){
        if (start >= 0 && end >= 0){
            if (start > end){
                let aux = start
                start = end
                end = aux
            }
            let currentNumber = start
            let sum = 0
             while (start <= end){
                sum += start
                start++
             }
             return sum
        }
    }
    return "ERROR"
    }
    ;

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(1, 5))