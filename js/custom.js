/*-----------------------------------------------------------------------------------
 Smooth Scrolling
-----------------------------------------------------------------------------------*/
/*!
 * jQuery Smooth Scroll - v1.5.2 - 2014-10-01
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2014 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function(t){function e(t){return t.replace(/(:|\.)/g,"\\$1")}var l="1.5.2",o={},s={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},n=function(e){var l=[],o=!1,s=e.dir&&"left"===e.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var e=t(this);e[s]()>0?l.push(this):(e[s](1),o=e[s]()>0,o&&l.push(this),e[s](0))}}),l.length||this.each(function(){"BODY"===this.nodeName&&(l=[this])}),"first"===e.el&&l.length>1&&(l=[l[0]]),l};t.fn.extend({scrollable:function(t){var e=n.call(this,{dir:t});return this.pushStack(e)},firstScrollable:function(t){var e=n.call(this,{el:"first",dir:t});return this.pushStack(e)},smoothScroll:function(l,o){if(l=l||{},"options"===l)return o?this.each(function(){var e=t(this),l=t.extend(e.data("ssOpts")||{},o);t(this).data("ssOpts",l)}):this.first().data("ssOpts");var s=t.extend({},t.fn.smoothScroll.defaults,l),n=t.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(l){var o=this,r=t(this),i=t.extend({},s,r.data("ssOpts")||{}),c=s.exclude,a=i.excludeWithin,f=0,h=0,u=!0,d={},p=location.hostname===o.hostname||!o.hostname,m=i.scrollTarget||t.smoothScroll.filterPath(o.pathname)===n,S=e(o.hash);if(i.scrollTarget||p&&m&&S){for(;u&&c.length>f;)r.is(e(c[f++]))&&(u=!1);for(;u&&a.length>h;)r.closest(a[h++]).length&&(u=!1)}else u=!1;u&&(i.preventDefault&&l.preventDefault(),t.extend(d,i,{scrollTarget:i.scrollTarget||S,link:o}),t.smoothScroll(d))}),this}}),t.smoothScroll=function(e,l){if("options"===e&&"object"==typeof l)return t.extend(o,l);var s,n,r,i,c,a=0,f="offset",h="scrollTop",u={},d={};"number"==typeof e?(s=t.extend({link:null},t.fn.smoothScroll.defaults,o),r=e):(s=t.extend({link:null},t.fn.smoothScroll.defaults,e||{},o),s.scrollElement&&(f="position","static"===s.scrollElement.css("position")&&s.scrollElement.css("position","relative"))),h="left"===s.direction?"scrollLeft":h,s.scrollElement?(n=s.scrollElement,/^(?:HTML|BODY)$/.test(n[0].nodeName)||(a=n[h]())):n=t("html, body").firstScrollable(s.direction),s.beforeScroll.call(n,s),r="number"==typeof e?e:l||t(s.scrollTarget)[f]()&&t(s.scrollTarget)[f]()[s.direction]||0,u[h]=r+a+s.offset,i=s.speed,"auto"===i&&(c=u[h]-n.scrollTop(),0>c&&(c*=-1),i=c/s.autoCoefficient),d={duration:i,easing:s.easing,complete:function(){s.afterScroll.call(s.link,s)}},s.step&&(d.step=s.step),n.length?n.stop().animate(u,d):s.afterScroll.call(s.link,s)},t.smoothScroll.version=l,t.smoothScroll.filterPath=function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},t.fn.smoothScroll.defaults=s})(jQuery);


 jQuery(document).ready(function() {
	jQuery('a.top').smoothScroll();

		jQuery('a.share-btn').click(function() {
		jQuery.smoothScroll({
		scrollElement: jQuery('.share'),
		scrollTarget: '#'
		});
		return false;
	});
	
	jQuery('a.search-nav-btn').click(function() {
		jQuery.smoothScroll({
		scrollElement: jQuery('.site-search'),
		scrollTarget: '#'
		});
		return false;
	});
});

 if (document.documentElement.clientWidth > 1025) {
 jQuery(document).ready(function() {
	jQuery('a.site-nav-btn').smoothScroll();
});
}


/*---------------------------------------------------------------------------------------------
  Flexible width for embedded videos (see https://github.com/davatron5000/FitVids.js/)
----------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function(){
		// Target your .container, .wrapper, .post, etc.
		jQuery('#wrap').fitVids();
	});

/*---------------------------------------------------------------------------------------------
  Support Placeholder input text in IE (see https://github.com/danielstocks/jQuery-Placeholder)
----------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function(){
		jQuery('input[placeholder], textarea[placeholder]').placeholder();
	});
	
/*--------------------------------------------------------------------------------------------
  Show/Hide effect site navigation and share-btn on mobile
----------------------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
    	jQuery('#site-nav').hide();

    jQuery('a#mobile-menu-btn').click(function () {
       jQuery(this).next('#site-nav').slideToggle('200');
    });
});

jQuery(document).ready(function(){
    	jQuery('.share').hide();

    jQuery('a.share-btn').click(function () {
       jQuery(this).next('.share').slideToggle('fast');
    });
});

