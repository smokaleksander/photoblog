/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";

var	$liza_ribbons_slider_wrapper = jQuery('.liza_2ribbons_slider_wrapper'),
    liza_2rs = {},
    scroll_delay = +new Date();

liza_2rs.dom = $liza_ribbons_slider_wrapper;
liza_2rs.slider = jQuery('.liza_2ribbons_slider');
liza_2rs.top_line = jQuery('.liza_2ribbons_top_line');
liza_2rs.bottom_line = jQuery('.liza_2ribbons_bottom_line');
liza_2rs.top_max = liza_2rs.top_line.find('.liza_top_slide').length;
liza_2rs.bottom_max = liza_2rs.bottom_line.find('.liza_bottom_slide').length;
liza_2rs.top_active = 0;
liza_2rs.bottom_active = 0;

liza_2rs.init = function() {
	var this_obj = this;
    
    // Bind Events
    this_obj.slider.on('mousewheel', function(event) {
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
    
	this_obj.slider.on("swiperight", function () {
		this_obj.move.call(this_obj, -1);
	});
    
	this_obj.slider.on("swipeleft", function () {
		this_obj.move.call(this_obj, 1);
	});
    
    this_obj.layout.call(this_obj);
    this_obj.set.call(this_obj, 1, 1);
}

liza_2rs.layout = function() {
 	var this_obj = this,
        set_top_width = 0,
		set_bottom_width = 0,
		set_height = this_obj.top_line.height(),
        top_line = this_obj.top_line,
        bottom_line = this_obj.bottom_line;
    
	top_line.find('.liza_top_slide').each(function(){
        var $this = jQuery(this),
            slide_width = Math.ceil(set_height * $this.attr('data-ratio'));
		$this.width(slide_width);
		set_top_width = set_top_width + slide_width;
	});
	bottom_line.find('.liza_bottom_slide').each(function(){
        var $this = jQuery(this),
            slide_width = Math.ceil(set_height * $this.attr('data-ratio'));
		$this.width(slide_width);
		set_bottom_width = set_bottom_width + slide_width;
	});
	top_line.width(set_top_width);
	bottom_line.width(set_bottom_width);	
    
    if (this_obj.top_active > 0 && this_obj.bottom_active > 0) {
        this_obj.set(this_obj.top_active, this_obj.bottom_active);
    }
}

liza_2rs.move = function(dir) {
    var this_obj = this,
        active_top = this_obj.top_active,
        active_bottom = this_obj.bottom_active;
    
    if (dir > 0) {
        active_top++;
        active_bottom++;
    } else {
        active_top--;
        active_bottom--;        
    }
    active_top = this_obj.check.call(this_obj,active_top,'top');
    active_bottom = this_obj.check.call(this_obj,active_bottom,'bottom');
    
    this_obj.top_active = active_top;
    this_obj.bottom_active = active_bottom;
    
    this_obj.set.call(this_obj, active_top, active_bottom);
}

liza_2rs.check = function(check_item,pos) {
    if (pos == 'top') {
        var max = this.top_max;
    } else {
        var max = this.bottom_max;
    }
    if (check_item > max)
        check_item = 1;
    if (check_item < 1)
        check_item = max;
    
    return check_item;
}

liza_2rs.check_left = function(check_val,pos) {
    if (pos == 'top') {
        var max = liza_window.width() - this.top_line.width();
    } else {
        var max = liza_window.width() - this.bottom_line.width();
    }
    if (check_val < max)
        check_val = max;
    if (check_val > 0)
        check_val = 0;
    
    return check_val;
}

liza_2rs.set = function(top_slide, bottom_slide) {
    var this_obj = this;
	top_slide = parseInt(top_slide,10);
	bottom_slide = parseInt(bottom_slide,10);
    this_obj.top_active = top_slide;
    this_obj.bottom_active = bottom_slide;
    
    this_obj.dom.find('active').removeClass('active');
    
	var $top_slide = this_obj.top_line.find('[data-count='+ top_slide +']'),
		$bottom_slide = this_obj.bottom_line.find('[data-count='+ bottom_slide +']'),
        $top_line = this_obj.top_line,
        $bottom_line = this_obj.bottom_line;

	$top_slide.addClass('active');
	$bottom_slide.addClass('active');
	
	var top_left = -1*Math.floor($top_slide.offset().left) + parseInt($top_line.css('left'),10),
		bottom_left = -1*Math.floor($bottom_slide.offset().left) + parseInt($bottom_line.css('left'),10);

    top_left = this_obj.check_left.call(this_obj, top_left, 'top');
    bottom_left = this_obj.check_left.call(this_obj, bottom_left, 'bottom');
	
	$top_line.css('left', top_left + 'px');
	$bottom_line.css('left', bottom_left + 'px');
}

jQuery(document.documentElement).keyup(function (event) {
	if ((event.keyCode == 37)) {
		event.preventDefault();
		liza_2rs.move.call(liza_2rs, -1);
	}
	if ((event.keyCode == 39)) {
		event.preventDefault();
		liza_2rs.move.call(liza_2rs, 1);
	}
});

jQuery(document).ready(function() {
	liza_2rs.init.call(liza_2rs);
});

jQuery(window).on('load', function () {
	liza_2rs.layout.call(liza_2rs);
});

jQuery(window).resize(function() {
	liza_2rs.layout.call(liza_2rs);
	setTimeout('liza_2rs.layout.call(liza_2rs)',500);
});

/* EOF */