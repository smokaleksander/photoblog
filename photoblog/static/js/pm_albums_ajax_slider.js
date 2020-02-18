/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";

var liza_ajax_albums = {};

liza_ajax_albums.numbers = jQuery('.liza_albums_ajax_numbers_inner');
liza_ajax_albums.items_holder = jQuery('.liza_albums_ajax_items_holder');
liza_ajax_albums.slider = jQuery('.liza_albums_ajax_slider');
liza_ajax_albums.slider_inner = jQuery('.liza_albums_ajax_slider_inner');

liza_ajax_albums.init = function() {
    var this_obj = this;
    
    // Bind Events
	jQuery('.liza_albums_ajax_slider_prev').on('click',function(){
		this_obj.move.call(this_obj, -1);
	});
	jQuery('.liza_albums_ajax_slider_next').on('click',function(){
		this_obj.move.call(this_obj, 1);
	});
	jQuery('.liza_albums_ajax_slider_fullview').on('click', function () {
		liza_html.toggleClass('liza_fullscreen_fullview');
	});
	jQuery('.liza_albums_ajax_number_item').on('click',function(){
        this_obj.get_album.call(this_obj, parseInt(jQuery(this).attr('data-count'),10));
	});
	jQuery('.liza_albums_ajax_number_item').on('mouseenter',function(){
		this_obj.show_album.call(this_obj, parseInt(jQuery(this).attr('data-count'),10));
	});
	jQuery('.liza_albums_ajax_number_item').on('mouseleave',function(){
		jQuery('.liza_albums_ajax_items_holder').removeClass('albums_preview');
		jQuery('.liza_albums_ajax_item.current_album_show').removeClass('current_album_show');
	});

	//Numbers Scroll
	var thumbs_obj = jQuery('.liza_albums_ajax_numbers_inner'),
		thumbs_obj_parent = jQuery('.liza_albums_ajax_numbers'),
		thumbs_ground = thumbs_obj_parent.width() - thumbs_obj.width(),
		thumbs_step = -200,
		deltaY = 0;
		
	thumbs_obj.on('mousewheel', function (event) {
		deltaY = event.originalEvent.deltaY;
		if (thumbs_obj.width() > thumbs_obj_parent.width()) {
			thumbs_obj.removeClass('centered_thumbs');
			var current_left = parseInt(thumbs_obj.css('left'));
			if (deltaY > 0) {
				if ((current_left - deltaY) > thumbs_ground) {
					thumbs_obj.css('left', current_left - deltaY + 'px');
				} else {
					thumbs_obj.css('left', thumbs_ground + 'px');
				}
			}
			if (deltaY < 0) {
				if (current_left - deltaY < 0) {
					thumbs_obj.css('left', current_left - deltaY + 'px');
				} else {
					thumbs_obj.css('left', '0px');
				}
			}
			event.preventDefault();
		} else {
			thumbs_obj.addClass('centered_thumbs').css('left', '50%');
		}
	});
    
    // Set First Slide
    this_obj.get_album.call(this_obj, 1);
}

liza_ajax_albums.layout = function() {
    var this_obj = this,
        admin_bar_height = 0;
    if (jQuery('#wpadminbar').length > 0) {
        var admin_bar_height = jQuery('#wpadminbar').height();
    }

    if (liza_window.width() > 760) {
        var numbers_height = jQuery('.liza_albums_ajax_numbers').height(),
            header_height = jQuery('header.liza_header').height(),
            set_block_height = liza_window.height() - header_height,
            set_item_height = liza_window.height() - numbers_height - header_height;

        jQuery('.liza_albums_ajax_items_holder').height(set_item_height);
        jQuery('.liza_albums_ajax_template_inner').height(set_block_height);

        jQuery('.liza_albums_ajax_item').each(function(){        
            var $this = jQuery(this),
                $this_image = $this.find('.liza_albums_ajax_template_image'),
                content_height = $this.find('.liza_albums_ajax_template_content').height(),
                set_img_height = liza_window.height() - numbers_height - content_height - header_height - parseInt($this_image.css('margin-bottom'));

            $this_image.height(set_img_height);
            $this.height(set_item_height);		
        });
    } else {
		var header_height = jQuery('.liza_mobile_header').height(),
            all_slider_height = liza_window.height() - header_height - admin_bar_height,
			blocks_height = all_slider_height/2,
			start_top = header_height + admin_bar_height;
		jQuery('.liza_albums_ajax_template_wrapper').height(blocks_height).css('top', start_top+'px');
		jQuery('.liza_albums_ajax_slider').height(blocks_height);
		
		var numbers_height = jQuery('.liza_albums_ajax_numbers').height(),
			set_item_height = blocks_height - numbers_height;
		jQuery('.liza_albums_ajax_items_holder').height(set_item_height);
		jQuery('.liza_albums_ajax_item').height(set_item_height);
		jQuery('.liza_albums_ajax_item').each(function(){
			var $this = jQuery(this),
                content_height = $this.find('.liza_albums_ajax_template_content').height(),
				img_height = set_item_height - content_height - 20;
			$this.find('.liza_albums_ajax_template_image').height(img_height);
		});
    }
}

