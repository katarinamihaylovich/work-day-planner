var date = moment().format("dddd, MMMM Do");
$("#currentDay").text(date);


//functino to create update time, loop through time-blocks, specify current hour

function hourColor(){
    var currentHour = moment().hours();

    $(".time-block").each(function(){
        var calendarHour = parseInt($(this).attr("id").split('-')[1]);
    
        if (calendarHour < currentHour){
            $(this).addClass("past");
        }
        else if (calendarHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future")
        }
    });
}

hourColor();

//Key is the name, value is the input/items
// 

$(".saveBtn").on("click", function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
});


$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));