

var i;
for (i = 0; i < 16; i++) {
    $('#row').append('<div class="blocks"></div>');
}


$('#container').on('click', '.blocks', function (){

    let toggle = $(this)
    $(toggle).toggleClass('lightMode')
});
    

