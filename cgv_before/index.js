$('.carousel-1 > .owl-carousel').owlCarousel({
    autoplay:true, // 오토 플레이
    autoplayTimeout:5000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 5초
    autoplayHoverPause:true, // 마우스 올리면 오토 플레이 멈춤
    loop:true, // 끝에서 다시 처음으로 시작
    margin:0,
    nav:true,
    navText:[,],
    responsive:{
        0:{
            items:1
        }
    }
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    var rightSideBarTop = scrollTop + 20;
    
    if ( rightSideBarTop < 159 ) {
        rightSideBarTop = 159;
    }
    
    if ( rightSideBarTop > 1515 ) {
        rightSideBarTop = 1515;
    }
    
    $('.right-side-bar').css('top', rightSideBarTop);
});