"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(results) {
    //set fortune equal to results for clarity, h/e in this particular fxn, we could pass 
    //results directly
    var fortune = results;
    $("#fortune-text").html(fortune);
}

function showFortune(evt) {
    // TODO: get the fortune and show it in the #fortune-text div
    $.get("/fortune", replaceFortune);

}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function replaceZip(results) {

    $("#weather-info").html(results.forecast);

}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    $.get(url, replaceZip);

    // TODO: request weather with that URL and show the forecast in #weather-info

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


