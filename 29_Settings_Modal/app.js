const check = document.querySelectorAll(".border")

check.forEach((e) => {
    const circle = e.children[0]
    const div = e.closest(".settings")
    if(circle.classList.contains("off")){
        div.classList.add("off")
    }
    e.addEventListener("click", () => {
        circle.classList.toggle("off")
        div.classList.toggle("off")
    })
    
})







