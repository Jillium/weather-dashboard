var cityInputEl = document.querySelector(".input");
var submitButton = document.querySelector("#search-btn");






// data from api call is dynamically added to page. Current selected city appears and icon appears with weather icon
//temperature, wind, humidity and uv index are dynamically added. UV index background changes color based off of index level
// 5 day forecast for selected city is dynamically added
// button is created to recall selected city at a future time. 
// current selected city is stored in localstorage 


// function that runs when submit button is clicked 
var submitButtonHandler = function(event) {
    event.preventDefault();
    // get city value from input element
    var currentCity = cityInputEl.value.trim();
    // if they entered a city 
    if (currentCity) {
        // this is running the getCity function 
        getCity(currentCity);
        cityInputEl.value = "";
        
    }
    // if they didn't enter a valid input
    else {
        alert("please enter a city");
    }
    
}


// function to get selected city latitude and longitude info from api call 
var getCity = function(currentCity) {
    // this variable allows user to select a city and creates the url to search for it 
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=imperial&appid=096aee0d213daa88cdc744bebc199f14";
    // fetch request to get info from url we just created 
    fetch(apiUrl).then(function(response) {
    // takes response and changes it into data we can use 
    response.json().then(function(data) {
        console.log(data.coord.lat);
        console.log(data.coord.lon);
        var lat = data.coord.lat;
        var lon = data.coord.lon;

        var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=096aee0d213daa88cdc744bebc199f14";

        fetch(apiUrl2).then(function(response) {
            response.json().then(function(data) {
                console.log(data);
                console.log(data.current.temp);
                console.log(data.current.wind_speed);
                console.log(data.current.humidity);
                console.log(data.current.uvi);
            })
        })
        
        
    });
    });
    
    

};







// event listener for the search button for city search 
 submitButton.addEventListener("click", submitButtonHandler) 






// event listener for all of the city buttons after they are created 
btns = document.getElementsByClassName("city-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        console.log("i was clicked");
    })
}