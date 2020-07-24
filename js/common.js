const clickCountIndicater = document.getElementById("click-count");
const cookieIcon = document.getElementById("cookie-icon");
let clickCount = 0

cookieIcon.addEventListener("click", () => {
    clickCount++
    clickCountIndicater.innerHTML = clickCount
});



