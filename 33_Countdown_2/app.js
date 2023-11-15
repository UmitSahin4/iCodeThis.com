const timeRemaining = '30 dec 2023'

const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')


function formatDate(data) {
    return data < 10 ? `0${data}` : data;
}


setInterval(() => {
    const currentDate = new Date();
    const timeRemainingDate = new Date(timeRemaining);


    const toplamSaniye = (timeRemainingDate - currentDate) / 1000;

    const gun = Math.floor(toplamSaniye / 3600 / 24);
    const saat = Math.floor(toplamSaniye / 3600) % 24;
    const dakika = Math.floor(toplamSaniye / 60) % 60;
    const saniye = Math.floor(toplamSaniye) % 60;

    days.innerHTML = formatDate(gun);
    hours.innerHTML = formatDate(saat);
    minutes.innerHTML = formatDate(dakika);
    seconds.innerHTML = formatDate(saniye);

}, 1000);





