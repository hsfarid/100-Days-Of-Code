//get html elements
const formContainer = document.querySelector(".js-form-container");
const inputString = document.querySelector(".js-input-string");
const outputScreen = document.querySelector(".js-output-screen span");

//function that counts the characters
const updateCount = (value) => {
  outputScreen.innerHTML = value.length;
};
inputString.addEventListener("keyup", (e) => {
  char = e.target.value;

  //   let total = 0;
  let array1 = [];
  array1.push(char);

  let total = 1;
  for (i = 0; i < array1.length; i++) {
    array1.forEach((char) => {
      console.log(i);
    });
  }
});

//get the value of the input string
formContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = inputString.value;
  updateCount(value);

  formContainer.reset();
});
