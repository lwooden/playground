// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name, // comes from variable "name" above; no need for colon
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// The traditional way of accessing the properties of an object

// const label = product.label
// const stock = product.stock

// define the object I want to destructure along with the properties I want to access
// const {label, stock, rating} = product 

// if I want to rename a property I must use property:new_name syntax
// const {label:productlabel, stock, rating} = product 


// I can now reference those properties without using dot notation (e.g. product.stock, product.label, etc)
// console.log(stock)
// console.log(rating)


// I can destructure an object in the arguments part of a function if I know my input is an object
const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)