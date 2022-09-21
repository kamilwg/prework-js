let number1 = 16
let number2 = 4

function sum(num1, num2) {
    let result = num1 + num2;

    if (num1 === 20) {
        return true
    } else if (num2 === 20) {
        return true
    } else if (result <= 20) {
        return true
    } else {
        return false
    }
}

console.log(sum(number1, number2))
