function TimeShow() {
    var day =new Date();
    var daynumber=day.getDay();
    var hours=day.getHours();
    var minute=day.getMinutes();
    var ampm=hours >= 12?"PM":"AM"; 
    var sec=day.getSeconds();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    hours=hours%12;
    hours=hours <10?"0"+hours:hours;
    minute=minute<10?"0"+minute:minute;
    document.getElementById('sec').innerHTML=sec;
    document.getElementById('dayname').innerText=daysOfWeek[daynumber];
    document.getElementById('hour').innerText=hours;
    document.getElementById('minute').innerText=minute;
    document.getElementById('ampm').innerText=ampm;

    console.log()



    setTimeout(TimeShow, 600);
}

setTimeout(() => {
    TimeShow();
}, 1000);


