// Bài 1
function square (number) {
    return number * number
}
console.log(square(3));

// Bài 2
let string = "Hello World"
let key = "Hello"
const findWord = (string, key) => {
    return string.toUpperCase().includes(key)
}
console.log(findWord(string, key));

// Bài 3
const addSuffix = () => array.map((item, key) => `number: ${key}`)
console.log(addSuffix());

// Bài 4
const array2 = [1, 2, 3, 4]
const double = (array) => array.map((item) => item * 2)
console.log(double(array2));