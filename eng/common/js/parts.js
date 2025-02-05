function make_capital() {
	var source =
		'<option selected="selected">都道府県名</option>' +
		'<optgroup label="北海道">' +
		'<option value="北海道">北海道</option>' +
		'</optgroup>' +
		'<optgroup label="東北">' +
		'<option value="青森県">青森県</option>' +
		'<option value="秋田県">秋田県</option>' +
		'<option value="岩手県">岩手県</option>' +
		'<option value="宮城県">宮城県</option>' +
		'<option value="山形県">山形県</option>' +
		'<option value="福島県">福島県</option>' +
		'</optgroup>' +
		'<optgroup label="関東">' +
		'<option value="東京都">東京都</option>' +
		'<option value="神奈川県">神奈川県</option>' +
		'<option value="千葉県">千葉県</option>' +
		'<option value="埼玉県">埼玉県</option>' +
		'<option value="群馬県">群馬県</option>' +
		'<option value="栃木県">栃木県</option>' +
		'<option value="茨城県">茨城県</option>' +
		'<option value="山梨県">山梨県</option>' +
		'</optgroup>' +
		'<optgroup label="信越">' +
		'<option value="新潟県">新潟県</option>' +
		'<option value="長野県">長野県</option>' +
		'</optgroup>' +
		'<optgroup label="北陸">' +
		'<option value="富山県">富山県</option>' +
		'<option value="石川県">石川県</option>' +
		'<option value="福井県">福井県</option>' +
		'</optgroup>' +
		'<optgroup label="東海地方">' +
		'<option value="愛知県">愛知県</option>' +
		'<option value="岐阜県">岐阜県</option>' +
		'<option value="静岡県">静岡県</option>' +
		'<option value="三重県">三重県</option>' +
		'</optgroup>' +
		'<optgroup label="近畿">' +
		'<option value="大阪府">大阪府</option>' +
		'<option value="京都府">京都府</option>' +
		'<option value="奈良県">奈良県</option>' +
		'<option value="滋賀県">滋賀県</option>' +
		'<option value="和歌山県">和歌山県</option>' +
		'<option value="兵庫県">兵庫県</option>' +
		'</optgroup>' +
		'<optgroup label="中国">' +
		'<option value="岡山県">岡山県</option>' +
		'<option value="広島県">広島県</option>' +
		'<option value="島根県">島根県</option>' +
		'<option value="鳥取県">鳥取県</option>' +
		'<option value="山口県">山口県</option>' +
		'</optgroup>' +
		'<optgroup label="四国">' +
		'<option value="香川県">香川県</option>' +
		'<option value="徳島県">徳島県</option>' +
		'<option value="愛媛県">愛媛県</option>' +
		'<option value="高知県">高知県</option>' +
		'</optgroup>' +
		'<optgroup label="九州">' +
		'<option value="福岡県">福岡県</option>' +
		'<option value="大分県">大分県</option>' +
		'<option value="佐賀県">佐賀県</option>' +
		'<option value="長崎県">長崎県</option>' +
		'<option value="熊本県">熊本県</option>' +
		'<option value="宮崎県">宮崎県</option>' +
		'<option value="鹿児島県">鹿児島県</option>' +
		'</optgroup>' +
		'<optgroup label="沖縄">' +
		'<option value="沖縄県">沖縄県</option>' +
		'</optgroup>';

	$(".capital").each(function() {
		$(this).html(source);
	});
}

