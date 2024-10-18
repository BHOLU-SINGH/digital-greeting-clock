function clock(){
    var date, hours, minutes, seconds, midday, name;
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    midday;
    name = ": Bholu Singh"

    midday = (hours >= 12) ? "PM" : "AM";

    document.getElementById('clock').innerHTML = "<span>"+hours+"</span>" + ":" + "<span>"+minutes+"</span>" + ":" + "<span>"+seconds+"</span>" + "<span>"+midday+"</span>";

    var time = setTimeout(function(){
        clock();
    }, 1000);

    // Good Morning, Good Afternoon, Evening
    if(hours < 12){
        var greeting = "Good Morning " + name + " Hurry Up!";
    }
    if(hours >= 12 && hours <= 16){
        var greeting = "Good Afternoon " + name;
    }
    if(hours > 16 && hours <= 19){
        var greeting = "Good Evening " + name;
    }
    if(hours > 19 && hours <= 24){
        var greeting = "Good Night " + name;
    }
    document.getElementById('greeting').innerHTML = greeting;
}
// Call Clock function
clock();