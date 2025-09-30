// fetch("https:/catfact.ninja/fact")
//     .then((res) => res.text())
//     .then((res)=>console.log(res))
//     .catch(()=>console.log("Fetching failed")
// )


// fetch("https:/catfact.ninja/fact")
//     .then((res) => res.json())
//     .then((txt) => {
//         console.log(txt.fact)
//         // console.log(txt.fact);
        
//     })
// .catch(()=>console.log("API FAILED"))

let data = await fetch("https:/catfact.ninja/fact")
let d= await data.json()
console.log(d);
