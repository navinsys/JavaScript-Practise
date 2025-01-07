//spread operator

// const arr = [1, 2, 3, 4, 5];

// const duplicateArr = [...arr];

// console.log(duplicateArr); // [1, 2, 3, 4, 5]

//duplicate array

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

const result = [...num1, ...num2];

console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//object 
const obj1 = {
    a:1,
    b:2
};
const obj2 = {
    c:"hello",
    d:"developer"
};

const res = {...obj1, ...obj2};
console.log(res); // {a: 1, b: 2, c: "hello", d: "developer"}