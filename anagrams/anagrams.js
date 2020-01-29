function anagrams(word, words) {
 return words.filter(currWord => isAnagram(word, currWord)); 
}
​
function isAnagram(str1, str2) {
  const s1Len = str1.length;
  
  if (s1Len !== str2.length) {
    return false;
  }
​
  const alphabet = Array(26).fill(0);
​
  for (let i = 0; i < s1Len; i++) {
    alphabet[str1.charCodeAt(i) - 97]++;
    alphabet[str2.charCodeAt(i) - 97]--;
  }
​
  return alphabet.every(letter => letter === 0);
}