// prac for destructuring

// const arr = [1, 2, 3, 4, 5];

// console.log(arr[0]);

// const [a,b,c,d,e] = arr;
// console.log(c);


// object destructuring

const person = {
    name:"Navin",
    age:20,
    gender:"Male",
    address:'Mumbai'
};

// // access the object properties
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

// console.log(person['name']);

//destructuring
const {gender,address,name,age} = person;
console.log(gender);
console.log(address);

