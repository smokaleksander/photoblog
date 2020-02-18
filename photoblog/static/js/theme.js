/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";

var liza_window = jQuery(window),
	liza_html = jQuery('html');
jQuery(document).ready(function () {
    if (jQuery('.liza_album_post_loading').length) {
        liza_albums_preload();
    }
    if (jQuery('#wpadminbar').length) {
        liza_html.addClass('has_admin_bar');
    }
	//Preloader
	if (jQuery('.liza_preloader_wrapper').length) {
		jQuery('.liza_preloader_wrapper').addClass('run_preloader');
	}
	
    //Menu
	jQuery('.liza_mobile_menu').html(jQuery('.liza_main_nav').html());
	jQuery('.liza_menu_toggler').on('click', function(){
		if (!jQuery(this).hasClass('liza_menu_toggler_mobile')) {
			jQuery('header.liza_header').toggleClass('liza_menu_opened');
			if (jQuery('.liza_aside_menu_wrapper').length) {
				liza_html.toggleClass('liza_aside_menu_opened');
			}
		}
	});
	jQuery('.liza_menu_toggler_mobile').on('click', function(){
		jQuery('header.liza_mobile_header').toggleClass('liza_menu_opened');
		jQuery('.liza_mobile_menu_wrapper').slideToggle(400);
	});

	//Complex Menu Scroll
	if (jQuery('.liza_aside_menu_wrapper').length && liza_window.width() > 960) {
		var menu_top = 0,
			menu_ground = jQuery('nav.liza_main_nav').height() - jQuery('ul.liza_menu').height(),
			menu_step = -200,
			deltaY = 0,
			this_obj = jQuery('ul.liza_menu'); 
		jQuery('ul.liza_menu').on('mousewheel', function (event) {
			var menu_top = 0,
				menu_ground = jQuery('nav.liza_main_nav').height() - jQuery('ul.liza_menu').height(),
				menu_step = -200,
				deltaY = 0,
				this_obj = jQuery('ul.liza_menu'); 
			
			deltaY = event.originalEvent.deltaY;
			if (jQuery('nav.liza_main_nav').height() < jQuery('ul.liza_menu').height()) {	 	
				var current_top = parseInt(jQuery('ul.liza_menu').css('top'), 10);
				if (deltaY > 0) {
					if ((current_top - deltaY) > menu_ground) {
						this_obj.css('top', current_top - deltaY + 'px');
					} else {
						this_obj.css('top', menu_ground + 'px');
					}
				}
				if (deltaY < 0) {
					if (current_top - deltaY < 0) {
						this_obj.css('top', current_top - deltaY + 'px');
					} else {
						this_obj.css('top', '0px');
					}
				}
				event.preventDefault();
			} else {
				jQuery('ul.liza_menu').css('top', '0px');
			}
		});
	}
	
    liza_theme_setup();
    jQuery(".liza_menu > li").on('mouseenter', function () {
		jQuery(this).addClass('liza_menu_active');
    });
	jQuery(".liza_menu > li").on('mouseleave', function () {
		jQuery(this).removeClass('liza_menu_active');
	});
	if(jQuery('.liza_js_transition').length) {
		jQuery('.liza_js_transition').each(function(){
			var transition_time = jQuery(this).attr('data-transition') + 'ms';
			jQuery(this).css({'transition-duration': transition_time});
		});
	}	
    if (jQuery('.liza_js_bg_color').length) {
        jQuery('.liza_js_bg_color').each(function () {
			if (jQuery(this).attr('data-bgcolor') !== '') {
            	jQuery(this).css('background-color', jQuery(this).attr('data-bgcolor'));
			}
        });
    }
    if (jQuery('.liza_js_bg_image').length) {
        jQuery('.liza_js_bg_image').each(function () {
            jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-src') + ')');
        });
    }
    if (jQuery('.liza_js_color').length) {
        jQuery('.liza_js_color').each(function () {
			if (jQuery(this).attr('data-color') !== '') {
            	jQuery(this).css('color', jQuery(this).attr('data-color'));
			}
        });
    }

    if (jQuery('.liza_js_height').length) {
        jQuery('.liza_js_height').each(function () {
			if (jQuery(this).attr('data-height') !== '') {
            	jQuery(this).css('height', jQuery(this).attr('data-height'));
			}
        });
    }

    if (jQuery('.liza_js_margin').length) {
        jQuery('.liza_js_margin').each(function () {
			if (jQuery(this).attr('data-marTop') !== '') {
            	jQuery(this).css('margin-top', jQuery(this).attr('data-marTop') + 'px');
			}
			if (jQuery(this).attr('data-marBottom') !== '') {
            	jQuery(this).css('margin-bottom', jQuery(this).attr('data-marBottom') + 'px');
			}
			if (jQuery(this).attr('data-marLeft') !== '') {
            	jQuery(this).css('margin-left', jQuery(this).attr('data-marLeft') + 'px');
			}
			if (jQuery(this).attr('data-marRight') !== '') {
            	jQuery(this).css('margin-right', jQuery(this).attr('data-marRight') + 'px');
			}
			if (liza_window.width() < 960) {
				if (jQuery(this).attr('data-marTopTablet') !== '') {
					jQuery(this).css('margin-top', jQuery(this).attr('data-marTopTablet') + 'px');
				}
				if (jQuery(this).attr('data-marBottomTablet') !== '') {
					jQuery(this).css('margin-bottom', jQuery(this).attr('data-marBottomTablet') + 'px');
				}
				if (jQuery(this).attr('data-marLeftTablet') !== '') {
					jQuery(this).css('margin-left', jQuery(this).attr('data-marLeftTablet') + 'px');
				}
				if (jQuery(this).attr('data-marRightTablet') !== '') {
					jQuery(this).css('margin-right', jQuery(this).attr('data-marRightTablet') + 'px');
				}
			}
			if (liza_window.width() < 760) {
				if (jQuery(this).attr('data-marTopMobile') !== '') {
					jQuery(this).css('margin-top', jQuery(this).attr('data-marTopMobile') + 'px');
				}
				if (jQuery(this).attr('data-marBottomMobile') !== '') {
					jQuery(this).css('margin-bottom', jQuery(this).attr('data-marBottomMobile') + 'px');
				}
				if (jQuery(this).attr('data-marLeftMobile') !== '') {
					jQuery(this).css('margin-left', jQuery(this).attr('data-marLeftMobile') + 'px');
				}
				if (jQuery(this).attr('data-marRightMobile') !== '') {
					jQuery(this).css('margin-right', jQuery(this).attr('data-marRightMobile') + 'px');
				}
			}
        });
    }

    if (jQuery('.liza_js_padding').length) {
        jQuery('.liza_js_padding').each(function () {
			if (jQuery(this).attr('data-padTop') !== '') {
            	jQuery(this).css('padding-top', jQuery(this).attr('data-padTop') + 'px');
			}
			if (jQuery(this).attr('data-padBottom') !== '') {
            	jQuery(this).css('padding-bottom', jQuery(this).attr('data-padBottom') + 'px');
			}
			if (jQuery(this).attr('data-padLeft') !== '') {
            	jQuery(this).css('padding-left', jQuery(this).attr('data-padLeft') + 'px');
			}
			if (jQuery(this).attr('data-padRight') !== '') {
            	jQuery(this).css('padding-right', jQuery(this).attr('data-padRight') + 'px');
			}
			if (liza_window.width() < 960) {
				if (jQuery(this).attr('data-padTopTablet') !== '') {
					jQuery(this).css('padding-top', jQuery(this).attr('data-padTopTablet') + 'px');
				}
				if (jQuery(this).attr('data-padBottomTablet') !== '') {
					jQuery(this).css('padding-bottom', jQuery(this).attr('data-padBottomTablet') + 'px');
				}
				if (jQuery(this).attr('data-padLeftTablet') !== '') {
					jQuery(this).css('padding-left', jQuery(this).attr('data-padLeftTablet') + 'px');
				}
				if (jQuery(this).attr('data-padRightTablet') !== '') {
					jQuery(this).css('padding-right', jQuery(this).attr('data-padRightTablet') + 'px');
				}				
			}
			if (liza_window.width() < 760) {
				if (jQuery(this).attr('data-padTopMobile') !== '') {
					jQuery(this).css('padding-top', jQuery(this).attr('data-padTopMobile') + 'px');
				}
				if (jQuery(this).attr('data-padBottomMobile') !== '') {
					jQuery(this).css('padding-bottom', jQuery(this).attr('data-padBottomMobile') + 'px');
				}
				if (jQuery(this).attr('data-padLeftMobile') !== '') {
					jQuery(this).css('padding-left', jQuery(this).attr('data-padLeftMobile') + 'px');
				}
				if (jQuery(this).attr('data-padRightMobile') !== '') {
					jQuery(this).css('padding-right', jQuery(this).attr('data-padRightMobile') + 'px');
				}				
			}
        });
    }

    if (jQuery('a.swipebox').length) {
        liza_html.addClass('liza_swipe_box');
        jQuery('.swipebox').swipebox({
			selector: '.swipebox',
            afterOpen: function () {
                liza_setup_box();
            }
        });
    }
	if (jQuery('.liza_blog_carousel').length) {
		jQuery('.liza_blog_carousel').each(function(){
			jQuery(this).on("initialized.owl.carousel", function(e) {
				jQuery(".liza_owlCarousel").css("opacity", "1");
			});
			jQuery(this).owlCarousel(
				{
					items:1,
					lazyLoad:true,
					loop:true,
					autoplay:false,
					autoplayTimeout:5000,
					autoplayHoverPause:true,
					autoHeight:true
				}
			);			
		});
	}
    if (jQuery('.liza_image_carousel').length) {
        jQuery(".liza_image_carousel").each(function () {
            var setPad = parseInt(jQuery(this).attr('data-padding'), 10),
                autoplay = jQuery(this).attr('data-autoplay'),
                speed = parseInt(jQuery(this).attr('data-speed'),10),
                onScreen = parseInt(jQuery(this).attr('data-onScreen'),10);
            jQuery(this).css({
                'padding-top': setPad + 'px',
                'padding-bottom': setPad + 'px'
            });
            jQuery(this).on("initialized.owl.carousel", function (e) {
                jQuery(this).css("opacity", "1");
            });
            jQuery(this).owlCarousel(
                {
                    center: true,
                    lazyLoad: true,
                    loop: true,
                    autoplay: autoplay,
                    autoplayTimeout: speed,
                    autoplayHoverPause: true,
                    navigation: false,
                    margin: setPad,
                    responsive: {
                        // breakpoint from 0 up
                        0: {
                            items: 1.5
                        },
                        760: {
                            items: onScreen
                        }
                    }
                }
            );
        });
    }
    if (jQuery('.liza_testimonials_slider').length) {
        jQuery(".liza_testimonials_slider").each(function () {
            var autoplay = jQuery(this).attr('data-autoplay'),
                speed = parseInt(jQuery(this).attr('data-speed'), 10);
            jQuery(this).on("initialized.owl.carousel", function (e) {
                jQuery(this).css("opacity", "1");
            });
            jQuery(this).owlCarousel(
                {
                    items: 3,
                    autoHeight: true,
                    center: true,
                    lazyLoad: true,
                    loop: true,
                    autoplay: autoplay,
                    autoplayTimeout: speed,
                    autoplayHoverPause: true,
                    navigation: false,
					margin: 60,
					responsive: {
                        // breakpoint from 0 up
                        0: {
                            items: 1
                        },
						760: {
							items: 3,
							margin: 20
						},
                        960: {
                            items: 3
                        }
                    }
                }
            );
        });
    }
    if (jQuery('.liza_works_slider').length) {
        jQuery(".liza_works_slider").each(function () {
            var autoplay = jQuery(this).attr('data-autoplay'),
                speed = parseInt(jQuery(this).attr('data-speed'), 10);
            jQuery(this).on("initialized.owl.carousel", function (e) {
                jQuery(this).css("opacity", "1");
            });
            jQuery(this).owlCarousel(
                {
                    items: 1,
                    autoHeight: true,
                    center: true,
                    lazyLoad: true,
                    loop: true,
                    autoplay: autoplay,
                    autoplayTimeout: speed,
                    autoplayHoverPause: true,
                    navigation: false,
                    margin: 30
                }
            );
        });
    }
    if (jQuery('.liza_single_album_head').length) {
        setup_liza_single_album();
        liza_html.addClass('liza_single_album');

        if (liza_window.scrollTop() > 10) {
            liza_html.addClass('header_scrolled');
        }
        liza_window.on('scroll', function () {
            if (liza_window.scrollTop() > 10) {
                liza_html.addClass('header_scrolled');
            } else {
                liza_html.removeClass('header_scrolled');
            }
        });
        jQuery('a.liza_album_down_arrow').on('click', function () {
            if (jQuery('#wpadminbar').length) {
                var liza_album_featured_height = liza_window.height() - jQuery('#wpadminbar').height();
            } else {
                var liza_album_featured_height = liza_window.height();
            }

            jQuery('html, body').stop().animate({scrollTop: liza_album_featured_height + 'px'}, 600);
        });
    }
	
	if (jQuery('.liza_skill_block').length) {
		jQuery('.liza_skill_block').each(function(){
			var setVal = jQuery(this).attr('data-value');
			jQuery(this).find('.liza_skill_bar').width(setVal+'%').css('left', -1*setVal + '%').animate(
				{'left' : '0%'}, 
				{duration: 5000, step: function(now) {
						var data = Math.ceil(now) + parseInt(setVal, 10);
						jQuery(this).find('.liza_skill_value').html(data+'%');
					}
				}
			);
		});
	}
	if (jQuery('.personal_preloader').length) {
		liza_init_personal_preloader();
	}
	if (jQuery('.liza_aside_menu_wrapper').length) {
		liza_html.on('mousewheel', function (event) {
			if(liza_html.hasClass('liza_aside_menu_opened')) {
				event.preventDefault();
				liza_window.scrollTop(0);
			}
		});
	}

	//Back To Top
	jQuery('.liza_back_to_top').attr('data-bottom', parseInt(jQuery('.liza_back_to_top').css('bottom'), 10));
	if (liza_window.scrollTop() > liza_window.height()) {
		jQuery('.liza_back_to_top').addClass('liza_show_me');
	} else {
		jQuery('.liza_back_to_top').removeClass('liza_show_me');
		if (jQuery('.liza_footer').length) {
			var footer_offset = jQuery('.liza_footer').offset().top,
				check_footer_state = liza_window.scrollTop() + liza_window.height(),
				liza_footer_showed = 'no',
				liza_b2t_fixer = 0;
				
			if ( check_footer_state >= footer_offset) {
				liza_b2t_fixer = check_footer_state - footer_offset;
				liza_footer_showed = 'yes';
			} else {
				liza_footer_showed = 'no';
				liza_b2t_fixer = 0;
			}
			jQuery('.liza_back_to_top').css('bottom', parseInt(jQuery('.liza_back_to_top').attr('data-bottom'), 10) + liza_b2t_fixer + 'px');
		}
	}
	liza_window.on('scroll', function(){
		if (liza_window.scrollTop() > liza_window.height()) {
			jQuery('.liza_back_to_top').addClass('liza_show_me');
		} else {
			jQuery('.liza_back_to_top').removeClass('liza_show_me');
		}
		if (jQuery('.liza_footer').length) {
			var footer_offset = jQuery('.liza_footer').offset().top,
				check_footer_state = liza_window.scrollTop() + liza_window.height(),
				liza_footer_showed = 'no',
				liza_b2t_fixer = 0;
				
			if ( check_footer_state >= footer_offset) {
				liza_b2t_fixer = check_footer_state - footer_offset;
				liza_footer_showed = 'yes';
			} else {
				liza_footer_showed = 'no';
				liza_b2t_fixer = 0;
			}
			jQuery('.liza_back_to_top').css('bottom', parseInt(jQuery('.liza_back_to_top').attr('data-bottom'), 10) + liza_b2t_fixer + 'px');
		}
	});
	jQuery('.liza_back_to_top').on('click', function(){
		jQuery('html, body').stop().animate({scrollTop: 0}, 400, function(){
			jQuery('.liza_back_to_top').removeClass('liza_show_me');
		});
	});
	
	if (jQuery('.liza_content_under_header').length) {
		liza_push_content_under_header();
	}
	
	if (jQuery('.liza_projects_inner').length) {
		liza_projects_listing_setup();
	}

	//Flickr
	if (jQuery('.liza_flickr_widget_wrapper').length) {
		liza_flickr_widget();
	}
	
	//Coming Soon
	if (jQuery('.liza_cs_content_wrapper').length) {
		jQuery("time").countDown({
			with_separators: false
		});
	}
	
	//Contact Form
	jQuery('#liza_contact_form input[type=submit]').on('click', function(){
		var this_contact = jQuery(this).parents('form');
		jQuery.post('mail.php', {
			send_mail: 'true',
			form_name: this_contact.find('input[name=name]').val(),
			form_email: this_contact.find('input[name=email]').val(),
			form_text: this_contact.find('textarea[name=message]').val(),
		}).done(function (data) {
			alert(data);
		});

		return false;
	});
	
	// Isotope Activation
    if (jQuery('.liza_blog_grid_inner').length) {
		jQuery('.liza_blog_grid_inner').isotope({
			layoutMode: 'masonry'
		});			
	}
    if (jQuery('.liza_projects_grid_inner').length) {
		jQuery('.liza_projects_grid_inner').isotope({
			layoutMode: 'masonry'
		});			
	}
    if (jQuery('.liza_albums_grid_inner').length) {
		jQuery('.liza_albums_grid_inner').isotope({
			layoutMode: 'masonry'
		});			
	}
    
	// Filter
    jQuery('.liza_filter_block li').eq(0).find('a').click();
    jQuery('.liza_filter_block li a').on('click', function(){
		var $this = jQuery(this),
			$this_filter = jQuery(this).parents('div.liza_filter_block'),
			$this_parent = $this_filter.parent('div');
		if ($this_parent.find('.liza_projects_grid_inner').length) {
			var $this_isotope = $this_parent.find('.liza_projects_grid_inner');
		}
		if ($this_parent.find('.liza_albums_grid_inner').length) {
			var $this_isotope = $this_parent.find('.liza_albums_grid_inner');
		}
		if ($this_parent.find('.liza_blog_grid_inner').length) {
			var $this_isotope = $this_parent.find('.liza_blog_grid_inner');
		}
        $this_filter.find('a').removeClass('is-checked');
        $this_filter.find('li').removeClass('is-checked');
        $this.addClass('is-checked');
        $this.parent().addClass('is-checked');
        var filterSelector = $this.attr('data-option-value');

		$this_isotope.isotope({
			filter: filterSelector
		});
		return false;
    });
});

