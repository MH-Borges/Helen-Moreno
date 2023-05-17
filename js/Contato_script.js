document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.naveFundo').style.animation = 'floater 8s ease-in-out infinite';
  document.querySelector('.maoFundo').style.animation = 'floater 8s ease-in-out infinite';
  document.querySelector('.infosBlock').style.animation = 'floater 8s ease-in-out infinite';
  document.querySelector('.tabletBlock').style.animation = 'floater 8s ease-in-out infinite';

});

function openlink(rede){
  if(rede == "insta"){
    window.open('https://www.instagram.com/helen_moreno_e/', '_blank');
  }
  else{
    window.open('mailto:contato@helenmoreno.com.br', '_blank');
  }
}

document.querySelector('.notificacaoWhats').addEventListener('click', function(){

  if(document.querySelector('.whats.hide')){
    document.querySelector('.whats').classList.remove('hide');
    document.querySelector('.notificacaoWhats').style.backgroundColor = '#BFBFBF';

  }
  else{
    document.querySelector('.whats').classList.add('hide');
    document.querySelector('.notificacaoWhats').style.backgroundColor = 'transparent';
  }

});