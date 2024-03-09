function reverseVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const stack = [];
    const strArray = str.split('');

    // Push vowels onto the stack in reverse order
    for (let char of strArray) {
        if (vowels.has(char)) {
            stack.push(char);
        }
    }

    // Replace vowels in the string with vowels from the stack
    for (let i = 0; i < strArray.length; i++) {
        if (vowels.has(strArray[i])) {
            strArray[i] = stack.pop();
        }
    }

    return strArray.join('');
}

// Example usage:
console.log(reverseVowels("hello")); // Output: "holle"
console.log(reverseVowels("leetcode")); // Output: "leotcede"