function make_selbooks() {
	var source =
		'<option value="0" selected>選択してください</option>' +
		'<option value="書籍／「現代日本の建築家⑥」">書籍／「現代日本の建築家⑥」</option>' +
		'<option value="書籍／ジョサイア・コンドル">書籍／ジョサイア・コンドル</option>' +
		/* '<option value="書籍／「1700の肖像」JR東日本全駅写真集">書籍／「1700の肖像」JR東日本全駅写真集</option>' + */
		'<option value="書籍／「郵政建築」逓信からの軌跡">書籍／「郵政建築」逓信からの軌跡</option>' +
		'<option value="書籍／「皇室建築」内匠寮の人と作品">書籍／「皇室建築」内匠寮の人と作品</option>' +
		'<option value="書籍／ZENZO 作品集">書籍／ZENZO 作品集</option>' +
		'<option value="書籍／「建築画報」40年">書籍／「建築画報」40年</option>' +
		'<option value="最新号　345号 コンシェルジュな病院 NIKKEN SPACE DESIGNのホスピタリティー">最新号　345号 コンシェルジュな病院 NIKKEN SPACE DESIGNのホスピタリティー</option>' +
		'<option value="344号 挑戦する構造">344号 挑戦する構造</option>' +
		'<option value="343号 安井建築設計事務所の教育施設">343号 安井建築設計事務所の教育施設</option>' +
		'<option value="342号 東京国際空港　新たな羽田　更なる飛躍">342号 東京国際空港　新たな羽田　更なる飛躍</option>' +
		'<option value="341号 前田建設工業の仕事">341号 前田建設工業の仕事</option>' +
		'<option value="340号 次世代の環境・エネルギーを考える">340号 次世代の環境・エネルギーを考える</option>' +
		'<option value="339号 特別号／KPF（KOHN PEDERSEN FOX ASSOCIATES）">339号 特別号／KPF（KOHN PEDERSEN FOX ASSOCIATES）</option>' +
		'<option value="338号 ARCOM40周年　空間　計画と設計">338号 ARCOM40周年　空間　計画と設計</option>' +
		'<option value="337号 佐藤総合計画65周年">337号 佐藤総合計画65周年</option>' +
		'<option value="336号 環境と建築のいま">336号 環境と建築のいま</option>' +
		'<option value="335号 インテリア考現学">335号 インテリア考現学</option>' +
		'<option value="334号 RIA特集号　まちへのアプローチ くらしの風景づくり">334号 RIA特集号　まちへのアプローチ くらしの風景づくり</option>' +
		'<option value="333号 「都市の木」の40年 仙田満＋環境デザイン研究所">333号 「都市の木」の40年 仙田満＋環境デザイン研究所</option>' +
		'<option value="329号 JR東日本 駅の魅力－変革と挑戦">329号 JR東日本 駅の魅力－変革と挑戦</option>' +
		'<option value="328号 KKS 観光企画設計社">328号 KKS 観光企画設計社</option>' +
		'<option value="327号 久米設計 75th QUARTER to 100 CONNECT">327号 久米設計 75th QUARTER to 100 CONNECT</option>' +
		'<option value="326号 伊藤建築設計事務所 THE WORKS 1998-2007">326号 伊藤建築設計事務所 THE WORKS 1998-2007</option>' +
		'<option value="324号 これからの公営競技施設">324号 これからの公営競技施設</option>' +
		'<option value="323号 特別号／KPF（KOHN PEDERSEN FOX ASSOCIATES）">323号 特別号／KPF（KOHN PEDERSEN FOX ASSOCIATES）</option>' +
		'<option value="322号 入江三宅設計事務所 60周年 都市へのまなざし">322号 入江三宅設計事務所 60周年 都市へのまなざし</option>' +
		'<option value="319号 梓設計60周年">319号 梓設計60周年</option>' +
		'<option value="318号 村井敬合同設計　社会に貢献する建築">318号 村井敬合同設計　社会に貢献する建築</option>' +
		'<option value="317号 日建設計　人と仕事2006">317号 日建設計　人と仕事2006</option>' +
		'<option value="316号 特別号／内井昭蔵と内井建築設計事務所 「こころ」の継承">316号 特別号／内井昭蔵と内井建築設計事務所 「こころ」の継承</option>' +
		'<option value="312号 INA新建築研究所　創立50周年記念特集">312号 INA新建築研究所　創立50周年記念特集</option>' +
/*		'<option value="311号 松田平田設計の“いま”　MHS Today">311号 松田平田設計の“いま”　MHS Today</option>' +*/
		'<option value="310号 石本建築事務所　ISHIMOTO by Design">310号 石本建築事務所　ISHIMOTO by Design</option>' +
		'<option value="309号 三菱地所設計　12のグランドデザイン">309号 三菱地所設計　12のグランドデザイン</option>' +
		'<option value="308号 久米設計 教育・文化施設特集">308号 久米設計 教育・文化施設特集</option>' +
		'<option value="306号 本間利雄設計事務所　未来は過去の中にある">306号 本間利雄設計事務所　未来は過去の中にある</option>' +
		'<option value="305号 特集　森ビルの挑戦　Artelligent City">305号 特集　森ビルの挑戦　Artelligent City</option>' +
/*		'<option value="304号 FACADE　ENGINEERING">304号 FACADE　ENGINEERING</option>' +*/
		'<option value="303号 佐藤総合計画　AXS NOW 2000-2003">303号 佐藤総合計画　AXS NOW 2000-2003</option>' +
		'<option value="302号 宮本忠長建築設計事務所 人と風景をつなぐ">302号 宮本忠長建築設計事務所 人と風景をつなぐ</option>' +
		'<option value="301号 土木デザインの現在＋コラボレーション">301号 土木デザインの現在＋コラボレーション</option>' +
		'<option value="300号 横河建築設計事務所　100周年記念特集号 世紀を超えて">300号 横河建築設計事務所　100周年記念特集号 世紀を超えて</option>' +
/*		'<option value="299号 日本設計　創立35周年記念企画 教育・研究所施設特集">299号 日本設計　創立35周年記念企画 教育・研究所施設特集</option>' +*/
		'<option value="298号 国土交通省　サスティナブルな建築と都市の連携をめざして">298号 国土交通省　サスティナブルな建築と都市の連携をめざして</option>';

	$(".selBooks select").html(source);
}

