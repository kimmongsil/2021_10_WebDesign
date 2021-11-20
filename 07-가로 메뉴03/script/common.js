$(document).ready(function(){
    $(".menu > ul > li").mouseover(function(){
        $(".menu > ul > li > ul").stop().slideDown();
        $(".header > .menu ul li ul::before").stop().slideDown();
        $(".header > .menu ul li ul::after").stop().slideDown();
    });

    $(".menu > ul > li").mouseout(function(){
        $(".menu > ul > li > ul").stop().slideUp();
        $(".header > .,enu ul li ul::before").stop().slideUp();
        $(".header > .menu ul li ul::after").stop().slideUp();
    });
});