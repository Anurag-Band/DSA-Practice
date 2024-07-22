// array.js
console.log("inside array");

// ! ->> Traversing Array

// let arr = [23, 19, 10, 34, 45, 60];
// console.log(arr);

// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(`${i + 1} ele is ${arr[i]}`);
// }

// ! ->> get element in array by position

let arr = [23, 19, 10, 34, 45, 60];
console.log(arr);

const position = 12;

function getEleByPosition(arr, position) {
  // added validations to avoid unexpected answers
  if (
    !(position < arr.length) ||
    (position < 1 && typeof parseInt(position) === "number")
  ) {
    return alert("Please enter valid input");
  }
  const posEle = arr[position - 1];
  console.log(`ele at ${position} is ${posEle}`);

  return posEle;
}

getEleByPosition(arr, position);

// ! ->>

