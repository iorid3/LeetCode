function buddyStrings(s: string, goal: string): boolean {
    if (s === goal) {
        const charCount = new Map<string, number>();
        for (const char of s) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
            if (charCount.get(char) || 0 >= 2) {
                return true;
            }
        }
        return false;
    }
    
    if (s.length !== goal.length) {
        return false;
    }

    let count: number = 0;
    let storeString: number[] = [];

    for (let i = 0; i < goal.length; i++) {
        if (s[i] !== goal[i]) {
            storeString.push(i);
            count++;
        }
    }

    return count === 2 && s[storeString[0]] === goal[storeString[1]] && s[storeString[1]] === goal[storeString[0]];
}

buddyStrings('aa','aa')
