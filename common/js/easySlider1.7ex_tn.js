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
	$.fn.easySliderThumb = function(options) {
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
			var t = 0;
			$("ul", obj).css('width',s*w);

			var targ = $('#'+options.thumbTargetId);
			var _s = $("li:not(.continuous)", targ).length;
			var _ts = _s - 1;
			var _tsn = Math.floor(_s / 2);
			var _w = targ.width();
			var _h = targ.height();
			var tt = 0;


			if(options.continuous){
/*** improved ***/
				$("ul", obj).prepend($("ul li:last-child", obj).clone().css("margin-left","-"+ w +"px").addClass('continuous'));
				$("ul", obj).append($("ul li:nth-child(2)", obj).clone().addClass('continuous'));
/*** improved ***/
				$("ul", obj).css('width',(s+1)*w);
			};

			if(!options.vertical) $("li", obj).css('float','left');

			if(options.controlsShow && $('ul li:not(.continuous) .thumbBlock', obj).length > options.thumbnumber){
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

/*** improved ***/
			if(options.numeric && !options.thumbnail){
/*** improved ***/
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
/*** added ***/
				if (options.thumbnail) {
					$("ul li a", obj).click(function() {
						animate(parseInt($(this).attr("rel"), 10), true, $(this));
					});
				}
/*** added ***/
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

				$('ul li .thumbBlock', obj).removeClass('now');
				$('ul li:not(.continuous) .thumbBlock', obj).each(function() {
					if (parseInt($('.ph a:eq(0)', this).attr('rel'), 10) == t * options.thumbnumber + 1) {
						$(this).addClass('now');
					}
				});

				$('ul li', targ).removeClass('now');
				$('ul li', targ).each(function() {
					if (parseInt($('.numbering', this).text(), 10) == t * options.thumbnumber + 1) {
						$(this).addClass('now');
					}
				});

				clickable = true;
				if(options.numeric) setCurrent(t);
			};

			function padjust(){
				if(tt > _ts) tt -= _s;
				if(tt < 0)   tt += _s;
				if(!options.vertical) {
					$("ul", targ).css("margin-left",(tt*_w*-1));
				} else {
					$("ul", targ).css("margin-left",(tt*_h*-1));
				}

				$('ul li', targ).removeClass('now');
				$('ul li', targ).each(function() {
					if (parseInt($('.numbering', this).text(), 10) == tt + 1) {
						$(this).addClass('now');
					}
				});

				$('ul li .thumbBlock', obj).removeClass('now');
				$('ul li:not(.continuous) .thumbBlock', obj).each(function() {
					if (parseInt($('.ph a:eq(0)', this).attr('rel'), 10) == tt + 1) {
						$(this).addClass('now');
					}
				});

				clickable = true;
			};


			function animate(dir,clicked,tn){
				if (clickable){
					clickable = false;

					t = Math.floor((parseInt($('ul li:not(.continuous) .thumbBlock.now .ph a:eq(0)', obj).attr('rel'), 10) - 1) / options.thumbnumber);

					var ot = t;
					var _ot = parseInt($('ul li.now:not(.continuous):eq(0) .numbering', targ).text(), 10) - 1;

					switch(dir){
						case "next":
							t = (ot>=ts) ? (options.continuous ? t+1 : ts) : t+1;
							tt = Math.floor((_ot + options.thumbnumber) / options.thumbnumber) * options.thumbnumber;
							tt = (tt > _ts) ? _s : tt;

							break;
						case "prev":
							t = (t<=0) ? (options.continuous ? t-1 : 0) : t-1;
							tt = Math.floor((_ot - options.thumbnumber) / options.thumbnumber) * options.thumbnumber;
							tt = (tt < 0) ? - (_s % options.thumbnumber) : tt;

							break;
						case "first":
							t = 0;
							break;
						case "last":
							t = ts;
							break;
						default:
/*** improved ***/
							if (isFinite(dir)) {
								var _t1 = dir - 1;
								var _t2 = _t1 + ((dir <= _tsn) ? _s : -_s);

								var _diff1 = Math.abs(_ot-_t1);
								var _diff2 = Math.abs(_ot-_t2);

								var _diff = Math.min(_diff1, _diff2);

								tt = (_diff == _diff1) ? _t1 : _t2;
							}
/*** improved ***/
							break;
					};

					var diff = Math.abs(ot-t);
					var pdiff = Math.abs(_ot - tt);

					var speed = diff*options.speed;
					var pspeed = pdiff*options.speed;

					if(!options.vertical) {
						var p = (t*w*-1);
						$("ul",obj).animate(
							{ marginLeft: p },
/*** improved ***/
							{ queue:false, duration:speed, complete:adjust, easing: options.easing }
/*** improved ***/
						);

						var pp = (tt*_w*-1);
						$("ul",targ).animate(
							{ marginLeft: pp },
							{ queue:false, duration:pspeed, complete:padjust, easing: options.easing }
						);
					} else {
						var p = (t*h*-1);
						$("ul",obj).animate(
							{ marginTop: p },
/*** improved ***/
							{ queue:false, duration:speed, complete:adjust, easing: options.easing }
/*** improved ***/
						);
					};

					if (options.thumbnail) {
						if (typeof tn != 'undefined') {
							$('ul li .thumbBlock', obj).removeClass('now');
							tn.parents('.thumbBlock').addClass('now');
/*
							$('ul li', targ).removeClass('now');
							$('ul li:eq(' + dir + ')', targ).addClass('now');
*/
						}
					}

					if(!options.continuous && options.controlsFade){
						if(t==ts){
							$("a","#"+options.nextId).hide();
							$("a","#"+options.lastId).hide();
						} else {
							$("a","#"+options.nextId).show();
							$("a","#"+options.lastId).show();
						}

						if(t==0){
							$("a","#"+options.prevId).hide();
							$("a","#"+options.firstId).hide();
						} else {
							$("a","#"+options.prevId).show();
							$("a","#"+options.firstId).show();
						}
					}
					
					if(clicked) clearTimeout(timeout);
					if(options.auto && dir=="next" && !clicked){
						timeout = setTimeout(function(){
							animate("next",false);
						},diff*options.speed+options.pause);
					}
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
