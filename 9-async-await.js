const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }

            resolve(a + b)
        }, 2000)
    })
}


// const doWork = async () => { // async function "always" returns a "Promise"

//     throw new Error('something went wrong!')
//     return "Low" // the Promise has been fulfilled with the string "Low"
// }

const doWork = async () => { // async function "always" returns a "Promise"

        // we have access to all of these variables within the "same scope"
        // this is difficult to achieve with callbacks and traditional promise style
        const sum = await add(1, 99)
        console.log("Processing request 1")
        const sum2 = await add(sum, 3)
        console.log("Processing request 2")
        const sum3 = await add(sum2, 1)
        console.log("rocessing request 3")
        return sum3

}

doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})