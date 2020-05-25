$(document).ready(function() {
    
    /*for the sticky nav*/
    $('.js--section-features').waypoint(function(direction){
        
        if (direction == "down"){
            $('nav').addClass('sticky');
        }
            else{
                $('nav').removeClass('sticky');   
            }
    }, {
  offset: '60px'
}) ;
    
    /*for the scroll script*/
    
    $('.js--scroll-to-plans').click(function (){
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    
                                   
});
    
        $('.js--scroll-to-start').click(function (){
               $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500);

    
    
        });
    
    
    /*navigation scroll*/
    
    
    
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');

      if ($target.length) {
        var baseMinScrollTime = 200,
            baseMaxScrollTime = 500;

        var docHeight = $(document).height(),
            triggerTop = $(this).offset().top,
            targetTop = $target.offset().top;

        var scrollProportion = (targetTop - triggerTop) / docHeight,
            relativeTime = ((baseMaxScrollTime - baseMinScrollTime) * scrollProportion) + baseMinScrollTime,
            // Create inverse relationship (quicker the further we scroll)
            scrollTime = -1 * (1 - relativeTime);

        $('html, body').animate({
          scrollTop: targetTop - 10
        }, scrollTime);
        return false;
      }
    }
  });
    
/*annimation to scroll*/
    $('.js--wp-1').waypoint(function(direction){
       $('.js--wp-1').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
      $('.js--wp-2').waypoint(function(direction){
       $('.js--wp-2').addClass('animated fadeInUp'); 
    }, {
        offset: '50%'
    });
      $('.js--wp-3').waypoint(function(direction){
       $('.js--wp-3').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
      $('.js--wp-4').waypoint(function(direction){
       $('.js--wp-4').addClass('animated pulse'); 
    }, {
        offset: '50%'
    });
    
    
    
    /*mobile navigation*/
    
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        
        
        nav.slideToggle(200)
    });
    
    
    
    
    
});