/***********************************************/
/** 上の関数の <option value="①">①</option> **/
/** 下の関数の '②' : '③',                   **/
/** は、必ず①＝③とすること。                **/
/** スペース等が余分に付いていないかも要確認  **/
/***********************************************/
function sel_selbooks() {
	var sel_books = {
		'bk7'	:	'書籍／「現代日本の建築家⑥」',
		'bk6'	:	'書籍／ジョサイア・コンドル',
		/* 'bk1'	:	'書籍／「1700の肖像」JR東日本全駅写真集', */
		'bk2'	:	'書籍／「郵政建築」逓信からの軌跡',
		'bk4'	:	'書籍／「皇室建築」内匠寮の人と作品',
		'bk3'	:	'書籍／ZENZO 作品集',
		'bk5'	:	'書籍／「建築画報」40年',
		'345'	:	'最新号　345号 コンシェルジュな病院 NIKKEN SPACE DESIGNのホスピタリティー',
		'344'	:	'344号 挑戦する構造',
		'343'	:	'343号 安井建築設計事務所の教育施設',
		'342'	:	'342号 東京国際空港　新たな羽田　更なる飛躍',
		'341'	:	'341号 前田建設工業の仕事',
		'340'	:	'340号 次世代の環境・エネルギーを考える',
		'339'	:	'339号 特別号／KPF（KOHN PEDERSEN FOX ASSOCIATES）',
		'338'	:	'338号 ARCOM40周年　空間　計画と設計',
		'337'	:	'337号 佐藤総合計画65周年',
		'336'	:	'336号 環境と建築のいま',
		'335'	:	'335号 インテリア考現学',
		'334'	:	'334号 RIA特集号　まちへのアプローチ くらしの風景づくり',
		'333'	:	'333号 「都市の木」の40年 仙田満＋環境デザイン研究所',
		'329'	:	'329号 JR東日本 駅の魅力－変革と挑戦',
		'328'	:	'328号 KKS 観光企画設計社',
		'327'	:	'327号 久米設計 75th QUARTER to 100 CONNECT',
		'326'	:	'326号 伊藤建築設計事務所 THE WORKS 1998-2007',
		'324'	:	'324号 これからの公営競技施設',
		'323'	:	'323号 特別号／KPF（KOHN PEDERSEN FOX ASSOCIATES）',
		'322'	:	'322号 入江三宅設計事務所 60周年 都市へのまなざし',
		'319'	:	'319号 梓設計60周年',
		'318'	:	'318号 村井敬合同設計　社会に貢献する建築',
		'317'	:	'317号 日建設計　人と仕事2006',
		'316'	:	'316号 特別号／内井昭蔵と内井建築設計事務所 「こころ」の継承',
		'312'	:	'312号 INA新建築研究所　創立50周年記念特集',
/*		'311'	:	'311号 松田平田設計の“いま”　MHS Today',*/
		'310'	:	'310号 石本建築事務所　ISHIMOTO by Design',
		'309'	:	'309号 三菱地所設計　12のグランドデザイン',
		'308'	:	'308号 久米設計 教育・文化施設特集',
		'306'	:	'306号 本間利雄設計事務所　未来は過去の中にある',
		'305'	:	'305号 特集　森ビルの挑戦　Artelligent City',
/*		'304'	:	'304号 FACADE　ENGINEERING',*/
		'303'	:	'303号 佐藤総合計画　AXS NOW 2000-2003',
		'302'	:	'302号 宮本忠長建築設計事務所 人と風景をつなぐ',
		'301'	:	'301号 土木デザインの現在＋コラボレーション',
		'300'	:	'300号 横河建築設計事務所　100周年記念特集号 世紀を超えて',
/*		'299'	:	'299号 日本設計　創立35周年記念企画 教育・研究所施設特集',*/
		'298'	:	'298号 国土交通省　サスティナブルな建築と都市の連携をめざして'
	}

	var book_list = '';
	var query = getQueryStrings();

	if (query["lst"]) {
		if (sel_books[query["lst"]]) {
			$("#申し込み書籍1").children("option[value=" + sel_books[query["lst"]] + "]").attr("selected", "selected");
			$("#申し込み書籍1のご注文冊数").attr("value", 1);
		}
	}
}

