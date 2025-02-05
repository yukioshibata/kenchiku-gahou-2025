/* SSL通信時に、プロトコルを http に強制変換 */
// var protocal_path = absolute_path.replace("https", "http");
var protocal_path = absolute_path;

function jsonCallback(data) {
	var tarPage = (typeof pageTitle == "undefined") ? "top" : "com";

	var menuTags = new Array();
	menuTags = {
//	●●●●　ARCHIVES（対談～）をアクティブ　●●●●●●●●●●●●
//		"archives" : '<a href="' + protocal_path + 'archives/index.html"><img src="' + absolute_path + 'top/imgs/submenu_archives.gif" alt="ARCHIVES" width="' + data["other"]["submenu_archives"][tarPage]["off"]["_w"] + '" height="' + data["other"]["submenu_archives"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　ARCHIVES（対談～）を非アクティブ　○○○○○○○○○○○
		"archives" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_archives.gif" alt="ARCHIVES" width="' + data["other"]["submenu_archives"][tarPage]["off"]["_w"] + '" height="' + data["other"]["submenu_archives"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　TOPICS（お知らせ）をアクティブ　●●●●●●●●●●●●
//		"topics" : '<a href="javascript:void(0);"><img src="' + absolute_path + 'top/imgs/submenu_topics.gif" alt="TOPICS" width="' + data["other"]["submenu_topics"][tarPage]["off"]["_w"] + '" height="' + data["other"]["submenu_topics"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　TOPICS（お知らせ）を非アクティブ　○○○○○○○○○○○
		"topics" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_topics.gif" alt="TOPICS" width="' + data["other"]["submenu_topics"][tarPage]["off"]["_w"] + '" height="' + data["other"]["submenu_topics"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　BLOG（社長ブログ）をアクティブ　●●●●●●●●●●●●
//		"blog" : '<a href="javascript:void(0);"><img src="' + absolute_path + 'top/imgs/submenu_blog.gif" alt="BLOG" width="' + data["other"]["submenu_blog"][tarPage]["off"]["_w"] + '" height="' + data["other"]["submenu_blog"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　BLOG（社長ブログ）を非アクティブ　○○○○○○○○○○○
		"blog" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_blog.gif" alt="BLOG" width="' + data["other"]["submenu_blog"][tarPage]["off"]["_w"] + '" height="' + data["other"]["submenu_blog"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　SUBSCRIPTION（定期購読）をアクティブ　●●●●●●●●●
//		"subscription" : '<a href="' + protocal_path + 'subscription/index.html"><img src="' + absolute_path + 'top/imgs/submenu_subscription.gif" alt="SUBSCRIPTION" width="' + data["info"]["submenu_subscription"][tarPage]["off"]["_w"] + '" height="' + data["info"]["submenu_subscription"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　SUBSCRIPTION（定期購読）を非アクティブ　○○○○○○○○
		"subscription" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_subscription.gif" alt="SUBSCRIPTION" width="' + data["info"]["submenu_subscription"][tarPage]["off"]["_w"] + '" height="' + data["info"]["submenu_subscription"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　SHOP　LIST（取扱い書店）をアクティブ　●●●●●●●●●
//		"shop_list" : '<a href="' + protocal_path + 'shop_list/index.html"><img src="' + absolute_path + 'top/imgs/submenu_shop_list.gif" alt="SHOP LIST" width="' + data["info"]["submenu_shop_list"][tarPage]["off"]["_w"] + '" height="' + data["info"]["submenu_shop_list"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　SHOP　LIST（取扱い書店）を非アクティブ　○○○○○○○○
		"shop_list" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_shop_list.gif" alt="SHOP LIST" width="' + data["info"]["submenu_shop_list"][tarPage]["off"]["_w"] + '" height="' + data["info"]["submenu_shop_list"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　ORDER （ご注文）をアクティブ　●●●●●●●●●●●●●
//		"order" : '<a href="' + protocal_path + 'order/index.html"><img src="' + absolute_path + 'top/imgs/submenu_order.gif" alt="ORDER" width="' + data["info"]["submenu_order"][tarPage]["off"]["_w"] + '" height="' + data["info"]["submenu_order"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　ORDER （ご注文）を非アクティブ　○○○○○○○○○○○○
		"order" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_order.gif" alt="ORDER" width="' + data["info"]["submenu_order"][tarPage]["off"]["_w"] + '" height="' + data["info"]["submenu_order"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　COMPANY　INFO （会社案内）をアクティブ　●●●●●●●●
		"company_info" : '<a href="' + protocal_path + 'company_info/index.html"><img src="' + absolute_path + 'top/imgs/submenu_company_info.gif" alt="COMPANY INFO" width="' + data["info"]["submenu_company_info"][tarPage]["off"]["_w"] + '" height="' + data["info"]["submenu_company_info"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　COMPANY　INFO （会社案内）を非アクティブ　○○○○○○○
//		"company_info" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_company_info.gif" alt="COMPANY INFO" width="' + data["info"]["submenu_company_info"][tarPage]["off"]["_w"] + '" height="' + data["info"]["submenu_company_info"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　ADVERTISING （広告のご案内）をアクティブ　●●●●●●●
//		"advertising" : '<a href="' + protocal_path + 'advertising/index.html"><img src="' + absolute_path + 'top/imgs/submenu_advertising.gif" alt="ADVERTISING" width="' + data["info"]["submenu_advertising"][tarPage]["off"]["_w"] + '" height="' + data["info"]["submenu_advertising"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　ADVERTISING （広告のご案内）を非アクティブ　○○○○○○
		"advertising" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_advertising.gif" alt="ADVERTISING" width="' + data["info"]["submenu_advertising"][tarPage]["off"]["_w"] + '" height="' + data["info"]["submenu_advertising"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　CURRENT ISSUE （新刊案内）をアクティブ　●●●●●●●●
//		"current_issue" : '<a href="' + protocal_path + 'current_issue/index.html"><img src="' + absolute_path + 'top/imgs/submenu_current_issue.gif" alt="CURRENT ISSUE" width="' + data["issue"]["submenu_current_issue"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_current_issue"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　CURRENT ISSUE （新刊案内）を非アクティブ　○○○○○○○
		"current_issue" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_current_issue.gif" alt="CURRENT ISSUE" width="' + data["issue"]["submenu_current_issue"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_current_issue"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　BACK　NUMBER（書籍案内）をアクティブ　●●●●●●●●●
//		"book" : '<a href="' + protocal_path + 'book/index.html"><img src="' + absolute_path + 'top/imgs/submenu_book.gif" alt="BACK NUMBER" width="' + data["issue"]["submenu_book"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_book"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　BACK　NUMBER（書籍案内）を非アクティブ　○○○○○○○○
		"book" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_book.gif" alt="BACK NUMBER" width="' + data["issue"]["submenu_book"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_book"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　VA CURRENT ISSUE（建築画報最新号）をアクティブ　●●●●
//		"va_current_issue" : '<a href="' + protocal_path + 'va_current_issue/index.html"><img src="' + absolute_path + 'top/imgs/submenu_va_current_issue.gif" alt="VA CURRENT ISSUE" width="' + data["issue"]["submenu_va_current_issue"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_va_current_issue"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　VA CURRENT ISSUE（建築画報最新号）を非アクティブ　○○○
		"va_current_issue" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_va_current_issue.gif" alt="VA CURRENT ISSUE" width="' + data["issue"]["submenu_va_current_issue"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_va_current_issue"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　VA BACK NUMBER（建築画報バックナンバー）をアクティブ　●
//		"back_number" : '<a href="' + protocal_path + 'back_number/index.html"><img src="' + absolute_path + 'top/imgs/submenu_back_number.gif" alt="BACK NUMBER" width="' + data["issue"]["submenu_back_number"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_back_number"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　VA BACK NUMBER（建築画報バックナンバー）を非アクティブ　
		"back_number" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_back_number.gif" alt="BACK NUMBER" width="' + data["issue"]["submenu_back_number"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_back_number"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　PROMOTION TOOL（パンフ～）をアクティブ　●●●●●●●●
//		"promotion" : '<a href="' + protocal_path + 'promotion/index.html"><img src="' + absolute_path + 'top/imgs/submenu_promotion.gif" alt="PROMOTION TOOL" width="' + data["issue"]["submenu_promotion"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_promotion"][tarPage]["off"]["_h"] + '" /></a>',
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　PROMOTION TOOL（パンフ～）を非アクティブ　○○○○○○○
		"promotion" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_promotion.gif" alt="PROMOTION TOOL" width="' + data["issue"]["submenu_promotion"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_promotion"][tarPage]["off"]["_h"] + '" /></div>',
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○

//	●●●●　COMMING SOON（建築画報次号予告）をアクティブ　●●●●●
//		"coming_soon" : '<a href="' + protocal_path + 'coming_soon/index.html"><img src="' + absolute_path + 'top/imgs/submenu_coming_soon.gif" alt="COMING SOON" width="' + data["issue"]["submenu_coming_soon"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_coming_soon"][tarPage]["off"]["_h"] + '" /></a>'
//	●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
//	○○○○　COMMING SOON（建築画報次号予告）を非アクティブ　○○○○
		"coming_soon" : '<div class="nonPage"><img src="' + absolute_path + 'top/imgs/submenu_coming_soon.gif" alt="COMING SOON" width="' + data["issue"]["submenu_coming_soon"][tarPage]["off"]["_w"] + '" height="' + data["issue"]["submenu_coming_soon"][tarPage]["off"]["_h"] + '" /></div>'
//	○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○
	};

	var _pgTitle = "";

	if (tarPage == "com") {
		if (typeof menuTags[pageTitle] != "undefined") {
			_pgTitle = pageTitle;
			var alt_str = _pgTitle.toUpperCase().replace("_", " ");
			var arr_str = "submenu_" + _pgTitle;

			menuTags[_pgTitle] = '<div class="thisPage"><img src="' + absolute_path + 'top/imgs/submenu_' + _pgTitle + '_on.gif" alt="' + alt_str + '" width="' + data[data["catSelect"][arr_str]][arr_str][tarPage]["on"]["_w"] + '" height="' + data[data["catSelect"][arr_str]][arr_str][tarPage]["on"]["_h"] + '" /></div>';
		}
	}

	var source_other =
		'<img src="' + absolute_path + 'top/imgs/menu_other.gif" alt="OTHER" width="' + data["other"]["title"][tarPage]["_w"] + '" height="' + data["other"]["title"][tarPage]["_h"] + '" />' +
		'<div class="submenu">' +
		'<div class="submenuL">' +
		menuTags["blog"] +
		menuTags["topics"] +
		'</div>' +
		'<div class="submenuR">' +
		menuTags["archives"] +
		'</div>' +
		'</div>';

	var source_info =
		'<img src="' + absolute_path + 'top/imgs/menu_info.gif" alt="INFO" width="' + data["info"]["title"][tarPage]["_w"] + '" height="' + data["info"]["title"][tarPage]["_h"] + '" />' +
		'<div class="submenu">' +
		'<div class="submenuL">' +
		menuTags["company_info"] +
		menuTags["advertising"] +
		'</div>' +
		'<div class="submenuR">' +
		menuTags["order"] +
		menuTags["subscription"] +
		menuTags["shop_list"] +
		'</div>' +
		'</div>';

	var source_issue =
		'<img src="' + absolute_path + 'top/imgs/menu_issue.gif" alt="ISSUE" width="' + data["issue"]["title"][tarPage]["_w"] + '" height="' + data["issue"]["title"][tarPage]["_h"] + '" />' +
		'<div class="submenu">' +
		'<div class="submenuL">' +
		menuTags["va_current_issue"] +
		menuTags["back_number"] +
		menuTags["coming_soon"] +
		'</div>' +
		'<div class="submenuR">' +
		menuTags["current_issue"] +
		menuTags["book"] +
		menuTags["promotion"] +
		'</div>' +
		'</div>';

	$('#menu_other').html(source_other);
	$('#menu_info').html(source_info);
	$('#menu_issue').html(source_issue);


	$('#menu_other div.submenu img').each(function() {
		var src = $(this).attr("src");
		var tarName = src.substr(0, src.lastIndexOf('.')).substring(src.lastIndexOf('/')).replace("\/", "");

		if ((tarPage == "top") || (tarName != "submenu_" + _pgTitle + "_on")) {
//	■■■■■　不活性設定　■■■■■
			if (tarName != "submenu_topics" && tarName != "submenu_blog" && tarName != "submenu_archives") {
//			if (tarName != "submenu_topics" && tarName != "submenu_blog") {
//	■■■■■■■■■■■■■■■■■
				var src_on = src.substr(0, src.lastIndexOf('.')) + "_on" + src.substring(src.lastIndexOf('.'));

				$(this).hover(
					function() {
						$(this).attr("src", src_on).attr("width", data["other"][tarName][tarPage]["on"]["_w"]).attr("height", data["other"][tarName][tarPage]["on"]["_h"]);
					},
					function() {
						$(this).attr("src", src).attr("width", data["other"][tarName][tarPage]["off"]["_w"]).attr("height", data["other"][tarName][tarPage]["off"]["_h"]);
					}
				);
			}
		}
	});

	$('#menu_info div.submenu img').each(function() {
		var src = $(this).attr("src");
		var tarName = src.substr(0, src.lastIndexOf('.')).substring(src.lastIndexOf('/')).replace("\/", "");

		if ((tarPage == "top") || (tarName != "submenu_" + _pgTitle + "_on")) {
//	■■■■■　不活性設定　■■■■■
			if (tarName != "submenu_advertising" && tarName != "submenu_order" && tarName != "submenu_subscription" && tarName != "submenu_shop_list") {
//			if (1) {
//	■■■■■■■■■■■■■■■■■
				var src_on = src.substr(0, src.lastIndexOf('.')) + "_on" + src.substring(src.lastIndexOf('.'));

				$(this).hover(
					function() {
						$(this).attr("src", src_on).attr("width", data["info"][tarName][tarPage]["on"]["_w"]).attr("height", data["info"][tarName][tarPage]["on"]["_h"]);
					},
					function() {
						$(this).attr("src", src).attr("width", data["info"][tarName][tarPage]["off"]["_w"]).attr("height", data["info"][tarName][tarPage]["off"]["_h"]);
					}
				);
			}
		}
	});

	$('#menu_issue div.submenu img').each(function() {
		var src = $(this).attr("src");
		var tarName = src.substr(0, src.lastIndexOf('.')).substring(src.lastIndexOf('/')).replace("\/", "");

		if ((tarPage == "top") || (tarName != "submenu_" + _pgTitle + "_on")) {
//	■■■■■　不活性設定　■■■■■
			if (tarName != "submenu_va_current_issue" && tarName != "submenu_back_number" && tarName != "submenu_coming_soon"  && tarName != "submenu_current_issue" && tarName != "submenu_book" && tarName != "submenu_promotion") {
//			if (1) {
//	■■■■■■■■■■■■■■■■■
				var src_on = src.substr(0, src.lastIndexOf('.')) + "_on" + src.substring(src.lastIndexOf('.'));

				$(this).hover(
					function() {
						$(this).attr("src", src_on).attr("width", data["issue"][tarName][tarPage]["on"]["_w"]).attr("height", data["issue"][tarName][tarPage]["on"]["_h"]);
					},
					function() {
						$(this).attr("src", src).attr("width", data["issue"][tarName][tarPage]["off"]["_w"]).attr("height", data["issue"][tarName][tarPage]["off"]["_h"]);
					}
				);
			}
		}
	});

	var win_y = 0;

	if(document.compatMode == "CSS1Compat"){
		win_y = document.documentElement.clientHeight;
	}else if(document.compatMode == "BackCompat"){
		win_y = document.body.clientHeight;
	}

	$("#container").height(Math.max(win_y, 710)); // 710 = header + 「ISSUE」画像 + メニュー高さ

	$(window).resize(function() {
		var win_y = 0;

		if(document.compatMode == "CSS1Compat"){
			win_y = document.documentElement.clientHeight;
		}else if(document.compatMode == "BackCompat"){
			win_y = document.body.clientHeight;
		}

		$("#container").height(Math.max(win_y, 710));
	});
}

function make_header() {
	var source =
		'<div id="header_title">' +
		'<a href="' + protocal_path + 'index.html"><img src="' + absolute_path + 'common/imgs/titleS.gif" alt="建築画報 Visual Architecture" title="建築画報 Visual Architecture" /></a>' +
		'</div>' +
		'<table id="header_search"><tr>' +
		'<td class="area_langages">' +
		'<a href="' + protocal_path + '../index.html" class="button_toJapanese" title="to Japanese">JAPANESE</a>' +
		'<a href="' + protocal_path + '../chi/company_info/index.html" class="button_toChinese" title="to Chinese">CHINESE</a>' +
		'<a href="' + protocal_path + '../eng/company_info/index.html" class="button_toEnglish" title="to English">ENGLISH</a>' +
		'</td>' +
		'<td>' +
		'<form method="get" action="http://www.google.co.jp/search">' +
		'<table bgcolor="#FFFFFF"><tr><td>' +
		'<input type="text" name="q" maxlength="255" value="" class="area_search">' +
		'<input type="submit" name="btnG" value="検索" class="button_search">' +
		'<input type="hidden" name="ie" value="UTF-8">' +
		'<input type="hidden" name="oe" value="UTF-8">' +
		'<input type="hidden" name="hl" value="ja">' +
		'<input type="hidden" name="sitesearch" value="www.kenchiku-gahou.com">' +
		'</td></tr></table>' +
		'</form>' +
		'</div>' +
		'</td>' +
		'</tr>' +
		'</tr></table>';

	$('#header').html(source);
}

function make_banner() {
	var bgImg = (typeof pageTitle == "undefined") ? "news" : pageTitle;

	$('#banner').css({
		"background-image": "url('" + absolute_path + "common/imgs/bgTitle_" + bgImg + ".gif')"
	}).html('<a href="' + protocal_path + 'index.html" class="button_home">HOME</a>');
}

function make_orderArea() {
	var source =
		'ご注文は下記へ<br />' +
		'株式会社建築画報社&emsp;TEL．03-3356-2568&emsp;FAX．03-3356-1966<br />' +
		'<div class="button_order_bottom">' +
		'<a href="' + protocal_path + 'order/index.html" class="button_order">ご注文</a>' +
		'</div>';

	$("#order_area").html(source);
}

function make_footer() {
	var source =
		'<div id="footer_menuCentering">' +
		'<div id="footer_menuWrapper">' +
		'<img src="/common/imgs/copyright.gif" alt="copyright" width="278" height="26" />' +
		'<ul id="footer_menu">' +
/*
		'<li class="left_menu"><a href="' + protocal_path + 'shop_list/index.html">SHOP LIST</a></li>' +
		'<li><a href="' + protocal_path + 'order/index.html">ORDER</a></li>' +
*/
		'<li><a href="' + protocal_path + 'company_info/index.html">COMPANY INFO</a></li>' +
		'<li><a href="mailto:info@kenchiku-gahou.com">CONTACT US</a></li>' +
		'</ul>' +
		'</div>' +
		'</div>' +
		'<div class="warning">このサイトに掲載の記事・写真・イラスト等のすべてのコンテンツの無断複写・転載を禁じます。</div>';

	$('#footer').invis().html(source);

	$(window).load(function() {
		$('#footer #footer_menuWrapper').width($('#footer img').outerWidth(true) + $('#footer_menu').outerWidth(true));
		$('#footer').vis();
	});
}

function make_menu() {
	var scr = $('<script>').attr('type', 'text/javascript').attr('src', absolute_path + 'common/js/menu.js').attr('charset', 'UTF-8');
	$('body').append(scr);
}

function make_backnumber() {
	var scr = $('<script>').attr('type', 'text/javascript').attr('src', absolute_path + 'common/js/backnumber.js?' + (new Date().getTime())).attr('charset', 'UTF-8');
	$('body').append(scr);
}

function make_book() {
	var scr = $('<script>').attr('type', 'text/javascript').attr('src', absolute_path + 'common/js/book.js?' + (new Date().getTime())).attr('charset', 'UTF-8');
	$('body').append(scr);
}

function make_news() {
	var scr = $('<script>').attr('type', 'text/javascript').attr('src', absolute_path + 'common/js/news.js?' + (new Date().getTime())).attr('charset', 'UTF-8');
	$('body').append(scr);
}
/*
function make_news_popup() {
	$('.popup_va').click(function() {
		var popupX = Math.floor(($(window).width() - 375) / 2);
		var popupY = Math.floor(($(window).height() - 325) / 2);

		var newWindow = window.open(this.href, '', 'width=375,height=325,scrollbars=no,screenX='+popupX+',screenY='+popupY+',left='+popupX+',top='+popupY);

		return false;
	});

	$('.popup_gaho').click(function() {
		var popupX = Math.floor(($(window).width() - 630) / 2);
		var popupY = Math.floor(($(window).height() - 325) / 2);

		var newWindow = window.open(this.href, '', 'width=630,height=325,scrollbars=no,screenX='+popupX+',screenY='+popupY+',left='+popupX+',top='+popupY);

		return false;
	});
}

function make_map_popup() {
	$('.popup_map').click(function() {
		var popupX = Math.floor(($(window).width() - 667) / 2);
		var popupY = Math.floor(($(window).height() - 570) / 2);

		var newWindow = window.open(this.href, '', 'width=667,height=570,scrollbars=no,screenX='+popupX+',screenY='+popupY+',left='+popupX+',top='+popupY);

		return false;
	});
}
*/
function make_toHome() {
	$('.toHome').each(function() {
		$(this).html('<a href="' + protocal_path + 'index.html"><< HOMEへ</a>');
	});
}

function getQueryStrings() {
	var form = {};
	var request = location.search;

	if (request) {
		var query =( request.match(/\?(.+)$/) )[1];
		var pairs = query.split(/&/);

		for (var i in pairs){
			var val = pairs[i].split(/=/);
			form[decodeURI(val[0])] = decodeURI(val[1]);
		}
	}

	return form;
}

function get_cookie_inform() {
	$('form :radio').each(function() {
		if ($(this).val() == $.cookie('input_radio')) {
			$(this).attr('checked', 'checked');
		}
	});

	var input_num = $('form input:not(:hidden):not(:reset):not(:submit):not(:radio)').not('[readonly=readonly]').length;
	for (var i = 0; i < input_num; i++) {
		if ($.cookie('input_data' + i)) {
			$('form input:not(:hidden):not(:reset):not(:submit):not(:radio)').not('[readonly=readonly]').eq(i).val($.cookie('input_data' + i));
		}
	}

	var sel_num = $('form select').length;
	for (var j = 0; j < sel_num; j++) {
		if ($.cookie('sel_data' + j)) {
			$('form select').eq(j).val($.cookie('sel_data' + j));
		}
	}

	if ($.cookie('textarea_data')) {
		$('textarea#その他連絡事項').val($.cookie('textarea_data'));
	}
}

function set_cookie_inform() {
	$('form :radio').each(function() {
		if ($(this).attr('checked') == 'checked') {
			$.cookie('input_radio', $(this).val());
		}
	});

	$('form input:not(:hidden):not(:reset):not(:submit):not(:radio)').not('[readonly=readonly]').each(function(i) {
		$.cookie('input_data' + i, $(this).val());
	});

	$('form select').each(function(i) {
		$.cookie('sel_data' + i, $(this).val());
	});

	$.cookie('textarea_data', $('textarea#その他連絡事項').val());
}

function z2h_word(src) {
	var str = src.replace(/[^０-９0-9]/g, '');

	return str.replace(/([０-９])/g, function($0) {
		return String.fromCharCode($0.charCodeAt(0) - 65248);
	});
}

function z2h_word2(src) {
	var str = src.replace(/[^０-９0-9-]/g, '');

	return str.replace(/([０-９])/g, function($0) {
		return String.fromCharCode($0.charCodeAt(0) - 65248);
	});
}

function getOrderDate() {
	var newDate = new Date();
	var theFyear = newDate.getFullYear();
	var theMonth = newDate.getMonth() + 1;
	var theDate = newDate.getDate();

	$("#order_date").attr("value", theFyear + "年" + theMonth + "月" + theDate + "日");
}

function str_repeat(i, m) {
	for (var o = []; m > 0; o[--m] = i);
	return o.join('');
}

function sprintf() {
	var i = 0, a, f = arguments[i++], o = [], m, p, c, x, s = '';
	while (f) {
		if (m = /^[^\x25]+/.exec(f)) {
			o.push(m[0]);
		}
		else if (m = /^\x25{2}/.exec(f)) {
			o.push('%');
		}
		else if (m = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(f)) {
			if (((a = arguments[m[1] || i++]) == null) || (a == undefined)) {
				throw('Too few arguments.');
			}
			if (/[^s]/.test(m[7]) && (typeof(a) != 'number')) {
				throw('Expecting number but found ' + typeof(a));
			}
			switch (m[7]) {
				case 'b': a = a.toString(2); break;
				case 'c': a = String.fromCharCode(a); break;
				case 'd': a = parseInt(a); break;
				case 'e': a = m[6] ? a.toExponential(m[6]) : a.toExponential(); break;
				case 'f': a = m[6] ? parseFloat(a).toFixed(m[6]) : parseFloat(a); break;
				case 'o': a = a.toString(8); break;
				case 's': a = ((a = String(a)) && m[6] ? a.substring(0, m[6]) : a); break;
				case 'u': a = Math.abs(a); break;
				case 'x': a = a.toString(16); break;
				case 'X': a = a.toString(16).toUpperCase(); break;
			}
			a = (/[def]/.test(m[7]) && m[2] && a >= 0 ? '+'+ a : a);
			c = m[3] ? m[3] == '0' ? '0' : m[3].charAt(1) : ' ';
			x = m[5] - String(a).length - s.length;
			p = m[5] ? str_repeat(c, x) : '';
			o.push(s + (m[4] ? a + p : p + a));
		}
		else {
			throw('Huh ?!');
		}
		f = f.substring(m[0].length);
	}
	return o.join('');
}


/****/
var _ua = (function() {
	return {
		ltIE6:typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
		ltIE7:typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
		ltIE8:typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
		ie:document.uniqueID,
		firefox:window.globalStorage,
		opera:window.opera,
		webkit:!document.uniqueID && !window.opera && !window.globalStorage && window.localStorage,
		mobile:/android|iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase())
	}
})();


