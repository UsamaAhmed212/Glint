//Banner Comments Slider
var tpj=jQuery;
var revapi1068;
tpj(document).ready(function() {
	if(tpj("#rev_slider_1068_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1068_1");
	}else{
		revapi1068 = tpj("#rev_slider_1068_1").show().revolution({
			sliderType:"auto",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "vertical",
					drag_block_vertical: false
				}
				,
				arrows: {
                    style: "persephone",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 40,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
            	}
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:false
			},
			gridwidth:[385,1024,778,480],
			gridheight:[27,768,960,720],
			lazyType:"single",
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".header",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
});	/*ready*/

//Main Slider
var tpj=jQuery;
var revapi1068;
tpj(document).ready(function() {
	if(tpj("#rev_slider_1068_2").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1068_2");
	}else{
		revapi1068 = tpj("#rev_slider_1068_2").show().revolution({
			sliderType:"standard",
			jsFileLocation:"revolution/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "vertical",
					drag_block_vertical: false
				},
				bullets: {
					enable:true,
					hide_onmobile:false,
					style:"hermes",
					hide_onleave:false,
					direction:"vertical",
					h_align:"right",
					v_align:"center",
					h_offset:30,
					v_offset:0,
					space:10,
					tmp:''
				}
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:false
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[745,768,960,720],
			lazyType:"single",
			shadow:0,
			spinner:"off",
			stopLoop:"on",
			stopAfterLoops:0,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".header",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
});	/*ready*/



// Cirele Progres
window.onload=function(){
  $('.circleGraphic1').circleGraphic();
  $('.circleGraphic2').circleGraphic();
  $('.circleGraphic3').circleGraphic();
  $('.circleGraphic4').circleGraphic();

}

// Project Area Slider
var tpj=jQuery;
var revapi41;
tpj(document).ready(function() {
	if(tpj("#rev_slider_1070_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1070_1");
	}else{
		revapi41 = tpj("#rev_slider_1070_1").show().revolution({
			sliderType:"carousel",
			jsFileLocation:"revolution/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
				onHoverStop:"off",
				arrows: {
					style:"gyges",
					enable:true,
					hide_onmobile:true,
					hide_under:768,
					hide_onleave:false,
					tmp:'',
					left: {
						h_align:"right",
						v_align:"top",
						h_offset:55,
						v_offset:-123
					},
					right: {
						h_align:"right",
						v_align:"top",
						h_offset:0,
						v_offset:-123
					}
				}
			},
			carousel: {
				horizontal_align: "left",
				vertical_align: "center",
				maxVisibleItems: 3,
				space: 22.5,			},
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[365,1024,778,480],
			gridheight:[440,768,960,720],
			lazyType:"none",
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
});	/*ready*/


//  Testimonials Area Slider
var tpj=jQuery;
			
var revapi1078;
tpj(document).ready(function() {
	if(tpj("#rev_slider_1078_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1078_1");
	}else{
		revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"revolution/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:10000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"gyges",
					enable:true,
					hide_onmobile:true,
					hide_under:768,
					hide_onleave:false,
					tmp:'',
					left: {
						h_align:"right",
						v_align:"top",
						h_offset:-55,
						v_offset:-123
					},
					right: {
						h_align:"right",
						v_align:"top",
						h_offset:-110,
						v_offset:-123
					}
				}
			},
			viewPort: {
				enable:true,
				outof:"pause",
				visible_area:"80%",
				presize:false
			},
			gridwidth:[1000,1024,778,480],
			gridheight:[300,600,500,400],
			lazyType:"none",
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed:2000,
				levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
				type:"mouse",
			},
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:0,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
});	/*ready*/


// Blog Area Slider
var tpj=jQuery;
var revapi41;
tpj(document).ready(function() {
	if(tpj("#rev_slider_41_2").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_41_2");
	}else{
		revapi41 = tpj("#rev_slider_41_2").show().revolution({
			sliderType:"carousel",
			jsFileLocation:"revolution/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
				onHoverStop:"off",
				arrows: {
					style:"gyges",
					enable:true,
					hide_onmobile:true,
					hide_under:768,
					hide_onleave:false,
					tmp:'',
					left: {
						h_align:"right",
						v_align:"top",
						h_offset:55,
						v_offset:-123
					},
					right: {
						h_align:"right",
						v_align:"top",
						h_offset:0,
						v_offset:-123
					}
				}
			},
			carousel: {
				horizontal_align: "left",
				vertical_align: "center",
				maxVisibleItems: 3,
				space: 30,
			},
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[360,1024,778,480],
			gridheight:[462,768,960,720],
			lazyType:"none",
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
});	/*ready*/


// Logo Carousel Area Slider 
var tpj=jQuery;
var revapi41;
tpj(document).ready(function() {
	if(tpj("#rev_slider_41_3").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_41_3");
	}else{
		revapi41 = tpj("#rev_slider_41_3").show().revolution({
			sliderType:"carousel",
			jsFileLocation:"revolution/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
				onHoverStop:"off",
			},
			carousel: {
				horizontal_align: "left",
				vertical_align: "center",
				maxVisibleItems: 5,
				space: 0,
			},
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[228,1024,778,480],
			gridheight:[100,768,960,720],
			lazyType:"none",
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
});	/*ready*/



















