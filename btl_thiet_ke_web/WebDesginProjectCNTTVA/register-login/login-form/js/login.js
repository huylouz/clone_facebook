$(document).ready(function() {
    $('.view-pass').click(function(){
        $(this).toggleClass('show');
        $(this).children('i').toggleClass('fa-eye-slash');
        if($(this).hasClass('show')) {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });
});
