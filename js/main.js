$(document).ready(function(){
    
    //웹리스트 슬라이더
    $('.webList').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<div class="slideBtn slidePrev"><img src="images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="images/common/nextBtn.png"></div>',
    });
    
    //그래픽 슬라이더
    $('.graphic ul').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<div class="slideBtn slidePrev"><img src="images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="images/common/nextBtn.png"></div>',
    });
    
    
    
    //모바일 웹리스트 슬라이더
    $('.mWebList').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<div class="slideBtn slidePrev"><img src="images/common/mPrevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="images/common/mNextBtn.png"></div>',
    });
    
    $('.mGraphic ul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<div class="slideBtn slidePrev"><img src="images/common/mPrevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="images/common/mNextBtn.png"></div>',
    });
    
    
    
    
})

window.addEventListener('load', function(event){
    AOS.init()
});