jQuery(window).on('load', function () {
	if (jQuery('.liza_preloader_wrapper').length) {
		jQuery('.liza_preloader_wrapper').addClass('remove_preloader');
		setTimeout("jQuery('.liza_preloader_wrapper').remove()", 600);
	}	
    if (jQuery('.liza_image_carousel').length) {
        jQuery('.liza_image_carousel').trigger('refresh.owl.carousel');
    }
    if (jQuery('.liza_single_album_head').length) {
        setup_liza_single_album();
    }
    liza_theme_setup();
    setTimeout("liza_theme_setup()", 500);
});

jQuery(window).on('resize', function () {
    if (jQuery('.swipebox').length) {
        if (jQuery.swipebox.isOpen) {
            liza_setup_box();
            setTimeout("liza_setup_box()", 500);
        }
    }
    if (jQuery('.liza_single_album_head').length) {
        setup_liza_single_album();
    }
	if (jQuery('.liza_projects_inner').length) {
		liza_projects_listing_setup();
	}
    liza_theme_setup();
	if (liza_html.hasClass('liza_content_under_header')) {
		liza_push_content_under_header();
	}
});

function liza_init_personal_preloader() {
	if (jQuery('.liza_ribbon_block2preload').length) {
		liza_init_pp4ribbon_slider();
	}
}

