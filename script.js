
document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "YOUR_API_KEY"; // Replace with key
    const weatherData = document.getElementById("weatherData");
    const forecastData = document.getElementById("forecastData");
    const cityInput = document.getElementById("cityInput");
    const searchBtn = document.getElementById("searchBtn");

    
    async function getCurrentWeather(city) {
        try {
            const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle`);
            const data = await response.json();

            
            weatherData.innerHTML = `
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } catch (error) {
            console.error("Error fetching current weather data:", error);
            weatherData.innerHTML = "City not found";
        }
    }

    
    async function getWeatherForecast(city) {
        try {
            const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle`);
            const data = await response.json();

            // Display 5-day forecast data
            forecastData.innerHTML = "";
            for (let i = 0; i < data.list.length; i += 8) {
                const forecast = data.list[i];
                forecastData.innerHTML += `
                    <div class="forecast-item">
                        <p>Date: ${forecast.dt_txt}</p>
                        <p>Max Temp: ${forecast.main.temp_max} &#8451;</p>
                        <p>Min Temp: ${forecast.main.temp_min} &#8451;</p>
                        <p>Weather: ${forecast.weather[0].description}</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error("Error fetching forecast data:", error);
            forecastData.innerHTML = "Forecast data not available";
        }
    }

    
    searchBtn.addEventListener("click", () => {
        const city = cityInput.value.trim();
        if (city !== "") {
            getCurrentWeather(city);
            getWeatherForecast(city);
        }
    });
});
