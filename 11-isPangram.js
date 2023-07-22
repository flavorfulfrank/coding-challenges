//Take a string
//Return (string === pangram) *case insensitive
function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    string = string.toLowerCase();
    return alphabet.reduce((isPangram, currentLetter) => isPangram ? string.includes(currentLetter) : false, true);
}