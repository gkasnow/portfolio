$(function(){
    // 풀페이지
    $('#fullpage').fullpage({
        //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage'],
        menu: '#menu',
        //loopTop: true,
        //loopBottom: true,
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['title', 'I am', 'character', 'skill','experience'],
        scrollOverflow: true,
    });

    // 타이핑
    const type = new Typewriter('#typewriter', {
        strings: ['따뜻한 사람.', '배려있는 사람.','도전하는 사람.','함혜진입니다.'],//글자입력
        autoStart: true,//자동시작
        loop: true,//반복

        pauseFor:300,
    });

    // 버튼클릭시
    $('.txt5 a').on('click',function(){
        $('.txt5 a').removeClass('on'); //모든 li의 클래스 'on' 제거
        // this : 내가 클릭한 h2
        $(this).addClass('on');//내가 클릭한 h2의 부모인 li에만 적용
        //$(this).parent().siblings().removeClass('on');
    });
    $('.txt6 a').on('click',function(){
        $('.txt6 a').removeClass('on');
        $(this).addClass('on');
    });
    $('.txt5 a:nth-of-type(1)').on('click',function(){
        $('.txt5 h3').text('Adobe Photoshop & Illustrator');
        $('.txt5 p').text('사진 보정 및 합성, 그래픽 디자인, UIUX 디자인의 구현이 가능합니다.');
        $('.txt5 .click').css({'left':'-0.84vw','width': '13.385vw'});
    });
    $('.txt5 a:nth-of-type(2)').on('click',function(){
        $('.txt5 h3').text('Adobe Xd');
        $('.txt5 p').text('디자인 및 프로토타입을 구현해낼 수 있습니다.');
        $('.txt5 .click').css({'left':'12.367vw','width': '8.289vw'});
    });
    $('.txt5 a:nth-of-type(3)').on('click',function(){
        $('.txt5 h3').text('Adobe Premiere');
        $('.txt5 p').text('영상편집 및 음악삽입을 통해 짧은 영상을 만들 수 있습니다.');
        $('.txt5 .click').css({'left':'20.107vw','width': '8.289vw'});
    });
    $('.txt5 a:nth-of-type(4)').on('click',function(){
        $('.txt5 h3').text('3ds Max');
        $('.txt5 p').text('간단한 모델링(high modeling,low modeling)과 텍스쳐를 입힐 수 있습니다.');
        $('.txt5 .click').css({'left':'28.007vw','width': '8.289vw'});
    });

    $('.txt6 a:nth-of-type(1)').on('click',function(){
        $('.txt6 h3').text('HTML5');
        $('.txt6 p').text('HTML 웹표준을 준수하여 구조를 만들 수 있습니다.');
        $('.txt6 .click').css({'left':'-0.84vw','width': '8.289vw'});
    });
    $('.txt6 a:nth-of-type(2)').on('click',function(){
        $('.txt6 h3').text('CSS3');
        $('.txt6 p').text('디자인 되어진 화면을 CSS3를 통해 구현해낼 수 있습니다.');
        $('.txt6 .click').css({'left':'8.367vw','width': '8.289vw'});
    });
    $('.txt6 a:nth-of-type(3)').on('click',function(){
        $('.txt6 h3').text('JavaScript & jQuery');
        $('.txt6 p').text('웹페이지의 동적인 움직임이나 이벤트를 만들 수 있으며 자바스크립트는 계속 공부중에 있습니다.');
        $('.txt6 .click').css({'left':'17.307vw','width': '13.385vw'});
    });
});
