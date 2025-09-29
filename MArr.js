// ------>2D ARRAYS
// let a = [[20, 30, 40], [40, 50, 60]]
// for (i = 0; i < a.length; i++){
//     for (j = 0; j < a[i].length; j++)
//         console.log(a[i][j]);
//     console.log();

// }

// ------->3D ARRAYS
// let a = [
//   [
//     [45, 75],
//     [78, 92],
//   ],
//   [
//     [87, 784],
//     [12, 45],
//   ],
// ];
// for (i = 0; i < a.length; i++) {
//   for (j = 0; j < a[i].length; j++) {
//       for (k = 0; k < a[i][j].length; k++)
//           console.log(a[i][j][k]);
          
//   }
// }
// console.log(a[1][2]);


// Shallow copy
let ar = [[20, 42], [45, 50]]
let ar1 = structuredClone(ar)
console.log(ar);
console.log(ar1);

ar[0].push(90)
console.log(ar);
console.log(ar1);

