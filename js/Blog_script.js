function showluas(elem, numLua){

  const semLua = elem.parentNode.querySelector('.planetaLua.planetaSemLua');
  const Lua = elem.parentNode.querySelector('.planetaLua.planetaLua' + numLua);

  document.querySelector('.todosPosts').addEventListener('click', function (){

    Lua.querySelectorAll('.lua.show').forEach(e => {
      e.classList.add('hide');
      e.classList.remove('show');
      Lua.style.padding= "0vh 0vw";
      document.querySelector('.todosPosts').classList.add('hide');

      document.querySelectorAll('.blockPlaneta').forEach(e => {
        e.style.transform = "scale(1)";
      });

      document.querySelectorAll('.estrelinhaSubtag').forEach(e => {
        e.style.top = '20%';
        e.classList.remove('menor');
      });
  
      document.querySelectorAll('.estrelinhaSubtag.estrelaBot').forEach(e => {
        e.style.top = '62%';
      });
    });

  });

  if(numLua === '00'){

    if(semLua.querySelector('h4.hide')){
      semLua.querySelector('h4').classList.remove('hide');
      semLua.querySelector('h4').classList.add('show'); 
      document.querySelector('.todosPosts').classList.remove('hide');

    }
    else if(semLua.querySelector('h4.show')){
      semLua.querySelector('h4').classList.add('hide');
      semLua.querySelector('h4').classList.remove('show');
      document.querySelector('.todosPosts').classList.add('hide');
    }
  }

  else{
    //limpa variaveis//
    document.querySelector('.todosPosts').classList.add('hide');
    document.querySelectorAll('.blockPlaneta').forEach(e => {
      e.style.transform = "scale(1)";
    });

    document.querySelectorAll('.estrelinhaSubtag').forEach(e => {
      e.style.top = '20%';
      e.classList.remove('menor');
    });

    document.querySelectorAll('.estrelinhaSubtag.estrelaBot').forEach(e => {
      e.style.top = '62%';
    });


    for (var i = 1; i < 13; i++) {
      var j = i <= 9 ? j = '0' + i.toString() : j = i;
      if(document.querySelector('.planetaLua' + j) != null){
        document.querySelector('.planetaLua' + j).style.padding= "0vh 0vw";
      }
    }
    //limpa variaveis//

    if(Lua.querySelectorAll('.lua.hide').length === parseInt(numLua)){
      
      document.querySelectorAll('.blockPlaneta').forEach(e => {
        e.style.transform = "scale(0.75)";
      });
      elem.parentNode.style.transform = "scale(1.2)";

      if(elem.parentNode.querySelector('.estrelaBot')){
        elem.parentNode.querySelector('.estrelaBot').style.top = '33%';
      }
      else{
        elem.parentNode.querySelector('.estrelinhaSubtag').style.top = '52%';
      }
      elem.parentNode.querySelector('.estrelinhaSubtag').classList.add('menor');
      
      document.querySelectorAll('.lua.show').forEach(e => {
        e.classList.add('hide');
        e.classList.remove('show');
      });

      Lua.querySelectorAll('.lua.hide').forEach(e => {
        e.classList.remove('hide');
        e.classList.add('show');
        document.querySelector('.todosPosts').classList.remove('hide');
        Lua.style.padding= "4vh 1.5vw";
      });
      return
    }

    else{
      
      Lua.querySelectorAll('.lua.show').forEach(e => {
        e.classList.add('hide');
        e.classList.remove('show');
        Lua.style.padding= "0vh 0vw";
      });

      return
    }
  }
}

$('.tab-pane').each(function(i,e){
  $('.blockPlaneta').click(function(event){
    var x = event.pageX;
    var y = event.pageY;
    
    var nextItem = i + 1;
    if (nextItem >= $('.tab-pane').length){
      nextItem = 0;
    }
    
    $('.tab-pane:eq('+ nextItem +')').css('z-index', parseInt($(this).css('z-index')) + 1);
    $('.tab-pane:eq('+ nextItem +')').css('clip-path', 'circle(0% at '+ x +'px '+ y +'px)');
    
    anime({
      targets: $('.tab-pane')[nextItem],
      update: function(anim) {
        $('.tab-pane:eq('+ nextItem +')').css('clip-path', 'circle('+ (anim.progress*2) +'% at '+ x +'px '+ y +'px)');
      }
    });
  });
});