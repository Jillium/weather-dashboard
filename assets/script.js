var cityInputEl = document.querySelector(".input");
var submitButton = document.querySelector("#search-btn");
var currentCityEl = document.getElementById("current-city");
// variable for the unordered list
var savedCityEl = document.querySelector("#city-list");








var savedCities = [];


// add dates to current weather and forecast
// fix icon buttons creating a million icons



// function that runs when submit button is clicked 
var submitButtonHandler = function (event) {
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
var getWeather = function (currentCity) {
    // this variable allows user to select a city and creates the url to search for it 
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=imperial&appid=096aee0d213daa88cdc744bebc199f14";
    // fetch request to get info from url we just created 
    fetch(apiUrl).then(function (response) {
        // takes response and changes it into data we can use 
        response.json().then(function (data) {

            var lat = data.coord.lat;
            var lon = data.coord.lon;

            var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=096aee0d213daa88cdc744bebc199f14";

            fetch(apiUrl2).then(function (response) {
                response.json().then(function (data) {
                    console.log(apiUrl2);
                    console.log(data.current.dt);

                    var savedCityObject = {
                        city: currentCity,
                        url: apiUrl2
                    }

                    var unixTimeStamp = data.current.dt
                    var date = new Date(unixTimeStamp * 1000);

                    var formattedDate = "Date: " +date.getDate()+
                    "/"+(date.getMonth()+1)+
                    "/"+date.getFullYear()
                    console.log(formattedDate);

                    
                    

                    


                    savedCities.push(savedCityObject);
                    localStorage.setItem("savedCities", JSON.stringify(savedCities));
                    // add selected city 
                    currentCityEl.textContent = currentCity;
                    
                    var dateEl = document.getElementById("date");
                    dateEl.textContent = formattedDate;
                    // weather icon
                    var icon = data.current.weather[0].icon;
                    var iconLink = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
                    
                    currentCityEl.appendChild(document.createElement("img")).src = iconLink;

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

                    if (data.current.uvi > 6) {
                        uviEl.setAttribute("class", "severe");
                    } 
                    else if (data.current.uvi === 5) {
                        uviEl.setAttribute("class", "moderate");
                    }
                    else if (data.current.uvi < 5) {
                        uviEl.setAttribute("class", "favorable");
                    }


                    // display 5 day forecast to html
                    // day 1 
                    // add icon
                    var icon1 = data.daily[0].weather.icon;
                    
                    var icon1Link = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png";
                    
                    var forcastIcon = document.getElementById("forIcon1");

                    forcastIcon.appendChild(document.createElement("img")).src = icon1Link;
                    
                    var tempElOne = document.getElementById("day1temp");
                    tempElOne.textContent = "Temp: " + data.daily[0].temp.day + " deg F"

                    var windElOne = document.getElementById("day1wind");
                    windElOne.textContent = "Wind: " + data.daily[0].wind_speed + " mph";

                    var humidElOne = document.getElementById("day1humid");
                    humidElOne.textContent = "Humidity: " + data.daily[0].humidity + " %";

                    // display day 2
                    var icon2 = data.daily[1].weather.icon;
                    
                    var icon2Link = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png";
                    
                    var forcastIcon2 = document.getElementById("forIcon2");

                    forcastIcon2.appendChild(document.createElement("img")).src = icon2Link;

                    var tempElTwo = document.getElementById("day2temp");
                    tempElTwo.textContent = "Temp: " + data.daily[1].temp.day + " deg F"

                    var windElTwo = document.getElementById("day2wind");
                    windElTwo.textContent = "Wind: " + data.daily[1].wind_speed + " mph";

                    var humidElTwo = document.getElementById("day2humid");
                    humidElTwo.textContent = "Humidity: " + data.daily[1].humidity + " %";

                    //display day 3
                    var icon3 = data.daily[2].weather.icon;
                    
                    var icon3Link = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png";
                    
                    var forcastIcon3 = document.getElementById("forIcon3");

                    forcastIcon3.appendChild(document.createElement("img")).src = icon3Link;

                    var tempElThree = document.getElementById("day3temp");
                    tempElThree.textContent = "Temp: " + data.daily[2].temp.day + " deg F"

                    var windElThree = document.getElementById("day3wind");
                    windElThree.textContent = "Wind: " + data.daily[2].wind_speed + " mph";

                    var humidElThree = document.getElementById("day3humid");
                    humidElThree.textContent = "Humidity: " + data.daily[2].humidity + " %";

                    // display day 4
                    var icon4 = data.daily[3].weather.icon;
                    
                    var icon4Link = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png";
                    
                    var forcastIcon4 = document.getElementById("forIcon4");

                    forcastIcon4.appendChild(document.createElement("img")).src = icon4Link;
                    var tempElFour = document.getElementById("day4temp");
                    tempElFour.textContent = "Temp: " + data.daily[3].temp.day + " deg F"

                    var windElFour = document.getElementById("day4wind");
                    windElFour.textContent = "Wind: " + data.daily[3].wind_speed + " mph";

                    var humidElFour = document.getElementById("day4humid");
                    humidElFour.textContent = "Humidity: " + data.daily[3].humidity + " %";

                    // display day 5
                    var icon5 = data.daily[4].weather.icon;
                    
                    var icon5Link = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png";
                    
                    var forcastIcon5 = document.getElementById("forIcon5");

                    forcastIcon5.appendChild(document.createElement("img")).src = icon5Link;
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






var getSavedCities = function (savedCities) {

    var savedCities = localStorage.getItem("savedCities");

    if (savedCities) {


        var savedCity = JSON.parse(localStorage.getItem("savedCities"));

        for (var i = 0; i < savedCity.length; i++) {
            

            // variable for list items in unordered list
            var cityListEl = document.createElement("li");
            var savedCityButton = document.createElement("btn");

            // add class to button item
            savedCityButton.className = "city-btn";
            // add text to button item
            savedCityButton.textContent = savedCity[i].city;
            // append button to list item

            cityListEl.appendChild(savedCityButton);
            // append list item to unordered list
            savedCityEl.appendChild(cityListEl);

           
            btns = document.getElementsByClassName("city-btn");
            for (var j = 0; j < btns.length; j++) {
                btns[j].addEventListener("click", function(event) {
                    
                    var current = event.target;

                    console.log("I was clicked");
                    getWeather(current.textContent);
                    })
                
            }
       
        }
      
     
    }
}







getSavedCities();




// event listener for the search button for city search 
submitButton.addEventListener("click", submitButtonHandler)