function bnCallback(data) {
	/* 年毎・号毎にソート */
	var source = '';

	for (var i in data) {
		var _src = '';
		var _num = 0;
		var _inYear_books_num = data[i]["books"].length;

		var _latest_years = (i == 0) ? '_latest' : '';

		/* 年毎 */
		_src =
			'<tr>' +
			'<td>' +
			'<div class="years"><img src="./imgs/imgYears_' + data[i]["year"] + _latest_years + '.gif" alt="' + data[i]["year"] + '年" width="140" height="110" /></div>' +
			'<table class="years_onLists">'
		;

		for (var j in data[i]["books"]) {
			/* 号毎 */
			_num++;

			_src += ((_num % 4 == 1) && (_num >= 5)) ?
				'' +
				'<tr>' +
				'<td>' +
				'<div><img src="./imgs/imgYears_space.gif" alt="" width="1" height="40" /></div>' +
				'</td>' +
				'</tr>' +
				'' +
				'<tr>' +
				'<td>' +
				'<table class="none_onLists">' +
				'' :
				''
			;

			_src += (_num % 4 == 1) ?
				'<tr>' :
				''
			;

			var _imgTags = '<a href="./' + data[i]["books"][j]["number"] + '.html"><img src="./imgs/' + data[i]["books"][j]["number"] + '.jpg" alt="' + data[i]["books"][j]["number"] + '号" width="148" height="200" /></a>';
			var _linkOrder = '<a href="../order/index.html?lst=' + data[i]["books"][j]["number"] + '" class="button_order">ご注文</a>';

			if (data[i]["books"][j]["soldout"] == "true") {
				var _imgs_bg = "./imgs/" + data[i]["books"][j]["number"] + ".jpg";
				var _imgBase = '<img src="' + _imgs_bg + '" alt="' + data[i]["books"][j]["number"] + '号" width="148" height="200" />';

				var _imgMask = '<img src="./imgs/sold_out_mask.png" alt="" width="150" height="200" class="imgMask" />';

				var _imgSoldOut = '<img src="./imgs/sold_out.png" alt="SOLD OUT" width="130" height="119" class="imgSoldOut" />';

				var _imgLink = '<a href="./' + data[i]["books"][j]["number"] + '.html" class="solink"><img src="./imgs/anchor_link_mask.png" alt="" width="148" height="200" class="imgLink" /></a>';

				_imgTags = _imgBase + _imgMask + _imgSoldOut + _imgLink;

				_linkOrder = '';
			}

			_src +=
				'<td class="contents">' +
				'<div class="date">' + data[i]["books"][j]["date"] + '</div>' +
				'<div class="noHeight">' + _imgTags + '</div>' +
				'<span class="number">' + data[i]["books"][j]["number"] + '</span><span class="gou">号</span><br />' +
				'<div class="title">' + data[i]["books"][j]["title"] + '</div>' +
				'<div class="price"><div class="priceL">' + data[i]["books"][j]["price"] + '</div><div class="priceR">' + _linkOrder + '</div>' +
				'</td>'
			;


			_src += (_num % 4 != 0) ?
				'' +
				'<td class="space"><br /></td>' :
				'</tr>' +
				'</table>' +
				'</td>' +
				'</tr>' +
				'' +

				((_num != _inYear_books_num) ? '' :
				'' +
				'<tr>' +
				'<td>' +
				'<div style="height: 30px;"><div class="pagetopLinkBlock" style="padding-top: 10px;"><a href="#banner" class="pagetopLink"></a></div></div>' +
				'</td>' +
				'</tr>'
				) +

				'<tr>' +
				'<td>' +
				'<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>' +
				'</td>' +
				'</tr>'
			;

		}

		while (_num % 4 != 0) {
			/* 空セル生成 */
			_num++;

			_src +=
				'<td class="contents"><br /></td>';

			_src += (_num % 4 != 0) ?
				'' +
				'<td class="space"><br /></td>' :
				'</tr>' +
				'</table>' +
				'</td>' +
				'</tr>' +
				'' +
				'<tr>' +
				'<td>' +
				'<div style="height: 30px;"><div class="pagetopLinkBlock" style="padding-top: 10px;"><a href="#banner" class="pagetopLink"></a></div></div>' +
				'</td>' +
				'</tr>' +
				'' +
				'<tr>' +
				'<td>' +
				'<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>' +
				'</td>' +
				'</tr>'
			;
		}

		source += _src;
	}

	$("#backnumber_list").html(source);
}

