let currentTime = moment().hour()
const saveBtn = document.querySelectorAll(`.saveBtn`);
document.querySelector(`#currentDay`).textContent = moment().format(`MMM Do YYYY`);
const militaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
localStorage.getItem(`scheduledEvent`);

for (let i = 0; i < militaryTime.length; i++) {
    if (currentTime > militaryTime[i]) {
        console.log(`Current hour is ${i}`);
        document.getElementById(i).addClass("past");
    } else if (currentTime === militaryTime[i]) {
        console.log(`Current hour is ${i}`);
        document.getElementById(i).addClass("present");
    } else if (currentTime < militaryTime[i]) {
        console.log(`Current hour is ${i}`);
        document.getElementById(i).addClass("future");
    }

    if (localStorage.getItem(i)) {
        document.getElementById(i).value = localStorage.getItem(i);
    }

    saveBtn[i].addEventListener("click",function(){
        var id = this.getAttribute("data-id");
        var text = document.getElementById(id).value;
         localStorage.setItem(id,text);
        console.log(text);
    })
}

saveBtn.addEventListener("click", function(event) {
    let x = event.target;
    console.log(x);
    localStorage.setItem("scheduledEvent", $(`textarea`))
})



