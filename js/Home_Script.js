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
