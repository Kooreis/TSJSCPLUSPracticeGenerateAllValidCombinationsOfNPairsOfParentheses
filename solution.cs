function generateParenthesis(n) {
    const result = [];
    backtrack(result, '', 0, 0, n);
    return result;
}