(function($){
	$(document).ready(function() {	


		

				
		//slider1
		jQuery(document).ready(function() {

		 $(".slider1").owlCarousel({
		 	"items" : 5,
		 	"margin" : 25,
		 	"autoplay": false,	 	
		 	"autoplayTimeout" : 3000,
		 	"loop" : true,
		 	"nav" : false,
		 	"dop" : true,
		 	"responsive" : {
		 		0 : {
		 			"items" : 1
		 		},
		 		576 : {
		 			"items" : 1
		 		},
		 		767 : {
		 			"items" : 1
		 		},
		 		991 : {
		 		 	"items" : 1

		 		}


		 	}
		 });


			var owl = $('.slider1');
			owl.owlCarousel();
			// Go to the next item
			$('.customNextBtn1').click(function() {
			    owl.trigger('next.owl.carousel');
			})
			// Go to the previous item
			$('.customPrevBtn1').click(function() {
			    // With optional speed parameter
			    // Parameters has to be in square bracket '[]'
			    owl.trigger('prev.owl.carousel', [300]);
			})


		});
		
		
		
		
		
		
		
	});
})(jQuery);