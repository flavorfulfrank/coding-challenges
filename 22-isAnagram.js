//Take two strings
//Return true if t is an anagram of s
// function isAnagram(s, t) {
//   return s.split('').sort().join('') === t.split('').sort().join('');
// }

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const mapS = new Map();
  const mapT = new Map();
  for (let i = 0; i < s.length; i++) {
      mapS.set(s[i], mapS.get(s[i]) + 1 || 1);
      mapT.set(t[i], mapT.get(t[i]) + 1 || 1);
  }
  for (const [letter, count] of mapS.entries()) {
      if (count !== mapT.get(letter)) return false;
  }
  return true;
};