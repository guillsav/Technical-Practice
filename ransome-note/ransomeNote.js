function canConstruct(magazine, note) {
    let mag = {};

    for (const word of magazine) {
        if (!mag[word]) {
            mag[word] = 1;
        } else {
            mag[word]++;
        }
    }

    for (const word of note) {
        if (!mag[word] || mag[word] < 1) {
            return false;
        } else {
            mag[word]--;
        }
    }
    return true;
}

module.exports = canConstruct;
