const boxs = document.querySelectorAll(".animation");

boxs.forEach((box, idx) => {
    setTimeout(()=> {
        box.classList.remove("animation")
    },idx * 400)
})