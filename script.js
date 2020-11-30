// $(document).ready(function(){

// function isElementVisible($elementToBeChecked)
// {
//     var TopView = $(window).scrollTop();
//     var BotView = TopView + $(window).height();
//     var TopElement = $elementToBeChecked.offset().top;
//     var BotElement = TopElement + $elementToBeChecked.height();
//     return ((BotElement <= BotView) && (TopElement >= TopView));
// }

// $(window).scroll(function () {
//     $( ".bar" ).each(function() {
//         $this = $(this);
//         isOnView = isElementVisible($(this));
//         if(isOnView && !$(this).hasClass('come-in')){
//             $(this).addClass('come-in');
//             startAnimation($(this));
//         }
//     });
// });

// function startAnimation($this) {
//   $this.animate({
//     width: "100%"
//   }, 3000, function() {
//     // Animation complete.
//   });
// }

// });






// 	$.fn.offScreen = function(distance){
		
// 	    var $t				= $(this),
// 	    	$w				= $(window),
// 	    	viewTop			= $w.scrollTop(),
// 	    	viewBottom		= viewTop + $w.height(),
// 	    	_top			= $t.offset().top - distance,
// 	    	_bottom		= $t.offset().top + $t.height() + distance;
   
//    return {
//      top: _bottom <= viewTop,
//      bottom: _top >= viewBottom
//    }
	
// };
    


// var win = $(window);

// var allMods = $(".module");

// allMods.each(function(i, el) {
//   var el = $(el);
//   if (!el.offScreen(20).bottom) {
//     el.addClass("already-visible"); 
//   } 
// });

// win.on("scroll resize",function(event) 
// {
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (!el.offScreen(150).top && !el.offScreen(20).bottom) 
//     {
//       el.removeClass("already-visible off-screen-top off-screen-bottom"); 
//       el.addClass("come-in"); 
//     } 
//     else
//     {
//         if(el.offScreen(150).top)
//         {
//             el.addClass("off-screen-top"); 
//         }
//         else
//         {
//             el.addClass("off-screen-bottom"); 
//         }
//     }
//   });allMods.each()
// });win.scroll()
// win.trigger("scroll");

// allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("already-visible");
//     }
//     else {
//     /*  Like this!  */
//     el.css('visibility', 'hidden');
//     }
//   });
