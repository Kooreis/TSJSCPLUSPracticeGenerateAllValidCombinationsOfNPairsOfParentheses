class ParenthesesGenerator {
    generateParenthesis(n: number): string[] {
        let result: string[] = [];
        this.backtrack(result, "", 0, 0, n);
        return result;
    }
}