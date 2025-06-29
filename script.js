// async function getWeather() {
//     const city = document.getElementById("cityInput").value;
//     const apiKey = "7d7866299d47f146ecb0b2c5fe0f0b51"; 
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     const response = await fetch(url);
//     const data = await response.json();
  
//     if (data.cod === 200) {
//       const result = `
//         <h2>${data.name}, ${data.sys.country}</h2>
//         <p>Temperature: ${data.main.temp} °C</p>
//         <p>Weather: ${data.weather[0].main}</p>
//         <p>Humidity: ${data.main.humidity}%</p>
//         <p>Wind Speed: ${data.wind.speed} m/s</p>
//       `;
//       document.getElementById("weatherResult").innerHTML = result;
//     } else {
//       document.getElementById("weatherResult").innerHTML = <p>City not found.</p>;
//     }
//   }
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "7d7866299d47f146ecb0b2c5fe0f0b51";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        const result = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].main}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById("weatherResult").innerHTML = result;
      } else {
        document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
      }
    } catch (error) {
      document.getElementById("weatherResult").innerHTML = `<p>Something went wrong. Please try again later.</p>`;
      console.error("Error fetching weather:", error);
    }
  }
  