const headerEl = document.querySelectorAll(".menu-header");

headerEl.forEach((header)=> {
    let list = header.nextElementSibling
    let icon = header.children[1].children[0]
    header.addEventListener("click",(e)=>{
        list.classList.toggle("hide")
        icon.classList.toggle("fa-plus")
        icon.classList.add("fa-minus")
        
    })
})



