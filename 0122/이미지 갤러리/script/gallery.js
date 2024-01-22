//갤러리 스크립트

$(document).ready(function(){
    const g_navi = $('.g_navi > ul > li > a');
    const g_list = $('.g_list > li > a');
    const t_btn = $('.g_navi > ul > li:first-child a');
    const p_btn = $('.g_navi > ul > li:nth-child(2) a');
    const d_btn = $('.g_navi > ul > li:nth-child(3) a');
    const u_btn = $('.g_navi > ul > li:nth-child(4) a');
    const c_btn = $('.g_navi > ul > li:last-child a');
    
    g_navi.click(function(){
        $(this).addClass('act').parent().siblings().find('a').removeClass('act');
    });
    g_list.mouseenter(function(){
        $(this).find('.caption').stop().animate({'bottom' : '0'},150);
    });
    g_list.mouseleave(function(){
        $('.caption').stop().animate({'bottom' : '-40px'},150);
    });    
    
    // 전체메뉴 클릭시 .total 보이게
    t_btn.click(function(){
        $('.total').hide();
        $('.total').fadeIn();
    });
    //기획 클릭시 .plan 보이게
    p_btn.click(function(){
        $('.total').hide();
        $('.plan').fadeIn();
    });
    // 설계 클릭시 .design 보이게
    d_btn.click(function(){
        $('.total').hide();
        $('.ui').fadeIn();
    });
    //디자인 클릭시 .ui 보이게
    u_btn.click(function(){
        $('.total').hide();
        $('.design').fadeIn();
    });
    // 개발 클릭시 .coding 보이게
    c_btn.click(function(){
        $('.total').hide();
        $('.coding').fadeIn();
    });
    
    // 3. 이미지 목록 a요소 클릭시 href값 변수에 담아 modal윈도 띄우기
    g_list.click(function(){
        let img_src = $(this).attr('href');
        let modal = `
        <div class = "modal">
        <div class = "center">
            <img src = ${img_src} alt = "이미지">
            <i class = "fas fa-close"></i>
            </div>
            </div>`
            //백틱문자를 사용하면 변수를 가져올 수 있다.
            // body태그의 맨뒤에 백틱문자로 선언한 modal 변수값 출력하기
            $('body').append(modal);
            
        $('.center i.fas').click(function(){
            $('.modal').fadeOut();
        });

        return false;
    });

        
});