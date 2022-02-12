let container = document.querySelector('.container');
let form = document.querySelector('form');
form.addEventListener('submit', getWeather);

let cityNameDisplay = document.createElement('p');
cityNameDisplay.classList.add('city');

let temperature = document.createElement('p');
temperature.classList.add('temperature');

let feelsLike = document.createElement('p');
feelsLike.classList.add('feelsLike');

let windSpeed = document.createElement('p');
windSpeed.classList.add('wind');

let description = document.createElement('p');
description.classList.add('description');


function getWeather(e) {
    e.preventDefault();
    let location = document.querySelector('#textbox').value;
    fetch(`http://api.weatherapi.com/v1/current.json?key=cb61f1341dfa488795743744222901&q=${location}&aqi=yes`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            if (data.location.name) {
                addCityName(data.location.name)
                addTemperature(data.current.temp_c)
                addFeelsLike(data.current.feelslike_c)
                addWindSpeed(data.current.gust_kph)
                addDescription(data.current.condition.text)
            } else{
                alert('Please Enter City / ZIP code or Something went wrong!.');
            }
        })
}

function addCityName(cityName) {
    // console.log(cityName);
    cityNameDisplay.textContent = cityName;
    container.appendChild(cityNameDisplay);
}

function addTemperature(temp) {
    // console.log(Math.floor(temp));
    temperature.textContent = `${Math.floor(temp)}°C`;
    container.appendChild(temperature);
}

function addFeelsLike(tenp) {
   // console.log(Math.floor(tenp));
    feelsLike.textContent = `Feels like ${Math.floor(tenp)}°C`;
    container.appendChild(feelsLike);
}

function addWindSpeed(wind) {
    // console.log(Math.floor(wind));
    windSpeed.innerHTML = `<i class="fas fa-wind"></i> ${wind} km/h`;
    container.appendChild(windSpeed);
}

function addDescription(desc) {
    // console.log(desc);
    description.textContent = desc;
    container.appendChild(description);
}


// ---------------------- Random Color ----------------------

let colors = ['blue', 'gold', 'greenyellow', 'orange'];

let button = document.getElementById('btn');

button.addEventListener('click', function(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    let body = document.querySelector('body');
    body.style.background = randomColor;
});

