let currentTime = moment().hour()
const saveBtn = document.querySelector(".saveBtn");
let userEvent = $(`textarea .row`);
document.querySelector(`#currentDay`).textContent = moment().format(`MMM Do YYYY`);
console.log(currentTime);


$(userEvent).each(() => {
    let hour = $(this.data("id"));
    if (currentTime > hour) {
        $(this).addClass("past");
    } else if (currentTime === hour) {
        $(this).addClass("present");
    } else if (currentTime < hour) {
        $(this).addClass("future");
    }
});    

saveBtn[i].on("click", function() {
    const btnId = $(this).data("btnId");
    const text = $(this).siblings("textarea").val();
    localStorage.setItem(btnId, text);
    console.log(text);
});

if(localStorage.getItem(i)) {
    document.getElementById(i).val() = localStorage.getItem(i);
}

