const apiKey = 'c3779ccc2728b3acb9b4b4e142745885';
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('cityInput');

function fetchWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp} C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed}m/s`;
        document.getElementById('description').textContent = data.weather[0].description;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-container').textContent = 'Error fetching weather data.';
      });
  }

  searchButton.addEventListener('click', () => {
    //Event.defaultPrevented();
    const city = cityInput.value;
    fetchWeatherData(city);
  });
