const title = document.querySelector(".js-countdown");
const dayToSeconds = 60 * 60 * 24; // a day to seconds
const hourToSeconds = 60 * 60; // an hour to seconds
const minuteToSeconds = 60; // a minute to seconds
const dayTohour = 24;

function getTime(){
    const D_Day = new Date("2020-05-06T00:00:00Z");
    // const D_Day = new Date().toUTCString("2020-05-09 00:00:00");
    const now = new Date();
    const milliseconds = D_Day - now;
    const resultSeconds = Math.floor(milliseconds / 1000);
    
    // 초 - 60단위로 출력되게 제어하기
    const ss = resultSeconds % 60;
    // 분 - 하루 초를 시간 초로 출력 되게끔 제어한 뒤 60 한번 더 나눈 후 소수점을 날려서 분 단위로 출력되게 한다.
    const mm = Math.floor((resultSeconds % (dayToSeconds / minuteToSeconds)) / minuteToSeconds);
    // 시간 - 
    const hh = Math.floor((resultSeconds / hourToSeconds) % dayTohour);
    //a day = 60 * 60 * 24
    const dd = Math.floor(resultSeconds / dayToSeconds);

    title.innerText = `${
        dd < 10 ? `0${dd}` : dd
    }D ${
        hh < 10 ? `0${hh}` : hh
    }H ${
        mm < 10 ? `0${mm}` : mm
    }M ${
        ss < 10 ? `0${ss}` : ss
    }S`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();