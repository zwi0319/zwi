$(function () {
    // fullpage配置代码
    $("#dowebok").fullpage({
        sectionsColor: ["transparent", "skyblue", "purple", "yellow"],
        loopBottom: true,
        verticalCentered: false,
        navigation: false,
        navigationColor: "#ef5c19",
        continuousVertical: true,
        controlArrowColor: "rgba(0, 0, 0, 0.1)",
        anchors: ["page1", "page2", "page3", "page4", "page5"],
        easingcss3: "cubic-bezier(0.175 , 0.3 , 0.320 , 1.5)",
        slidesNavigation: true,
        navigationColor: "#fff",
    });

    // nav部分
    $(".main_left div").mouseover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index(); //得到当前li的索引号
        $(".main_right .content").eq(index).stop().slideDown(1200).siblings().stop().slideUp(1200);
    });

    // sec2 点击部分
    $(".sec2_main_head ul li").click(function () {
        $(this).addClass("current1").siblings().removeClass("current1");
        var index = $(this).index(); //得到当前li的索引号
        $(".sec2_main_body>.sec2_main_body_content")
            .eq(index)
            .stop()
            .fadeIn(1200)
            .siblings()
            .stop()
            .fadeOut(1200);
    });
});
