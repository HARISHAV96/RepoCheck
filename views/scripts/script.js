/*Smooth scroll*/
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

//   $(document).ready(function(){
//     $('a[href^="#"]').on('click',function (e) {
//         e.preventDefault();

//         var target = this.hash;
//         $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop':  $target.offset().top
//         }, 900, 'swing', function () {
//             window.location.hash = target;
//         });
//     });
// });

  //Nav Bar 
  $(function(){
  var navbar = $('.navbar');
  var navimage= $('.align-top');
  var navdiv =$('.pariniti');
	
	$(window).scroll(function(){

		if($(window).scrollTop()<= 30){
      navbar.removeClass('navanimation');
      navimage.removeClass('navimageanimation');
      navdiv.removeClass('navdivanimation');
		} else {
      navbar.addClass('navanimation');
      navimage.addClass('navimageanimation');
      navdiv.addClass('navdivanimation');
  }
    
	});
});

/*Product animation*/
$(function(){
	
	var div =$(".product1,.product2,.product3,.product4");
	$(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() - 0 >= $(".product1,.product2,.product3,.product4").offset().top){
      
      div.addClass('mobileanimation');
      
    }else{
      div.removeClass('mobileanimation');
      
    }
	});
});

/*Fixed Button*/
$(function(){
  var navbar = $('.fixedbutton');
  
  $(window).scroll(function(){
    if($(window).scrollTop()<= 50){
      navbar.removeClass('gototopbutton');
    } else {
      navbar.addClass('gototopbutton');
    }
  });
});