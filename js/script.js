function blinkingStars() {
    var star = document.createElement("div");
    var stSize = Math.random()*15;
    var xPos = Math.random()*100;
    var yPos = Math.random()*100;
    star.style.height = stSize + "px";
    star.style.width = stSize + "px";
    star.style.backgroundColor = "#ffffff";
    star.style.position = "absolute";
    star.style.top = yPos + "%";
    star.style.left = xPos + "%";
    star.style.borderRadius = "50%";
    document.body.appendChild(star);
    star.classList.add("blinking-star");
  }
  function Stars() {
    var star = document.createElement("div");
    var xPos = Math.random()*100;
    var yPos = Math.random()*100;
    star.style.position = "absolute";
    star.style.top = yPos + "%";
    star.style.left = xPos + "%";
    document.body.appendChild(star);
    star.classList.add("star");
  }
  
  setInterval(blinkingStars, 75);
  setInterval(Stars, 200);