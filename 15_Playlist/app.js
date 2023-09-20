const buttonEl = document.querySelector(".bx-chevron-down");
const musicBoxEl = document.querySelectorAll(".music-box");

buttonEl.addEventListener("click",()=>{
    musicBoxEl.forEach(box =>{
        box.classList.toggle("inactive")
    })
})

