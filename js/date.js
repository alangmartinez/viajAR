async function showTime () {
    const date = new Date();

    let hours = await date.getHours();
    let minutes = await date.getMinutes();
    let seconds = await date.getSeconds();
    
    // Add AM : PM system
    let amPm = (hours < 12) ? "AM" : "PM";
    
    // Convert hours to 12-hours format
    hours = (hours > 12) ? hours - 12 :  hours;

    // Taking zeros to the left
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    
    const timeContainer = document.getElementById("time-container");
    
    timeContainer.innerHTML = `<div class="time">
    ${hours}:${minutes}:<span class="seconds">${seconds}</span>
    </div>
    <div class="am-pm">${amPm}</div>
    `;
}

setInterval(showTime,1000);

// Weather

const API_KEY = "5431adfd8102483dbcc5b0d4649f6348";

function getWeatherData () {

    try{
        // Get the geolocation of the current user navigator
        navigator.geolocation.getCurrentPosition(success => {
            let { latitude, longitude } = success.coords;
    
                // Calling the API URL
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
                .then(res => res.json())
                .then(weatherData => {
                    console.log(weatherData);
                    
                    showWeather(weatherData);
                    });
            });
    }catch(err){
        console.log(err);
        alert("A problem has ocurred");
    }
};
getWeatherData();

function showWeather(data) {
    let { temp, temp_max, temp_min, feels_like, humidity} = data.main;

    const weatherContainer = document.getElementById("weather-container");
    
    weatherContainer.innerHTML = `<div class="location">${data.name}, ${temp}ºC</div>`;
}