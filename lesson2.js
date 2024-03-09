// Write a programe to findout product execpt self
// [ 1, 2, 3, 4, 5 ]
// [ 400 , 300 , 250, ]

let que = [1, 2, 3, 4, 5, 6]
let ans = []
let temp = 1;
let position = 0;

for (let k = 0; k < que.length; k++) {
    for (let i = 0; i < que.length; i++) {
        if (position == i) { }
        else {
            temp = temp * que[i]
        }
    }
    ans.push(temp);
    position=position+1;
    temp=1;
}

console.log(ans);













// for (let count = 0; count < que.length; count++) {
//     if (position == count) {

//     }
//     else {
//          temp = temp * que[count];
//     }
// }
// ans.push(temp);
// console.log(ans);



