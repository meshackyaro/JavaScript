// let addNumbers = require("./add.js");


let {addNumbers, evenNumbers} = require("./add.js");

test("Add two numbers", () =>{
    let a = 3;
    let b = 5;
    let answer = addNumbers(a, b);

    expect(answer).toBe(8);
})

test("filter even numbers", () => {
    let array = [1,2,3,4,5,6];
    let answer = evenNumbers(array);

    expect(answer).toEqual([2,4,6])
})