function liza_init_pp4ribbon_slider() {
	if (jQuery('.liza_ribbon_block2preload:first').length) {
		var $this_obj = jQuery('.liza_ribbon_block2preload:first');
		(function (img, src) {
			img.src = src;			
			img.onload = function () {
				$this_obj.removeClass('liza_ribbon_block2preload').addClass('liza_block_loaded').animate({					
					'z-index': '3'
				}, 100, function() {					
					liza_init_pp4ribbon_slider();
				});
			};                
		}(new Image(), $this_obj.find('img').attr('src')));

		if ($this_obj.parents('.liza_ribbon_slider_wrapper').find('.liza_ribbon_slide1').hasClass('liza_block_loaded') && !$this_obj.parents('.liza_ribbon_slider_wrapper').find('.liza_ribbon_slider').hasClass('started')) {
			$this_obj.parents('.liza_ribbon_slider_wrapper').find('.liza_ribbon_slider').addClass('started');
		}
	}
}

function liza_theme_setup() {
    jQuery(".liza_owlCarousel").each(function () {
        jQuery(this).trigger('refresh.owl.carousel');
    });
	if (jQuery('.liza_pf_video_16x9').length) {
		jQuery('.liza_pf_video_16x9').each(function(){
			jQuery(this).find('iframe').height((jQuery(this).width()/16)*9);
		});
	}
	
    if (jQuery('.search_container').length) {
        if (jQuery('#wpadminbar').length) {
            var search_min_height = liza_window.height() - jQuery('.liza_header').height() - jQuery('.liza_footer').height() - jQuery('#wpadminbar').height();
        } else {
            var search_min_height = liza_window.height() - jQuery('.liza_header').height() - jQuery('.liza_footer').height();
        }
        jQuery('.search_container').css('min-height', search_min_height + 'px');
    }
    if (jQuery('.liza_price_table').length) {
        jQuery('.liza_price_table').each(function () {
            var set_price_width = 100 / jQuery(this).find('.liza_price_table_item').length;
            jQuery(this).find('.liza_price_table_item').css('width', set_price_width + '%');
        });
    }
    if (jQuery('.liza_blog_grid_ratio').length) {
        jQuery('.liza_blog_grid_ratio').each(function () {
            var setHeight = Math.floor(jQuery(this).width() * jQuery(this).attr('data-ratio'));
            jQuery(this).height(setHeight);
        });
    }
	
	//Complex Menu Setup
	if (jQuery('.liza_aside_menu_wrapper').length && liza_window.width() > 960) {
		var liza_main_level = jQuery('.liza_aside_menu_wrapper').find('.liza_menu').children('li'),
			liza_sub_level1 = liza_main_level.children('ul'),
			liza_sub_level1_li = liza_main_level.children('ul').children('li'),
			liza_sub_level2 = liza_sub_level1_li.children('ul'),
			liza_sub_level2_li = liza_sub_level2.children('li'),
			liza_nav_width = jQuery('.liza_main_nav').width(),
			set_w1 = Math.floor(liza_nav_width*0.35),
			set_w2 = Math.floor(liza_nav_width*0.22),
			set_space = Math.floor(liza_nav_width*0.09);
			
		liza_main_level.width(set_w1);
		liza_sub_level1.width(set_w2).css('left', set_w1 + 'px').css('padding-left', set_space + 'px');
		liza_sub_level2.width(set_w2).css('left', set_w2 + 'px').css('padding-left', set_space + 'px');
	}
	
	//Content Under the Header
	if (jQuery('.liza_content_under_header').length) {
		liza_push_content_under_header();
	}
}

