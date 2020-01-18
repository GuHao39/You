// 留言板
$(".pleace span:last-of-type").click(function(){
    $(".liuyan").toggleClass("smaller")
    $(this).toggleClass("change")
})

// 回到顶部 
$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $("#goBack").css("display","block")
    }else{
        $("#goBack").css("display","none")

    }
})
$("#goBack").click(function(){
    $("body,html").animate({
        "scrollTop":0
    },500)
})