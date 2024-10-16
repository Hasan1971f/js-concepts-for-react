const student = {
    name: 'sakib',
    age: 35,
    movies: ['king khan', 'Dhakae masta']
}

const studentJSON = JSON.stringify(student)
console.log( student)
console.log(studentJSON)

const studentObj = JSON.parse(studentJSON)
console.log(studentObj)

// 2 Fetch
fetch('URL')
.then(res => res.json())
.then(data => console.log(data))


// 3 keys values
const keys = Object.keys(student)
const values = Object.values(student)

