const CLICK_COUNT_INDICATER = document.getElementById("click-count");
const COOKIE_ICON = document.getElementById("cookie-icon");
const COOKIE_BACKGROUND = document.getElementById("cookie-bg")
const LAST_CLICK_TIME_INDICATER = document.getElementById("last-click-time");
let clickCount = 0;
let lastClickTime = "";

function getFormattedDateStr(){
    let dateNow = new Date;
    lastClickTime = `\
        ${dateNow.getFullYear()}年${dateNow.getMonth()}月${dateNow.getDate()}日\
        ${dateNow.getHours()}時${dateNow.getMinutes()}分${dateNow.getSeconds()}秒\
        `;
    return lastClickTime;
};

function isMultipleOfThree(inputNumber) {
    return ((inputNumber %= 3) === 0)
};
function hasTheThree(inputNumber) {
    const regex = /[0-9]*3[0-9]*/;
    return regex.test(inputNumber);
};
function isNabeatsuNumber(inputNumber) {
    return isMultipleOfThree(inputNumber) || hasTheThree(inputNumber);
};

COOKIE_ICON.addEventListener("click", () => {
    clickCount++;
    CLICK_COUNT_INDICATER.innerHTML = clickCount;

    LAST_CLICK_TIME_INDICATER.innerHTML = getFormattedDateStr();
    console.log(isNabeatsuNumber(clickCount));
    if(isNabeatsuNumber(clickCount)){
        COOKIE_BACKGROUND.style.backgroundImage = "url(../image/nabeatsu.png)";
    } else {
        COOKIE_BACKGROUND.style.backgroundImage = "none";
    };
});