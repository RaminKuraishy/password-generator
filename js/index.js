const passwordInput = document.querySelector(".password-box input"),
  copyIcon = document.querySelector(".password-box .copy-icon"),
  rangeInput = document.querySelector(".range-box input"),
  sliderNumber = document.querySelector(".range-box .slider-number"),
  generateBtn = document.querySelector(".generate-btn");

let allCharacters =
  "abcdefghijklmnopqrstuvxyzABCDIFGHIJKLMNOPQRSTUVYXYZ123456789!$%&|[](){}:;.,*+=#@<>";
const generatePassword = () => {
  let newPass = "";
  for (let i = 0; i < rangeInput.value; i++) {
    let randomNumbers = Math.floor(Math.random() * allCharacters.length);
    newPass += allCharacters[randomNumbers];
    passwordInput.value = newPass;
    copyIcon.classList.replace("fa-clipboard", "fa-copy");
  }
};
rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePassword();
});
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.classList.replace("fa-copy", "fa-clipboard");
});
generatePassword();
generateBtn.addEventListener("click", generatePassword);
