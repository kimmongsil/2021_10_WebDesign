$(document).ready(function(){

    $(".layerPopup").click(function(){
        $(".layer").css("display","block");
        $(".layer-bg").css("display","block");
    });

    $(".close-btn").click(function(){
        $(".layer").hide();
        $(".layer-bg").hide();
    });

});