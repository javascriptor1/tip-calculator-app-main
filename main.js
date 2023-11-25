"use strict";

const inputAmount = document.getElementById("bill");
const numberOfPeople = document.getElementById("number-of-people");
const tipAmount = document.querySelector(".amount-person");
const totalAmount = document.querySelector(".total-person");
const resetButton = document.querySelector(".reset-btn");

inputAmount.addEventListener("input", calculateTip);
numberOfPeople.addEventListener("input", calculateTip);

function calculateTip() {
  const Allpercentage = document.querySelectorAll(
    'input[ readonly="readonly"]'
  );
  let percentage;
  Allpercentage.forEach((percentageValue) => {
    console.log(percentageValue.activeElement);
  });
}
