"use strict";

var self = module.exports = {
	
	init: function(){		
		
		// when this app has been triggered on speech
		Homey.manager('speech-input').on('speech', function( speech ){

			Homey.log('onSpeech', speech);
			
			var d = new Date();
			var h = d.getHours();
			
			console.log("-> The hour is " + h);

			if (h > 4 && h < 12) { 
				speech.say( __("morning") );
				console.log("-> if routine morning ... ");
			}
			if (h > 11 && h < 18) {
				speech.say( __("afternoon") );
				console.log("-> if routine afternoon ... ");
			}
			if (h > 17 && h < 23) {
				speech.say( __("evening") );
				console.log("-> if routine evening ... ");
			}
			if (h > 22 || h < 5) {
				speech.say( __("night") );
				console.log("-> if routine night ... ");
			}
		
			// say something back
			speech.say( __("hello") );
			
			Homey.manager('ledring').animate('progress',
    
				// optional animation-specific options
				{
					color: 'green',
					rpm: 30 // change rotations per minute
				},
    
				// priority
				'INFORMATIVE',
    
				// duration
				60000,
    
				// callback
				function( err, success ) {
					if( err ) return console.error(err);
					console.log("Animation played succesfully");
				}
			);	
		
		});
	
	}
	
};
