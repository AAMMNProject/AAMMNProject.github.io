$(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


  
  window.sr=ScrollReveal();
  sr.reveal('.float-in-down',{
    duration:2000,
    origin:'bottom'
  });

  sr.reveal('.learn-more',{
    duration:2000,
    origin:'bottom'
  });

  sr.reveal('.current-float-in',{
    duration:2000,
    origin:'bottom',
    distance:'300px'
  });
  
  sr.reveal('.why-float-in',{
    duration:2000,
    origin:'bottom',
    distance:'300px'
  });

  sr.reveal('.floating-left',{
    duration:2000,
    origin:'left',
    distance:'300px'
  });  

  sr.reveal('.floating-right',{
    duration:2000,
    origin:'right',
    distance:'300px'
  });    

 
 
  $(function(){
    $('a[href*="#"]:not([href="#"])').click(function(){
      if (location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length){
          $('html','body').animate({
            scrollTop:target.offset().top
          },1000);
          return false;
        }
      }
    });
  });