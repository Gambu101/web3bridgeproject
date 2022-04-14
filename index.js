let billAmount = document.getElementById("bill_amount");
let noPeople = document.getElementById("people");
let tipAmount = document.getElementById("tip_amount");
let total = document.getElementById("total");
let reset = document.getElementById("reset");
let custom = document.getElementById("custom");
let billing;
let tipPerc;
let nPeople;
let tipResult;
let totalResult;
const tipBtn = [...document.getElementsByClassName("tip_btn")];

tipBtn.forEach((element) => {
  element.addEventListener("click", () => {
    tipPerc = element.value;
    tipPerPerson();
    totalPerPerson();
  });
});

custom.addEventListener("keyup", () => {
  tipPerc = custom.value;
  tipPerPerson();
  totalPerPerson();
});

billAmount.addEventListener("keyup", () => {
  billing = billAmount.value;
});

noPeople.addEventListener("keyup", () => {
  nPeople = noPeople.value;
  tipPerPerson();
  totalPerPerson();
});

const tipPerPerson = () => {
  tipResult = Number(((billing * (tipPerc / 100)) / nPeople).toFixed(2));
  tipAmount.innerHTML = tipResult;
};

const totalPerPerson = () => {
  totalResult = (billing / nPeople + tipResult).toFixed(2);
  total.innerHTML = totalResult;
};
