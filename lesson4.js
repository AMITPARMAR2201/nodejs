function reverseVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const strArray = str.split('');
    let vowelsArray = [];

    // Extracting vowels from the string
    for (let i = 0; i < strArray.length; i++) {
        if (vowels.includes(strArray[i])) {
            vowelsArray.push(strArray[i]);
        }
    }

    // Reversing the vowels array
    vowelsArray.reverse();

    // Replacing vowels in the original string with reversed vowels
    for (let i = 0, j = 0; i < strArray.length; i++) {
        if (vowels.includes(strArray[i])) {
            strArray[i] = vowelsArray[j];
            j++;
        }
    }

    // Joining the modified array back into a string
    const result = strArray.join('');
    return result;
}

// Example usage
// const inputString = "Hello World";
// const reversedVowelsString = reverseVowels(inputString);
// console.log(reversedVowelsString);

// function reverseVowels(str) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//     const strArr = str.split('');
//     let left = 0;
//     let right = strArr.length - 1;

//     while (left < right) {
//         if (vowels.has(strArr[left]) && vowels.has(strArr[right])) {
//             // Swap vowels
//             const temp = strArr[left];
//             strArr[left] = strArr[right];
//             strArr[right] = temp;
//             left++;
//             right--;
//         } else if (vowels.has(strArr[left])) {
//             // Move right pointer leftward
//             right--;
//         } else {
//             // Move left pointer rightward
//             left++;
//         }
//     }

//     return strArr.join('');
// }

// Example usage:
const inputString = "Hello World";
const reversedVowelsString = reverseVowels(inputString);
console.log(reversedVowelsString);

