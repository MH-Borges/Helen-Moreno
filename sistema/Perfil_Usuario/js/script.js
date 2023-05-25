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

document.querySelectorAll('.CloseBtn').forEach(e => {
    e.addEventListener('click', function(){
    
        document.querySelectorAll('.modalComment').forEach(f => {
            f.classList.add('hide');
        })
    
        document.querySelector('.modalConfig').classList.add('hide');
    })
});

document.querySelectorAll('.CancelaBtnModal').forEach(e => {
    e.addEventListener('click', function(){
    
        document.querySelectorAll('.modalComment').forEach(f => {
            f.classList.add('hide');
        })
    
        document.querySelector('.modalConfig').classList.add('hide');
    })
});