const timeRemaining = '10 sep 2023'

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')


function formatDate(data) {
    return data < 10 ? `0${data}`: data ;
}



function countdown () {
    const currentDate = new Date();
    const timeRemainingDate = new Date(timeRemaining);
    

    const toplamSaniye = (timeRemainingDate - currentDate) /1000;

    const gun = Math.floor(toplamSaniye / 3600 / 24);
    const saat = Math.floor(toplamSaniye / 3600) % 24;
    const dakika = Math.floor(toplamSaniye / 60) % 60;
    const saniye = Math.floor(toplamSaniye) % 60;

    days.innerHTML= formatDate(gun);
    hours.innerHTML= formatDate(saat);
    minutes.innerHTML= formatDate(dakika);
    seconds.innerHTML= formatDate(saniye);

}

countdown();


setInterval(countdown,1000);