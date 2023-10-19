function backtrack(result, currentString, open, close, max) {
    if (currentString.length === max * 2) {
        result.push(currentString);
        return;
    }