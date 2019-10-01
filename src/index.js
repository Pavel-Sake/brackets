module.exports = function check(brackets, config) {
    const arrayOfBrackets = [];
    const bracketsLength = brackets.length;

    for (let i = 0; i < bracketsLength; i++) {
        const currentBracket = brackets[i];
        const previousBracket = arrayOfBrackets[arrayOfBrackets.length - 1];

        const configLength = config.length;

        for (let j = 0; j < configLength; j++) {
            const currentPairBracket = config[j];
            const openBracket = currentPairBracket[0];
            const closeBracket = currentPairBracket[1];

            if (currentBracket === openBracket && currentBracket === closeBracket) {
                if (currentBracket === previousBracket) {
                    arrayOfBrackets.splice(arrayOfBrackets.length - 1, 1);
                } else {
                    arrayOfBrackets.push(currentBracket);
                }
            } else if (currentBracket === openBracket) {
                arrayOfBrackets.push(currentBracket);
            } else if (currentBracket === closeBracket) {
                if (previousBracket === openBracket) {
                    arrayOfBrackets.splice(arrayOfBrackets.length - 1, 1);
                } else {
                    arrayOfBrackets.push(currentBracket);
                }
            }
        }
    }

    if (arrayOfBrackets.length === 0) {
        return true
    } else {
        return false
    }
};
