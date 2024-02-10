const palindromes = function (potentialPalindrome) {
    let palindrome = potentialPalindrome.replace(/[^\w]/g,"").toLowerCase();
    let reversePalindrome = palindrome.split("").reverse().join("");

    if (palindrome === reversePalindrome) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