function pm_load_blog_posts() {
	
    if (jQuery('.liza_grid_post_loading').length) {
        jQuery('.liza_grid_post_loading:first').removeClass('liza_grid_post_loading').animate({
            'z-index': '3'
        }, 200, function () {
            pm_load_blog_posts();
        });
    }

}
function liza_setup_box() {
    var swipe_slider = jQuery('#swipebox-slider'),
        swipe_title = jQuery('#swipebox-top-bar'),
        swipe_bottom = jQuery('#swipebox-bottom-bar'),
        setHeight = 0;
    setHeight = jQuery(window).height() - swipe_title.height() - swipe_bottom.height();
    swipe_slider.height(setHeight).css('top', swipe_title.height());
}

jQuery(document).on("click", "#swipebox-container .slide.current img", function (e) {
    jQuery('#swipebox-next').trigger('click');
    e.stopPropagation();
});

jQuery(document).on("click", "#swipebox-container", function (e) {
    jQuery('#swipebox-close').trigger('click');
});

function liza_ajax_query_posts(liza_ajax_query_posts_this, liza_ajax_query_posts_first_load) {
    var liza_return_to = liza_ajax_query_posts_this.attr('data-return-to');
	if (liza_ajax_query_posts_this.hasClass('liza_ajax_with_isotope')) {
		var liza_is_isotope = true;
	}
    jQuery('.' + liza_return_to).addClass('liza_ajax_query_posts_active_preloader');
    jQuery('.' + liza_return_to).parent('div').addClass('liza_ajax_query_posts_active_preloader');
    var liza_ajax_query_posts_data_args = liza_ajax_query_posts_this.data('args');
    liza_ajax_query_posts_this.removeClass('liza_ajax_query_posts').addClass('liza_ajax_query_posts_disabled');
    if (liza_ajax_query_posts_first_load == true) {
        var liza_ajax_query_posts_per_page = parseInt(liza_ajax_query_posts_data_args['posts_first_load'], 10);
        var liza_ajax_query_posts_per_page_old = liza_ajax_query_posts_data_args['posts_per_page'];
        liza_ajax_query_posts_data_args['posts_per_page'] = liza_ajax_query_posts_per_page;
    } else {
        var liza_ajax_query_posts_per_page = parseInt(liza_ajax_query_posts_data_args['posts_per_page'], 10);
    }

    jQuery.post(liza_ajaxurl, {
        action: 'liza_ajax_query_posts',
        liza_ajax_query_posts: '' + JSON.stringify(liza_ajax_query_posts_data_args) + '',
    }).done(function (data) {
       	jQuery('.' + liza_return_to).append(data);
        if (liza_ajax_query_posts_first_load == true) {
            liza_ajax_query_posts_data_args['posts_per_page'] = liza_ajax_query_posts_per_page_old;
        }
        liza_ajax_query_posts_data_args['offset'] = parseInt(liza_ajax_query_posts_data_args['offset'], 10) + liza_ajax_query_posts_per_page;
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
        jQuery('.' + liza_return_to).removeClass('liza_ajax_query_posts_active_preloader');
		jQuery('.' + liza_return_to).parent('div').removeClass('liza_ajax_query_posts_active_preloader');
    });
}
if (jQuery('.liza_ajax_query_posts').length) {
    jQuery('.liza_ajax_query_posts').each(function () {
        liza_ajax_query_posts(jQuery(this), true);
    });

    jQuery(document).on("click", ".liza_ajax_query_posts", function () {
        liza_ajax_query_posts(jQuery(this), false);
    });
}

