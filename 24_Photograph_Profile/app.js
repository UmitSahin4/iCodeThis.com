const images = document.querySelectorAll(".img");
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close")



const openModal = (url) => {
    let img = `<img src="${url}" alt="">`
    modal.insertAdjacentHTML("afterbegin",img);
    modal.classList.add("active")
    
}

const closeModal = () => {
    modal.children[0].remove();
    modal.classList.remove("active")
}


closeBtn.addEventListener("click",closeModal)
    
    

images.forEach((img) => {
    img.addEventListener("click", ()=> {
        let url = img.currentSrc;
        openModal(url)
    })
})


