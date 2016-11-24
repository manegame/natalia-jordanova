/*jslint browser: true, devel: true, node: true, nomen: true, plusplus: true*/
/*global $, jQuery*/

(function () {

  "use strict";
  
  // Require jQuery
  global.$                = require("jquery");
    
  var shared              = require("./shared"),
      debounce            = require('debounce');
  
  require("fullpage.js");

  $(function () {
    
    console.log("READY");

    // testing fullpage js

    $('#fullpage').fullpage();
    

    // var lastScrollTop = 0, delta = 100;
    // var currentImg = 1;
    // var maxLength = $('.content').length;
    

    // $('html, body').animate({
    //   'scrollTop' : $('#img-1').offset().top - ( $(window).height() - $('#img-1').height() ) / 2
    // }, 500);

    // console.log("This many images: " + maxLength);

    // function scrollNext() {

    //   if( currentImg < maxLength ){
    //     currentImg ++;  
    //     $('html, body').animate({
    //       'scrollTop' : $('#img-' + currentImg + '').offset().top - ( $(window).height() - $('#img-' + currentImg + '').height() ) / 2
    //     }, 500);
    //   } else {
    //     currentImg = maxLength;
    //     e.preventDefault();
    //   }
    // }

    // function scrollPrev(){
    //   if( currentImg > 0 ){
    //     currentImg --;
    //     $('html, body').animate({
    //       'scrollTop' : $('#img-' + currentImg + '').offset().top - ( $(window).height() - $('#img-' + currentImg + '').height() ) / 2
    //     }, 500);
    //   } else {
    //     currentImg == 0;
    //   }
    //   console.log(currentImg);
    // }

    // $(document).keydown(function(e){

    //   switch(e.which) {

    //     case 38: // up
    //     scrollPrev();
    //     break;

    //     case 40: // down
    //     scrollNext();
    //     break;

    //     default: return; // exit this handler for other keys
    //     }
    //   e.preventDefault(); // prevent the default action (scroll / move caret)

    // });

    //
    // animated hover business
    //




    $('.animate').on('mouseover', function(){

      var img = $(this).find('img').attr('data-img-url');

      console.log($(this), img);

      $(this).css({
        'background-image' : 'url(' + img + ')'
      });

      $(this).find('h1').css({
        'color' : 'white'
      }); 

      var sizes = {
        top : $(this).position().top,
        left : $(this).position().left,
        width : $(this).width(),
        height : $(this).height()
      };

      $('.animated-over').animate({
        'top' : sizes.top, 
        'left' : sizes.left, 
        'width' : sizes.width, 
        'height' : sizes.height,
      }, 100);

    });


    


    // 
    // colorswap business
    //

    $('a').on('mouseover', function(e){

      var bgColor = $(this).attr('data-background-color');

      if( bgColor ) {
      
        var fgColor = $(this).attr('data-foreground-color');
        var grSize = 10 + Math.floor(Math.random() * 30);

        $('.background-container').css({
          'background-color' : bgColor
        });
        if( fgColor ){
          $('.foreground-container').css({
              'background' : 'radial-gradient(at ' + e.pageX + 'px ' + e.pageY + 'px ' + ', ' + fgColor + ' , rgba(0,0,0,0) ' + grSize + '% )',
              'background' : '-webkit-radial-gradient(' + e.pageX + 'px ' + e.pageY + 'px ' + ', ' + fgColor + ' , rgba(0,0,0,0) ' + grSize + '% )'
          });  
        } else {
          $('.foreground-container').css({
            'background' : 'rgba(0,0,0,0)'
          });  
        }
        
      } else {
      $('.background-container').css({
          'background-color' : 'rgba(20,20,20,1)'
        });
      }
      
    });

    // $(window).scroll(function(e){

    //   event.preventDefault();

    //    var st = $(this).scrollTop();
       
    //    if( Math.abs(lastScrollTop - st) <= delta ) 
    //         return;  
          
    //    if (st > lastScrollTop ){
    //       scrollNext();

    //    } else {   
    //       scrollPrev();

    //    }
    //    lastScrollTop = st;
    // });

  });

}());