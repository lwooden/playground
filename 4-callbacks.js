const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})



// Callback Example 1

// console.log('User 1 made a request')
// setTimeout(callback, 2000)


// console.log('User 2 made a request')
// setTimeout(callback, 3000)


// console.log('User 3 made a request')
// setTimeout(callback, 4000)


// function callback() {
//   console.log('Queried the database and delivered data in 5 seconds')
// }

// Callback Example 2

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     data = {
//       latitude: 0,
//       longitude: 0
//     }
//     callback(data) // define the data I want to return to the function
//   }, 2000)
// }

// geocode('TempleHills',(data) => { // data is the variable I want to access when I call the function geocode
//   console.log(data)
// })

// Callback Example 3

const add = (a, b, callback) => { 
    setTimeout(() => {
      callback(a + b)
    }, 1000)
    
  }
  
  add(1,7,(sum) => {
    console.log(sum)
  })