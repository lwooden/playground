const chalk = require('chalk')

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Low")
//         //reject("Something went wrong!")
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })


// Promise Chaining

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1,1).then((sum) => { // 1st then statment
    console.log(chalk.red.bold('Result of the first Promise:'), sum)
    return add(sum, 5) // return the resolution of the 1st promise and then proceed to the next

}).then((sum2) => { // 2nd then statement
    console.log(chalk.green.bold('Result of the second Promise:'), sum2)

}).catch((e) => {
    console.log(e)
})

