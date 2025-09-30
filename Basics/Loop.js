// let a = 9;
// if (a >= 18) {
//     console.log("YOU ARE ELIGIBLE TO VOTE");
// }
// else
//     console.log("YOUR NOT MAJOR SO YOU CAN'OT VOTE");


// let r;

// for (j = 1; j <= 5; j++) {
//     r = "";
//     for (i = 1; i <= 5; i++) {
//         r = r + " * ";
//     }
//     console.log(r);
// }
// let n = 8;
// let r;
// for (i = 1; i <= n; i++){
//     r = "";
//     for (j = 1; j <= n; j++){
//         if (i == 1 || i == n ||j == 1 || j == n)
//             r = r + "*";
//         else
//             r = r + " ";
//     }
//     console.log(r);
// }

let n = 11;
let r;
for (i = 0; i <n; i++){
    r = "";
    for (j = 0; j <n; j++){
        if (i == 0 || j == 0 || i == n - 1 || j == n - 1 || j == Math.floor(n / 2) || i == Math.floor(n / 2)
            || i == j || i + j == n - 1 || i + j == Math.floor(n / 2)||i-j==Math.floor(n/2)||i+j==(n-1)+Math.floor(n/2)||j-i==Math.floor(n/2))
            r = r + "*";
        else
            r = r + " ";
    }
    console.log(r);
}
