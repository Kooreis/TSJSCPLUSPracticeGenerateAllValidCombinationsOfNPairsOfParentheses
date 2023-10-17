Here is a TypeScript solution for generating all valid combinations of n pairs of parentheses:

```typescript
class ParenthesesGenerator {
    generateParenthesis(n: number): string[] {
        let result: string[] = [];
        this.backtrack(result, "", 0, 0, n);
        return result;
    }

    private backtrack(list: string[], str: string, open: number, close: number, max: number): void {
        if (str.length == max * 2) {
            list.push(str);
            return;
        }

        if (open < max)
            this.backtrack(list, str + "(", open + 1, close, max);
        if (close < open)
            this.backtrack(list, str + ")", open, close + 1, max);
    }
}

let generator = new ParenthesesGenerator();
console.log(generator.generateParenthesis(3));
```

This solution uses a recursive approach to generate all possible combinations of parentheses. It starts with an empty string and adds an open parenthesis if there are still some left to add, and adds a close parenthesis if it does not exceed the number of open ones. The recursion stops when the length of the string reaches the maximum length, which is twice the number of pairs of parentheses.