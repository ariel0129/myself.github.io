$(".header_list1").click(function () {
    $(‘html,body‘).animate({
        scrollTop:$(".about").offset().top},{duration:500,easing:‘swing‘});
    return false;
})