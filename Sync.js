// function fun1() {
//   console.log("Fun1 Started...");
//   let time = Date.now();
//   let delay = 5000;
//   let end = time + delay;
//   console.log("Fun1 Executing...");
//   while (Date.now() <= end) {}
//   console.log("Fun1 Executed...");
// }
// function fun2() {
//   console.log("Fun2 Started...");
//   let time = Date.now();
//   let delay = 3000;
//   let end = time + delay;
//   console.log("Fun2 Executing...");
//     while (Date.now() <= end) {
      
//   }
//   console.log("Fun2 Executed...");
// }
// function fun3() {
//   console.log("Fun3 Started...");
//   let time = Date.now();
//   let delay = 6000;
//   let end = time + delay;
//   console.log("Fun3 Executing...");
//   while (Date.now() <= end) {}
//   console.log("Fun3 Executed...");
// }
// fun1();
// fun2();
// fun3();

// function f1() {
//     console.log("F1 is started");
//     console.log("F1 is Executed")
    
// }
// function f2() {
//     console.log("F2 is started");
//     let time = Date.now();
//     let delay = 5000
//     let end = time + delay
//     while (Date.now() <= end) {
        
//     }
//     console.log("F2 is Executed");
    
    
// }
// function f3() {
//     console.log("F3 is started");
//     console.log("F3 is Executed")
// }
// function f4() {
//     console.log("F4 is started");
//     let time = Date.now();
//     let delay = 5000
//     let end = time + delay
//     while (Date.now() <= end) {
        
//     }
//     console.log("F4 is Executed");
    
// }
// f1()
// setTimeout(f2,2000)
// f3()
// setTimeout(f4,5000)


// function score() {
//     console.log("Current score is");
    
// }
// let IN = setInterval(score, 2000)
// setTimeout(()=>clearInterval(IN),10000)

// Promise
let prm = new Promise((resolve,reject) =>{
    console.log("Hi am Promise");
    reject()
});
prm
    .then(() => {
        console.log("Task one is sucessful");
        
    })
    .catch(() => {
        console.log("Sorry Task Not Completed !")
    })