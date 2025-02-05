architectCallback(
	[	// 建築家
/*
		{
			'index'			:	'',
			'name'			:	'',
			'roman'			:	'',
			'image'			:	'',
			'alt'			:	''
		}
*/
	],
	[	// その他
	/*	{
			'index'			:	'suzuki_h',
			'sortA'			:	'SuzukiHiroyuki',
			'sortB'			:	'すずきひろゆき',
			'name'			:	'鈴木 博之',
			'roman'			:	'Hiroyuki Suzuki',
			'image'			:	'suzuki_h.jpg',
			'alt'			:	'鈴木 博之'
		},*/
		/*{
			'index'			:	'ishizu_k',
			'sortA'			:	'IshizuKensuke',
			'sortB'			:	'いしづけんすけ',
			'name'			:	'石津 謙介',
			'roman'			:	'Kensuke Ishizu',
			'image'			:	'ishizu_k.jpg',
			'alt'			:	'石津 謙介'
		},
		{
			'index'			:	'matsuba_k',
			'sortA'			:	'MatsubaKazukiyo',
			'sortB'			:	'まつばかずきよ',
			'name'			:	'松葉 一清',
			'roman'			:	'Kazukiyo Matsuba',
			'image'			:	'matsuba_k.jpg',
			'alt'			:	'松葉 一清'
		}*/
	]
)
/*
		{
			'index'			:	リンク先ページの .htmlを除いた文字列,　（例）suzuki_hの場合、suzuki_h.htmlがリンク先
			'sortA'			:	アルファベット順判定用（"roman"の姓と名を入れ替え、スペースなしで繋げる）
			'sortB'			:	あいうえお順判定用（姓名をひらがな表記でスペースなしで繋げる）
			'name'			:	漢字表記,
			'roman'			:	ローマ字表記,
			'image'			:	画像ファイル名,（画像ファイルが存在しない場合、ダミー画像 dummy.jpg が表示される）
			'alt'			:	画像の alt設定
		}, <- 末尾に追加する場合は、「,」を除くこと。

		【見た目の配置順】
			parts.jsの architectCallback()関数内で、
			・rensoSortA…アルファベット順（"sortA"を元に並び替えを行う）
			・rensoSortB…あいうえお順（"sortB"を元に並び替えを行う）
			用で関数が定義されている。

			sort()関数の引数として、上記関数のポインタを渡すことで、自動的に並び替えされる。


		【画像の注意】
			レイアウト崩れ防止で、縦・横ともに150px固定（正方形）にすること。
*/
