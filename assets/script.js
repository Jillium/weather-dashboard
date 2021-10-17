



document.getElementById("search-btn").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("click click");
})






// event listener for all of the city buttons after they are created 
btns = document.getElementsByClassName("city-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        console.log("i was clicked");
    })
}