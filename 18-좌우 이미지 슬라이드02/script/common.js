$(document).ready(function(){
    function slider(){
        var num = 0;
        var result;

        setInterval(function(){
            // console.log(num);
            // 콘솔은 확인용임
            result = num *-1200;
            num++;
            // console.log(num);
            // console.log(result);

            if(num ==3){
                num = 0;
            }
            // console.log("num:",num);
            $(".slider").stop().animate({
                left: result + "px"
            });
        }, 1000);
    }
    slider();
});