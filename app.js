
$(document).ready(function()
{
    'use strict';
    $('body').css('paddingTop', $('.Navbar').innerHeight()+11);
    window.console.log($('.Navbar').innerHeight()+11);
   
    
    $('.Navbar li a').click(function(e){
        e.preventDefault();
        window.console.log( $(this).data('scroll'));
       
        $('html,body').animate({
            scrollTop: $ ('#' + $(this).data('scroll')).offset().top -50
        },500);
    });

    $('.see-more').click(function(e){
        $('.popup').fadeIn();
    })
    
    
});