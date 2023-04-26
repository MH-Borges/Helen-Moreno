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
  }, 1000)
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".toTop").fadeIn();
  } else {
    $(".toTop").fadeOut();
  }
});

const cardBlog = document.querySelectorAll('.cardPostBlog');
cardBlog.forEach(f => f.addEventListener('mouseenter', function() {
  cardBlog.forEach(e => {
    e.classList.add('menor');
    e.classList.remove('maior');
  })
  this.classList.add('maior');
  this.querySelector('.icons').classList.add('active')


}))

cardBlog.forEach(f => f.addEventListener('mouseleave', function() {
  cardBlog.forEach(e => {
    e.classList.remove('menor');
    e.classList.remove('maior');
    var icons = e.querySelector('.icons');
    icons.classList.remove('active');
  })
}))

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

const state = {};
const carouselListDepos = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselListDepos.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;
    item.dataset.pos = getPos(itemPos, newActivePos)
  });

};
const getPos = function (current, active) {
  const diff = current - active;
  if (Math.abs(current - active) > 2) {
    return -current
  }
  return diff;
}

setInterval(() => {
  elems.find((elem) => elem.dataset.pos == 1).click();
}, 7500);