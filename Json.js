const j = {
    "name ": "Revanth",
    "Age  ": "23",
    "Loc":"Hyd"
}

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const t = JSON.stringify(text)
console.log(t);

// console.log(typeof j)
