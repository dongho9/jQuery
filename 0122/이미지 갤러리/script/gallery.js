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
        // let title = $(this).attr('title');
        let title = $(this).find('span').text();
        let i = $(this).parent().index()+1;
        console.log(i);
        console.log(img_src);
        console.log(title);
        
        let modal = `
        <div class = "modal">
            <div class = "center">
                <h3>${title}</h3>
                <img src = ${img_src} alt = "이미지">
                <i class = "fas fa-close"></i>
                <i class = "fas fa-angle-left"></i>
                <i class = "fas fa-angle-right"></i>
                <span class="p_num"> ${i}/12 </span>
            </div>
        </div>`
        
            //백틱문자를 사용하면 변수를 가져올 수 있다.
            // body태그의 맨뒤에 백틱문자로 선언한 modal 변수값 출력하기

        $('body').append(modal);
        $('.modal i.fa-angle-left').click(function(){
            if(i == 1){
                i = 12;
            }else{
                i--;
            }
            dataChange(i);
        });
        
        $('.modal i.fa-angle-right').click(function(){
            if(i == 12){
                i = 1;
            }else{
                i++;
            }
            dataChange(i);
        });
        
        function dataChange(i){
            $('.p_num').text(i+'/12');
            // 인덱스번호에 맞는 제목 변경되어야
           $('.modal h3').text($('.g_list li').eq(i-1).find('.caption').text());

            
            if(i==4 || i==9 || i==11){
                $('.modal img').attr('src','./images/img'+i+'.png');
            }else{
                $('.modal img').attr('src','./images/img'+i+'.jpg'); 
            }      
        }
                // 좌, 우버튼 클릭시 받아온 i값을 가지고 
        // 제목, 이미지, 페이지 번호 변경하기
        $('.center i.fa-close').click(function(){
            $('.modal').fadeOut();
        });

        return false;
    });

        
});