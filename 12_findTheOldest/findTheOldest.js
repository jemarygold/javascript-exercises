const findTheOldest = function(people) {

    const age = function getAge(birthYear, deathYear) {
        if (deathYear == null) {
            deathYear = new Date().getFullYear();
        } 
        return deathYear - birthYear;
    }

    const person = people.reduce((prev, current) => ((age(prev.yearOfBirth, prev.yearOfDeath) > age(current.yearOfBirth, current.yearOfDeath)) ? prev : current))
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
