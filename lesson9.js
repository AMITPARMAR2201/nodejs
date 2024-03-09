var sentence = "hell world ";

var vowel = []
var vowelcount=[]

var sentences = sentence.split('');
console.log(sentence);
var count=0;
sentences.map((value) => {
    if (value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u') {
        vowelcount.push(count);
        vowel.push(value);
    }
    count++;
});
console.log(vowelcount)
console.log(vowel);
vowelcount.reverse();
vowel.reverse();




var flash = 0;
while (flash<vowelcount.length) {
    sentences[vowelcount[flash]]=vowel[flash]
    flash++;
}
console.log(sentences);


