$(document).ready(function () {


    var indexNum = 0;

    setInterval(function(){

        if(indexNum > 2){
            indexNum = 0;
        };

        $(".slide-wrap > .list > a").removeClass("active");
        $(".slide-wrap > .list > a").eq(indexNum).addClass("active");

        indexNum++;

    },3000);  

});