liza_ajax_albums.show_album = function(album_id) {
	album_id = parseInt(album_id);
	jQuery('.liza_albums_ajax_items_holder').addClass('albums_preview');
	jQuery('.liza_albums_ajax_item.current_album_show').removeClass('current_album_show');
	jQuery('.liza_albums_ajax_item' + album_id).addClass('current_album_show');    
}

liza_ajax_albums.get_album = function(album_id) {
	album_id = parseInt(album_id);
	jQuery('.liza_albums_ajax_items_holder').removeClass('albums_preview');
	jQuery('.liza_albums_ajax_number_item.current').removeClass('current');
	jQuery('.liza_albums_ajax_number_item' + album_id).addClass('current');
	jQuery('.liza_albums_ajax_item.current_album').removeClass('current_album');
	jQuery('.liza_albums_ajax_item' + album_id).addClass('current_album');
	
	jQuery('.liza_albums_ajax_slider_inner').animate({'opacity' : 0}, 500, function(){
		jQuery('.liza_albums_ajax_slider_inner').empty();
		liza_ajax_albums.post_content(jQuery('.liza_albums_ajax_number_item'+album_id).attr('data-content'));
	});
}

liza_ajax_albums.post_content = function(content_data) {
	var data_array = content_data.split(',');
	var $i = 0,
		item_count;
	while ($i < data_array.length) {
		item_count = $i+1;
		jQuery('.liza_albums_ajax_slider_inner').append('<div class="liza_albums_ajax_image_slide liza_albums_ajax_image_slide'+ item_count +'" data-count="'+ item_count +'" data-src="'+ data_array[$i] +'"></div>');
		$i++;
	}
    // Albums Recived
	jQuery('.liza_albums_ajax_slider_inner').find('.liza_albums_ajax_image_slide').each(function(){
		jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-src') + ')');
	});
	jQuery('.liza_albums_ajax_slider_inner').animate({'opacity' : 1}, 500);
	liza_ajax_albums.set.call(liza_ajax_albums, 1);
}

liza_ajax_albums.move = function(dir) {
    var this_obj = this,
        max = this_obj.slider.find('.liza_albums_ajax_image_slide').length;

    if (dir > 0)
        this_obj.active_slide++;
    if (dir < 0)
        this_obj.active_slide--;
    if (this_obj.active_slide < 1)
        this_obj.active_slide = max;
    if (this_obj.active_slide > max)
        this_obj.active_slide = 1;

    this_obj.set.call(this_obj, this_obj.active_slide);
}

liza_ajax_albums.set = function(slide_id) {
    var this_obj = this;
    slide_id = parseInt(slide_id,10);
    this_obj.active_slide = slide_id;
    var $active_slide = this_obj.slider.find('[data-count='+ slide_id +']');
    this_obj.slider.find('.active').removeClass('active');
    $active_slide.addClass('active');
}

jQuery(document).ready(function(){
	liza_ajax_albums.init.call(liza_ajax_albums);
});

jQuery(window).on('load', function () {
	liza_ajax_albums.layout.call(liza_ajax_albums);
});

jQuery(window).resize(function(){
	liza_ajax_albums.layout.call(liza_ajax_albums);
});

jQuery(document.documentElement).keyup(function (event) {
	if ((event.keyCode == 37 || event.keyCode == 38)) {
		event.preventDefault();
		liza_ajax_albums.move.call(liza_ajax_albums, -1);
	}
	if ((event.keyCode == 39 || event.keyCode == 40)) {
		event.preventDefault();
		liza_ajax_albums.move.call(liza_ajax_albums, 1);
	}
});

function liza_ajax_albums_recieved() {
	jQuery('.liza_albums_ajax_slider_inner').find('.liza_albums_ajax_image_slide').each(function(){
		jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-src') + ')');
	});
	jQuery('.liza_albums_ajax_slider_inner').animate({'opacity' : 1}, 500);
	liza_ajax_albums.set.call(liza_ajax_albums, 1);
}