function matchingBrackets(string) {
    const stack = [];
    const openingBrackets = '([{';
    const closingBrackets = ')]}';
    const matchingPairs = {')': '(', ']': '[', '}': '{'};

    for (const bracket of string) {
        if (openingBrackets.includes(bracket)) {
            stack.push(bracket);
        } else if (closingBrackets.includes(bracket)) {
            if (stack.length === 0) {
                return false;
            } else if (stack[stack.length - 1] === matchingPairs[bracket]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

module.exports = matchingBrackets;
