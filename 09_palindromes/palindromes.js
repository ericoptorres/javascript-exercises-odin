const palindromes = function (word) {
    word = word.replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, " ")
    let array = word.toLowerCase().split('')
    let onlyLetters = array.filter(ele => (ele != ' ' && ele != '.'))
    let reversedArr = []
    onlyLetters.map(elem => (reversedArr.unshift(elem)))
    return reversedArr.join('') === onlyLetters.join('') 
    
}


// Do not edit below this line
module.exports = palindromes;

