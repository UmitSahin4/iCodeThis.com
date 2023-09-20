const input = document.querySelector('input[type="range"]');
const adress = document.querySelector(".adress");
const offBtn = document.querySelector(".fa-power-off");
const radio = document.querySelector(".radio");
const radioSave = document.querySelector(".radio-save");
const radioInfo = document.querySelector(".radio-info");
const nextBtn = document.querySelector(".fa-chevron-right");
const prevBtn = document.querySelector(".fa-chevron-left");



input.addEventListener("input", e => {
    let value = e.target.value
    adress.innerHTML= value
})


offBtn.addEventListener("click", () => {
    radio.classList.toggle("off");
    radioSave.classList.toggle("off");
    radioInfo.classList.toggle("off");
})

nextBtn.addEventListener("click", () => {
   let adres = input.value = parseFloat(input.value) + 1.5;
   adress.innerHTML = adres 
   
})

prevBtn.addEventListener("click", () => {
    let adres = input.value = parseFloat(input.value) - 1.5;
    adress.innerHTML = adres 
})