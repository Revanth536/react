function task1() {
    return new Promise((resolve,reject) => {
        console.log("Task1 is preforming.....");
        setTimeout(() => {
            console.log("Task1 is completed Successfully");
            
            resolve();
        },2000)
              
    })
}
function task2() {
    return new Promise((resolve,reject) => {
        console.log("Task2 Started.....");
        setTimeout(() => {
            console.log("Task2 Completed successfuly");
            resolve()
        }, 3000);
        
    })
}
function task3() {
    return new Promise((resolve, reject) => {
        console.log("Task3 Started.....");
        setTimeout(() => {
            console.log("Task3 Completed");
            resolve()
            
        },4000)
        
    })
}
function task4() {
    return new Promise((resolve, reject) => {
        console.log("Task4 Started....");
        setTimeout(() => {
            console.log("Task4 Completed");
            resolve()
            
        },4000)
        
    })
}
task1()
    .then(task2)
    .then(task3)
    .then(task4)
    .then(()=>console.log("---All task Completed---")
    )
.catch()
