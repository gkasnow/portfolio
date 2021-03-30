$(function(){
    // var width_size = window.outerWidth;
    // if (width_size <= 768) {
    //     $('.gnb').css('display','none');
    // }
    /*
    $(window).resize(function (){
        // width값을 가져오기
        var width_size = window.outerWidth;
        
        // 800 이하인지 if문으로 확인
        if (width_size <= 768) {
            $('header ul').css('display','none');
            $('#nav-icon4').click(function(){
                $(this).toggleClass('open');
                $('header ul').slideToggle();
            });
        }
        else {
            $('header ul').css('display','flex');
        }
    })
    */
    // a 태그 성격제거
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });
    //hover 문제해결
    // $('a').on('click touchend',function(){
    //     var el = $(this);
    //     var link = el.attr('href');
    //     window.location = link;
    // });

    $('#nav-icon4').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $('.display').stop().slideToggle();
    });

    $(window).resize(function(){
        $('.display').css('display','none');
        let wt = $(window).width();
        if(wt > 768 && $('.display').is(':hidden')) {
            $('.display').removeAttr('style');
        } 
    });
});
