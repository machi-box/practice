$(function(){
    //初期設定
    var setWidth = window.outerWidth;
    console.log(setWidth);
    var setInnerWidth = $("#carouselInner ul.column ").outerWidth();
    var setImageWidth = $("#carouselInner ul.column li").outerWidth();
    console.log(setImageWidth);
    var clone = $("#carouselInner ul.column li:first").clone(true);
    
    $("#carouselWrap").css("width",setWidth*0.8 + "px");
    $("#carouselInner ul").css("width",setImageWidth*$('#carouselInner ul.column li').length +"px");
    $("#carouselInner ul.column:last").prependTo("#carouselInner");
    
    $(window).resize(function() {
    //初期設定
    var setWidth = window.outerWidth;
    var setInnerWidth = $("#carouselInner ul.column").outerWidth();
    var setImageWidth = $("#carouselInner ul.column li").outerWidth();
    console.log(setImageWidth);
    
    $("#carouselWrap").css("width",setWidth*0.8 + "px");
    $("#carouselInner ul.column").css("width",setImageWidth*$('#carouselInner ul.column li').length +"px");
    $("#carouselInner ul.column:last").prependTo("#carouselInner");
    
    });
    
    $("#carouselNext").mouseover(function(){
        var carouseWidth = $("#carouselWrap").innerWidth();
        var scrollMove = $("#carouselInner ul.column").innerWidth() - carouseWidth;
        console.log(scrollMove);
        $("#carouselInner ul.column").animate({'marginLeft':-scrollMove},{duration:2000});
        
        
        console.log("乗せた");
        })
    .mouseout(function(){
        $("#carouselInner ul.column").stop();
        console.log("離した");
    });

    $("#carouselPrev").mouseover(function(){
        
        $("#carouselInner ul.column").animate({'marginLeft':0},2000);
        
        console.log("乗せた");
        })
    .mouseout(function(){
        $("#carouselInner ul.column").stop();
        console.log("離した");
    });
});
