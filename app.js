
$(document).ready(function()
{
   
    'use strict';
    
    $('body').css('paddingTop', $('.Navbar').innerHeight());
   
    $('html,body').animate({
        scrollTop:($('.Navbar').innerHeight()- $('.Navbar').innerHeight())
    },2000);
    
    $('.Navbar li a').click(function(e){
        e.preventDefault();
       /* window.console.log( $(this).data('scroll'));
        window.console.log($ ('#' + $(this).data('scroll')));
        window.console.log($ ('#' + $(this).data('scroll')).offset().top );*/
        $('html,body').animate({
            scrollTop: $ ('#' + $(this).data('scroll')).offset().top - $('.Navbar').innerHeight()
        },1000);
    });

   /* $('.see-more').click(function(e){
        $('.popup').fadeIn();
    })
    
    $('.close').click(function(e){
        e.preventDefault();
        $('.popup').fadeOut();
      

    })*/
});