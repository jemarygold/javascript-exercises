const removeFromArray = function(array, ...varsToRemove) {
    const args = Array.from(varsToRemove);
    let filteredArray = [];

    for(let i = array.length - 1; i >=0; i--) {

        for(let j=0; j<args.length; j++) {

            if(array[i] === args[j]){
                array.splice(i, 1, )
            } 
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
