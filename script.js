//object constructor for Data, which is js object
const date = new Date();


// put calendar in html
const renderCalendar = () => {
    date.setDate(1);
    
    // console.log(date.setDate(1));

    const monthDays = document.querySelector('.days');

    //contain last day of current month, type: number
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    //contain last day of previos month, type: number
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    //contain first day's  index of current month, type: number
    const firstDayIndex = date.getDay();

    //contain last day's index of previos month, type: number
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "Fabruary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    document.querySelector('.date p').innerHTML = `Today: ${new Date().toDateString()}`;

    let days = "";

    for(let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div> `
    }

    for(let i = 1; i <= lastDay; i++) {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class = "today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
        
    }

    for(let y = 1; y <= nextDays; y++) {
        days += `<div class="next-date">${y}</div>`;
    }

    monthDays.innerHTML = days;
};

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

renderCalendar();