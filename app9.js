const apikey = "d6639efb7f3a4720946727bab20f1eaf"
const weatherDataEl = document.getElementById("weather-data")
const cityInputEl = document.getElementById("city-input")
const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    const cityValue = cityInputEl.value
    getWeatherData(cityValue)
})

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=imperial`)
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        const data = await response.json()

        const temperature = Math.round(data.main.temp)

        const description = data.weather[0].description

        const icon = data.weather[0].icon

        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}°F`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} mph`,    
        ]

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`

        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°F`

        weatherDataEl.querySelector(".description").textContent = description

        weatherDataEl.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("")
    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = " "

        weatherDataEl.querySelector(".temperature").textContent = " "

        weatherDataEl.querySelector(".description").textContent = "An error happened. Please try again. "

        weatherDataEl.querySelector(".details").innerHTML = " "
    }
}


















