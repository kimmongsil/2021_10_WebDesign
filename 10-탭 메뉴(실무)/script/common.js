$(document).ready(function(){
    var tabbtn = $(".tab-btn > ul > li");
    var tabcon = $(".tab-con > div");

    tabbtn.eq(0).addClass("actived_tab"); //css에서 lib와 연관
    tabcon.hide().eq(0).show(); //eq = 인덱스 검색

    tabbtn.click(function(e){
        e.preventDefault(); //태그의 고유 동작을 중단
        var target = $(this); //클릭한 당사자
        var index = target.index();
        //alert(index); //얘는 있으면 팝업창 뜸, 확인하는 거임

        tabbtn.removeClass("actived_tab"); //css에서 lib와 연관
        target.addClass("actived_tab"); //css에서 lib와 연관
        tabcon.css("display","none");
        tabcon.eq(index).css("display","block");
    });
});