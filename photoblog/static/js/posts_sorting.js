/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";
if (jQuery('.liza_projects_grid_inner').length > 0) {
	var $liza_projects_container = jQuery('.liza_projects_grid_inner');
}
if (jQuery('.liza_albums_grid_inner').length > 0) {
	var $liza_albums_container = jQuery('.liza_albums_grid_inner');
}
if (jQuery('.liza_blog_grid_inner').length > 0) {
	var $liza_blog_container = jQuery('.liza_blog_grid_inner');
}

jQuery(document).ready(function(){
	if (jQuery('.liza_projects_grid_inner').length > 0) {
		setTimeout("liza_animateListProjects()", 500);
		liza_setup_projects_grid();
	}
	if (jQuery('.liza_albums_grid_inner').length > 0) {
		setTimeout("liza_animateListAlbums()", 500);
		liza_setup_albums_grid();
	}
	if (jQuery('.liza_blog_grid_inner').length > 0) {
		setTimeout("liza_animateListBlog()", 500);
		liza_setup_blog_grid();
	}
});

jQuery(window).on('load', function () {
	if (jQuery('.liza_projects_grid_inner').length > 0) {
		$liza_projects_container.isotope('layout');
		setTimeout("jQuery('.liza_projects_grid_inner').isotope('layout')",500);
	}
	if (jQuery('.liza_albums_grid_inner').length > 0) {
		$liza_albums_container.isotope('layout');
		setTimeout("jQuery('.liza_albums_grid_inner').isotope('layout')",500);
	}
	if (jQuery('.liza_blog_grid_inner').length > 0) {
		$liza_blog_container.isotope('layout');
		setTimeout("jQuery('.liza_blog_grid_inner').isotope('layout')",500);
	}
});
jQuery(window).resize(function () {
	if (jQuery('.liza_projects_grid_inner').length > 0) {
		$liza_projects_container.isotope('layout');
		setTimeout("jQuery('.liza_projects_grid_inner').isotope('layout')",500);
		setTimeout("jQuery('.liza_projects_grid_inner').isotope('layout')",1000);
	}
	if (jQuery('.liza_albums_grid_inner').length > 0) {
		$liza_albums_container.isotope('layout');
		setTimeout("jQuery('.liza_albums_grid_inner').isotope('layout')",500);
		setTimeout("jQuery('.liza_albums_grid_inner').isotope('layout')",1000);
	}
	if (jQuery('.liza_blog_grid_inner').length > 0) {
		$liza_blog_container.isotope('layout');
		setTimeout("jQuery('.liza_blog_grid_inner').isotope('layout')",500);
		setTimeout("jQuery('.liza_blog_grid_inner').isotope('layout')",1000);
	}
});

function liza_setup_blog_grid() {
	jQuery('.liza_blog_grid_inner').each(function(){
		var setPad = Math.floor(parseInt(jQuery(this).attr('data-pad'))/2);
		if (liza_window.width() < 1200 && setPad > 20) {
			setPad = setPad/2;
		}
		if (liza_window.width() < 760 && setPad > 10) {
			setPad = 10;
		}
		jQuery(this).parents('.liza_blog_grid').css({
			'margin-left' : setPad+'px',
			'margin-top' : -1*setPad+'px',
			'margin-right' : setPad+'px',
		});
		jQuery(this).find('.liza_grid_post_inner').css({
			'margin-left' : setPad+'px',
			'margin-top' : setPad+'px',
			'margin-right' : setPad+'px',
			'margin-bottom' : setPad+'px'
		});
	});
	if (jQuery('.liza_grid_post_loading').length > 0) {
		jQuery(".liza_owlCarousel").on("initialized.owl.carousel", function (e) {
			jQuery(".liza_owlCarousel").css("opacity", "1");
		});
		jQuery(".liza_owlCarousel").owlCarousel(
			{
				items: 1,
				lazyLoad: true,
				loop: true,
				autoplay: false,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				autoHeight: false
			}
		);
	}
	liza_theme_setup();
	
	setTimeout("liza_animateListBlog()",300);
}
function liza_setup_projects_grid() {	
	jQuery('.liza_projects_grid_inner').each(function(){
		var setPad = Math.floor(parseInt(jQuery(this).attr('data-pad'))/2);
		if (liza_window.width() < 1200 && setPad > 20) {
			setPad = setPad/2;
		}
		if (liza_window.width() < 760 && setPad > 10) {
			setPad = 10;
		}

		jQuery(this).parents('.liza_projects_grid').css({
			'margin-left' : setPad+'px',
			'margin-top' : -1*setPad+'px',
			'margin-right' : setPad+'px'
		});
		jQuery(this).find('.liza_project_grid_post_inner').css({
			'margin-left' : setPad+'px',
			'margin-top' : setPad+'px',
			'margin-right' : setPad+'px',
			'margin-bottom' : setPad+'px'
		});
	});
	setTimeout("liza_animateListProjects()",300);
}

function liza_setup_albums_grid() {	
	jQuery('.liza_albums_grid_inner').each(function(){
		var setPad = Math.floor(parseInt(jQuery(this).attr('data-pad'))/2);
		if (liza_window.width() < 1200 && setPad > 20) {
			setPad = setPad/2;
		}
		if (liza_window.width() < 760 && setPad > 10) {
			setPad = 10;
		}

		jQuery(this).parents('.liza_albums_grid').css({
			'margin-left' : setPad+'px',
			'margin-top' : -1*setPad+'px',
			'margin-right' : setPad+'px',
		});
		jQuery(this).find('.liza_album_grid_post_inner').css({
			'margin-left' : setPad+'px',
			'margin-top' : setPad+'px',
			'margin-right' : setPad+'px',
			'margin-bottom' : setPad+'px'
		});
	});
	setTimeout("liza_animateListAlbums()",300);
}

