var a;
function showHidePassword(){
    if(a==1){
        document.getElementById('inputPassword').type='password';
        document.getElementById('iconPassword').src='assets/images/eye-off.svg';  
        a=0;
    }else{
        document.getElementById('inputPassword').type='text';
        document.getElementById('iconPassword').src='assets/images/eye-on.svg';
        a=1;
    }
}

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("active");
    }
});

$(document).ready(function(){
    $('.count').prop('disabled', true);
       $(document).on('click','.plus',function(){
        $('.count').val(parseInt($('.count').val()) + 1 );
    });
    $(document).on('click','.minus',function(){
        $('.count').val(parseInt($('.count').val()) - 1 );
            if ($('.count').val() == 0) {
                $('.count').val(1);
            }
        });
 });