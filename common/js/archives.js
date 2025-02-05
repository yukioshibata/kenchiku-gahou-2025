var fadeSpeed = 600;

function initZoom(base, cName) {
	$('#category_talk').removeClass('img_clicked');
	$('#category_monograph').removeClass('img_clicked');
	$('#category_interview').removeClass('img_clicked');
	$('#category_others').removeClass('img_clicked');
	base.addClass('img_clicked');

	$('#archives_list td .archives_item').find('.archives_item_base img.cross').attr('src', absolute_path + 'archives/imgs/image_cross_grayS.gif').attr('width', '8').attr('height', '8');

	$('#archives_list td').removeClass('list_clicked');
	$('#archives_list td.' + cName).addClass('list_clicked').find('.archives_item_base img.cross').attr('src', absolute_path + 'archives/imgs/image_cross_blackS.gif').attr('width', '8').attr('height', '8');
}



$(function() {
//	var archives_height = $(window).height() - $('#headerArea').outerHeight(true) - $('#banner').outerHeight(true) - parseInt($('#contents').css('marginTop').replace('px', ''), 10) - $('#archives_years').outerHeight(true) - $('#category_field').outerHeight(true) - $('#footer').outerHeight(true) - ($('#archives_list').outerHeight(true) - $('#archives_list').height());
	var archives_height = $(window).height() - 165 - 90 - 32 - 56 - 46 - 81 - 30;


	$('#archives_list').height(Math.max(archives_height, 500));
	$('#overLayer').height($('#archives_list').height() + $('#archives_years').outerHeight(true) + $('#category_field').outerHeight(true));


	$('#archives_list td .archives_item').each(function() {
		var zoom = $('<div class="archives_zoom"><a href="' + $('.address', $(this)).text() + '">' + $('.archives_item_base', this).html() + '</a></div>').css({
			top: '0',
			left: $(this).parent().hasClass('list_others') ? '-109px' : '-15px',
			width: $(this).parent().hasClass('list_others') ? '250px' : '350px'
		});

		$(this).append(zoom).find('.archives_zoom img.cross').attr('src', absolute_path + 'archives/imgs/image_cross_blackB.gif');

	}).hover(
		function() {
			if (_ua.ltIE7) {
				if ($(this).parent().hasClass('list_others')) {
					$(this).parent().css({
						'z-index': '70'
					});
				}

				$(this).css({
					'z-index': '10'
				});
			}

			$('.archives_zoom', this).stop(false, true).fadeIn(fadeSpeed);
		},
		function() {
			if (_ua.ltIE7) {
				if ($(this).parent().hasClass('list_others')) {
					$(this).parent().css({
						'z-index': '50'
					});
				}

				$(this).css({
					'z-index': '0'
				});
			}

			$('.archives_zoom', this).stop(false, true).hide();
		}
	);



	$('#archives_years select').change(function() {
		$('#archives_list').animate({
			scrollTop: $('#archives_list').scrollTop() + $('#list' + $(this).val()).position().top
		}, {
			duration: 500,
			easing: 'easeOutExpo',
			complete: function() {
			}
		});
	});


	$('td.list_talk').mouseenter(function() {
		initZoom($('#category_talk'), 'list_talk');
	});
	$('#category_field th #category_talk').parent().mouseenter(function() {
		initZoom($('#category_talk'), 'list_talk');
	});

	$('td.list_monograph').mouseenter(function() {
		initZoom($('#category_monograph'), 'list_monograph');
	});
	$('#category_field th #category_monograph').parent().mouseenter(function() {
		initZoom($('#category_monograph'), 'list_monograph');
	});


	$('td.list_interview').mouseenter(function() {
		initZoom($('#category_interview'), 'list_interview');
	});
	$('#category_field th #category_interview').parent().mouseenter(function() {
		initZoom($('#category_interview'), 'list_interview');
	});


	$('td.list_others').mouseenter(function() {
		initZoom($('#category_others'), 'list_others');
	});
	$('#category_field th #category_others').parent().mouseenter(function() {
		initZoom($('#category_others'), 'list_others');
	});
});