function liza_preloader() {
    if (jQuery('.liza_split_showcase').length) {
        //Split Showcase Slides
        if (jQuery('.liza_preload_slide:first').length) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    jQuery('.liza_preload_slide:first').removeClass('liza_preload_slide').addClass('liza_slide_loaded').animate({
                        'z-index': '15'
                    }, 100, function () {
                        liza_preloader();
                    });
                };
            }(new Image(), jQuery('.liza_preload_slide:first').attr('data-src')));
        } else {
            liza_split_gallery.removeClass('wait4load');
        }

        if ((jQuery('.liza_odd_slide1').hasClass('liza_slide_loaded') && jQuery('.liza_even_slide1').hasClass('liza_slide_loaded')) && !liza_split_gallery.hasClass('started')) {
            run_liza_split_slider();
        }
    }

    if (jQuery('.liza_ribbon_slider_wrapper').length) {
        //Ribbon Slides
        if (jQuery('.liza_preload_slide:first').length) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    jQuery('.liza_preload_slide:first').removeClass('liza_preload_slide').addClass('liza_slide_loaded').animate({
                        'z-index': '15'
                    }, 100, function () {
                        liza_preloader();
                    });
                };
            }(new Image(), jQuery('.liza_preload_slide:first').find('img').attr('src')));
        } else {
            liza_ribbon_slider.removeClass('wait4load');
        }

        if (jQuery('.liza_ribbon_slide1').hasClass('liza_slide_loaded') && !liza_ribbon_slider.hasClass('started')) {
            run_liza_ribbon_slider();
        }
    }
}

