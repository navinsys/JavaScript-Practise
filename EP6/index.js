//Array map method,filter and reduce

const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// arr.push("orange")

// console.log(arr)

// arr.unshift("apple")
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//map method

// const newArr = arr.map((element)=>{
//  return         element * 2
// })

// console.log(newArr);

const products = [
  {
    price: 100,
    name: "navin",
  },
  {
    price: 200,
    name: "shubham",
  },
  {
    price: 300,
    name: "sagar",
  },
  {
    price: 400,
    name: "sachin",
  },
  {
    price: 500,
    name: "sanket",
  },
];
// products.map    ((element) => {
//     console.log(element.name, element.price);
    
// });


//filter method

 const result = arr.filter((element)=>{
        return element   > 200;
    
})
console.log(result);
