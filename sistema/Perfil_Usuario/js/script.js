function ShowBlockModal(){
    $('.modalConfig').hasClass('hide') ? $('.modalConfig').removeClass('hide') : $('.modalConfig').addClass('hide');
}

function ShowBlockCommentModal(elem){

    if($(elem).parent().children('.modalComment').hasClass('hide')){
        
        document.querySelectorAll('.modalComment').forEach(e => {
            e.classList.add('hide');
        })

        $(elem).parent().children('.modalComment').removeClass('hide');
    }else{
        $(elem).parent().children('.modalComment').addClass('hide');
    }
        
}