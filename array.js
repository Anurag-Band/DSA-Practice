// array.js
console.log("inside array");

// ! ->> Traversing Array

// let arr = [23, 19, 10, 34, 45, 60];
// console.log(arr);

// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(`${i + 1} ele is ${arr[i]}`);
// }

// ! ->> get element in array by position

// let arr = [23, 19, 10, 34, 45, 60];
// console.log(arr);

// const position = 12;

// function getEleByPosition(arr, position) {
// ? added validations to avoid unexpected answers
//   if (!(position < arr.length) ||
//     (position < 1 && typeof parseInt(position) === "number")
//   ) {
//     return alert("Please enter valid input");
//   }
//   const posEle = arr[position - 1];
//   console.log(`ele at ${position} is ${posEle}`);

//   return posEle;
// }

// getEleByPosition(arr, position);

// ! ->> insert element in array using loop
//  ** 1. push the elements in array to one position ahead from where we want our new element to insert
//  ** 2. then insert new element to target position

// let arr = [23, 19, 10, 34, 45, 60];
// console.log(arr);

// const newElement = 69;
// const position = 0;

// function insertEle() {
//   if (position > arr.length || position < 1)
//     return alert("Please enter valid input");

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (i >= position) {
//       arr[i + 1] = arr[i];
//       if (i === position) {
//         arr[i] = "newEle: " + newElement;
//       }
//     }
//   }
//   console.log(arr);
// }

// insertEle();


