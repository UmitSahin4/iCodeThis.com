const inputEl = document.querySelector("input");
const buttonsEl = document.querySelectorAll(".num");
const deleteBtn= document.getElementById("delete")
const callBtn = document.getElementById("call")
const addBtn = document.getElementById("add")
const nameEl = document.querySelector("h2")


const calling = () => {
    if(inputEl.value !== ''){
        alert(`CALL : ${inputEl.value}`)
    }
    return
}

callBtn.addEventListener("click", calling);

const adding = () => {
    if(inputEl.value !== '') {
        let name = prompt("Name");
         name && alert(`Added :  ${name} / ${inputEl.value}`);
         nameEl.textContent = name;     
    }
    return
}

addBtn.addEventListener("click", adding);


buttonsEl.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        inputEl.value += button.textContent[0]
    })
})


deleteBtn.addEventListener("click",()=> {
    const value = inputEl.value.split("")
    value.pop()
    inputEl.value = value.join("")
})





