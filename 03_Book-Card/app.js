const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".fa-xmark");
const book = document.querySelector(".book-container");
const shareBtn = document.querySelector(".fa-share-nodes")
const shareMenu = document.querySelector(".share_menu")
const socials = document.querySelectorAll(".socials")




openBtn.addEventListener("click", () => {
    openBtn.classList.add("off");
    book.classList.remove("off");
    shareMenu.classList.remove("active");   
})

closeBtn.addEventListener("click", () => {
    openBtn.classList.remove("off");
    book.classList.add("off");
})

shareBtn.addEventListener("click", () => {
   if(shareMenu.classList.contains("active")){
    shareMenu.classList.remove("active")
   } else {
    shareMenu.classList.add("active")
   }
})


socials.forEach(social => {
    social.addEventListener("click", () =>  {
        alert("Thank you for sharing my project.");
    })
});



