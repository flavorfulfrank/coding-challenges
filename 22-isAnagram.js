//Take two strings
//Return true if t is an anagram of s
function isAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}
