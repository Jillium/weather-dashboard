var cityInputEl = document.querySelector(".input");
var submitButton = document.querySelector("#search-btn");



// user types city into search
// search button is clicked which does the api call. api call returns data on city that is searched
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

    if (currentCity) {
        getWeather(currentCity);
        cityInputEl.value = "";
        
    }
    else {
        alert("please enter a city");
    }
}


// function to get selected city info from api call 
var getWeather = function(currentCity) {
    // this variable allows user to select a city and creates the url to search for it 
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=096aee0d213daa88cdc744bebc199f14";
    // fetch request to get info from url we just created 
    fetch(apiUrl).then(function(response) {
    // takes response and changes it into data we can use 
    response.json().then(function(data) {
        console.log(data);
        
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