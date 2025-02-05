/*
 * 	Easy Slider 1.7 - jQuery plugin
 *	written by Alen Grakalic	
 *	http://cssglobe.com/post/4004/easy-slider-15-the-easiest-jquery-plugin-for-sliding
 *
 *	Copyright (c) 2009 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
 
/*
 *	markup example for $("#slider").easySlider();
 *	
 * 	<div id="slider">
 *		<ul>
 *			<li><img src="images/01.jpg" alt="" /></li>
 *			<li><img src="images/02.jpg" alt="" /></li>
 *			<li><img src="images/03.jpg" alt="" /></li>
 *			<li><img src="images/04.jpg" alt="" /></li>
 *			<li><img src="images/05.jpg" alt="" /></li>
 *		</ul>
 *	</div>
 *
 */

(function($) {
	$.fn.easySlider = function(options) {
		// default configuration properties
		var defaults = {
			prevId: 		'prevBtn',
			prevText: 		'Previous',
			nextId: 		'nextBtn',
			nextText: 		'Next',
			controlsShow:	true,
			controlsBefore:	'',
			controlsAfter:	'',	
			controlsFade:	true,
			firstId: 		'firstBtn',
			firstText: 		'First',
			firstShow:		false,
			lastId: 		'lastBtn',
			lastText: 		'Last',
			lastShow:		false,
			vertical:		false,
			speed: 			800,
			auto:			false,
			pause:			2000,
			continuous:		false,
			numeric: 		false,
			numericId: 		'controls',
/*** added ***/
			easing:			'swing',
			thumbnail:		false,
			thumbTargetId:	'',
			thumbnumber:	1
/*** added ***/
		};

		var options = $.extend(defaults, options);

		this.each(function() {
			var obj = $(this);
			var s = $("li", obj).length;
			var w = $("li", obj).width();
			var h = $("li", obj).height();
			var clickable = true;
			obj.width(w);
			obj.height(h);
			obj.css("overflow","hidden");
			var ts = s-1;
			var tsn = Math.ceil(s / 2);
			var t = 0;
			var appendObj;
			var prependObj;

			$("ul", obj).css('width',s*w);

/*** added ***/
			var _ts = $('li', '#' + options.thumbTargetId).length - 1;
			var tt = 0;
/*** added ***/

			if(options.continuous){
				var baseObj = obj.clone();

				appendObj = $("ul li:lt(" + tsn + ")", baseObj).addClass('continuous');
				prependObj = $("ul li:gt(" + (tsn - 1) + ")", baseObj);
				var prependObj_len = prependObj.length;

				prependObj.each(function(i) {
					$(this).css("margin-left","-"+ w*(prependObj_len-i) +"px");
				}).addClass('continuous');

				$("ul", obj).prepend(prependObj).append(appendObj);

				$("ul", obj).css('width',(s + appendObj.length)*w);
			};

			if(!options.vertical) $("li", obj).css('float','left');

			if(options.controlsShow){
				var html = options.controlsBefore;
				if(options.numeric){
					html += '<ol id="'+ options.numericId +'"></ol>';
				} else {
					if(options.firstShow) html += '<span id="'+ options.firstId +'"><a href=\"javascript:void(0);\">'+ options.firstText +'</a></span>';
					html += ' <span id="'+ options.prevId +'"><a href=\"javascript:void(0);\">'+ options.prevText +'</a></span>';
					html += ' <span id="'+ options.nextId +'"><a href=\"javascript:void(0);\">'+ options.nextText +'</a></span>';
					if(options.lastShow) html += ' <span id="'+ options.lastId +'"><a href=\"javascript:void(0);\">'+ options.lastText +'</a></span>';
				};

				html += options.controlsAfter;
				$(obj).after(html);
/*** added ***/
				$('#' + options.prevId).css({
					'top': Math.ceil($(obj).height() / 2) - Math.ceil($('#' + options.prevId).height() / 2),
					'left': '10px'
				});
				$('#' + options.nextId).css({
					'top': Math.ceil($(obj).height() / 2) - Math.ceil($('#' + options.prevId).height() / 2),
					'left': Math.ceil($(obj).width() - $('#' + options.nextId).width()- 10)
				});
/*** added ***/
			};

			if(options.numeric){
				for(var i=0;i<s;i++){
					$(document.createElement("li"))
						.attr('id',options.numericId + (i+1))
						.html('<a rel='+ i +' href=\"javascript:void(0);\">'+ (i+1) +'</a>')
						.appendTo($("#"+ options.numericId))
						.click(function(){
							animate($("a",$(this)).attr('rel'),true);
						});
				};
			} else {
				$("a","#"+options.nextId).click(function(){
					animate("next",true);
				});
				$("a","#"+options.prevId).click(function(){
					animate("prev",true);
				});
				$("a","#"+options.firstId).click(function(){
					animate("first",true);
				});
				$("a","#"+options.lastId).click(function(){
					animate("last",true);
				});
			};

			function setCurrent(i){
				i = parseInt(i)+1;
				$("li", "#" + options.numericId).removeClass("current");
				$("li#" + options.numericId + i).addClass("current");
			};

			function adjust(){
				if(t>ts) t=0;
				if(t<0) t=ts;
				if(!options.vertical) {
					$("ul",obj).css("margin-left",(t*w*-1));
				} else {
					$("ul",obj).css("margin-left",(t*h*-1));
				}

/*** added ***/
				$('ul li', obj).each(function() {
					if (parseInt($('.numbering', this).text(), 10) == t + 1) {
						$(this).addClass('now');
					}
				});
/*** added ***/

				clickable = true;
				if(options.numeric) setCurrent(t);
			};

/*** added ***/
			function padjust() {
				if (_ts == 0) {
					tt = 0;

				} else {
					if (tt > _ts) tt = 0;
					if (tt < 0)   tt = _ts;

					if ($('ul li:not(.continuous) .thumbBlock', '#'+options.thumbTargetId).length > options.thumbnumber) {
						if(!options.vertical) {
							$("ul",'#'+options.thumbTargetId).css("margin-left",(tt*w*-1));
						} else {
							$("ul",'#'+options.thumbTargetId).css("margin-left",(tt*h*-1));
						}
					}
				}

				var page = sprintf('page%04d', tt + 1);

				$('ul li.' + page + ':not(.continuous) .thumbBlock', '#'+options.thumbTargetId).each(function() {
					var _t = (t > ts) ? 0 : ((t < 0) ? ts : t);

					if (parseInt($('.ph a:eq(0)', this).attr('rel'), 10) == _t + 1) {
						$(this).addClass('now');
					}
				});
			};
/*** added ***/

			function animate(dir,clicked){
				if (clickable){
					clickable = false;
/*** improved ***/
					t = parseInt($('ul li.now:not(.continuous):eq(0) .numbering').text(), 10) - 1;
					$('ul li', obj).removeClass('now');
/*** improved ***/
					var ot = t;
					switch(dir){
						case "next":
							t = (ot>=ts) ? (options.continuous ? t+1 : ts) : t+1;
							break;
						case "prev":
							t = (t<=0) ? (options.continuous ? t-1 : 0) : t-1;
							break;
						case "first":
							t = 0;
							break;
						case "last":
							t = ts;
							break;
						default:
							break;
					};
					var diff = Math.abs(ot-t);
					var speed = diff*options.speed;

/*** added ***/
					var ott = Math.floor(ot / options.thumbnumber);
					tt = Math.floor(((t>ts) ? (options.continuous ? t + ts : ts) : t) / options.thumbnumber);

					$('ul li .thumbBlock', '#'+options.thumbTargetId).removeClass('now');

					var pdiff = Math.abs(ott - tt);
					var pspeed = pdiff * options.speed;
/*** added ***/

					if(!options.vertical) {
						p = (t*w*-1)+"px";
						$("ul",obj).animate(
							{ marginLeft: p },
/*** improved ***/
							{ queue:false, duration:speed, complete:adjust, easing: options.easing }
/*** improved ***/
						);

/*** added ***/
						if ($('ul li:not(.continuous) .thumbBlock', '#'+options.thumbTargetId).length > options.thumbnumber) {
							var pp = (tt*w*-1)+"px";

							$("ul",'#'+options.thumbTargetId).animate(
								{ marginLeft: pp },
								{ queue:false, duration:pspeed, complete:padjust, easing: options.easing }
							);
						} else {
							padjust();
						}
/*** added ***/
					} else {
						p = (t*h*-1)+"px";
						$("ul",obj).animate(
							{ marginTop: p },
/*** improved ***/
							{ queue:false, duration:speed, complete:adjust, easing: options.easing }
/*** improved ***/
						);
					};

					if(!options.continuous && options.controlsFade){
						if(t==ts){
							$("a","#"+options.nextId).hide();
							$("a","#"+options.lastId).hide();
						} else {
							$("a","#"+options.nextId).show();
							$("a","#"+options.lastId).show();
						};
						if(t==0){
							$("a","#"+options.prevId).hide();
							$("a","#"+options.firstId).hide();
						} else {
							$("a","#"+options.prevId).show();
							$("a","#"+options.firstId).show();
						};
					};
					
					if(clicked) clearTimeout(timeout);
					if(options.auto && dir=="next" && !clicked){
						timeout = setTimeout(function(){
							animate("next",false);
						},diff*options.speed+options.pause);
					};
				};
			};

			// init
			var timeout;
			if(options.auto){;
				timeout = setTimeout(function(){
					animate("next",false);
				},options.pause);
			};

			if(options.numeric) setCurrent(0);

			if(!options.continuous && options.controlsFade){
				$("a","#"+options.prevId).hide();
				$("a","#"+options.firstId).hide();
			};
		});
	};
})(jQuery);