var isDisplayScrollBar = function(target,key) {
	var val = target.css('overflow-' + key);
	if (val=='scroll') return true;
	if (val=='hidden') return false;
	if (val=='auto' || target.attr('tagName') == 'HTML') {
		var method = (key=='y') ? 'Height' : 'Width';
		return (target['exClient' + method]() < target['exScroll' + method]());
	}
	return false;
}

$.fn.isDisplayScrollBar = function(key) {
	return isDisplayScrollBar(this, key);
}

var scrollBarWidth = function(target) {
	var w = _ua.ie ? 16 : (_ua.webkit && window.navigator.userAgent.toLowerCase().indexOf('safari') != -1) ? 15 : 17;
	return {
		x : target.isDisplayScrollBar('x') ? w : 0,
		y : target.isDisplayScrollBar('y') ? w : 0
	}
}

$.fn.scrollBarWidth = function() {
	return scrollBarWidth(this);
}

$.fn.measur=function(f) {
	var o = this,ret;
	var hide = o.is(":hidden");
	if (hide) o.show();
	ret = f();	
	if(hide) this.hide();
	return ret;
}

$.fn.exClientHeight = function() {
	var o=(this[0] == window ? $('html') : this)
	return o.attr('clientHeight');
}

$.fn.exClientWidth = function() {
	var o = (this[0] == window ? $('html') : this)
	var s = o.measur(function() { return o.attr('clientWidth') });
	if (o.attr('tagName')!='HTML') return s;
	if (_ua.ie && _ua.ltIE7 && !_ua.ltIE6)
		return o.width();
	return s;
}