function liza_albums_preload() {
    jQuery('.liza_album_post_loading:first')
    if (jQuery('.liza_album_post_loading').length) {
        //Fullscreen Slideshow Slides
        if (jQuery('.liza_album_post_loading:first').length) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    jQuery('.liza_album_post_loading:first').removeClass('liza_album_post_loading').animate({
                        'z-index': '15'
                    }, 200, function () {
                        liza_albums_preload();
                    });
                };
            }(new Image(), jQuery('.liza_album_post_loading:first').find('img').attr('src')));
        }
    }
}

function liza_albums_listing_setup() {
    liza_albums_preload();
}

function setup_liza_single_album() {
    if (jQuery('#wpadminbar').length) {
        var liza_album_featured_height = liza_window.height() - jQuery('#wpadminbar').height();
    } else {
        var liza_album_featured_height = liza_window.height();
    }

    jQuery('.liza_single_album_head').css('margin-top', -1 * jQuery('header.liza_header').height() + 'px').height(liza_album_featured_height);
}

function liza_masonry_blog_setup() {
	liza_theme_setup();
	setTimeout('liza_theme_setup()', 300);
}

jQuery(document).on('mouseenter', '.liza_project_image_part', function(){
	if (liza_window.width() > 760)  {
		jQuery(this).parents('.liza_project_post_inner').addClass('liza_project_hovered');
	}
});
jQuery(document).on('mouseleave', '.liza_project_image_part', function(){
	jQuery(this).parents('.liza_project_post_inner').removeClass('liza_project_hovered');
});

