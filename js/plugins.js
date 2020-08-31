$(document).ready(function(){

    $(window).resize(function (){
        
        if($(window).width() > 767){

            $('html').niceScroll({
                cursorcolor: '#E41B17',
                cursorborder: 'none'
            });
    
        }
        
    });

    if($(window).width() > 767){

        $('html').niceScroll({
            cursorcolor: '#E41B17',
            cursorborder: 'none'
        });

    }

    $('.carousel').carousel({
        interval: 5000
    });
    
    // Box Option Div 
    $(".gear-check").click(function() {

        $(".option-box").toggleClass('is-visible');

        if($(".option-box").hasClass('is-visible')){

            $(".option-box").animate({

                left: '0px'

            }, 1000);

        }else{

            $(".option-box").animate({

                left: '-200px'

            }, 1000);

        }


        // Change Theme Color


        $('.content-option .color-option li')
            .eq(0).css("backgroundColor", "#E41B17").end()
            .eq(1).css("backgroundColor", "#239B56").end()
            .eq(2).css("backgroundColor", "#21618C").end()
            .eq(3).css("backgroundColor", "#6C3483").end()
            .eq(4).css("backgroundColor", "#D4AC0D")

        $('.content-option .color-option li').click(function() {

            $("link[href*='theme']").attr('href', $(this).attr('data-value'));

        });

        $('.content-option .font-option li').click(function() {

            $('body').css('fontFamily',$(this).data('family'));

        });

    });
    

    // Scroll To Top


    $(window).scroll(function(){

        if($(this).scrollTop() >= $(window).height() ){

            $('#scroll-top').show();

        }else{

            $('#scroll-top').hide();

        }
    });

    $('#scroll-top').click(function(){

        $('html,body').animate({

            scrollTop: '0'

        }, 1000);

    });


});

$(window).load(function() {

    $('body').css('overflow','auto');

    // Loading Elements

    $('.overlay .spinner').fadeOut(function(){

        $(this).parent().fadeOut(2000,function(){

            $(this).remove();

        });

    });

});
