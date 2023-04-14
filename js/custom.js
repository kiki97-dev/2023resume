
$(function () {
    let portfolioTop = $(".portfolio").offset().top;
    let $loading = $('.loading');

    let $portfolioList = $(".portfolio-list>article");
    let $popup = $(".popup");
    let $popupArticle = $popup.find("article");

    let $body = $("body");

    var player;

    $(window).load(function () {

        $loading.on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        $loading.removeClass("on");

        setTimeout(() => {
            /* $(".profile__inner").addClass("on");
            $(".card>article").addClass("on"); */
            $loading.css({ display: "none" });

            setTimeout(() => {
                $(".card>article").css({
                    "transition-delay": "0s",
                });
            }, 1200);

        }, 1900);

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

    $portfolioList.on("click", function () {
        $popup.addClass("on");
        $popupArticle.eq($(this).index()).addClass("on");
        $body.addClass("no-scroll ");
    })

    $(".popup__close").on("click", function (e) {
        e.preventDefault();
        $popup.removeClass("on");
        $popupArticle.removeClass("on");
        $body.removeClass("no-scroll ");
    })

})


/* function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'CFhc3Vg7V6c', //유튭 영상ID
        playerVars: {
            'autoplay': 1, //자동재생
            'rel': 0,
            'controls': 1,	//youtube 콘트롤 표시
            'loop': 1, //반복 여부  
            'playlist': 'CFhc3Vg7V6c',
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    player.playVideo();
    player.mute(); //자동재생하려면 mute해야함
} */



function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}