function liza_projects_listing_setup() {
	jQuery('.liza_project_post_wrapper').each(function(){
		var img_part = jQuery(this).find('.liza_project_image_part'),
			content_part = jQuery(this).find('.liza_project_content_part'),
			set_height = img_part.width()*2 * parseInt(jQuery(this).attr('data-height'), 10)/parseInt(jQuery(this).attr('data-width'), 10);
		if (set_height < content_part.find('.liza_project_post_content').height()) {
			set_height = content_part.find('.liza_project_post_content').height();
		}
		img_part.height(set_height);
		content_part.height(set_height);
		img_part.find('.liza_stand_fi_project_listing').css('background-image', 'url(' + img_part.find('.liza_stand_fi_project_listing').attr('data-src') + ')');
	});
	if (jQuery('.liza_project_loading').length) {
		liza_projects_listing_loading();
	}
}

function liza_projects_listing_loading() {
	if (jQuery('.liza_project_loading:first').length) {
		var $this_obj = jQuery('.liza_project_loading:first');
		(function (img, src) {
			img.src = src;
			img.onload = function () {
				$this_obj.removeClass('liza_project_loading').addClass('liza_project_loaded').animate({
					'z-index': '3'
				}, 100, function() {
					liza_projects_listing_loading();
				});
			};
		}(new Image(), $this_obj.find('.liza_stand_fi_project_listing').attr('data-src')));
	}	
}

