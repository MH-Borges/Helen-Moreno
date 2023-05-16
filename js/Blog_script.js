document.addEventListener('DOMContentLoaded', function() {
  getBackgroundEstrelaLua();
});

document.querySelector('.todosPosts').addEventListener('click', function(){
  document.querySelector('.todosPosts').classList.add('hide');
})

var luaAtiva = false;
var luaZeroAtiva = false;

function cleanbody(corSearch){
  document.querySelectorAll(".newBlock").forEach(e => e.remove());
  document.querySelectorAll(".cloneNew").forEach(e => e.remove());

  document.querySelector('.search').style.backgroundColor = corSearch;
  document.querySelector('.btncontato').style.background = corSearch;
  
  criaTransicao(corSearch);

  document.querySelector('.todosPosts').classList.remove('hide');

  var luas = document.querySelectorAll('.lua.show');
  var luazero = document.querySelectorAll('.luazero.show');

  if(luas.length != 0 && luaAtiva){

    luaAtiva = false;

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

    document.querySelectorAll('.lua.show').forEach(e => {
      e.classList.add('hide');
      e.classList.remove('show');
    });
  }

  if(luazero.length != 0 && luaZeroAtiva){
    document.querySelector('.luazero').classList.add('hide');
    document.querySelector('.luazero').classList.remove('show');
    document.querySelector('.todosPosts').classList.add('hide');
   
  }

  if(luas.length != 0){ luaAtiva = true;}
  else if(luas.length === 0){luaAtiva = false;}

  if(luazero.length != 0){ luaZeroAtiva = true;}
  else if(luas.length === 0){luaZeroAtiva = false;}

}

function criaTransicao(corSearch){
  var transitionElement = document.createElement('div');
  transitionElement.classList.add('transition');
  transitionElement.innerHTML= `
    <div class="transit" style="background: ${corSearch}"></div>
    <div class="transit" style="background: ${corSearch}"></div>
    <div class="transit" style="background: ${corSearch}"></div>
    <div class="transit" style="background: ${corSearch}"></div>
    <div class="transit" style="background: ${corSearch}"></div>
  `;

  document.body.appendChild(transitionElement);

  setTimeout(() => {
    transitionElement.remove();
  }, 750);
}

function getBackgroundEstrelaLua(){
  const estrelas = document.querySelectorAll('.estrelinhaSubtag');
  
  estrelas.forEach((e, index) => {
    this["Estrela"+index] = e.style.backgroundColor;
    e.style.backgroundColor = "rgba(0, 0 , 0 , 0)";
    
    if(index === 0){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela0;
      });
    }

    if(index === 1){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela1;
      });
    }

    if(index === 2){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela2;
      });
    }

    if(index === 3){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela3;
      });
    }

    if(index === 4){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela4;
      });
    }

    if(index === 5){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela5;
      });
    }

    if(index === 6){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela6;
      });
    }

    if(index === 7){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela7;
      });
    }

    if(index === 8){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela8;
      });
    }

    if(index === 9){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela9;
      });
    }

    if(index === 10){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela10;
      });
    }

    if(index === 11){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela11;
      });
    }

    if(index === 12){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela12;
      });
    }

    if(index === 13){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela13;
      });
    }

    if(index === 14){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela14;
      });
    }

    if(index === 15){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela15;
      });
    }

    if(index === 16){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela16;
      });
    }

    if(index === 17){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela17;
      });
    }

    if(index === 18){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela18;
      });
    }

    if(index === 19){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela19;
      });
    }

    if(index === 20){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela20;
      });
    }

    if(index === 21){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela21;
      });
    }

    if(index === 22){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela22;
      });
    }

    if(index === 23){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela23;
      });
    }

    if(index === 24){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela24;
      });
    }

    if(index === 25){
      estrelas[index].addEventListener('mouseover', function(){
        e.style.backgroundColor = Estrela25;
      });
    }

    estrelas[index].addEventListener('mouseout', function(){
      e.style.backgroundColor = "rgba(0, 0 , 0 , 0)";
    });


  });
}

function insertStar(){
  var maisEstrelas = document.createElement('div');
    const estrelasFundo = document.querySelector('.StarBackground_blog');

    maisEstrelas.innerHTML = `
      <img src="assets/imgs/estrelas.svg" onload="SVGInject(this)">
      <img src="assets/imgs/estrelas_Metade.svg" onload="SVGInject(this)">
    `;
    maisEstrelas.classList.add('newBlock');
    estrelasFundo.appendChild(maisEstrelas);
}

