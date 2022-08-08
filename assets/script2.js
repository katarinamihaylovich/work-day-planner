var date = moment().format("dddd, MMMM Do");
$("#currentDay").text(date);

var userInputEl = $("#input");
var userInput = userInputEl.val().trim();

function printUserInfo(){
    var planning = $("")
}