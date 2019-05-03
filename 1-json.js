const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Gunther'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)


var books = {
    title: 'Bible',
    author: 'My Lord'
  
  };
  
  // var stringObject = JSON.stringify(books);
  // console.log('String Representation:',stringObject);
  // fs.writeFileSync('book.json', stringObject);
  
  
  //var jsonObject = JSON.parse(stringObject);
  //console.log('Object Representation:',jsonObject);
  
  var data = fs.readFileSync('book.json');
  var dataJSON = data.toString(); //converts the binary data to a readable string
  var finalData = JSON.parse(dataJSON);
  console.log(finalData.title);