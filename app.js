"use strict";

var self = module.exports = {
	
	init: function(){		
		
		// when this app has been triggered on speech
		Homey.manager('speech-input').on('speech', function( speech ){

				Homey.log('onSpeech', speech);
			
				// say something back
				speech.say( __("hello") );
			
    //		});
			
    //    	console.log("trigger", trigger);			
			
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
