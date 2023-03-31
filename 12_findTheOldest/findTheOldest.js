const findTheOldest = function(people) {
    let peopleAge = people.map(person => {
        if (!person.yearOfDeath){
            person.yearOfDeath = new Date().getFullYear()
        }
        return person.yearOfDeath - person.yearOfBirth
    })
    let indexHighest
    peopleAge.reduce((highest, element, currentIndex) => {
        if (element > highest){
            indexHighest = currentIndex
            highest = element
            return highest
        }
        else {
            return highest
        }
    }, 0)

    return people[indexHighest]

};

// Do not edit below this line
module.exports = findTheOldest;