function showluas(elem, numLua){
  luaAtiva = false;

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
    luaZeroAtiva = false;

    if(semLua.querySelector('h4.hide')){
      semLua.querySelector('h4').classList.remove('hide');
      semLua.querySelector('h4').classList.add('show'); 
      document.querySelector('.todosPosts').classList.remove('hide');

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

      document.querySelectorAll('.lua.show').forEach(e => {
        e.classList.add('hide');
        e.classList.remove('show');
      });

    }
    else if(semLua.querySelector('h4.show')){
      semLua.querySelector('h4').classList.add('hide');
      semLua.querySelector('h4').classList.remove('show');
      document.querySelector('.todosPosts').classList.add('hide');

      
    }
  }

  else{
    let luazerolimpa = document.querySelector('h4.show');
    if(luazerolimpa !== null){
      document.querySelector('.luazero').classList.add('hide');
      document.querySelector('.luazero').classList.remove('show');
      document.querySelector('.todosPosts').classList.add('hide');
    }

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

function maispost(quem, cor){
  const tabActive = document.querySelector(".tab-pane.fade.show.active");
  const posts = tabActive.querySelectorAll('.blogposts');
  const postsEsquerda = tabActive.querySelectorAll('.blogposts.blogEsquerda');
  const postsCentro = tabActive.querySelectorAll('.blogposts.blogCentro');

  let lastElement = posts[posts.length - 1];
  let lastElementEsquerda = postsEsquerda[postsEsquerda.length - 1];
  let lastElementCentro = postsCentro[postsCentro.length - 1];

  if (lastElement === lastElementEsquerda) {

    insertStar();

    var MainCentro = document.createElement('div')
    MainCentro.classList.add('blogposts');
    MainCentro.classList.add('blogCentro');
    MainCentro.classList.add('cloneNew');

    var html1 = `
      <div class="postLateral">
        <a href="Postagem_Blog.html" class="BlockPost">
            <div style="background: ${cor};" class="iconesInfos">
                <div class="like"><img src="assets/icones/like.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="comment"><img src="assets/icones/comentarios.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="visu"><img src="assets/icones/visualizacao.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="tag"><img src="assets/icones/estrela4pontas.svg"
                        onload="SVGInject(this)"><span>Gestão de negocios</span></div>
            </div>
            <div class="subTags">
                <div class="subtag" style="background: ${cor};">Do zero</div>
                <div class="subtag" style="background: ${cor};">Mulheres</div>
                <div class="subtag" style="background: ${cor};">Organização</div>
                <div class="subtag" style="background: ${cor};">Ação</div>
                <div class="subtag" style="background: ${cor};">Como fazer</div>
            </div>
            <div class="imgCard"><img src="assets/imgs/Home/blog/pexels-daniel-torobekov-5244258.jpg"
                    alt=""></div>
            <p><button onclick="perfilHelen()">por Helen Moreno</button> | 99/99/9999</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
        <a href="Postagem_Blog.html" class="BlockPost">
            <div class="iconesInfos" style="background: ${cor};">
                <div class="like"><img src="assets/icones/like.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="comment"><img src="assets/icones/comentarios.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="visu"><img src="assets/icones/visualizacao.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="tag"><img src="assets/icones/estrela4pontas.svg"
                        onload="SVGInject(this)"><span>Gestão de negocios</span></div>
            </div>
            <div class="subTags">
                <div class="subtag" style="background: ${cor};">Do zero</div>
                <div class="subtag" style="background: ${cor};">Mulheres</div>
                <div class="subtag" style="background: ${cor};">Organização</div>
                <div class="subtag" style="background: ${cor};">Ação</div>
            </div>
            <div class="imgCard"><img src="assets/imgs/Home/blog/pexels-daniel-torobekov-5244258.jpg"
                    alt=""></div>
            <p><button onclick="perfilHelen()">por Helen Moreno</button> | 99/99/9999</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
      </div>

      <div class="postCentral">
        <a href="Postagem_Blog.html" class="BlockPost">
            <div class="iconesInfos" style="background: ${cor};">
                <div class="like"><img src="assets/icones/like.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="comment"><img src="assets/icones/comentarios.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="visu"><img src="assets/icones/visualizacao.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="tag"><img src="assets/icones/estrela4pontas.svg"
                        onload="SVGInject(this)"><span>Gestão de negocios</span></div>
            </div>
            <div class="subTags">
                <div class="subtag" style="background: ${cor};">Do zero</div>
                <div class="subtag" style="background: ${cor};">Mulheres</div>
                <div class="subtag" style="background: ${cor};">Organização</div>
                <div class="subtag" style="background: ${cor};">Ação</div>
            </div>
            <div class="imgCard"><img src="assets/imgs/Home/blog/pexels-daniel-torobekov-5244258.jpg"
                    alt=""></div>
            <p><button onclick="perfilHelen()">por Helen Moreno</button> | 99/99/9999</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
      </div>

      <div class="postLateral">
        <a href="Postagem_Blog.html" class="BlockPost">
            <div class="iconesInfos" style="background: ${cor};">
                <div class="like"><img src="assets/icones/like.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="comment"><img src="assets/icones/comentarios.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="visu"><img src="assets/icones/visualizacao.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="tag"><img src="assets/icones/estrela4pontas.svg"
                        onload="SVGInject(this)"><span>Gestão de negocios</span></div>
            </div>
            <div class="subTags">
                <div class="subtag" style="background: ${cor};">Do zero</div>
                <div class="subtag" style="background: ${cor};">Mulheres</div>
                <div class="subtag" style="background: ${cor};">Organização</div>
                <div class="subtag" style="background: ${cor};">Ação</div>
                <div class="subtag" style="background: ${cor};">Como fazer</div>
            </div>
            <div class="imgCard"><img src="assets/imgs/Home/blog/pexels-daniel-torobekov-5244258.jpg"
                    alt=""></div>
            <p><button onclick="perfilHelen()">por Helen Moreno</button> | 99/99/9999</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
        <a href="Postagem_Blog.html" class="BlockPost">
            <div class="iconesInfos" style="background: ${cor};">
                <div class="like"><img src="assets/icones/like.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="comment"><img src="assets/icones/comentarios.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="visu"><img src="assets/icones/visualizacao.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="tag"><img src="assets/icones/estrela4pontas.svg"
                        onload="SVGInject(this)"><span>Gestão de negocios</span></div>
            </div>
            <div class="subTags">
                <div class="subtag" style="background: ${cor};">Do zero</div>
                <div class="subtag" style="background: ${cor};">Mulheres</div>
                <div class="subtag" style="background: ${cor};">Organização</div>
                <div class="subtag" style="background: ${cor};">Ação</div>
            </div>
            <div class="imgCard"><img src="assets/imgs/Home/blog/pexels-daniel-torobekov-5244258.jpg"
                    alt=""></div>
            <p><button onclick="perfilHelen()">por Helen Moreno</button> | 99/99/9999</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
      </div>
    `;
    
    if(quem === true){ var html2 = ``;}
    else{
      var html2 = `
        <div class="backgroungBallBlur" style="background: ${cor};"></div>
        <div class="backgroungBallBlur secondBall" style="background: ${cor};"></div>
        <div class="backgroungBallBlur thirdBall" style="background: ${cor};"></div>
      `;
    }

    MainCentro.innerHTML = html1 + html2;

    tabActive.appendChild(MainCentro);

  }

  if((lastElement === lastElementCentro)) {

    insertStar();

    var mainEsquerda = document.createElement('div')
    mainEsquerda.classList.add('blogposts');
    mainEsquerda.classList.add('blogEsquerda');
    mainEsquerda.classList.add('cloneNew');

    var html1 = `
      <div class="postMaior">
        <a href="Postagem_Blog.html" class="BlockPost">
            <div class="iconesInfos" style="background: ${cor};">
                <div class="like"><img src="assets/icones/like.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="comment"><img src="assets/icones/comentarios.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="visu"><img src="assets/icones/visualizacao.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="tag"><img src="assets/icones/estrela4pontas.svg"
                        onload="SVGInject(this)"><span>Gestão de negocios</span></div>
            </div>
            <div class="subTags">
                <div class="subtag" style="background: ${cor};">Do zero</div>
                <div class="subtag" style="background: ${cor};">Mulheres</div>
                <div class="subtag" style="background: ${cor};">Organização</div>
                <div class="subtag" style="background: ${cor};">Ação</div>
            </div>
            <div class="imgCard"><img src="assets/imgs/Home/blog/pexels-daniel-torobekov-5244258.jpg"
                    alt=""></div>
            <p><button onclick="perfilHelen()">por Helen Moreno</button> | 99/99/9999</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
      </div>

      <div class="postsMenores">
        <a href="Postagem_Blog.html" class="BlockPost">
            <div class="iconesInfos" style="background: ${cor};">
                <div class="like"><img src="assets/icones/like.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="comment"><img src="assets/icones/comentarios.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="visu"><img src="assets/icones/visualizacao.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="tag"><img src="assets/icones/estrela4pontas.svg"
                        onload="SVGInject(this)"><span>Gestão de negocios</span></div>
            </div>
            <div class="subTags">
                <div class="subtag" style="background: ${cor};">Do zero</div>
                <div class="subtag" style="background: ${cor};">Mulheres</div>
                <div class="subtag" style="background: ${cor};">Organização</div>
                <div class="subtag" style="background: ${cor};">Ação</div>
                <div class="subtag" style="background: ${cor};">Como fazer</div>
            </div>
            <div class="imgCard"><img src="assets/imgs/Home/blog/pexels-daniel-torobekov-5244258.jpg"
                    alt=""></div>
            <p><button onclick="perfilHelen()">por Helen Moreno</button> | 99/99/9999</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
        <a href="Postagem_Blog.html" class="BlockPost">
            <div class="iconesInfos" style="background: ${cor};">
                <div class="like"><img src="assets/icones/like.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="comment"><img src="assets/icones/comentarios.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="visu"><img src="assets/icones/visualizacao.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="tag"><img src="assets/icones/estrela4pontas.svg"
                        onload="SVGInject(this)"><span>Gestão de negocios</span></div>
            </div>
            <div class="subTags">
                <div class="subtag" style="background: ${cor};">Do zero</div>
                <div class="subtag" style="background: ${cor};">Mulheres</div>
                <div class="subtag" style="background: ${cor};">Organização</div>
                <div class="subtag" style="background: ${cor};">Ação</div>
            </div>
            <div class="imgCard"><img src="assets/imgs/Home/blog/pexels-daniel-torobekov-5244258.jpg"
                    alt=""></div>
            <p><button onclick="perfilHelen()">por Helen Moreno</button> | 99/99/9999</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
        <a href="Postagem_Blog.html" class="BlockPost">
            <div class="iconesInfos" style="background: ${cor};">
                <div class="like"><img src="assets/icones/like.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="comment"><img src="assets/icones/comentarios.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="visu"><img src="assets/icones/visualizacao.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="tag"><img src="assets/icones/estrela4pontas.svg"
                        onload="SVGInject(this)"><span>Gestão de negocios</span></div>
            </div>
            <div class="subTags">
                <div class="subtag" style="background: ${cor};">Do zero</div>
                <div class="subtag" style="background: ${cor};">Mulheres</div>
                <div class="subtag" style="background: ${cor};">Organização</div>
                <div class="subtag" style="background: ${cor};">Ação</div>
                <div class="subtag" style="background: ${cor};">Como fazer</div>
            </div>
            <div class="imgCard"><img src="assets/imgs/Home/blog/pexels-daniel-torobekov-5244258.jpg"
                    alt=""></div>
            <p><button onclick="perfilHelen()">por Helen Moreno</button> | 99/99/9999</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
        <a href="Postagem_Blog.html" class="BlockPost">
            <div class="iconesInfos" style="background: ${cor};">
                <div class="like"><img src="assets/icones/like.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="comment"><img src="assets/icones/comentarios.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="visu"><img src="assets/icones/visualizacao.svg"
                        onload="SVGInject(this)"><span>999</span></div>
                <div class="tag"><img src="assets/icones/estrela4pontas.svg"
                        onload="SVGInject(this)"><span>Gestão de negocios</span></div>
            </div>
            <div class="subTags">
                <div class="subtag" style="background: ${cor};">Do zero</div>
                <div class="subtag" style="background: ${cor};">Mulheres</div>
                <div class="subtag" style="background: ${cor};">Organização</div>
                <div class="subtag" style="background: ${cor};">Ação</div>
            </div>
            <div class="imgCard"><img src="assets/imgs/Home/blog/pexels-daniel-torobekov-5244258.jpg"
                    alt=""></div>
            <p><button onclick="perfilHelen()">por Helen Moreno</button> | 99/99/9999</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
      </div>
    `
    if(quem === true){ var html2 = ``; }
    else{
      var html2 = `
        <div class="backgroungBallBlur" style="background: ${cor};"></div>
        <div class="backgroungBallBlur secondBall" style="background-color: ${cor};"></div>
      `;
    }

    mainEsquerda.innerHTML = html1 + html2;

    tabActive.appendChild(mainEsquerda);
  }
  
}