$(document).ready(function () {


    var indexNum = 1;

    setInterval(function(){

        if(indexNum > 2){
            indexNum = 0;
        };

        $(".slide-wrap > .list").css({

            "left": -1200 * indexNum,

        });

        indexNum++;

    },3000);  

});