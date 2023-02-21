import React from "react";
import ReactDOM from "react-dom";
import cars from './practice';
// const cars = [
//     {
//       model: "Honda Civic",
//       //The top colour refers to the first item in the array below:
//       //i.e. hondaTopColour = "black"
//       coloursByPopularity: ["black", "silver"],
//       speedStats: {
//         topSpeed: 140,
//         zeroToSixty: 8.5
//       }
//     },
//     {
//       model: "Tesla Model 3",
//       coloursByPopularity: ["red", "white"],
//       speedStats: {
//         topSpeed: 150,
//         zeroToSixty: 3.2
//       }
//     }
//   ];
//   export default cars;
  

console.log(cars);
const [honda, tesla] = cars;
const {speedStats: {topSpeed: hondaTopSpeed}}=honda;
const {speedStats: {topSpeed: teslaTopSpeed}}=tesla;
const {coloursByPopularity: [teslaTopColour]}=tesla;
const {coloursByPopularity: [hondaTopColour]}=honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);