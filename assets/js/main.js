/*jslint browser: true*/
/*jslint plusplus: true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false, $, jQuery, window, key, PxLoader, PxLoaderImage, Swipe, mySwipe, $f, matchMedia*/

//=======================================================================
// For this boilerplate we are going to break your functions down in the following way:

// Technically we are storing anonymous functions within variables

// There are lots of different reasons for this but mainly it keeps the code dry
// helps in debugging. Either way is right or wrong to be honest, this is just a preference
// and helps with keeping code clean.

// This is was my go to for a while with smaller projects and when i'm not needing crazy
// functionality. There are some newer techniques but this is a great one to learn

// If you want to read more about this stuff go to http://kangax.github.io/nfe/

//=======================================================================


var app     = {};


// Global vars in here we can set up global variables 
// that we can update and access from within any function.

var config  = {
    windowWidth: $(window).width(),
    windowHeight: $(window).height(),
    pagePosition: $(document).scrollTop(),
    fadeSpeed : 250,
    slideSpeed: 500,
    easing: 'easeInOutSine'
};


(function () {
    "use strict";

    // To Keep things neat let's separate out the functions to make them easier to find.

    //--------------------------
    // GLOBAL  FUNCTIONS 
    //--------------------------

    this.formValidiate = function(){
    
        console.log('formValidiate');

       $("input").keyup(function(e) {

            var length = $(this).val().length;
        
            if( length > 5){
                $(this).addClass('valid');
                $(this).removeClass('not-valid');
            }else{
                $(this).addClass('not-valid');
                $(this).removeClass('valid');
            }
        });

    };

    this.formButtons = function(){

        $('.submit').on('click', function(){

        });

    };

    this.setupMenu = function(){

        $('.open').on('click', function(){
            $('.menu').addClass('open');
            $('.container').addClass('menu-open');
        });

        $('.close').on('click', function(){
            $('.menu').removeClass('open');
            $('.container').removeClass('menu-open');
        });
        

    };

    this.startSlideshow = function(){
       // javascript 
    };

    this.showMenu = function(){
        alert('show menu');
    };

    this.makeBlue = function(){

        $('.button').click(function(){

        console.log('make blue');
        $("html").css("background-color", "blue");
    });

    };



    //--------------------------
    // NON TOUCH SPECIFIC  
    //--------------------------

    this.nonTouchFunction = function() {
        console.log('no touch');
    };


    //--------------------------
    // NON TOUCH SPECIFIC  
    //--------------------------

    this.touchDrag = function() {
        console.log('touch');
    };

    this.tap = function() {
        console.log('touch');
    };


    //--------------------------
    // RECALLED FUNCTIONS
    //--------------------------
    // I tend to ues thise to update global variables

    this.setWindowSizeVars = function() {
        config.windowWidth = $(window).width();
        config.windowHeight = $(window).height();
    };

    this.setDocScrollPos = function() {
        config.pagePosition = $(document).scrollTop();
    };

    //--------------------------
    // DEBUG FUNCTIONS
    //--------------------------
    // Only used for debuging / checking vars and so on

    this.debugingOutput = function(){

        $('.win-width').html(config.windowWidth);
        $('.win-height').html(config.windowHeight);
        $('.doc-scroll-pos').html(config.pagePosition);

    };

}).apply(app);

$(document).ready(function () {

    console.log('start');

    // touch or non touch
    if (Modernizr.touch) {
        
        app.touchDrag();
        app.tap();

    } else {
        
        app.startSlideshow();
    
    }

    app.formValidiate();
    app.makeBlue();


    // Debug stuff / example 
    app.debugingOutput();

});

$(window).resize(function () {

    console.log('resize');

    app.setWindowSizeVars();


    // Debug stuff / example 
    app.debugingOutput();

});

$(document).scroll(function () {

    console.log('scroll');

    app.setDocScrollPos();

    // Debug stuff / example 
    app.debugingOutput();

});

$(document).keypress(function(e) {
    
console.log(e.which);
    
    if (e.which === 32) {
        app.showMenu();
    }

});

