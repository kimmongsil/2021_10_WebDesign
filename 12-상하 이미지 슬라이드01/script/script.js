$(document).ready(function () {


    var indexNum = 0;

    setInterval(function(){

        if(indexNum > 2){
            indexNum = 0;
        };

        $(".slide-wrap > .list").css({

            "top": -300 * indexNum,

        });

        indexNum++;

    },3000);  

});