function bookCallback(data) {
	var source = '';

	var _num = 0;

	for (var i in data) {
		_num++;

		source += (_num % 2 == 1) ?
			'' +
			'<tr>' +
			'<td>' :
			''
		;

		var _imgTags = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';

		var _link_order = '<a href="../order/index.html?lst=' + data[i]["list_num"] + '" class="button_order">ご注文</a></div>';

		if (data[i]["soldout"] == "true") {
			var _imgBase = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';

			var _imgMask = '<img src="./imgs/sold_out_mask.png" alt="" width="150" height="' + data[i]["height"] + '" class="imgMask" />';

			var _imgSoldOut = '<img src="./imgs/sold_out.png" alt="SOLD OUT" width="130" height="119" class="imgSoldOut" />';


			_imgTags = '<div class="noHeight">' + _imgBase + _imgMask + _imgSoldOut + '</div>';

			_link_order = '';
		}

		source +=
			'<table class="contents">' +
			'<tr>' +
			'<td class="contentsL">' + 
			_imgTags +
			'<div style="width: 47px; margin: 0 0 0 auto;">' + _link_order +
			'</td>' +
			'<td class="midSpace"><br /></td>' +
			'<td class="contentsR">' +
			'<div class="title">'  + data[i]["title"] + '</div>' +
			'<div class="supervision">'  + data[i]["supervision"] + '</div>' +
			'<div class="index">'  + data[i]["index"] + '</div>' +
			'<div class="detail">' +
			data[i]["detail"] +
			'</div>' +
			'<div class="price">' +
			data[i]["price"] +
			'</div>' +
			'</td>' +
			'<td class="rightSpace"><br /></td>' +
			'</tr>' +
			'</table>' +
			'</td>'
		;

		source += (_num % 2 != 0) ?
			'' +
			'<td class="space"><br /></td>' +
			'' +
			'<td>' :
			'</tr>' +
			'<tr>' +
			'<td colspan="3">' +
			'<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>' +
			'</td>' +
			'</tr>'
		;

	}

	while (_num % 2 != 0) {
		/* 空セル生成 */
		_num++;

		source +=
			'<table class="contents">' +
			'<tr>' +
			'<td class="contentsL">' +
			'</td>' +
			'</tr>' +
			'</table>' +
			'</td>' +
			'<td class="rightSpace"><br /></td>' +
			'</tr>' +
			'<tr>' +
			'<td colspan="3">' +
			'<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>' +
			'</td>' +
			'</tr>'
		;
	}

	source +=
		'<tr>' +
		'<td colspan="3"><div style="height: 30px;"><div class="pagetopLinkBlock" style="padding-top: 10px;"><a href="#banner" class="pagetopLink"></a></div></div></td>' +
		'</tr>'
	;

	$("#book_list").html(source);


	$("img.imgMask").each(function() {
		$(this).css({
			top: - $(this).height()
		});
	});

	$("img.imgSoldOut").each(function() {
		$(this).css({
			top: ($(this).siblings("img.imgMask").height() < $(this).height()) ? - $(this).siblings("img.imgMask").height() * 2 : - $(this).siblings("img.imgMask").height() - $(this).height()
		});
	});

	$(".noHeight").each(function() {
		$(this).height(Math.max($(this).children("img.imgMask").height(), $(this).children("img.imgSoldOut").height()));
	});
}

