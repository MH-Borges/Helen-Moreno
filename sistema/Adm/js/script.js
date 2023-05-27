function blinkingStars() {
    var Blinkstar = document.createElement("div");
    var stSize = Math.random() * 10;
    var xPos = Math.random() * 100;
    var yPos = Math.random() * 100;
    Blinkstar.style.height = stSize + "px";
    Blinkstar.style.width = stSize + "px";
    Blinkstar.style.backgroundColor = "#ffffff";
    Blinkstar.style.position = "absolute";
    Blinkstar.style.top = yPos > 96 ? 94 + "%" : yPos + "%";
    Blinkstar.style.left = xPos + "%";
    Blinkstar.style.borderRadius = "50%";
    document.body.appendChild(Blinkstar);
    Blinkstar.classList.add("blinking-star");
    setInterval(() => {
        Blinkstar.remove();
    }, 1750);
}
function Stars() {
    var star = document.createElement("div");
    var stSize = Math.random() * 2;
    var xPos = Math.random() * 100;
    var yPos = Math.random() * 100;
    star.style.fontSize = stSize + "vw";
    star.style.position = "absolute";
    star.style.top = yPos > 95 ? 93 + "%" : yPos + "%";
    star.style.left = xPos + "%";
    document.body.appendChild(star);
    star.classList.add("star");
    setInterval(() => {
        star.remove();
    }, 1750);
}
setInterval(blinkingStars, 200);
setInterval(Stars, 200);