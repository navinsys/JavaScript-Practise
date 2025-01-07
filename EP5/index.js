// learning revising functions

// function sum(num1, num2) {
//     return num1 + num2;

// }

// console.log(sum(100, 200));


// function expression

// const sumofTwonumbers = function (num1, num2) {
//     console.log(num1 + num2);
// };

// sumofTwonumbers(100, 200);


//callback function
// aisa function jo dusre pe depend krta hai usse callback function kehte hai

// const doSomething = function(callback){
//     console.log('samose ban rahe hai');
    
//     setTimeout(function(){
//         callback();
//     },3000)

// }

// const callback = function () {
//     console.log('samose ready  hai');
// }

// doSomething(callback);

//Higher order function
// const radius = [1,2,3,4];

// const area = function(radiusArray){
//     const result = [];
//     for (let i = 0; i < radiusArray.length; i++) {
//      const a =   (Math.PI * radiusArray[i] * radiusArray[i]);
//         result.push(a);
//     }
// return result;
// };
// console.log(area(radius));


// arrow function

const multiply =  (num1, num2  )=>{
return num1 * num2;
}

console.log(multiply(2,3))