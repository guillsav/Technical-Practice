/*
Ceasar Cypher Encryptor
=========================
Given a non-empty string of lowercase letters and non-negative integers value representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key. Note that letters should "wrap" around the alphabet, in other words, the letter "z" shiffted by 1 returns the letter "a".

Sample input: "xyz", 2
Sample output: "zab"

Use modulo to wrap the letters to the begining.

a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u ,v, w, x, y, z

*/

function ceasarCypherEncryptor(string, key) {
    // Write your code here.
    // find the index of the shifted next letter.
    const letters = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ];

    const strArr = string.split('');
    for (let i = 0; i < strArr.length; i++) {
        let index = string.charCodeAt(i) - 97;
        const indexPlusKey = index + key;
        let nextIndex = indexPlusKey > 25 ? indexPlusKey % 26 : indexPlusKey;
        strArr[i] = letters[nextIndex];
    }
    return strArr.join('');
}

console.log(ceasarCypherEncryptor('xyz', 2));
