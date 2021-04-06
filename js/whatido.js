$(function(){
    // 풀페이지
    $('#fullpage').fullpage({
        //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
        anchors: ['firstPage','secondPage'],
        menu: '#menu',
        //loopTop: true,
        //loopBottom: true,
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['2020-2021', '2018-2019'],
        scrollOverflow: true
    });
    
    //스와이퍼
    let swiper1 = new Swiper('.s1', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
              800: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3
              }
        },
        autoHeight: true
    });

    let swiper2 = new Swiper('.s2', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        breakpoints: {
              800: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3
              }
        },
        autoHeight: true
    });

    

   

    //마우스 hover--------------------------------------- 
    //러쉬 hover
    $('.content1_1 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide1_1').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide1_1').css('opacity','1');
    });

    //작심삼일앱 hover
    $('.content1_2 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide1_2').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide1_2').css('opacity','1');
    });

    //푸르지오 hover
    $('.content2_1 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide2_1').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide2_1').css('opacity','1');
    });
    //VRUN배너 hover
    $('.content2_2 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide2_2').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide2_2').css('opacity','1');
    });
    //세계책의날 hover
    $('.content2_3 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide2_3').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide2_3').css('opacity','1');
    });
    //세계책의날 hover
    $('.content2_3 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide2_3').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide2_3').css('opacity','1');
    });
    //장기기증포스터 hover
    $('.content2_4 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide2_4').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide2_4').css('opacity','1');
    });
    //두바이포스터 hover
    $('.content2_5 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide2_5').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide2_5').css('opacity','1');
    });
    //vr산업브로슈어 hover
    $('.content2_6 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide2_6').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide2_6').css('opacity','1');
    });
    //풍수 소품 3D캐릭터 hover
    $('.content2_7 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide2_7').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide2_7').css('opacity','1');
    });
    //데구루루 웃음빵! hover
    $('.content2_8 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide2_8').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide2_8').css('opacity','1');
    });
    //yg hover
    $('.content1_3 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide1_3').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide1_3').css('opacity','1');
    });
    //sunkist hover
    $('.content1_4 .img_box').hover(function(){ //mouseenter()
        $('.swiper-slide1_4').css('opacity','0.8');
    }, function(){//mouseleave()
        $('.swiper-slide1_4').css('opacity','1');
    });
       

    // 클릭시
    // $('.content3 .img_box').on('click',function(){ 
    //     $('.contentsub_bg2').addClass('on');
    //     $('.fix').css('background-color', '#848484');
    // });
    // $('.contentsub_box > .close a').on('click',function(){ 
    //     $('.contentsub_bg').removeClass('on');
    //     $('.fix').css('background-color', '#000');
    // });

    // var width_size = window.outerWidth;
    // if (width_size <= 768) {
    //     //Initialize Swiper
    //     var swiper = new Swiper('.swiper-container', {
    //         slidesPerView: 1,
    //         spaceBetween: 30,
    //         slidesPerGroup: 1,
    //         loop: true,
    //         loopFillGroupWithBlank: true,
    //         pagination: {
    //             el: '.swiper-pagination',
    //             clickable: true,
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //     });
    // }
    // else {
    //     //Initialize Swiper
    //     var swiper = new Swiper('.swiper-container', {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //         slidesPerGroup: 3,
    //         loop: true,
    //         loopFillGroupWithBlank: true,
    //         pagination: {
    //             el: '.swiper-pagination',
    //             clickable: true,
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //     });
    // }

    // $(window).resize(function(){
        
    //     let wt = $(window).width();
    //     if(wt > 768) {
    //         var swiper = new Swiper('.swiper-container', {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //         slidesPerGroup: 3,
    //         loop: true,
    //         loopFillGroupWithBlank: true,
    //         pagination: {
    //             el: '.swiper-pagination',
    //             clickable: true,
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //         });
    //     }
    //     else {
    //         var swiper = new Swiper('.swiper-container', {
    //             slidesPerView: 1,
    //             spaceBetween: 30,
    //             slidesPerGroup: 1,
    //             loop: true,
    //             loopFillGroupWithBlank: true,
    //             pagination: {
    //                 el: '.swiper-pagination',
    //                 clickable: true,
    //             },
    //             navigation: {
    //                 nextEl: '.swiper-button-next',
    //                 prevEl: '.swiper-button-prev',
    //             },
    //             });
    //     }
    // });
});