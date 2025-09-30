// Object Orientation
let student={
    name: "Revanth",
    age: 23,
    grade: "A",
    // coding: function() {
    //         console.log("can Code....")
    // },
    // singing: function() {
    //     console.log("caN Sing.... ")
    // },
    // Dancing: function () {
    //     console.log("Can Dance.... ")
    // }
        
};
console.log(student.name)
console.log(student.age);
// student.Dancing();
// student.coding();
console.log(student);


// ----CLOSURE-----
// function out() {
    
//     let a = 0;
//     return function () {
//         a += 1;
//         console.log(a);
//         console.log("Inside Closure")
//     }
// }
// let Inner = out()
// Inner()
// --------------------


// ---->CALLBACK<-----

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a-b
}
function multi(a, b) {
    return a*b
}
function cal(a, b, callback) {
    return callback(a,b)
}
console.log(cal(10,20,multi));
