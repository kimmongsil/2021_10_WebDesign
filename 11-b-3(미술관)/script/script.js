$(document).ready(function(){

    // 슬라이드
    var indexNum = 1;

    setInterval(function(){

        if (indexNum > 2){
            indexNum = 0
        }

        $(".slide").css({
            "top":-300*indexNum,
        });

        indexNum++

    },3000);

    // 팝업 열기
    $(".pop-up-btn").click(function(){
        $(".pop-up").addClass("active")
    });

    // 팝업 닫기
    $(".clo-btn").click(function(){
        $(".pop-up").removeClass("active")
    });

});