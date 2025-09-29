// let s1 = "JavaScript"
// let s2 = 'JavaScript'
// let s3 = new String("JavaScript")
// console.log(s1,s2,s3,);

//----String Methods
let u = "Alice | ALICE@example.COM |JavaScript "
let parts = u.split("|")
let name1 = parts[0].trim();
// console.log(name);
let email = parts[1].trim();
let bio = parts[2].trim();
name1=name1.toUpperCase()
email=email.toLowerCase();
// console.log(email, name1);
let sep="-".repeat(30)
let profile = `
${sep}
    UserName    :${name1}
    EmailID     :${email}
    Bio         :${bio}
${sep}
`
console.log(profile);
