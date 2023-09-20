const buttonEl = document.querySelector(".viewbtn")
const table = document.querySelector("tbody")

buttonEl.addEventListener("click" , ()=>{
    let tr = `<tr>
            <td class="rank" >
                <p>6</p>
                <img src="https://i.pravatar.cc/100?img=11">
            </td>
            <td class="player" >Robert Fade</td>
            <td class="votes ">
                <p>12.113</p>
                <span>6.270 recommendations</span>
            </td>
            <td class="earnings" >$6.000</td>
        </tr>`
    table.insertAdjacentHTML("beforeend", tr);
    buttonEl.remove()
})