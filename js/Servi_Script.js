
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    focus  : 'center',
    drag   : false,

    classes: {
      pagination: 'splide__pagination hide',
    },
  } );

  splide.mount();

  $(".splide__arrow--prev").on("click", function() {
    $(".is-prev .linkTab").removeClass('active');
    $(".is-prev .linkTab").click();
  });

  $(".splide__arrow--next").on("click", function() {
    $(".is-next .linkTab").removeClass('active');
    $(".is-next .linkTab").click();
  });

});