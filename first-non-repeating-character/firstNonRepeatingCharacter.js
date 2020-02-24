// O(n) time || O(n) space
function firstNonRepeatingCharacter(str) {
  const chars = {}
  const len = str.length

  for (let i = 0; i < len; i++) {
    if (!chars[str[i]]) chars[str[i]] = 1
    else chars[str[i]]++
  }

  for (let i = 0; i < len; i++) {
    if (chars[str[i]] && chars[str[i]] === 1) return str[i]
  }
  return "_"
}

const word1 = "aaabcccdeeef"
const word2 = "abcbad"
const word3 = "abcabcabc"

console.log(firstNonRepeatingCharacter(word1))
console.log(firstNonRepeatingCharacter(word2))
console.log(firstNonRepeatingCharacter(word3))
