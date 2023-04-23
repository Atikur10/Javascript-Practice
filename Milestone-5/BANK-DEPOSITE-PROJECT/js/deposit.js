document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = "";

    if (isNaN(newDepositAmount)) {
      alert('Please Provide a Valid Number')
      return;
    }

    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalAmount = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotalAmount + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const totalBalance = document.getElementById("balance-total");
    const totalBalanceString = totalBalance.innerText;
    const previousBalanceTotal = parseFloat(totalBalanceString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    totalBalance.innerText = currentBalanceTotal;

  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = "";

    if (isNaN(newWithdrawAmount)) {
      alert('Please Provide a Valid Number')
      return;
    }

    const depositTotalElement = document.getElementById("withdraw-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalAmount = parseFloat(previousDepositTotalString);

    const totalBalance = document.getElementById("balance-total");
    const totalBalanceString = totalBalance.innerText;
    const previousBalanceTotal = parseFloat(totalBalanceString);
    
    if (newWithdrawAmount > previousBalanceTotal) {
      alert('Insufficient Balance')
      return;
    }

    const currentDepositTotal = previousDepositTotalAmount + newWithdrawAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    totalBalance.innerText = currentBalanceTotal;

    
  });
