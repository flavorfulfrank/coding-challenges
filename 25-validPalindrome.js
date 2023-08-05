//Take a string
//Filter special characters and spaces, then return true if string is a valid palindrome
var isPalindrome = function(s) {
    const regex = /[^\w]|_/g;
    const filteredString = s
        .replace(regex, '')
        .toLowerCase();
    const reversedString = filteredString
        .split('')
        .reverse()
        .join('');
    return reversedString === filteredString;
};