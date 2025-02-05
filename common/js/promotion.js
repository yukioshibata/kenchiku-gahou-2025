$(function() {
	$('#closeup_area #closeup_slide').easySlider({
		prevId:			'closeup_prevBtn',
		nextId:			'closeup_nextBtn',
		speed:			300,
		controlsFade:	false,
		continuous:		true,
		easing:			'easeOutCubic',
		thumbnail:		true,
		thumbTargetId:	'thumbnail_slide',
		thumbnumber:	5
	});

	$('#thumbnail_area #thumbnail_slide').easySliderThumb({
		prevId:			'thumbnail_prevBtn',
		nextId:			'thumbnail_nextBtn',
		speed:			300,
		controlsFade:	false,
		continuous:		true,
		easing:			'easeOutCubic',
		thumbnail:		true,
		thumbTargetId:	'closeup_slide',
		thumbnumber:	5
	});


	$('#closeup_area #closeup_slide ul li .ph .photo2 img:last-child').css({
		'padding-right': '0px'
	});
	$('#closeup_area #closeup_slide ul li .ph .photo3 img:last-child').css({
		'padding-right': '0px'
	});
});
