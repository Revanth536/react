// let arr = new Array(5)
// arr[0] = 12;
// arr[1] = 22
// arr[2] = 56
// arr[3] = 34
// arr[4] = 45
// // for (const element of arr) {
// //     console.log(element)
// // }
// console.log(arr);

// let a = [10, 20,50, 30, 40, 50]
// // console.log(a);
// // a.push(60)
// // a.unshift(9)
// // a.shift()
// a.splice(2, 0, 90, 57)
// b = a.lastIndexOf(50)
// c=a.includes(0)
// console.log(a);
// console.log(b);
// console.log(c);

// -----methods that can given callbacks
let arr = [36, 4, 9, 16, 25];
// function sq(x) {
//     return Math.sqrt(x)
// }
let n = arr.map((x) => Math.sqrt(x)); //which creates new array with some function
console.log(arr);
console.log(n);

let b = arr.filter((x) => {
  //which creates new array which are true for the condition which we want to check
  if (x > 15) return true;
  else return false;
});
console.log(b);

// function s(t,x) {
            //reduce is used to process the data and makes an single element arr
//   return t+x;
// }

// let sum = n.reduce((t,x)=>t+x,0);
// console.log(sum);

//some--> is an function which gives true when even an element satisfies the condition
let great=arr.every(x => x > 10)
console.log(great);