$.fn.exScrollHeight = function(){
	var o = this;
	var s = Math.max(
		o.measur(function() { return o.attr('scrollHeight') }),
		o.exClientHeight());
	if (o.attr('tagName')!='HTML') return s;
	if (_ua.ie && _ua.ltIE6)
		return $(document).height();
	return s;
}

$.fn.exScrollWidth = function(){
	var o = this;
	return Math.max(
		o.measur(function() { return o.attr('scrollWidth') }),
		o.exClientWidth());
}

$.fn.exOffsetHeight = function(){
	var o = this;
	var s = o.measur(function() { return o.attr('offsetHeight') });
	if (o.attr('tagName')!='HTML') return s;
	if (_ua.ie && _ua.ltIE6)
		return s;
	return o.exClientHeight() + o.scrollBarWidth().x
}

$.fn.exOffsetWidth = function(){
	var o = this;
	var s = o.measur(function(){return o.attr('offsetWidth')});
	if(o.attr('tagName')!='HTML')return s;
	if (_ua.ie && _ua.ltIE6)
		return s;
	return o.exClientWidth() + o.scrollBarWidth().y
}
/****/

// make mailto address
var emailriddlerarray = [118,97,64,107,45,103,97,104,111,46,99,111,109];
var encryptedemail_id90 = '';
for (var i = 0; i < emailriddlerarray.length; i++) {
	encryptedemail_id90 += String.fromCharCode(emailriddlerarray[i]);
}



