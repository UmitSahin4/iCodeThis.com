const novBtn = document.querySelector(".nov-btn");
const decBtn = document.querySelector(".dec-btn");
const title = document.querySelectorAll(".title")


novBtn.addEventListener("click", () => {
    novBtn.classList.add("active")
    decBtn.classList.remove("active")
    title.forEach((t)=> {
        t.innerHTML = "NOV"
    })
    
})

decBtn.addEventListener("click", () => {
    decBtn.classList.add("active")
    novBtn.classList.remove("active")
    title.forEach((t)=> {
        t.innerHTML = "DEC"
    })
})

