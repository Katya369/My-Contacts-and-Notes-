import React from 'react';
import App from "./components/App";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map((x) => x * 2);

// ////Filter - Create a new array by keeping the items that return true.
// const newNumbers1 = numbers.filter((num) => num < 10);

// //Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber2 = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );

// //Find - find the first item that matches from an array.
// const newNumber3 = numbers.find((num) => num > 10);

// //FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex((num) => num > 10);
