// Write a program to pick missing spaces 
var array = [0, 1, 0, 1, 0,0,0,1,0]
var count = 0;

// console.log(array);
for (let i = 1; i <= array.length; i++) {

  while (array[i]==(array[i-1]==array[i+1])) {
    count++;
    break;
  }
}
console.log(count);
// if (array[i] == (array[i-1] == array[i+1])) {
//   count++
// }
// while (array[i] == (array[i - 1] == array[i + 1])) {
//   count++
// }
//
// if (array[1] == (array[0] == array[2])) {
//   count++
// }
// // console.log(count);
// if (array[2] == (array[1] == array[3])) {
//   count++
// }
// // console.log(count);
// if (array[3] == (array[2] == array[4])) {
//   count++
// }
// // console.log(count);
// if (array[4] == (array[3] == array[5])) {
//   count++
// }
// if (array[5] == (array[4] == array[6])) {
//   count++
// }
// if (array[6] == (array[5] == array[7])) {
//   count++
// }
// if (array[7] == (array[6] == array[8])) {
//   count++
// }
// if (array[8] == (array[7] == array[9])) {
//   count++
// }
// if (array[9] == (array[8] == array[10])) {
//   count++
// }
// if (array[10] == (array[9] == array[11])) {
//   count++
// }
// if (array[11] == (array[10] == array[12])) {
//   count++
// }
// if (array[12] == (array[11] == array[13])) {
//   count++
// }




