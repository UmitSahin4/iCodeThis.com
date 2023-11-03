const comments = document.querySelector(".comment")
const commentsClose = document.querySelector(".close")
const commentsModal = document.querySelector(".hide")

comments.addEventListener("click" , ()=> {
    commentsModal.classList.add("open")
})

commentsClose.addEventListener("click", () => {
    commentsModal.classList.remove("open")
})





