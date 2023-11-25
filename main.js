"use strict";

const AllpercentageInput = document.querySelectorAll(
  'input[ readonly="readonly"]'
);
const inputAmount = document.getElementById("bill");
const numberOfPeopleInput = document.getElementById("number-of-people");
const tipAmount = document.querySelector(".amount-person");
const totalAmount = document.querySelector(".total-person");
const resetButton = document.querySelector(".reset-btn");
const allLabels = document.querySelectorAll(".percent-label");
const customInput = document.getElementById("custom-percentage");
const noOfPeopleDiv = document.querySelector(".number-of-people-div");
const errorMsg = document.querySelector('.error-message')
let amount = 0;
let percentage = 0;
let noOfPeople = 0;

inputAmount.addEventListener("input", amountInput);
numberOfPeopleInput.addEventListener("input", numberOfPeople);
customInput.addEventListener("input", customCalculation);

function amountInput() {
  amount = +inputAmount.value;
  calculatetip();
}

function customCalculation() {
  percentage = +customInput.value;
  AllpercentageInput.forEach((percentageValue) => {
    updateBg(percentageValue);
  });
  calculatetip();
}

function numberOfPeople() {
  noOfPeople = +numberOfPeopleInput.value;
  if (noOfPeople <= 0){
    errorMsg.style.visibility = 'visible'
  } else{
    errorMsg.style.visibility = 'hidden'
  }
  calculatetip();
}

// listen for which percentage is chosen
AllpercentageInput.forEach((percentageValue) => {
  percentageValue.addEventListener("click", findPercentage);
  function findPercentage(e) {
    updateBg(percentageValue);
    e.target.checked = true;
    percentage = +e.target.value;
    customInput.value = "";

    for (let i = 0; i < allLabels.length; i++) {
      if (e.target.checked) {
        e.target.nextElementSibling.style["background-color"] = "#26c0ab";
        e.target.nextElementSibling.style.color = "#00494d";
      } else {
        e.target.nextElementSibling.style["background-color"] = "#00494d";
        e.target.nextElementSibling.style.color = "#fff";
      }
    }
    calculatetip();
  }
});

function updateBg(percentageValue) {
  for (let i = 0; i < AllpercentageInput.length; i++) {
    percentageValue.checked = false;
    AllpercentageInput[i].nextElementSibling.style["background-color"] =
      "#00494d";
    AllpercentageInput[i].nextElementSibling.style.color = "#fff";
  }
}

function calculatetip() {
  let tipAmountValue;
  let totalValue;

  tipAmountValue = amount * (+percentage / 100);
  totalValue = amount + tipAmountValue;

  if (amount && noOfPeople >= 1) {
    tipAmount.textContent = (tipAmountValue / noOfPeople).toFixed(2);
    totalAmount.textContent = (totalValue / noOfPeople).toFixed(2);
    numberOfPeopleInput.classList.remove("error");
  } else {
    tipAmount.textContent = "0.00";
    totalAmount.textContent = "0.00";
  }
}
