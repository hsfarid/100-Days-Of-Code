const inputElement = document.querySelector(".js-amount-input");
const selectElement = document.querySelector("#select");
const balanceElement = document.querySelector(".js-account-balance");
const info = document.querySelector(".info");

const showResult = () => {
  let account_balance;
  amount = Number(inputElement.value);
  if (selectElement.value === "1") {
    balanceElement.innerHTML = account_balance;
    console.log(account_balance, typeof amount);
  }
  if (selectElement.value === "2") {
    if (amount < 0) {
      info.innerHTML = "Amount must be greater than zero(0)!";
    } else {
      account_balance += amount;
      balanceElement.innerHTML = account_balance;
    }
  }
  if (selectElement.value === "3") {
    if (amount > account_balance) {
      info.innerHTML = "Insufficient funds!";
    } else if (amount < 0) {
      info.innerHTML = "Enter a valid amount";
    } else {
      account_balance -= amount;
      balanceElement.innerHTML = account_balance;
    }
  }
};
