import "./styles.css";
const birthDate = document.querySelector("#date");
const luckyNumber = document.querySelector("#lucky-number");
const btnCheck = document.querySelector("#btn-check");
const result = document.querySelector("#msg");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    result.innerText = "Your birthday is lucky 🚀";
  } else {
    result.innerText = "Your birthday is not lucky 🤒";
  }
}

function checkBirthDateIsLucky() {
  const dob = birthDate.value;
  const sum = calSum(dob);
  if (sum && dob) compareValues(sum, luckyNumber.value);
  else result.innerText = "Please enter both the fields 😡";
}

function calSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}
btnCheck.addEventListener("click", function getValues() {
  // console.log(birthDate.value, luckyNumber.value);
  checkBirthDateIsLucky();
});
