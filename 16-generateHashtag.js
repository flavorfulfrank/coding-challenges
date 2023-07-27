//Take a sentence
//Return a hashtag

//Rules
//Must start with #
//All words must be capitalized
//Final result greater than 140 characters or empty string returns false
function generateHashtag (str) {
    let hashtag = str
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    if (hashtag === '' || hashtag.length >= 140) return false;
    return '#' + hashtag;
}