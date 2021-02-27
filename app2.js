const navSlide = () => {
  // -------------------------------
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  // -------------------------------
    // toggle nav
  burger.addEventListener('click', () => {    
    nav.classList.toggle('nav-active');
    // -------------------------------
    // animate links
    navLinks.forEach((link, index) => {
       if(link.style.animation){
          link.style.animation = ''
       } else {
          link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.8}s`;
    }
   });
   // -------------------------------
   /* ★★★★★★★★★★ */
   burger.classList.toggle('toggle');
   });
    }
navSlide();

$(function() {
  // aを押すと、そのリンク内に移動する
    $('.nav-links a').click(function() {
      $('.nav-active').fadeOut();
    });   
    $('.burger').click(function() {
      $('.nav-active').fadeIn();
    });
    $('.nav-links a').click(function() {
      $('.burger').trigger('click');
    });
    // $('.burger').click(function() {
    //   $('nav').trigger('click');
    // });
  });   

  $(function() {
    var $win = $(window),
        $header = $('.containerforthetop'),
        headerHeight = $header.outerHeight(),
        startPos = 0;
  
    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ( value > startPos && value > headerHeight ) {
        $header.css('top', '-' + headerHeight + '0px');
      } else {
        $header.css('top', '0');
      }
      startPos = value;
    });
  });
