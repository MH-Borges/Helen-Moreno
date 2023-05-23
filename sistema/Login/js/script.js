$(document).ready(function () {
    $('#telefone').mask('(00) 00000 - 0000');
});

document.querySelector('#senhaLogin').addEventListener("focus", () => {
    $(function(){
        $('.hide-show').show();
        $('.hide-show').click(function(){

            if($(this).hasClass('show')) {
                
                $('.semVisu').addClass('hide');
                $('.visu').removeClass('hide');

                $('input[name="senhaLogin"]').attr('type','password');
                $(this).removeClass('show');
            
            } else {
                
                $('.visu').addClass('hide');
                $('.semVisu').removeClass('hide');

                $('input[name="senhaLogin"]').attr('type','text');
                $(this).addClass('show');
            }
        });

        $('.hide-showCad').click(function(){

            if($(this).hasClass('show')) {
                
                $('.semVisu').addClass('hide');
                $('.visu').removeClass('hide');

                $('input[name="SenhaCad"]').attr('type','password');
                $(this).removeClass('show');
            
            } else {
                
                $('.visu').addClass('hide');
                $('.semVisu').removeClass('hide');

                $('input[name="SenhaCad"]').attr('type','text');
                $(this).addClass('show');
            }
        });
    });
});

document.querySelector('#SenhaCad').addEventListener("focus", () => {
    $(function(){
        $('.hide-showCad').show();
        $('.hide-showCad').click(function(){

            if($(this).hasClass('show')) {
                
                $('.semVisu').addClass('hide');
                $('.visu').removeClass('hide');

                $('input[name="SenhaCad"]').attr('type','password');
                $(this).removeClass('show');
            
            } else {
                
                $('.visu').addClass('hide');
                $('.semVisu').removeClass('hide');

                $('input[name="SenhaCad"]').attr('type','text');
                $(this).addClass('show');
            }
        });
    });
});

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
    star.style.top = yPos > 93 ? 90 + "%" : yPos + "%";
    star.style.left = xPos + "%";
    document.body.appendChild(star);
    star.classList.add("star");
    setInterval(() => {
        star.remove();
    }, 1750);
}

setInterval(blinkingStars, 100);
setInterval(Stars, 100);

function toggleForm(){
    container = document.querySelector('.login_sreen');
    container.classList.toggle('active');
}