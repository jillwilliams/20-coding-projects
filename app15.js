const feetEl = document.getElementById("feet")
const inchesEl = document.getElementById("inches")
const weightEl = document.getElementById("weight")
const claculateButtonEl = document.getElementById("calculate")
const answerBmiEl = document.getElementById("answer")
const weightConditionEl = document.getElementById("weight-condition")


function calculateBmi() {
    const feet = feetEl.value
    const inches = inchesEl.value
    const weight = weightEl.value
    
    const gotFeet = parseFloat(feet)
    const gotInches = parseFloat(inches)
    const gotWeight = parseFloat(weight)

    const heightInInches = gotFeet * 12
    const totalHeight = heightInInches + gotInches
    const Bmi = ((gotWeight / (totalHeight * totalHeight)) * 702).toFixed(1)

    answerBmiEl.innerText = "Your BMI is " + Bmi

    if (Bmi < 18.5) {
        weightConditionEl.innerText = "You weight condition is: underweight"
    } else 
        if (18.6 < Bmi && Bmi < 25) {
            weightConditionEl.innerText = "You weight condition is: healthy"
    } else 
        if (25.1 < Bmi && Bmi < 30) {
            weightConditionEl.innerText = "You weight condition is: overweight"
    } else 
        if (Bmi > 30) {
            weightConditionEl.innerText = "You weight condition is: obese"
    }
}

claculateButtonEl.addEventListener("click", calculateBmi)