function newsCallback(data) {
	var source = '';

	for (var i in data) {
		source +=
			'<div class="newsContents">' +
			'<div class="newsDate">' + data[i]["newsDate"] + '</div>' +
			'<div class="newsTitle">' + data[i]["newsTitle"] + '</div>' +
			data[i]["contents"] +
			'</div>'
		;
	}

	$("#newsHistory").html(source);
}

function architectCallback(arrList) {
	// 文字列比較
	function strCmp(str1, str2) {
		var cmp = 0;
		var len = (str1.length < str2.length) ? str1.length : str2.length;

		for (var i = 0; i < len; i++) {
			var c1 = str1.charCodeAt(i);
			var c2 = str2.charCodeAt(i);
			if((cmp = (c1 - c2)) != 0) {
				break;
			}
		}

		return cmp;
	}

	// 配列をアルファベット順にソート
	function rensoSortA(a, b) {
		return strCmp(a["sortA"], b["sortA"]);
	}

	// 配列をあいうえお順にソート
	function rensoSortB(a, b) {
		return strCmp(a["sortB"], b["sortB"]);
	}
/*
	data.sort(rensoSortB);
	other.sort(rensoSortB);
*/
//	var tmpArray = [data, other];
//	var srcArray = ["", ""];
	var srcArray = [];


	for (var j = 1; j < arguments.length; j++) {
		arguments[j].sort(rensoSortB);

		var _num = 0;

		srcArray[j] =
			'<tr>' +
			'<td>' +
			arrList[j]["subtitle"] +
			'</td>' +
			'</tr>' +
			''
		;

		for (var i = 0; i < arguments[j].length; i++) {
			_num++;

			srcArray[j] += (_num % 2 == 1) ?
				'<tr>' +
				'<td>' :
				''
			;

			var _imgTags = '<img src="./imgs/' + arguments[j][i]["image"] + '" alt="' + arguments[j][i]["alt"] + '" width="150" height="150" class="photo" /><br />';
			var _link_detail = '<a href="./' + arguments[j][i]["index"] + '.html" class="button_detail_architect">詳細はこちら→</a></div>';

			srcArray[j] +=
				'<table class="contents">' +
				'<tr>' +
				'<td rowspan="2" class="contentsL">' + 
				_imgTags +
				'</td>' +
				'<td rowspan="2" class="midSpace"><br /></td>' +
				'<td class="contentsRU">' +
				'<div class="name">'  + arguments[j][i]["name"] + '</div>' +
				'<div class="roman">'  + arguments[j][i]["roman"] + '</div>' +
				'</td>' +
				'<td rowspan="2" class="rightSpace"><br /></td>' +
				'</tr>' +
				'<tr>' +
				'<td class="contentsRL">' + 
				_link_detail +
				'</td>' +
				'</tr>' +
				'</table>' +
				'</td>'
			;

			srcArray[j] += (_num % 2 != 0) ?
				'<td>' : ''
			;
		}

		if (srcArray[j] != "") {
			while (_num % 2 != 0) {
				/* 空セル生成 */
				_num++;

				srcArray[j] +=
					'<table class="contents">' +
					'<tr>' +
					'<td class="contentsL">' +
					'</td>' +
					'</tr>' +
					'</table>' +
					'</td>' +
					'<td class="rightSpace"><br /></td>' +
					'</tr>'
				;
			}

			srcArray[j] +=
				'<tr>' +
				'<td colspan="2"><div style="height: 30px;"><div class="pagetopLinkBlock"><a href="#banner" class="pagetopLink"></a></div></div></td>' +
				'</tr>'
			;
		}


		$("#" + arrList[j]["id"]).html(srcArray[j]);
	}
/*
	if (srcArray[0] != "") {
		$("#architect_list").html(srcArray[0]);
	} else {
		$("#architect_list").removeClass("listTable");
	}

	if (srcArray[1] != "") {
		$("#other_list").html(srcArray[1]);
	} else {
		$("#other_list").removeClass("listTable");
	}
*/

	// 画像ファイルが存在しない場合に、ダミー画像を表示させる
	$("img.photo").error(function() {
		$(this).attr("src", "./imgs/dummy.jpg");
	});
}
