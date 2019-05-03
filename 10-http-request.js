
const request = require('request')

const url = 'https://bible-api.com/john 3:16'

request({ url: url, json: true }, (error, response) => {

//error handling

  if(error) {
    console.log("Error accessing")
  } else if (response.body.error == 'not found') {
    console.log("I'm having trouble locating that verse. Please try another addresss!")
  } else
  console.log(response.body.text)

})