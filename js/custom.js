$(function () {
    let portfolioTop = $(".portfolio").offset().top;
    console.log(portfolioTop);

    $(window).scroll(function () {
        let st = $(this).scrollTop();

        if (st > 1) {
            $(".scroll").css({opacity:"0"});
        }else {
            $(".scroll").css({opacity:"1"});
        }

        if(st > portfolioTop - 650) {
            $(".portfolio__inner").addClass("on");
            $(".portfolio-list").addClass("on");
            setTimeout(() => {
                $(".portfolio-list>article").css({
                    "transition-delay": "0s",
                });
            }, 1000);
        }
    });

    setTimeout(() => {
        $(".profile__inner").addClass("on");
        $(".card>article").addClass("on");
    }, 300);

    setTimeout(() => {
        $(".card>article").css({
            "transition-delay": "0s",
        });
    }, 1200);

})