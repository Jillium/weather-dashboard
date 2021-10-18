var cityInputEl = document.querySelector(".input");
var submitButton = document.querySelector("#search-btn");
var currentCityEl = document.getElementById("current-city");




// data from api call is dynamically added to page. Current selected city appears and icon appears with weather icon
//temperature, wind, humidity and uv index are dynamically added. UV index background changes color based off of index level
// 5 day forecast for selected city is dynamically added
// current selected city is stored in localstorage 


// function that runs when submit button is clicked 
var submitButtonHandler = function(event) {
    event.preventDefault();
    // get city value from input element
    var currentCity = cityInputEl.value.trim();
    // if they entered a city 
    if (currentCity) {
        // this is running the getCity function 
        getWeather(currentCity);
        cityInputEl.value = "";
        currentCityEl.innerText = currentCity;
        
        
    }
    // if they didn't enter a valid input
    else {
        alert("please enter a city");
    }
    
}


// function to get selected city latitude and longitude info from api call 
var getWeather = function(currentCity) {
    // this variable allows user to select a city and creates the url to search for it 
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=imperial&appid=096aee0d213daa88cdc744bebc199f14";
    // fetch request to get info from url we just created 
    fetch(apiUrl).then(function(response) {
    // takes response and changes it into data we can use 
    response.json().then(function(data) {
        
        var lat = data.coord.lat;
        var lon = data.coord.lon;

        var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=096aee0d213daa88cdc744bebc199f14";

        fetch(apiUrl2).then(function(response) {
            response.json().then(function(data) {

                
                
                // weather icon
                var icon= data.current.weather[0].icon;
                var iconLink = "https://openweathermap.org/img/w/" + icon + ".png";
                console.log(iconLink);
                
                
                
                
                
                // current temp added to html
                var currentTempEl = document.getElementById("temp");
                currentTempEl.textContent = "Temperature: " + data.current.temp + " Degrees";
                
                // wind speed
                var currentWindEl = document.getElementById("wind");
                currentWindEl.textContent = "Wind: " + data.current.wind_speed + " MPH"
                
                //humidity
                var currentHumidityEl = document.getElementById("humidity");
                currentHumidityEl.textContent = "Humidity: " + data.current.humidity + " %"
                
                // uv index
                var uviEl = document.getElementById("uvi");
                uviEl.textContent = "UV Index: " + data.current.uvi 

                
                // display 5 day forecast to html
                // day 1 
                // add icon
                var tempElOne = document.getElementById("day1temp");
                tempElOne.textContent = "Temp: " + data.daily[0].temp.day + " deg F"

                var windElOne = document.getElementById("day1wind");
                windElOne.textContent = "Wind: " + data.daily[0].wind_speed + " mph";

                var humidElOne = document.getElementById("day1humid");
                humidElOne.textContent = "Humidity: " + data.daily[0].humidity + " %";

                // display day 2
                var tempElTwo = document.getElementById("day2temp");
                tempElTwo.textContent = "Temp: " + data.daily[1].temp.day + " deg F"

                var windElTwo = document.getElementById("day2wind");
                windElTwo.textContent = "Wind: " + data.daily[1].wind_speed + " mph";

                var humidElTwo = document.getElementById("day2humid");
                humidElTwo.textContent = "Humidity: " + data.daily[1].humidity + " %";

                //display day 3
                var tempElThree = document.getElementById("day3temp");
                tempElThree.textContent = "Temp: " + data.daily[2].temp.day + " deg F"

                var windElThree = document.getElementById("day3wind");
                windElThree.textContent = "Wind: " + data.daily[2].wind_speed + " mph";

                var humidElThree = document.getElementById("day3humid");
                humidElThree.textContent = "Humidity: " + data.daily[2].humidity + " %";

                // display day 4
                var tempElFour = document.getElementById("day4temp");
                tempElFour.textContent = "Temp: " + data.daily[3].temp.day + " deg F"

                var windElFour = document.getElementById("day4wind");
                windElFour.textContent = "Wind: " + data.daily[3].wind_speed + " mph";

                var humidElFour = document.getElementById("day4humid");
                humidElFour.textContent = "Humidity: " + data.daily[3].humidity + " %";

                var tempElFive = document.getElementById("day5temp");
                tempElFive.textContent = "Temp: " + data.daily[4].temp.day + " deg F"

                var windElFive = document.getElementById("day5wind");
                windElFive.textContent = "Wind: " + data.daily[4].wind_speed + " mph";

                var humidElFive = document.getElementById("day5humid");
                humidElFive.textContent = "Humidity: " + data.daily[4].humidity + " %";
                
                
                
            })
        })
        
        
    });
    });
    
    

};

var displayWeather = function(getWeather) {

   
}







// event listener for the search button for city search 
 submitButton.addEventListener("click", submitButtonHandler) 






// event listener for all of the city buttons after they are created 
btns = document.getElementsByClassName("city-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        console.log("i was clicked");
    })
}