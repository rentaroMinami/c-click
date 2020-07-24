const CLICK_COUNT_INDICATER = document.getElementById("click-count");
const COOKIE_ICON = document.getElementById("cookie-icon");
const LAST_CLICK_TIME_INDICATER = document.getElementById("last-click-time");
let clickCount = 0;
let lastClickTime = "";

function getFormattedDateStr(){
    let dateNow = new Date;
    lastClickTime = `${dateNow.getFullYear()}年${dateNow.getMonth()}月${dateNow.getDate()}日${dateNow.getHours()}時${dateNow.getMinutes()}分${dateNow.getSeconds()}秒`;
    return lastClickTime;
}

COOKIE_ICON.addEventListener("click", () => {
    clickCount++;
    CLICK_COUNT_INDICATER.innerHTML = clickCount;

    LAST_CLICK_TIME_INDICATER.innerHTML = getFormattedDateStr();
});

