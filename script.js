let currentTime = moment().hour()
const saveBtn = document.querySelectorAll(`.saveBtn`);
document.querySelector(`#currentDay`).textContent = moment().format(` MMM Do YYYY`);
const militaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];


localStorage.getItem(`myEvent`);
for (let i = 0; i < militaryTime.length; i++) {
    if (currentTime > militaryTime[i]) {
        console.log(`Current hour is ${i}`);
        
    }
    if (currentTime === militaryTime[i]) {
        console.log(`Current hour is ${i}`);

    }
    if (currentTime < militaryTime[i]) {
        console.log(`Current hour is ${i}`);
    }
}





