const barEl = document.querySelector(".bar-upload");
const refreshEl = document.querySelector(".refresh");
const strong = document.querySelector("strong")




function bar() {  
    let width = 1;
    const interval = setInterval(scene, 10);
    function scene() {
      if (width >= 79) {
        clearInterval(interval);
      } else {
        width++; 
        barEl.style.width = width + '%'; 
        strong.innerText= width + '%' ;
      }
    }
  }


const refresh = () => bar()

bar()

refreshEl.addEventListener("click", refresh)



