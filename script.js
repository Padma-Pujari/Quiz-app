// Getting all required elements//
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");


//If start quiz button clicked

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //showing the info-box
}

//If Exit button clicked

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hiding the info box
}

//If Continue button clicked

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hiding the info box
    quiz_box.classList.add("activeQuiz"); //hiding the quiz box
}
