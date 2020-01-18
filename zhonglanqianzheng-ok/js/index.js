// 轮播图
$("#myCarousel").carousel({
    interval:2000
})

// 动态数字
var options = {
    useEasing: true, //开启一个过渡动画
    useGrouping: true, //开启千位分割
    separator: ',',  //定义千位分隔符
    decimal: '.',    //小数点分割
}; 
var arr=new Array(
    new CountUp('sum-apply', 0, 18397, 0, 3, options),
    new CountUp('sum-rate', 0, 98.8, 2, 3, options),
    new CountUp('sum-urgent', 0, 3273, 0, 3, options),
    new CountUp('urgent-rate', 0, 100.0, 0, 3, options)
)

var fn=function(){
    $(".run-number").each(function(){
        var index=$(this).index('.run-number')
        arr[index].start()
    })
}
window.onscroll=function(){
    fn()
}