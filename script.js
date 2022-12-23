let currentTime = moment().hour()
const saveBtn = document.querySelector(".saveBtn");
document.querySelector(`#currentDay`).textContent = moment().format(`MMM Do YYYY`);
const militaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];


for (let i = 0; i < militaryTime.length; i++) {
    if (currentTime > militaryTime[i]) {
        console.log(i);
        document.getElementById(i).addClass("past");
    } else if (currentTime === militaryTime[i]) {
        console.log(i);
        document.getElementById(i).addClass("present");
    } else if (currentTime < militaryTime[i]) {
        console.log(i);
        document.getElementById(i).addClass("future");
    }

    saveBtn[i].addEventListener("click", function(event) {
        event.preventDefault;
        var id = this.getAttribute("id");
        var text = document.getElementById(id).value;
        localStorage.setItem(id, text);
    });

    if(localStorage.getItem(i)) {
        document.getElementById(i).value = localStorage.getItem(i);
    }
}





