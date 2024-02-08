const sumAll = function(num1, num2) {
    const largestNumber = Math.max(num1, num2);
    const smallestNumber = Math.min(num1, num2);
    let sumAll = 0;

    if(typeof(num1) != "number" || typeof(num2) != "number" || num1 <0 || num2 < 0){
        return "ERROR";
    } 

    for(let i=smallestNumber; i<= largestNumber; i++){
        sumAll += i;
    }
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
