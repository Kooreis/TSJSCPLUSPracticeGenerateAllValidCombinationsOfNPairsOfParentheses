Here is a JavaScript solution using recursion:

```javascript
function generateParenthesis(n) {
    const result = [];
    backtrack(result, '', 0, 0, n);
    return result;
}

function backtrack(result, currentString, open, close, max) {
    if (currentString.length === max * 2) {
        result.push(currentString);
        return;
    }

    if (open < max)
        backtrack(result, currentString + '(', open + 1, close, max);
    if (close < open)
        backtrack(result, currentString + ')', open, close + 1, max);
}

console.log(generateParenthesis(3));
```

This console application will generate all valid combinations of n pairs of parentheses. You can change the number in the `generateParenthesis` function call to generate different numbers of pairs.