// 1 TEmplate string

const numbers = [89, 35, 98, 12]

const student = {
    name: 'Sakib khan',
    age: 32,
    movies: ['King khan, Dhakar Mastan']
};

const about = `My name ${student.name} age of ${student.age} has number ${[3]} also liked movies ${student.movies[0]}`
console.log(about)

// 2 Arrow function

const fiftyFive = () => 55

const addSistiFive = (num) => num * 65

const isEven = (x) => x % 2 ==0

const addThree = (x, y, z) => x + y + z
console.log(addThree(1, 2, 4))

const doMath = (num1, num2) =>{
    const sum = num1 + num2 
    return sum
}
console.log(doMath(1,2))

const newNumbers = [...numbers]
numbers.push(200)
numbers.push(200)
numbers.push(200)
console.log(newNumbers)
