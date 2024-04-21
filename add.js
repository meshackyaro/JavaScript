function addNumbers(x, y) {
    let answer = x + y;
    return answer;
}

// addNumbers(2,3)

// module.exports = addNumbers

function evenNumbers(numbers) {
    let result = numbers.filter(number => number % 2 == 0);
    return result;
}

module.exports = {addNumbers, evenNumbers};
