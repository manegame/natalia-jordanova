/*jslint browser: true, devel: true, node: true, nomen: true, plusplus: true*/
/*global $, jQuery*/

(function () {

    "use strict";
  
    // Require jQuery
    global.$              = require("jquery");

    var shared            = require("./shared"),
      debounce            = require('debounce');
     
    require("fullpage.js");


    $(function () {
        
        function showSubtitle(){
            $('.description').fadeIn('slow');
        }


        function loop(){

            if(counter == $('.description').data('counter') ){
                $('.description').animate({
                    'scrollTop' : '0'
                }, 1000);
                counter = 0;
            }
            
            $('.description').animate({
                'scrollTop' : '+=22'
            }, 2000, function(){
                counter ++;
                loop();
            });    
        }

        var counter = 0;
        loop();

        $('#fullpage').fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: true,
            navigation: false,
            navigationPosition: 'right',
            // navigationTooltips: ['firstSlide', 'secondSlide'],
            showActiveTooltip: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 500,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: true,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: true,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            resetSliders: false,
            fadingEffect: true,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: false,
            scrollOverflowOptions: null,
            touchSensitivity: 1000,
            normalScrollElementTouchThreshold: 50,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: false,
            verticalCentered: false,
            // sectionsColor : ['#ccc', '#fff'],
            paddingTop: '0',
            paddingBottom: '0',
            fixedElements: '#header, .footer',
            responsiveWidth: 200,
            responsiveHeight: 0,
            responsiveSlides: true,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){

                console.log(index);
                if(index === 1){
                    console.log('!');
                    showSubtitle();
                }
                // if (index === $('#fullpage .section').length) {
                //     console.log('!!!');
                //     hideSubtitle();
                // }
            },
            afterRender: function(){},
            afterResize: function(){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}

        });

    });

}());