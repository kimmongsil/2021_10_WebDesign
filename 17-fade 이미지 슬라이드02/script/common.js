$(document).ready(function(){
    function slider(){
        var num = 0;

        setInterval(function(){

            if(num ==3){
                num = 0;
            }

            // console.log("num:",num);
            $(".slider p").hide();
            $(".slider p").eq(-num).stop().fadeOut();
            $(".slider p").eq(num).stop().fadeIn();
            num++
        }, 2000);
    }
    slider();
});