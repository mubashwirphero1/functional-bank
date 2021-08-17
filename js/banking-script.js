function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const newInputText = inputValue.value;
    const newInputAmount = parseFloat(newInputText);

    inputValue.value = "";

    return newInputAmount;
}

function getTotalAmount(amountId, newInputAmount) {
    const previousAmountText = document.getElementById(amountId).innerText;
    const previousAmountNumber = parseFloat(previousAmountText);

    const totalAmountNumber = previousAmountNumber + newInputAmount;

    return totalAmountNumber;
}

function updateBankBalance(amountTotal, isAdd) {
    const totalBalanceText = document.getElementById("total-balance").innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    if (isAdd == true) {
        const totalBankBalance = amountTotal + totalBalanceAmount;
        // console.log(totalBankBalance);

        return totalBankBalance;
    }
    else {
        const totalBankBalance = totalBalanceAmount - amountTotal;

        return totalBankBalance;
    }
}


// Handle deposit button event
document.getElementById("deposit-submit").addEventListener('click', function () {

    // Total deposit amount
    const newDepositAmount = getInputValue("deposit-amount");

    if (newDepositAmount > 0 && typeof newDepositAmount == 'number') {
        const totalDepositAmount = getTotalAmount("deposit-total", newDepositAmount);

        document.getElementById("deposit-total").innerText = totalDepositAmount;

        // Update bank balance
        const totalBankBalance = updateBankBalance(newDepositAmount, true);
        document.getElementById("total-balance").innerText = totalBankBalance;

        document.getElementById('error-throw-deposit').innerText = '';
    }
    else {
        document.getElementById('error-throw-deposit').innerText = 'Please enter a positive amount';
    }
})

// Handle withdraw button event
document.getElementById("withdraw-submit").addEventListener('click', function () {
    // Total withdraw amount
    const newWithdrawAmount = getInputValue("withdraw-amount")

    const totalBankBalance = updateBankBalance(newWithdrawAmount, false);

    if (newWithdrawAmount <= totalBankBalance) {
        const totalWithdrawAmount = getTotalAmount("withdraw-balance", newWithdrawAmount);

        document.getElementById("withdraw-balance").innerText = totalWithdrawAmount;

        // Update bank balance
        document.getElementById("total-balance").innerText = totalBankBalance;

        document.getElementById('error-throw-withdraw').innerText = '';
    }
    else if (newWithdrawAmount > 0 && typeof newWithdrawAmount == 'number') {
        const totalWithdrawAmount = getTotalAmount("withdraw-balance", newWithdrawAmount);

        document.getElementById("withdraw-balance").innerText = totalWithdrawAmount;

        // Update bank balance
        document.getElementById("total-balance").innerText = totalBankBalance;

        document.getElementById('error-throw-withdraw').innerText = '';
    }
    else {
        document.getElementById('error-throw-withdraw').innerText = 'Please enter a positive amount of money that you have in your account.';
    }
})