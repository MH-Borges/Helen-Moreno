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