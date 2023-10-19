private backtrack(list: string[], str: string, open: number, close: number, max: number): void {
        if (str.length == max * 2) {
            list.push(str);
            return;
        }
}