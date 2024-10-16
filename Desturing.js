// const numbers = [1, 2, 3, 4, 5]
// const [a, b,c,d,e] = numbers
// console.log(d)

const person ={
    name: 'Hasan',
    age: 32,
    city: 'Dhaka',
    address: {
        villege: 'kalibari',
        post: 'Kalibari'
    }
}

// const {name, city} = person
// console.log(name, city)
const {post} = person.address
console.log(post)