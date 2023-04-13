

$(function () {
    let portfolioTop = $(".portfolio").offset().top;

    $(window).load(function () {
        $('#loading').fadeOut(500, function () {

            $(".profile__inner").addClass("on");
            $(".card>article").addClass("on");

            setTimeout(() => {
                $(".card>article").css({
                    "transition-delay": "0s",
                });
            }, 1200);
        });
    });

    $(window).scroll(function () {
        let st = $(this).scrollTop();

        if (st > 1) {
            $(".scroll").css({ opacity: "0" });
        } else {
            $(".scroll").css({ opacity: "1" });
        }

        if (st > portfolioTop - 650) {
            $(".portfolio__inner").addClass("on");
            $(".portfolio-list").addClass("on");
            setTimeout(() => {
                $(".portfolio-list>article").css({
                    "transition-delay": "0s",
                });
            }, 1000);
        }
    });



})