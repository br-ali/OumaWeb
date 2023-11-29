
jQuery(document).ready(function()
{
    'use strict';
    jQuery('body').css('paddingTop', jQuery('.Navbar').innerHeight()+11);
    window.console.log(jQuery('.Navbar').innerHeight()+11);
    jQuery('.Navbar li a').click(function(e){
        e.preventDefault();
        window.console.log( jQuery(this).data('scroll'));
       
        jQuery('html,body').animate({
            scrollTop:jQuery('#' + jQuery(this).data('scroll')).offset().top
        },500);
    });

    
    
});