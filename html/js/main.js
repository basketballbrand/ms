$('.nav .menu').on('click',function(){
    $(this).next('.function_bar').animate({
        left:"0"
    },500)
    $('.nav .overlay').removeClass('unblock');
})
$('.fa-times , .nav .overlay').on('click',function(){
    $('.nav .menu').next('.function_bar').animate({
        left:"-75%"
    },200)
    $('.nav .overlay').addClass('unblock');
})
$('a.scroll-link').click(function(e){
    e.preventDefault();
    $id = $(this).attr('href');
    $('body,html').animate({
        scrollTop: $($id).offset().top
    }, 750);
});