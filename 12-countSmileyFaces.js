//Take array of strings
//Return the number of smiley faces in array matching rules

//Rules for a smiling face:

//Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//Every smiling face must have a smiling mouth that should be marked with either ) or D
function countSmileys(arr) {
    const smileyRegex = /^[:;][-~]?[)D]/;
    return arr.reduce(
      (total, current) => {
        console.log(total);
        return smileyRegex.test(current) ? ++total : total;
      }, 0);
}