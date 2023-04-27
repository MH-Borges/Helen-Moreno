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
  star.style.top = yPos > 96 ? 94 + "%" : yPos + "%";
  star.style.left = xPos + "%";
  document.body.appendChild(star);
  star.classList.add("star");
  setInterval(() => {
    star.remove();
  }, 1750);
}
setInterval(blinkingStars, 50);
setInterval(Stars, 25);

$('.toTop').on('click', function(){
  $("html, body").animate({ scrollTop: 0 }, 400);
  $('.foguete').addClass('subindo');
  setTimeout(() => { 
    $('.foguete').removeClass('subindo');
  }, 750)
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".toTop").fadeIn();
  } else {
    $(".toTop").fadeOut();
  }
});

// document.addEventListener( 'DOMContentLoaded', function() {
//   var splide = new Splide( '.splide', {
//     type   : 'loop',
//     perPage: 3,
//     focus  : 'center',
//     autoplay: true,

//     classes: {
//       arrows: 'splide__arrows teste',
//     },
//   } );
  
//   splide.mount();
// });