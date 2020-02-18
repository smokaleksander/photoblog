"use strict";
var $liza_counter = jQuery('.liza_stat_count');

jQuery(document).ready(function() {
	if (jQuery(window).width() > 760) {
		$liza_counter.each(function(){
            var $this = jQuery(this);
			if ($this.offset().top < liza_window.height()) {
                liza_start_counter.call($this);
			} else {
				$this.waypoint(function(){
                    liza_start_counter.call($this);
				},{offset: 'bottom-in-view'});
			}
		});
	} else {
		$liza_counter.each(function() {
            var $this = jQuery(this);
            liza_start_counter.call($this);
		},{offset: 'bottom-in-view'});	
	}
});

function liza_start_counter() {
	console.log(this);
    if (!this.hasClass('done')) {
        this.prop('Counter',0).animate({
            Counter: jQuery(this).attr('data-count')
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                if (jQuery(this).hasClass('liza_counter_sav')) {
                    jQuery(this).text(Math.ceil(now)+jQuery(this).attr('data-symbol'));
                } else if (jQuery(this).hasClass('liza_counter_sbv')) {
                    jQuery(this).text(jQuery(this).attr('data-symbol')+Math.ceil(now));
                } else {
                    jQuery(this).text(Math.ceil(now));
                }
            }
        });
        this.addClass('done');
    }
}