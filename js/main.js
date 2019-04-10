
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

//   //-------- Active Sticky Js ----------//
//      $(".default-header").sticky({topSpacing:0});

  
  //------- Active Nice Select --------//
     $('select').niceSelect();
    


    $('.active-slider').owlCarousel({
        center: true,
        items:1,
        loop:true
    })
    $('.next-trigger').click(function() {
        $(".active-slider").trigger('next.owl.carousel');
    })
        // Go to the previous item
    $('.prev-trigger').click(function() {
        $(".active-slider").trigger('prev.owl.carousel');
    });



     
   // -------   Active Mobile Menu-----//

//   $(".menu-bar").on('click', function(e){
//       e.preventDefault();
//       $("nav").toggleClass('hide');
//       $("span", this).toggleClass("lnr-menu lnr-cross");
//       $(".main-menu").addClass('mobile-menu');
//   });


//   $('.nav-item a:first').tab('show');


//      if(document.getElementById("gallery")){
//           $('select').niceSelect();
//     };


//    if(document.getElementById("default-select")){
//       $('.img-pop-up').magnificPopup({
//           type: 'image',
//           gallery:{
//           enabled:true
//           }
//       });  
//   };


  $('.gal a').simpleLightbox();
});
