$(document).ready(function(){
    $(".hammburger").click(function(){
        $("nav").toggle();
    });
});
$(window).resize(function(){
    var win_width = $(window).width();
    if(win_width > 768){
        $("nav").css("display","flex");
    }
    else{
        $("nav").css("display","none");
    }
});