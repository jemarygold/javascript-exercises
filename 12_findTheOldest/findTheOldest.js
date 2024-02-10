const findTheOldest = function(people) {

    const getAge = function(birthYear, deathYear) {
        if (deathYear == null) {
            deathYear = new Date().getFullYear();
        } 
        return deathYear - birthYear;
    }

    const person = people.reduce((prev, current) => ((getAge(prev.yearOfBirth, prev.yearOfDeath) > getAge(current.yearOfBirth, current.yearOfDeath)) ? prev : current))
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
