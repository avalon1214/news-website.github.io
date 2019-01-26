 /*http://workshop.rs/2010/04/coin-slider-image-slider-with-unique-effects/*/

 $(document).ready(function() {
    $('#coin-slider').coinslider({ 
    width: 545, // width of slider panel
height: 290, // height of slider panel
spw: 7, // squares per width
sph: 5, // squares per height
delay: 3000, // delay between images in ms
sDelay: 30, // delay beetwen squares in ms
opacity: 0.7, // opacity of title and navigation
titleSpeed: 500, // speed of title appereance in ms
effect: '', // random, swirl, rain, straight
navigation: true, // prev next and buttons
links : true, // show images as links 
hoverPause: true // pause on hover
    });
     
  });