function liza_push_content_under_header() {
	var header_height = jQuery('header.liza_header').height(),
		mobile_header_height = jQuery('header.liza_mobile_header').height();
	jQuery('header.liza_header').css('margin-bottom', -1*header_height+'px');
	jQuery('header.liza_mobile_header').css('margin-bottom', -1*mobile_header_height+'px');
	jQuery('.liza_mobile_menu_wrapper').css('margin-bottom', mobile_header_height+'px');
	
}

// PM Flicker Widget
function liza_flickr_widget () {
	jQuery('.liza_flickr_widget_wrapper').each(function () {
		var flickrid = jQuery(this).attr('data-flickrid'),
			widget_id = jQuery(this).attr('data-widget_id'),
			widget_number = jQuery(this).attr('data-widget_number');
		
		jQuery(this).addClass('liza_flickr_widget_wrapper'+flickrid);

		jQuery.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id="+widget_id+"&lang=en-us&format=json&jsoncallback=?", function(data){
			jQuery.each(data.items, function(i,item){
				if(i<widget_number){
					jQuery("<img/>").attr("src", item.media.m).appendTo(".liza_flickr_widget_wrapper"+flickrid).wrap("<div class=\'liza_flickr_badge_image\'><a href=\'" + item.link + "\' target=\'_blank\' title=\'Flickr\'></a></div>");
				}
			});
		});
	});
}