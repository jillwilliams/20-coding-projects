const celciusEl= document.getElementById("celcius")
const fahrenheitEl = document.getElementById("fahrenheit")
const kelvinEl = document.getElementById("kelvin")
const convertBtnEl = document.getElementById("convert-btn")


function calculateTheValues() {
    const celcius = celciusEl.value.trim()
    const fahrenheit = fahrenheitEl.value.trim()
    const kelvin = kelvinEl.value.trim()    
    
    if (celcius !== "") {
        const getCelcius = parseFloat(celciusEl.value)
        fahrenheitEl.value = (getCelcius * 9 / 5 + 32).toFixed(2)
        kelvinEl.value = ((getCelcius + 273.15)).toFixed(2)

    } else if (fahrenheit !== "") {
        const getFahrenheit = parseFloat(fahrenheitEl.value)
        celciusEl.value = (((getFahrenheit - 32) * 5) / 9).toFixed(2)
        kelvinEl.value = (((getFahrenheit - 32) * 5) / 9 + 273.15).toFixed(2)
    } else  if (kelvin !== "") {
        const getKelvin = parseFloat(kelvinEl.value)
        celciusEl.value = (getKelvin - 273.15).toFixed(2)
        fahrenheitEl.value = ((getKelvin - 273.15) * 1.8 + 32).toFixed(2)
    }
}
    


convertBtnEl.addEventListener("click", calculateTheValues)



// function gotCelcius() {
//     const getCelcius = parseFloat(celciusEl.value)
//     const value1 = (getCelcius * 9 / 5) + 32
//     const value2 = getCelcius + 273.15
//     fahrenheitEl.value = value1.toFixed(2)
//     kelvinEl.value = value2.toFixed(2)
// }


// function gotFahrenheit() {
//     const getFahrenheit = parseFloat(fahrenheitEl.value)
//     const value1 = (getFahrenheit - 32) * 5 / 9
//     const value2 = ((getFahrenheit - 32) * 5 / 9) + 273.15
//     celciusEl.value = value1.toFixed(2)
//     kelvinEl.value = value2.toFixed(2)
// }

// function gotKelvin() {
//     const getKelvin = parseFloat(kelvinEl.value)
//     const value1 = getKelvin - 273.15
//     const value2 = ((getKelvin - 273.15) * 1.8) + 32
//     celciusEl.value = value1.toFixed(2)
//     fahrenheitEl.value = value2.toFixed(2)
// }

// convertBtnEl.addEventListener("click", calculateTheValues)
