$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addclass("sticky");
        }else{
            $('.navbar').removeclass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});