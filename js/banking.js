function doubleIt(num) {
    const result = num * 2;
    return result;
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    const depositTotal = document.getElementById('deposit-total');
    const depositeTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositeTotal);

    depositTotal.innerText = previousDepositTotal + depositAmount;
    depositInput.value = '';
})

// handle withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmountText = withdrawInput.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const privousWithdrawTotalText = withdrawTotal.innerText;
    const privousWithdrawTotal = parseFloat(privousWithdrawTotalText);

    withdrawTotal.innerText = privousWithdrawTotal + withdrawAmountText;

    withdrawInput.value = '';

})