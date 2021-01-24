$('.nav .menu').on('click',function(){
    $(this).addClass('active');
    $('.nav .overlay').removeClass('unblock');
})
$('.fa-times , .nav .overlay').on('click',function(){
    $('.nav .menu').removeClass('active');
    $('.nav .overlay').addClass('unblock');
})