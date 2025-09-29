let a = 100;
function f() {
  console.log(a);
}
// f();
let typ2 = function () {
  console.log("----Am Function Expression");
};
// typ2();
let A = () => {
  console.log("----> Arrow Function");
};
// A()
// (function () {
//     console.log("----IIFE-immmediately invoke Function Expression")
// }())

// SCOPE
let a1 = 1000;
// function f() {
//   var b = 30;
//   console.log(b);
// }
// if (a1 > 100) {
//     var a2=34
//     console.log(a2)
// }
// else {
//     var b=25
//     console.log(b)
// }

// console.log(b)
// console.log(a2)

// function printNum(nun) {
    for (i = 1; i <= 5; i++){
        console.log(i)
    }
    console.log(i)
// }
// printNum(5)