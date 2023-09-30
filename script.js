document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("locationInput");
    const searchButton = document.getElementById("searchButton");
    const locationName = document.getElementById("locationName");
    const temperature = document.getElementById("temperature");
    const weatherDescription = document.getElementById("weatherDescription");

    searchButton.addEventListener("click", function () {
        const query = locationInput.value;

        
        const apiKey = 'YOUR_API_KEY';
        const apiUrl = `https://api.api-ninjas.com/v1/weather?location=${query}&apikey=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                locationName.textContent = data.location;
                temperature.textContent = data.temperature + "°C";
                weatherDescription.textContent = data.description;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                locationName.textContent = "Location not found";
                temperature.textContent = "";
                weatherDescription.textContent = "";
            });
    });
});
