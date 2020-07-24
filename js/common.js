const clickCountIndicater = document.getElementById("click-count");
const cookieIcon = document.getElementById("cookie-icon");
const lastClickTimeStamp = document.getElementById("last-click-time");
let clickCount = 0;
let lastClickTime = "";

cookieIcon.addEventListener("click", () => {
    clickCount++
    clickCountIndicater.innerHTML = clickCount;
    let dateNow = new Date;
    lastClickTime = `${dateNow.getFullYear()}年${dateNow.getMonth()}月${dateNow.getDate()}日${dateNow.getHours()}時${dateNow.getMinutes()}分${dateNow.getSeconds()}秒`
    lastClickTimeStamp.innerHTML = lastClickTime;
});

