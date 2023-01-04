let currentTime = moment().hour();
let saveBtn = document.querySelector(".container");
let userEvent = $(`textarea .row`);
document.querySelector(`#currentDay`).textContent = moment().format(`MMM Do YYYY`);
console.log(currentTime);

$(userEvent).each(() => {
    let time = $(this.data("hour"));
    console.log(time);
    if (currentTime > time) {
        $(this).addClass("past");
    } else if (currentTime === time) {
        $(this).addClass("present");
    } else if (currentTime < time) {
        $(this).addClass("future");
    }

    let eventHour = $(this).data("hour");
    let eventTitle = localStorage.getItem(eventHour);
    $(this).val(eventTitle);
});  

saveBtn.addEventListener("click",(event) => {
    console.log(event.target);

    if ($(event.target).hasClass("fa-save")) {
        let button = $(event.target).parent(); //use Jquery's .parent to find parent of event.target.
        let hour = button.attr("id");//Get the id of the parent and save it as hour
        let text = buttont.siblings("textarea").val();//use jquery's .siblings("textarea") of the parent to get the text area
        localStorage.setItem(hour, text);
    }
    if ($(event.target).hasClass("saveBtn")) {
        let hour = $(event.target).attr("id");//Get the id of event.target and save it as hour
        let text = $(event.target).siblings("textarea").val();//use jquery's .siblings("textarea") of event.target to get the text area
        localStorage.setItem(hour, text);
    }
}); 

