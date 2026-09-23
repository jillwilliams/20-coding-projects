const amountEl = document.getElementById("amount")
const rateEl = document.getElementById("rate")
const monthsEl = document.getElementById("months")
const calculateBtnEl = document.getElementById("calculate-btn")
const resultEl = document.getElementById("result")


function getAmount() {
    const amount = amountEl.value
    const rate = rateEl.value
    const months = monthsEl.value
    
    const r = ((rate / 100) / months)

    const monthlyAmount = (((amount * r) * (1 + r)**months) / (((1 + r)**months) - 1)).toFixed(2)

    resultEl.innerText = "Your payment per month is $ " + monthlyAmount
}

calculateBtnEl.addEventListener("click", getAmount)

// loan formula:

// Monthly payment = (P * r(1 + r)^n) / ((1 + r)^n) -1