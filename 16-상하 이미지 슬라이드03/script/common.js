$(document).ready(function(){
    function slider(){
        var num = 0;
        var result;

        setInterval(function(){
            result = num*-300;
            num++;

            if(num==3){
                num=0;
            }

            $(".slider").stop().animate({
                top: result+"px"
            });
        },1000);
    }
    slider();
});