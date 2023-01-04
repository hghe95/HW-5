let currentTime = moment().hour();
//let container = document.querySelector(".container");
document.querySelector(`#currentDay`).textContent = moment().format(`MMM Do YYYY`);
console.log(currentTime);
let timeBlocks = $(".description");

// container.addEventListener("click",(event) => {
//     console.log(event.target);

//     if ($(event.target).hasClass("fa-save")) {
//         let button = $(event.target).parent(); //use Jquery's .parent to find parent of event.target.
//         let hour = button.attr("id");//Get the id of the parent and save it as hour
//         let text = button.siblings("textarea").val();//use jquery's .siblings("textarea") of the parent to get the text area
//         localStorage.setItem(hour, text);
//     }
//     if ($(event.target).hasClass("saveBtn")) {
//         let hour = $(event.target).attr("id");//Get the id of event.target and save it as hour
//         let text = $(event.target).siblings("textarea").val();//use jquery's .siblings("textarea") of event.target to get the text area
//         localStorage.setItem(hour, text);
//     }
// }); 
for(let i=9;i<=17;i++) {
    let stored = localStorage.getItem(i);
    $("#"+i).siblings(".description").val(stored);
}

console.log(timeBlocks);

for(let i=0;i<9;i++) {
    if (i+9<currentTime) {
        timeBlocks[i].classList.add("past");
    } else if (i+9==currentTime){ 
        timeBlocks[i].classList.add("present");
        console.log(i);
    } else {
        timeBlocks[i].classList.add("future");
        console.log(i);
    }
}

$('.saveBtn').on('click',function(){
    let hour = $(this).siblings(".time-block").attr("id")
    let text = $(this).siblings(".description").val()
    console.log(hour,text)
    localStorage.setItem(hour,text)
})

