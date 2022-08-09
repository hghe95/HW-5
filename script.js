//function to change color of blocks as time passes(past, present, future)
var colorCode = function(){
    let timeblock = document.querySelectorAll(".row");
console.log(timeblock);
console.log(curhour);
console.log("the funciton is running");
for (let i = 0; i < timeblock.length; i++) {
    let curTime = timeblock[i];
    let viewT = curTime.dataset.num;
    console.log(viewT);
    //if statement to compare current hour w/ each color div
    if (curTime.dataset.num < curhour) {
            //set timeblock to have class of past
            console.log(curTime.dataset.num);
            console.log("past");
            $('curTime').addClass("past");
            $('curTime').removeClass("future");
            
    }
    if (curTime.dataset.num == curhour) {
            // set timeblock to have class present
            console.log("present");
    }
    else {
            // set timeblock to have class future
            console.log("future");
    }
    
}

}