$(function() {
	$.fn.vis = function() {
		return $(this).css("visibility", "visible");
	};

	$.fn.invis = function() {
		return $(this).css("visibility", "hidden");
	};

	$.preloadImages = function(arguments){
		for(var i = 0; i < arguments.length; i++){
			$("<img>").attr("src", arguments[i]);
		}
	};

	make_header();
	make_banner();
	make_orderArea();
	make_footer();
	make_menu();
	make_toHome();

	$('.popup').click(function() {
		window.open(this.href, '', 'width=480,height=580,scrollbars=yes');
		return false;
	});

	$('.input_number').blur(function() {
		var str = z2h_word($(this).val());
		$(this).val(str);
	});

	$('.input_number2').blur(function() {
		var str = z2h_word2($(this).val());
		$(this).val(str);
	});

//	for firefox and opera
/*	table以外全ての場合
	if (!$.support.opacity) { // for ie6,7,8
		$('.wordBreak').css('word-break', 'break-all');
	} else {
		$('.wordBreak').each(function() {
			if($.support.checkOn && $.support.noCloneEvent) {
				$(this).html($(this).text().split('').join('<wbr />'));
			} else {
				$(this).html($(this).text().split('').join(String.fromCharCode(8203)));
			}
		});
	}
*/

/*	tableに特化 */
	if($.support.checkOn && $.support.noCloneEvent) {
		$('.wordBreak').each(function() {
			$(this).html($(this).text().split('').join('<wbr>'));
		});
	} else {
		$('.wordBreak').css('word-break', 'break-all');
	}
});