function liza_animateListProjects() {
	if (liza_html.find('.liza_project_loading:first').length > 0) {
		(function (img, src) {
			img.src = src;
			img.onload = function () {
				jQuery('.liza_project_loading:first').removeClass('liza_project_loading').animate({
					'z-index': '15'
				}, 200, function() {
					jQuery('.liza_projects_grid_inner').isotope('layout');
					liza_animateListProjects();
				});
			};
		}(new Image(), jQuery('.liza_project_loading:first').find('img').attr('src')));
	}
}
function liza_animateListAlbums() {
	if (liza_html.find('.liza_album_loading:first').length > 0) {
		(function (img, src) {
			img.src = src;
			img.onload = function () {
				jQuery('.liza_album_loading:first').removeClass('liza_album_loading').animate({
					'z-index': '15'
				}, 200, function() {
					jQuery('.liza_albums_grid_inner').isotope('layout');
					liza_animateListAlbums();
				});
			};
		}(new Image(), jQuery('.liza_album_loading:first').find('img').attr('src')));
	}
}
function liza_animateListBlog() {
	if (liza_html.find('.liza_grid_post_loading:first').length > 0) {
		jQuery('.liza_grid_post_loading:first').removeClass('liza_grid_post_loading').animate({
			'z-index': '15'
		}, 200, function() {
			jQuery('.liza_blog_grid_inner').isotope('layout');
			liza_animateListBlog();
		});
	}
}

function liza_ajax_query_posts_isotope(liza_ajax_query_posts_this, liza_ajax_query_posts_first_load) {
    var liza_return_to = liza_ajax_query_posts_this.attr('data-return-to');
	if (liza_ajax_query_posts_this.hasClass('liza_ajax_with_isotope')) {
		var liza_is_isotope = true;
	}
	jQuery('.' + liza_return_to).parent('div').addClass('liza_ajax_query_posts_active_preloader');
    var liza_ajax_query_posts_data_args = liza_ajax_query_posts_this.data('args');
    liza_ajax_query_posts_this.removeClass('liza_ajax_query_posts').addClass('liza_ajax_query_posts_disabled');
    if (liza_ajax_query_posts_first_load == true) {
        var liza_ajax_query_posts_per_page = parseInt(liza_ajax_query_posts_data_args['posts_first_load']);
        var liza_ajax_query_posts_per_page_old = liza_ajax_query_posts_data_args['posts_per_page'];
        liza_ajax_query_posts_data_args['posts_per_page'] = liza_ajax_query_posts_per_page;
    } else {
        var liza_ajax_query_posts_per_page = parseInt(liza_ajax_query_posts_data_args['posts_per_page']);
    }

    jQuery.post(liza_ajaxurl, {
        action: 'liza_ajax_query_posts',
        liza_ajax_query_posts: '' + JSON.stringify(liza_ajax_query_posts_data_args) + '',
    }).done(function (data) {
		var liza_items_to_append = jQuery(data);
		jQuery('.' + liza_return_to).isotope('insert', liza_items_to_append, function () {
			jQuery('.' + liza_return_to).ready(function () {
				jQuery('.' + liza_return_to).isotope('layout');
			});
		});			

        if (liza_ajax_query_posts_first_load == true) {
            liza_ajax_query_posts_data_args['posts_per_page'] = liza_ajax_query_posts_per_page_old;
        }
        liza_ajax_query_posts_data_args['offset'] = parseInt(liza_ajax_query_posts_data_args['offset']) + liza_ajax_query_posts_per_page;
        liza_ajax_query_posts_data_args['posts_counter'] = parseInt(liza_ajax_query_posts_data_args['posts_counter'], 10) + liza_ajax_query_posts_per_page;
        liza_ajax_query_posts_this.attr('data-args', JSON.stringify(liza_ajax_query_posts_data_args));
        liza_ajax_query_posts_this.addClass('liza_ajax_query_posts').removeClass('liza_ajax_query_posts_disabled');
        if (liza_ajax_query_posts_data_args['ajax_callback_function']) {
            window[liza_ajax_query_posts_data_args['ajax_callback_function']]();
        }
        var all_posts_this = jQuery('.' + liza_return_to).find('input[name="count_posts"]'),
            last_post_this = jQuery('.' + liza_return_to).find('input[name="posts_counter"]'),
            all_posts = parseInt(all_posts_this.attr('value'), 10),
            last_post = parseInt(last_post_this.attr('value'), 10);
		
        all_posts_this.remove();
        last_post_this.remove();

        if (last_post > all_posts) {
            liza_ajax_query_posts_this.fadeOut();
        }
        jQuery('.' + liza_return_to).parent('div').removeClass('liza_ajax_query_posts_active_preloader');
    });
}
if (jQuery('.liza_ajax_query_posts_isotope').length > 0) {
    jQuery('.liza_ajax_query_posts_isotope').each(function () {
        liza_ajax_query_posts_isotope(jQuery(this), true);
    });

    jQuery(document).on("click", ".liza_ajax_query_posts_isotope", function () {
        liza_ajax_query_posts_isotope(jQuery(this), false);
    });
}