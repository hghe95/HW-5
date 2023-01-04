let currentTime = moment().hour()
let saveBtn = document.querySelectorAll(".saveBtn");
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

    saveBtn.addEventListener("click",() => {
        console.log('i clicked the button');
        let hour = $(this).data("id");
        let text = $(this).siblings("textarea").val();
        console.log(hour);
        localStorage.setItem(hour, text);
        console.log(localStorage.getItem(hour));
    });
});    



