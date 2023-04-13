
$(function () {
    let portfolioTop = $(".portfolio").offset().top;
    let $loading = $('.loading');

    $(window).load(function () {

        $loading.on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        $loading.removeClass("on");

        setTimeout(() => {
            $(".profile__inner").addClass("on");
            $(".card>article").addClass("on");
            $loading.css({display:"none"});

            setTimeout(() => {
                $(".card>article").css({
                    "transition-delay": "0s",
                });
            }, 1200);

        }, 1900);

       /*  $loading.fadeOut(500, function () {

            $(".profile__inner").addClass("on");
            $(".card>article").addClass("on");

            setTimeout(() => {
                $(".card>article").css({
                    "transition-delay": "0s",
                });
            }, 1200);
        }); */
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


    $(".email").on("click", function (e) {
        e.preventDefault();
        copyToClipboard('lsc1997@kakao.com');
        alert('이메일을 복사하였습니다');
    })



})

function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}