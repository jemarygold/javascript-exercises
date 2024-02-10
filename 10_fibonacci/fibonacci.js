const fibonacci = function(number) {
    let integer = number * 1;

    if (integer < 0) return "OOPS"

    const recursiveFibonacci = function (n) {
        if (n == 0) {
          return 0;
        } else if (n == 1) {
            return 1;
        } else {
            return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
        }
      };

    return recursiveFibonacci(integer);
};

// Do not edit below this line
module.exports = fibonacci;
