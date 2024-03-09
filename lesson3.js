// Write a programe to print the given string in reverse only vowel


function invowel(str){
    // let vowels=['a','e','i','o','u']
    // console.log(vowels);
    // let strarray=str.split('');
    let vowelsArray='';
    // console.log(strarray);

    for (let i=str.length-1; i>=0; i--){
        vowelsArray=vowelsArray+str[i];
    }

    // for (let i=0; i<=str.length-1; i++){
    //     vowelsArray=vowelsArray+str[i]
    // }

   return vowelsArray;
}
console.log(invowel('hello world'));