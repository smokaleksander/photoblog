/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";

var liza_slider_object = {},
    scroll_delay = +new Date();

liza_slider_object.dom = jQuery('.liza_albums_slider_wrapper');
liza_slider_object.thumbs = jQuery('.liza_albums_slider_thumbs');
liza_slider_object.thmb_inner = jQuery('.liza_albums_slider_thumbs_inner');
liza_slider_object.counter = jQuery('.liza_albums_current_counter');
liza_slider_object.max = jQuery('.liza_albums_slide').length;
liza_slider_object.active_slide = jQuery('.liza_albums_slide').length;

liza_slider_object.init = function() {
    var this_obj = this;
    
    // Bind Events
	this_obj.dom.on("swipeleft", function () {
		this_obj.move.call(this_obj, 1);
	});
	this_obj.dom.on("swiperight", function () {
		this_obj.move.call(this_obj, -1);
	});
    
	this_obj.thumbs.on('mouseenter', function(){
		if (jQuery(window).width() > 1200) {
			liza_html.addClass('liza_show_aslider_thumbs');
		}
	});
	this_obj.thumbs.on('mouseleave', function(){
		liza_html.removeClass('liza_show_aslider_thumbs');
	});
    
	this_obj.thumbs.find('.liza_albums_thumb').on('click',function(){
		this_obj.set.call(this_obj, jQuery(this).attr('data-count'));
	});
    
	this_obj.dom.on('mousewheel', function(event) {
	    if(+new Date() - scroll_delay > 100){
			if (event.deltaY > 0) {
				this_obj.move.call(this_obj, -1);
			}
			if (event.deltaY < 0) {
				this_obj.move.call(this_obj, 1);
			}
			scroll_delay = +new Date();
		} else {
			scroll_delay = +new Date();
		}
	});

	//Thumbs Scroll
	var thumbs_obj = liza_slider_object.thmb_inner,
		thumbs_obj_parent = liza_slider_object.thumbs,
		thumbs_ground = thumbs_obj_parent.height() - thumbs_obj.height(),
		thumbs_step = -200,
		deltaY = 0;

    if (thumbs_obj.height() > thumbs_obj_parent.height()) {
        thumbs_obj.removeClass('centered_thumbs');
        thumbs_obj.css('top', '0');
    } else {
        thumbs_obj.addClass('centered_thumbs');
        thumbs_obj.css('top', '50%');
    }

	thumbs_obj.on('mousewheel', function (event) {
		deltaY = event.originalEvent.deltaY;
		if (thumbs_obj.height() > thumbs_obj_parent.height()) {
			thumbs_obj.removeClass('centered_thumbs');
			var current_top = parseInt(thumbs_obj.css('top'),10);
			if (deltaY > 0) {
				if ((current_top - deltaY) > thumbs_ground) {
					thumbs_obj.css('top', current_top - deltaY + 'px');
				} else {
					thumbs_obj.css('top', thumbs_ground + 'px');
				}
			}
			if (deltaY < 0) {
				if (current_top - deltaY < 0) {
					thumbs_obj.css('top', current_top - deltaY + 'px');
				} else {
					thumbs_obj.css('top', '0px');
				}
			}
			event.preventDefault();
		} else {
			thumbs_obj.addClass('centered_thumbs');
			thumbs_obj.css('top', '50%');
		}
	});
    
    this_obj.set.call(this_obj, 1);
}

liza_slider_object.layout = function() {
    var this_obj = this;
    
	/* Setup Thumbs */
	this_obj.thmb_inner.removeClass('centered_thumbs');
	if (this_obj.thmb_inner.height() < this_obj.thumbs.height()) {
		this_obj.thmb_inner.addClass('centered_thumbs');
	}
}

liza_slider_object.move = function(dir) {
    var this_obj = this,
        active_slide = parseInt(this_obj.active_slide, 10);
    
    if (dir > 0) {
        active_slide++;
    } else {
        active_slide--;
    }
    active_slide = this_obj.check.call(this_obj, active_slide);
    this_obj.set.call(this_obj, active_slide);
}

liza_slider_object.set = function(slide_id) {
    var this_obj = this,
        slide_id = parseInt(slide_id, 10);
    
    this_obj.active_slide = slide_id;
    
    var $active_slide = this_obj.dom.find('[data-count='+ this_obj.active_slide +']');
    this_obj.dom.find('.active').removeClass('active');
    $active_slide.addClass('active');
    
    if (slide_id < 10) slide_id = '0' + slide_id;
	this_obj.counter.text(slide_id);
}

liza_slider_object.check = function(check_item,pos) {
    if (check_item > this.max)
        check_item = 1;
    if (check_item < 1)
        check_item = this.max;
    
    return check_item;
}

jQuery(document.documentElement).keyup(function (event) {
	if ((event.keyCode == 37 || event.keyCode == 38)) {
		event.preventDefault();
		liza_slider_object.move.call(liza_slider_object, -1);
	}
	if ((event.keyCode == 39 || event.keyCode == 40)) {
		event.preventDefault();
		liza_slider_object.move.call(liza_slider_object, 1);
	}
});

jQuery(document).ready(function() {
    liza_slider_object.init.call(liza_slider_object);
});

jQuery(window).on('load', function () {
	liza_slider_object.layout.call(liza_slider_object);
});

jQuery(window).resize(function() {
	liza_slider_object.layout.call(liza_slider_object);
});