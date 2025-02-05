function make_selbooks() {
    var source =
            '<option value="0" selected>選択してください</option>'
            + '<option value="最新 400号 建築画報 カーボンニュートラル、その先へ... ZEB/ZEH-M特集 izumi CONSULTING">最新 400号 建築画報 カーボンニュートラル、その先へ... ZEB/ZEH-M特集 izumi CONSULTING</option>'
            + '<option value="399号 建築画報 MONOGRAPH ナカノサウステラ">399号 建築画報 MONOGRAPH ナカノサウステラ</option>'
            + '<option value="398号 建築画報 心を育む建築で次代を創る 教育施設研究所">398号 建築画報 心を育む建築で次代を創る 教育施設研究所</option>'
            + '<option value="397号 建築画報 MONOGRAPH 祇園甲部歌舞練場">397号 建築画報 MONOGRAPH 祇園甲部歌舞練場</option>'
            + '<option value="396号 建築画報 未来へ紡ぐ、不変の理念 宮本忠長建築設計事務所 第8集">396号 建築画報 未来へ紡ぐ、不変の理念 宮本忠長建築設計事務所 第8集"</option>'
            + '<option value="395号 建築画報 リジェネラティブデザインを目指して 日建設計 設備設計グループ特集">395号 建築画報 リジェネラティブデザインを目指して 日建設計 設備設計グループ特集</option>'
            + '<option value="394号 建築画報 未来を創るマネジメント 山下設計と山下PMCの哲学">394号 建築画報 未来を創るマネジメント 山下設計と山下PMCの哲学</option>'
            + '<option value="393号 建築画報 変わらぬ信念 変える未来 横河建築設計事務所 創立120周年">393号 建築画報 変わらぬ信念 変える未来 横河建築設計事務所 創立120周年</option>'
            + '<option value="392号 建築画報 持続する建築 大宇根建築設計事務所 設立40周年">392号 建築画報 持続する建築 大宇根建築設計事務所 設立40周年</option>'
            + '<option value="391号 建築画報 九段会館テラス">391号 建築画報 九段会館テラス</option>'
            + '<option value="390号 建築画報 批評に立ち向かう建築　佐藤総合計画">390号 建築画報 批評に立ち向かう建築　佐藤総合計画</option>'
            + '<option value="389号 建築画報 期待を超える 東畑建築事務所 90周年記念">389号 建築画報 期待を超える 東畑建築事務所 90周年記念</option>'
            + '<option value="388号 建築画報 香山壽夫建築研究所 1998-2021">388号 建築画報 香山壽夫建築研究所 1998-2021</option>'
            + '<option value="387号 建築画報 眞・善・美 綜企画設計 創立30周年">387号 建築画報 眞・善・美 綜企画設計 創立30周年</option>'
            + '<option value="386号 建築画報 MONOGRAPH 神谷町トラストタワー">386号 建築画報 MONOGRAPH 神谷町トラストタワー</option>'
            + '<option value="385号 建築画報 図書館建築から広がる世界 三上建築事務所特集号">385号 建築画報 図書館建築から広がる世界 三上建築事務所特集号</option>'
            /* + '<option value="384号 建築画報 MONOGRAPH 「造る」を「創る」／有明体操競技場のデザインビルド">384号 建築画報 MONOGRAPH 「造る」を「創る」／有明体操競技場のデザインビルド</option>' */
            + '<option value="383号 建築画報 プロセスが支えるこれからの外装デザイン">383号 建築画報 プロセスが支えるこれからの外装デザイン</option>'
            + '<option value="382号 建築画報 MONOGRAPH KANDA SQUARE">382号 建築画報 MONOGRAPH KANDA SQUARE</option>'
            + '<option value="381号 建築画報 MONOGRAPH かみす防災アリーナ">381号 建築画報 MONOGRAPH かみす防災アリーナ</option>'
            + '<option value="380号 建築画報 Design for Humanity 人間のための建築／坂倉建築研究所">380号 建築画報 Design for Humanity 人間のための建築／坂倉建築研究所</option>'
            + '<option value="379号 建築画報 素材と考える、表現のひろがり。日建スペースデザイン">379号 建築画報 素材と考える、表現のひろがり。日建スペースデザイン</option>'
            + '<option value="378号 建築画報 地域に寄り添い、地域と歩む アール・アイ・エー特集号">378号 建築画報 地域に寄り添い、地域と歩む アール・アイ・エー特集号</option>'
            + '<option value="377号 建築画報 地域とともに生きる 本間利雄設計事務所">377号 建築画報 地域とともに生きる 本間利雄設計事務所</option>'
            + '<option value="376号 建築画報 the Playground EDI 環境デザイン研究所の50年">376号 建築画報 the Playground EDI 環境デザイン研究所の50年</option>'
            + '<option value="375号 建築画報 200人がクリエイティブの種をまく">375号 建築画報 200人がクリエイティブの種をまく</option>'
            + '<option value="374号 建築画報 近未来の構造設計">374号 建築画報 近未来の構造設計</option>'
            + '<option value="373号 建築画報 環境統合技術 by Design 石本建築事務所 創立90周年">373号 建築画報 環境統合技術 by Design 石本建築事務所 創立90周年</option>'
            + '<option value="372号 建築画報 継承と発展 伊藤建築設計事務所50周年">372号 建築画報 継承と発展 伊藤建築設計事務所50周年</option>'
            + '<option value="371号 建築画報 Broaden Expertise, Inherit Emotion 技を拡げ、心を継ぐ 大建設計70周年">371号 建築画報 Broaden Expertise, Inherit Emotion 技を拡げ、心を継ぐ 大建設計70周年</option>'
            + '<option value="370号 建築画報 INVISIBLE BORDER THINK SOLUTION 大成建設 ソリューション営業本部">370号 建築画報 INVISIBLE BORDER THINK SOLUTION 大成建設 ソリューション営業本部</option>'
            + '<option value="369号 建築画報 共働共創による相乗 松田平田設計85周年">369号 建築画報 共働共創による相乗 松田平田設計85周年</option>'
            + '<option value="368号 建築画報 東京駅丸の内駅舎 保存・復原">368号 建築画報 東京駅丸の内駅舎 保存・復原</option>'
            + '<option value="367号 建築画報 新しい外装デザインの実現へ">367号 建築画報 新しい外装デザインの実現へ</option>'
            + '<option value="366号 建築画報 MONOGRAPH JP TOWER NAGOYA">366号 建築画報 MONOGRAPH JP TOWER NAGOYA</option>'
            + '<option value="365号 建築画報 かがやく女性・かがやく組織 日本設計の考える環境">365号 建築画報 かがやく女性・かがやく組織 日本設計の考える環境</option>'
            + '<option value="別装版 365号 建築画報 かがやく女性・かがやく組織 日本設計の考える環境">別装版 365号 建築画報 かがやく女性・かがやく組織 日本設計の考える環境</option>'
            + '<option value="364号 建築画報 竹中工務店の免震建築デザイン">364号 建築画報 竹中工務店の免震建築デザイン</option>'
            + '<option value="363号 建築画報 かんがえたこと、できたもの。">363号 建築画報 かんがえたこと、できたもの。</option>'
            + '<option value="362号 建築画報 前田建設工業の仕事～part2～">362号 建築画報 前田建設工業の仕事～part2～</option>'
            + '<option value="361号 建築画報 共創 OBAYASHI DESIGN">361号 建築画報 共創 OBAYASHI DESIGN</option>'
            + '<option value="360号 建築画報 公共の場をつくる 教育施設研究所50周年">360号 建築画報 公共の場をつくる 教育施設研究所50周年</option>'
            + '<option value="359号 建築画報 建築が切りひらく明日へ 安井建築設計事務所 90周年">359号 建築画報 建築が切りひらく明日へ 安井建築設計事務所 90周年</option>'
            + '<option value="358号 建築画報 建築は未来のために 三上建築事務所">358号 建築画報 建築は未来のために 三上建築事務所</option>'
            + '<option value="357号 建築画報 人×まち×景　RIAの視点">357号 建築画報 人×まち×景　RIAの視点</option>'
            + '<option value="356号 建築画報 地域に根ざす 宮本忠長建築設計事務所 第7集">356号 建築画報 地域に根ざす 宮本忠長建築設計事務所 第7集</option>'
            + '<option value="355号 建築画報 Sustainable Structures 竹中工務店の耐震改修デザイン">355号 建築画報 Sustainable Structures 竹中工務店の耐震改修デザイン</option>'
            + '<option value="354号 建築画報 MONOGRAPH JP TOWER">354号 建築画報 MONOGRAPH JP TOWER</option>'
            + '<option value="353号 想いをつむぐ 横河建築設計事務所110周年">353号 想いをつむぐ 横河建築設計事務所110周年</option>'
            + '<option value="352号 反骨の裏にまもるべきもの Defiance and What Must Be Preserved">352号 反骨の裏にまもるべきもの Defiance and What Must Be Preserved</option>'
            + '<option value="351号 進化するホテルデザイン New Value of Hotel Design">351号 進化するホテルデザイン New Value of Hotel Design</option>'
            + '<option value="350号 かわること・かわらないこと 日本設計の考える環境">350号 かわること・かわらないこと 日本設計の考える環境</option>'
            + '<option value="349号 BIM -次世代へ向かう技術革新－ 前田建設工業の取り組み">349号 BIM -次世代へ向かう技術革新－ 前田建設工業の取り組み</option>'
            /*      + '<option value="348号 MONOGRAPH　飯野ビルディング IINOBUILDING">348号 MONOGRAPH　飯野ビルディング IINOBUILDING</option>' */
            + '<option value="347号 綜企画設計の20年 1991-2011 人との調和を目指して">347号 綜企画設計の20年 1991-2011 人との調和を目指して</option>'
            + '<option value="346号 野生司環境設計　空間づくりのフィロソフィー">346号 野生司環境設計　空間づくりのフィロソフィー</option>'
            +
            /*		'<option value="345号 コンシェルジュな病院 NIKKEN SPACE DESIGNのホスピタリティー">345号 コンシェルジュな病院 NIKKEN SPACE DESIGNのホスピタリティー</option>' + */
            /*		'<option value="344号 挑戦する構造">344号 挑戦する構造</option>' + */
            '<option value="343号 安井建築設計事務所の教育施設">343号 安井建築設計事務所の教育施設</option>'
            + '<option value="342号 東京国際空港　新たな羽田　更なる飛躍">342号 東京国際空港　新たな羽田　更なる飛躍</option>'
            + '<option value="341号 前田建設工業の仕事">341号 前田建設工業の仕事</option>'
            + '<option value="340号 次世代の環境・エネルギーを考える">340号 次世代の環境・エネルギーを考える</option>'
            + '<option value="339号 特別号／KPF（KOHN PEDERSEN FOX ASSOCIATES）">339号 特別号／KPF（KOHN PEDERSEN FOX ASSOCIATES）</option>'
            + '<option value="338号 ARCOM40周年　空間　計画と設計">338号 ARCOM40周年　空間　計画と設計</option>'
            + '<option value="337号 佐藤総合計画65周年">337号 佐藤総合計画65周年</option>'
            + '<option value="336号 環境と建築のいま">336号 環境と建築のいま</option>'
            + '<option value="335号 インテリア考現学">335号 インテリア考現学</option>'
            + '<option value="334号 RIA特集号　まちへのアプローチ くらしの風景づくり">334号 RIA特集号　まちへのアプローチ くらしの風景づくり</option>'
            /*		'<option value="333号 「都市の木」の40年 仙田満＋環境デザイン研究所">333号 「都市の木」の40年 仙田満＋環境デザイン研究所</option>' */
            + '<option value="329号 JR東日本 駅の魅力－変革と挑戦">329号 JR東日本 駅の魅力－変革と挑戦</option>'
            + '<option value="328号 KKS 観光企画設計社">328号 KKS 観光企画設計社</option>'
            /*		'<option value="327号 久米設計 75th QUARTER to 100 CONNECT">327号 久米設計 75th QUARTER to 100 CONNECT</option>' */
            + '<option value="326号 伊藤建築設計事務所 THE WORKS 1998-2007">326号 伊藤建築設計事務所 THE WORKS 1998-2007</option>'
            /*		'<option value="324号 これからの公営競技施設">324号 これからの公営競技施設</option>' + */
            /*    '<option value="322号 入江三宅設計事務所 60周年 都市へのまなざし">322号 入江三宅設計事務所 60周年 都市へのまなざし</option>' */
            /*		'<option value="319号 梓設計60周年">319号 梓設計60周年</option>' */
            + '<option value="318号 村井敬合同設計　社会に貢献する建築">318号 村井敬合同設計　社会に貢献する建築</option>'
            + '<option value="317号 日建設計　人と仕事2006">317号 日建設計　人と仕事2006</option>'
            + '<option value="316号 特別号／内井昭蔵と内井建築設計事務所 「こころ」の継承">316号 特別号／内井昭蔵と内井建築設計事務所 「こころ」の継承</option>'
            + '<option value="314号 FRONTIER MIND　安井建築設計事務所">314号 FRONTIER MIND　安井建築設計事務所</option>'
            + '<option value="310号 石本建築事務所　ISHIMOTO by Design">310号 石本建築事務所　ISHIMOTO by Design</option>'
            + '<option value="309号 三菱地所設計　12のグランドデザイン">309号 三菱地所設計　12のグランドデザイン</option>'
            + '<option value="306号 本間利雄設計事務所　未来は過去の中にある">306号 本間利雄設計事務所　未来は過去の中にある</option>'
            /* +	'<option value="303号 佐藤総合計画　AXS NOW 2000-2003">303号 佐藤総合計画　AXS NOW 2000-2003</option>' */
            /* +	'<option value="302号 宮本忠長建築設計事務所 人と風景をつなぐ">302号 宮本忠長建築設計事務所 人と風景をつなぐ</option>' */
            /* +  '<option value="301号 土木デザインの現在＋コラボレーション">301号 土木デザインの現在＋コラボレーション</option>' */
            + '<option value="300号 横河建築設計事務所　100周年記念特集号 世紀を超えて">300号 横河建築設計事務所　100周年記念特集号 世紀を超えて</option>'
            /* + '<option value="298号 国土交通省　サスティナブルな建築と都市の連携をめざして">298号 国土交通省　サスティナブルな建築と都市の連携をめざして</option>' */
            + '<option value="書籍／「JIA建築年鑑2023-2024 第19巻」">書籍／「JIA建築年鑑2023-2024 第19巻」</option>'
            + '<option value="書籍／「めぐる、めくる、めくるめく 石川県立図書館の新世界」">書籍／「めぐる、めくる、めくるめく 石川県立図書館の新世界」</option>'
            + '<option value="書籍／「地域をデザインする vol.2」">書籍／「地域をデザインする vol.2」</option>'
            + '<option value="書籍／「JIA建築年鑑2022-2023 第18巻」">書籍／「JIA建築年鑑2022-2023 第18巻」</option>'
            + '<option value="書籍／「つなぐ 北山孝二郎の建築」">書籍／「つなぐ 北山孝二郎の建築」</option>'
            + '<option value="書籍／「能雑誌DEN 1～50号全巻セット」">書籍／「能雑誌DEN 1～50号全巻セット」</option>'
            + '<option value="書籍／「能雑誌DEN (ご希望の号を連絡事項欄に明記ください)」">書籍／「能雑誌DEN (ご希望の号を連絡事項欄に明記ください)」</option>'
            + '<option value="書籍／「アトリエブンク 2014-2022」">書籍／「アトリエブンク 2014-2022」</option>'
            + '<option value="書籍／「JIA建築年鑑2021-2022 第17巻」">書籍／「JIA建築年鑑2021-2022 第17巻」</option>'
            + '<option value="書籍／「杭の深層　構造偽装はなぜ起こるのか」（只今特別送料500円にて承り中）">書籍／「杭の深層　構造偽装はなぜ起こるのか」（只今特別送料500円にて承り中）</option>'
            + '<option value="書籍／「地域をデザインする vol.1」">書籍／「地域をデザインする vol.1」</option>'
            + '<option value="書籍／「図書館建築から広がる世界 三上建築事務所編」">書籍／「図書館建築から広がる世界 三上建築事務所編」</option>'
            + '<option value="書籍／「JIA建築年鑑2020-2021 第16巻」">書籍／「JIA建築年鑑2020-2021 第16巻」</option>'
            + '<option value="書籍／「ザ・ストーリー・オブ・サントリーホール」">書籍／「ザ・ストーリー・オブ・サントリーホール」</option>'
            + '<option value="書籍／「竹中工務店のホスピタリティデザイン」">書籍／「竹中工務店のホスピタリティデザイン」</option>'
            + '<option value="書籍／「JIA建築年鑑2019-2020 第15巻」">書籍／「JIA建築年鑑2019-2020 第15巻」</option>'
            + '<option value="書籍／「JIA建築年鑑2018」">書籍／「JIA建築年鑑2018」</option>'
            + '<option value="書籍／「能舞台 歴史を巡る」">書籍／「能舞台 歴史を巡る」</option>'
            + '<option value="書籍／「JIA建築年鑑2017」現代日本の建築家⑬">書籍／「JIA建築年鑑2017」現代日本の建築家⑬</option>'
            + '<option value="書籍／「宮本忠長の世界」">書籍／「宮本忠長の世界」</option>'
            + '<option value="書籍／「JIA建築年鑑2016」現代日本の建築家⑫">書籍／「JIA建築年鑑2016」現代日本の建築家⑫</option>'
            + '<option value="書籍／「伝統木構法に学ぶ 構造と意匠の融合」">書籍／「伝統木構法に学ぶ 構造と意匠の融合」</option>'
            + '<option value="書籍／「タワーマンションの真実」">書籍／「タワーマンションの真実」</option>'
            + '<option value="書籍／「龍岡会の考える 介護のあたりまえ」">書籍／「龍岡会の考える 介護のあたりまえ」</option>'
            + '<option value="書籍／「竹中工務店 住まいの空間」">書籍／「竹中工務店 住まいの空間」</option>'
            + '<option value="書籍／「JIA建築年鑑2015」現代日本の建築家⑪">書籍／「JIA建築年鑑2015」現代日本の建築家⑪</option>'
            + '<option value="書籍／「JIA建築年鑑2014」現代日本の建築家⑩">書籍／「JIA建築年鑑2014」現代日本の建築家⑩</option>'
            + '<option value="書籍／「JIA建築年鑑2013」現代日本の建築家⑨">書籍／「JIA建築年鑑2013」現代日本の建築家⑨</option>'
            + '<option value="書籍／「阪田誠造」坂倉準三の精神を受けついだ建築家">書籍／「阪田誠造」坂倉準三の精神を受けついだ建築家</option>'
            + '<option value="書籍／「菊竹学校　伝えたい 建築をつくる心」">書籍／「菊竹学校　伝えたい 建築をつくる心」</option>'
            + '<option value="書籍／「Atelier BNK　2000-2014」">書籍／「Atelier BNK　2000-2014」</option>'
            + '<option value="書籍／「現代の名匠」">書籍／「現代の名匠」</option>'
            + '<option value="書籍／「継承と挑戦」">書籍／「継承と挑戦」</option>'
            + '<option value="書籍／「建築家　戸尾任宏」日本の心を宿す博物館建築">書籍／「建築家　戸尾任宏」日本の心を宿す博物館建築</option>'
            + '<option value="書籍／「ていじ手帳」風景の襞に潜む 人の思いをよむ旅">書籍／「ていじ手帳」風景の襞に潜む 人の思いをよむ旅</option>'
            + '<option value="書籍／「現代日本の建築家⑧」JIA建築年鑑2012">書籍／「現代日本の建築家⑧」JIA建築年鑑2012</option>'
            + '<option value="書籍／「12の祈りの空間」村上晶子 教会への希求">書籍／「12の祈りの空間」村上晶子 教会への希求</option>'
            + '<option value="書籍／ジョサイア・コンドル">書籍／ジョサイア・コンドル</option>'
            /*      + '<option value="書籍／「1700の肖像」JR東日本全駅写真集">書籍／「1700の肖像」JR東日本全駅写真集</option>' */
            + '<option value="書籍／「郵政建築」逓信からの軌跡">書籍／「郵政建築」逓信からの軌跡</option>'
            + '<option value="書籍／「皇室建築」内匠寮の人と作品">書籍／「皇室建築」内匠寮の人と作品</option>'
            /*		+ '<option value="書籍／「建築画報」40年">書籍／「建築画報」40年</option>' */
            + '<option value="図録／元倉真琴「集まって住む」">図録／元倉真琴「集まって住む」</option>'
            + '<option value="図録／川﨑清「見えざる建築」の輪郭">図録／川﨑清「見えざる建築」の輪郭</option>'
            + '<option value="図録／「建築家 相田武文展」">図録／「建築家 相田武文展」</option>'
            + '<option value="図録／「香山壽夫ドローイング展」">図録／「香山壽夫ドローイング展」</option>'
            + '<option value="図録／「宮脇檀 手が考える ～建築家・宮脇檀のドローイング～」">図録／「宮脇檀 手が考える ～建築家・宮脇檀のドローイング～」</option>'
            + '<option value="図録／「建築家 宮本忠長展 ～建築家の指先に脳がある～」">図録／「建築家 宮本忠長展 ～建築家の指先に脳がある～」</option>'
            + '<option value="図録・書籍／「天と地をつなぐランドスケープ　渦展」">図録・書籍／「天と地をつなぐランドスケープ　渦展」</option>'
            ;

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
        'bk44': '書籍／「JIA建築年鑑2023-2024 第19巻」',
        'bk43': '書籍／「めぐる、めくる、めくるめく 石川県立図書館の新世界」',
        'bk42': '書籍／「地域をデザインする vol.2」',
        'bk41': '書籍／「JIA建築年鑑2022-2023 第18巻」',
        'bk40': '書籍／「つなぐ 北山孝二郎の建築」',
        'bk39': '書籍／「能雑誌DEN 1～50号全巻セット」',
        'bk38': '書籍／「能雑誌DEN (ご希望の号を連絡事項欄に明記ください)」',
        'bk37': '書籍／「アトリエブンク 2014-2022」',
        'bk36': '書籍／「JIA建築年鑑2021-2022 第17巻」',
        'bk34': '書籍／「杭の深層　構造偽装はなぜ起こるのか」（只今特別送料500円にて承り中）',
        'bk35': '書籍／「地域をデザインする vol.1」',
        'bk33': '書籍／「図書館建築から広がる世界 三上建築事務所編」',
        'bk32': '書籍／「JIA建築年鑑2020-2021 第16巻」',
        'bk31': '書籍／「ザ・ストーリー・オブ・サントリーホール」',
        'bk30': '書籍／「竹中工務店のホスピタリティデザイン」',
        'bk29': '書籍／「JIA建築年鑑2019-2020 第15巻」',
        'bk27': '書籍／「JIA建築年鑑2018」',
        'bk26': '書籍／「能舞台 歴史を巡る」',
        'bk25': '書籍／「JIA建築年鑑2017」現代日本の建築家⑬',
        'bk24': '書籍／「宮本忠長の世界」',
        'bk23': '書籍／「JIA建築年鑑2016」現代日本の建築家⑫',
        'bk22': '書籍／「伝統木構法に学ぶ 構造と意匠の融合」',
        'bk21': '書籍／「タワーマンションの真実」',
        'bk20': '書籍／「龍岡会の考える 介護のあたりまえ」',
        'bk19': '書籍／「竹中工務店 住まいの空間」',
        'bk18': '書籍／「JIA建築年鑑2015」現代日本の建築家⑪',
        'bk17': '書籍／「JIA建築年鑑2014」現代日本の建築家⑩',
        'bk16': '書籍／「JIA建築年鑑2013」現代日本の建築家⑨',
        'bk15': '書籍／「阪田誠造」坂倉準三の精神を受けついだ建築家',
        'bk14': '書籍／「菊竹学校　伝えたい 建築をつくる心」',
        'bk13': '書籍／「Atelier BNK　2000-2014」',
        'bk12': '書籍／「現代の名匠」',
        'bk11': '書籍／「継承と挑戦」',
        'bk10': '書籍／「建築家　戸尾任宏」日本の心を宿す博物館建築',
        'bk9': '書籍／「ていじ手帳」風景の襞に潜む 人の思いをよむ旅',
        'bk8': '書籍／「12の祈りの空間」村上晶子 教会への希求',
        'bk7': '書籍／「現代日本の建築家⑧」JIA建築年鑑2012',
        'bk6': '書籍／ジョサイア・コンドル',
        /*      'bk1': '書籍／「1700の肖像」JR東日本全駅写真集',*/
        'bk2': '書籍／「郵政建築」逓信からの軌跡',
        'bk4': '書籍／「皇室建築」内匠寮の人と作品',
        /*		'bk5'	:	'書籍／「建築画報」40年', */
        'z06': '図録／元倉真琴「集まって住む」',
        'z05': '図録／川﨑清「見えざる建築」の輪郭',
        'z04': '図録／「建築家 相田武文展」',
        'z03': '図録／「香山壽夫ドローイング展」',
        'z01': '図録／「宮脇檀 手が考える ～建築家・宮脇檀のドローイング～」',
        'z02': '図録／「建築家 宮本忠長展 ～建築家の指先に脳がある～」',
        'bk28': '図録・書籍／「天と地をつなぐランドスケープ　渦展」',
        '400': '最新 400号 建築画報 カーボンニュートラル、その先へ... ZEB/ZEH-M特集 izumi CONSULTING',
        '399': '399号 建築画報 MONOGRAPH ナカノサウステラ',
        '398': '398号 建築画報 心を育む建築で次代を創る 教育施設研究所',
        '397': '397号 建築画報 MONOGRAPH 祇園甲部歌舞練場',
        '396': '396号 建築画報 未来へ紡ぐ、不変の理念 宮本忠長建築設計事務所 第8集"',
        '395': '395号 建築画報 リジェネラティブデザインを目指して 日建設計 設備設計グループ特集',
        '394': '394号 建築画報 未来を創るマネジメント 山下設計と山下PMCの哲学',
        '393': '393号 建築画報 変わらぬ信念 変える未来 横河建築設計事務所 創立120周年',
        '392': '392号 建築画報 持続する建築 大宇根建築設計事務所 設立40周年',
        '391': '391号 建築画報 九段会館テラス',
        '390': '390号 建築画報 批評に立ち向かう建築　佐藤総合計画',
        '389': '389号 建築画報 期待を超える 東畑建築事務所 90周年記念',
        '388': '388号 建築画報 香山壽夫建築研究所 1998-2021',
        '387': '387号 建築画報 眞・善・美 綜企画設計 創立30周年',
        '386': '386号 建築画報 MONOGRAPH 神谷町トラストタワー',
        '385': '385号 建築画報 図書館建築から広がる世界 三上建築事務所特集号',
        '384': '384号 建築画報 MONOGRAPH 「造る」を「創る」／有明体操競技場のデザインビルド',
        '383': '383号 建築画報 プロセスが支えるこれからの外装デザイン',
        '382': '382号 建築画報 MONOGRAPH KANDA SQUARE',
        '381': '381号 建築画報 MONOGRAPH かみす防災アリーナ',
        '380': '380号 建築画報 Design for Humanity 人間のための建築／坂倉建築研究所',
        '379': '379号 建築画報 素材と考える、表現のひろがり。日建スペースデザイン',
        '378': '378号 建築画報 地域に寄り添い、地域と歩む アール・アイ・エー特集号',
        '377': '377号 建築画報 地域とともに生きる 本間利雄設計事務所',
        '376': '376号 建築画報 the Playground EDI 環境デザイン研究所の50年',
        '375': '375号 建築画報 200人がクリエイティブの種をまく',
        '374': '374号 建築画報 近未来の構造設計',
        '373': '373号 建築画報 環境統合技術 by Design 石本建築事務所 創立90周年',
        '372': '372号 建築画報 継承と発展 伊藤建築設計事務所50周年',
        '371': '371号 建築画報 Broaden Expertise, Inherit Emotion 技を拡げ、心を継ぐ 大建設計70周年',
        '370': '370号 建築画報 INVISIBLE BORDER THINK SOLUTION 大成建設 ソリューション営業本部',
        '369': '369号 建築画報 共働共創による相乗 松田平田設計85周年',
        '368': '368号 建築画報 東京駅丸の内駅舎 保存・復原',
        '367': '367号 建築画報 新しい外装デザインの実現へ',
        '366': '366号 建築画報 MONOGRAPH JP TOWER NAGOYA',
        '365': '365号 建築画報 かがやく女性・かがやく組織 日本設計の考える環境',
        '365-2': '別装版 365号 建築画報 かがやく女性・かがやく組織 日本設計の考える環境',
        '364': '364号 建築画報 竹中工務店の免震建築デザイン',
        '363': '363号 建築画報 かんがえたこと、できたもの。',
        '362': '362号 建築画報 前田建設工業の仕事～part2～',
        '361': '361号 建築画報 共創 OBAYASHI DESIGN',
        '360': '360号 建築画報 公共の場をつくる 教育施設研究所50周年',
        '359': '359号 建築画報 建築が切りひらく明日へ 安井建築設計事務所 90周年',
        '358': '358号 建築は未来のために',
        '357': '357号 建築画報 人×まち×景　RIAの視点',
        '356': '356号 建築画報 地域に根ざす 宮本忠長建築設計事務所 第7集',
        '355': '355号 建築画報 Sustainable Structures 竹中工務店の耐震改修デザイン',
        '354': '354号 建築画報 MONOGRAPH JP TOWER',
        '353': '353号 想いをつむぐ 横河建築設計事務所110周年',
        '352': '352号 反骨の裏にまもるべきもの Defiance and What Must Be Preserved',
        '351': '351号 進化するホテルデザイン New Value of Hotel Design',
        '350': '350号 かわること・かわらないこと 日本設計の考える環境',
        '349': '349号 BIM -次世代へ向かう技術革新－ 前田建設工業の取り組み',
        '348': '348号 建築画報 MONOGRAPH　飯野ビルディング IINOBUILDING',
        '347': '347号 綜企画設計の20年 1991-2011 人との調和を目指して',
        '346': '346号 野生司環境設計　空間づくりのフィロソフィー',
        /*		'345'	:	'345号 コンシェルジュな病院 NIKKEN SPACE DESIGNのホスピタリティー', */
        /*		'344'	:	'344号 挑戦する構造', */
        '343': '343号 安井建築設計事務所の教育施設',
        '342': '342号 東京国際空港　新たな羽田　更なる飛躍',
        '341': '341号 前田建設工業の仕事',
        '340': '340号 次世代の環境・エネルギーを考える',
        '339': '339号 特別号／KPF（KOHN PEDERSEN FOX ASSOCIATES）',
        '338': '338号 ARCOM40周年　空間　計画と設計',
        '337': '337号 佐藤総合計画65周年',
        '336': '336号 環境と建築のいま',
        '335': '335号 インテリア考現学',
        '334': '334号 RIA特集号　まちへのアプローチ くらしの風景づくり',
        /*		'333'	:	'333号 「都市の木」の40年 仙田満＋環境デザイン研究所', */
        '329': '329号 JR東日本 駅の魅力－変革と挑戦',
        '328': '328号 KKS 観光企画設計社',
        /*		'327'	:	'327号 久米設計 75th QUARTER to 100 CONNECT',*/
        '326': '326号 伊藤建築設計事務所 THE WORKS 1998-2007',
        /*		'324'	:	'324号 これからの公営競技施設', */
        /*		'323'	:	'323号 特別号／KPF（KOHN PEDERSEN FOX ASSOCIATES）',*/
        '322': '322号 入江三宅設計事務所 60周年 都市へのまなざし',
        /*		'319'	:	'319号 梓設計60周年', */
        '318': '318号 村井敬合同設計　社会に貢献する建築',
        '317': '317号 日建設計　人と仕事2006',
        '316': '316号 特別号／内井昭蔵と内井建築設計事務所 「こころ」の継承',
        '314': '314号 FRONTIER MIND　安井建築設計事務所',
        /*		'312'	:	'312号 INA新建築研究所　創立50周年記念特集',*/
        /*		'311'	:	'311号 松田平田設計の"いま"　MHS Today',*/
        '310': '310号 石本建築事務所　ISHIMOTO by Design',
        '309': '309号 三菱地所設計　12のグランドデザイン',
        /*		'308'	:	'308号 久米設計 教育・文化施設特集',*/
        '306': '306号 本間利雄設計事務所　未来は過去の中にある',
        /*		'305'	:	'305号 特集　森ビルの挑戦　Artelligent City',*/
        /*		'304'	:	'304号 FACADE　ENGINEERING',*/
        /*		'303'	:	'303号 佐藤総合計画　AXS NOW 2000-2003', */
        /*		'302'	:	'302号 宮本忠長建築設計事務所 人と風景をつなぐ', */
        /*		'301'	:	'301号 土木デザインの現在＋コラボレーション', */
        '300': '300号 横河建築設計事務所　100周年記念特集号 世紀を超えて',
        /*		'299'	:	'299号 日本設計　創立35周年記念企画 教育・研究所施設特集',*/
        /*		'298'	:	'298号 国土交通省　サスティナブルな建築と都市の連携をめざして' */
    };


    var book_list = '';
    var query = getQueryStrings();

    /*
     if (query["lst"]) {
     if (sel_books[query["lst"]]) {
     $("#申し込み書籍1").children("option[value=" + sel_books[query["lst"]] + "]").attr("selected", "selected");
     $("#申し込み書籍1のご注文冊数").attr("value", 1);
     }
     }
     */

}

function make_capital() {
    var source =
            '<option selected="selected">都道府県名</option>'
            + '<optgroup label="北海道">'
            + '<option value="北海道">北海道</option>'
            + '</optgroup>'
            + '<optgroup label="東北">'
            + '<option value="青森県">青森県</option>'
            + '<option value="秋田県">秋田県</option>'
            + '<option value="岩手県">岩手県</option>'
            + '<option value="宮城県">宮城県</option>'
            + '<option value="山形県">山形県</option>'
            + '<option value="福島県">福島県</option>'
            + '</optgroup>'
            + '<optgroup label="関東">'
            + '<option value="東京都">東京都</option>'
            + '<option value="神奈川県">神奈川県</option>'
            + '<option value="千葉県">千葉県</option>'
            + '<option value="埼玉県">埼玉県</option>'
            + '<option value="群馬県">群馬県</option>'
            + '<option value="栃木県">栃木県</option>'
            + '<option value="茨城県">茨城県</option>'
            + '<option value="山梨県">山梨県</option>'
            + '</optgroup>'
            + '<optgroup label="信越">'
            + '<option value="新潟県">新潟県</option>'
            + '<option value="長野県">長野県</option>'
            + '</optgroup>'
            + '<optgroup label="北陸">'
            + '<option value="富山県">富山県</option>'
            + '<option value="石川県">石川県</option>'
            + '<option value="福井県">福井県</option>'
            + '</optgroup>'
            + '<optgroup label="東海地方">'
            + '<option value="愛知県">愛知県</option>'
            + '<option value="岐阜県">岐阜県</option>'
            + '<option value="静岡県">静岡県</option>'
            + '<option value="三重県">三重県</option>'
            + '</optgroup>'
            + '<optgroup label="近畿">'
            + '<option value="大阪府">大阪府</option>'
            + '<option value="京都府">京都府</option>'
            + '<option value="奈良県">奈良県</option>'
            + '<option value="滋賀県">滋賀県</option>'
            + '<option value="和歌山県">和歌山県</option>'
            + '<option value="兵庫県">兵庫県</option>'
            + '</optgroup>'
            + '<optgroup label="中国">'
            + '<option value="岡山県">岡山県</option>'
            + '<option value="広島県">広島県</option>'
            + '<option value="島根県">島根県</option>'
            + '<option value="鳥取県">鳥取県</option>'
            + '<option value="山口県">山口県</option>'
            + '</optgroup>'
            + '<optgroup label="四国">'
            + '<option value="香川県">香川県</option>'
            + '<option value="徳島県">徳島県</option>'
            + '<option value="愛媛県">愛媛県</option>'
            + '<option value="高知県">高知県</option>'
            + '</optgroup>'
            + '<optgroup label="九州">'
            + '<option value="福岡県">福岡県</option>'
            + '<option value="大分県">大分県</option>'
            + '<option value="佐賀県">佐賀県</option>'
            + '<option value="長崎県">長崎県</option>'
            + '<option value="熊本県">熊本県</option>'
            + '<option value="宮崎県">宮崎県</option>'
            + '<option value="鹿児島県">鹿児島県</option>'
            + '</optgroup>'
            + '<optgroup label="沖縄">'
            + '<option value="沖縄県">沖縄県</option>'
            + '</optgroup>';

    $(".capital").each(function () {
        $(this).html(source);
    });
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
                '<tr>'
                + '<td>'
                + '<div class="years"><img src="./imgs/imgYears_' + data[i]["year"] + _latest_years + '.gif" alt="' + data[i]["year"] + '年" width="140" height="110" /></div>'
                + '<table class="years_onLists">';

        for (var j in data[i]["books"]) {
            /* 号毎 */
            _num++;

            _src += ((_num % 4 == 1) && (_num >= 5))
                    ? ''
                    + '<tr>'
                    + '<td>'
                    + '<div><img src="./imgs/imgYears_space.gif" alt="" width="1" height="40" /></div>'
                    + '</td>'
                    + '</tr>'
                    + ''
                    + '<tr>'
                    + '<td>'
                    + '<table class="none_onLists">'
                    + ''
                    : '';

            _src += (_num % 4 == 1)
                    ? '<tr>'
                    : '';

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
            } else if (data[i]["books"][j]["fewstock"] == "true") {
                var _imgs_bg = "./imgs/" + data[i]["books"][j]["number"] + ".jpg";
                var _imgBase = '<img src="' + _imgs_bg + '" alt="' + data[i]["books"][j]["number"] + '号" width="148" height="200" />';
                var _imgMask = '<img src="./imgs/few_stock_mask.png" alt="" width="150" height="200" class="imgMask" />';
                var _imgFewStock = '<img src="./imgs/few_stock.png" alt="few in stock" width="130" height="119" class="imgSoldOut" />';
                var _imgLink = '<a href="./' + data[i]["books"][j]["number"] + '.html" class="solink"><img src="./imgs/anchor_link_mask.png" alt="" width="148" height="200" class="imgLink" /></a>';
                _imgTags = _imgBase + _imgMask + _imgFewStock + _imgLink;
            }

            _src +=
                    '<td class="contents">'
                    + '<div class="date">' + data[i]["books"][j]["date"] + '</div>'
                    + '<div class="noHeight">' + _imgTags + '</div>'
                    + '<span class="number">' + data[i]["books"][j]["number"] + '</span><span class="gou">号</span><br />'
                    + '<div class="title">' + data[i]["books"][j]["title"] + '</div>'
                    + '<div class="price"><div class="priceL">' + data[i]["books"][j]["price"] + '</div><div class="priceR">' + _linkOrder + '</div>'
                    + '</td>';


            _src += (_num % 4 != 0)
                    ? ''
                    + '<td class="space"><br /></td>'
                    : '</tr>'
                    + '</table>'
                    + '</td>'
                    + '</tr>'
                    + ''
                    +
                    ((_num != _inYear_books_num) ? ''
                            : ''
                            + '<tr>'
                            + '<td>'
                            + '<div style="height: 30px;"><div class="pagetopLinkBlock" style="padding-top: 10px;"><a href="#banner" class="pagetopLink"></a></div></div>'
                            + '</td>'
                            + '</tr>'
                            )
                    +
                    '<tr>'
                    + '<td>'
                    + '<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>'
                    + '</td>'
                    + '</tr>';

        }

        while (_num % 4 != 0) {
            /* 空セル生成 */
            _num++;

            _src +=
                    '<td class="contents"><br /></td>';

            _src += (_num % 4 != 0)
                    ? ''
                    + '<td class="space"><br /></td>'
                    : '</tr>'
                    + '</table>'
                    + '</td>'
                    + '</tr>'
                    + ''
                    + '<tr>'
                    + '<td>'
                    + '<div style="height: 30px;"><div class="pagetopLinkBlock" style="padding-top: 10px;"><a href="#banner" class="pagetopLink"></a></div></div>'
                    + '</td>'
                    + '</tr>'
                    + ''
                    + '<tr>'
                    + '<td>'
                    + '<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>'
                    + '</td>'
                    + '</tr>';
        }

        source += _src;
    }

    $("#backnumber_list").html(source);
}

function bookCallback(data) {
    var source = '';
    var _imgBase = '';
    var _imgMask = '';
    var _imgSoldOut = '';
    var _imgTags = '';
    var _link_order = '';
    var _imgFewStock = '';

    var _num = 0;

    for (var i in data) {

        _imgBase = '';
        _imgMask = '';
        _imgSoldOut = '';
        _imgTags = '';
        _link_order = '';
        _imgFewStock = '';

        _num++;

        if (data[i]["image"] == "--") {
            /* 空きセル */
            source += (_num % 2 == 0) ? '<td></td></tr>' : '</tr>';
            source += '<tr><td colspan="3"><div><img style="padding-top:48px;" src="../common/imgs/subtitle_exhibition.gif" alt="FEATURED" width="750" height="26" /></div></td></tr><tr><td>';
            _num = 0;
            continue;
        }

        source += (_num % 2 == 1)
                ? ''
                + '<tr>'
                + '<td>'
                : '';

        _imgTags = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';

        _link_order = '<a href="../order/index.html?lst=' + data[i]["list_num"] + '" class="button_order">ご注文</a>';

        if (data[i]["soldout"] == "true") {
            _imgBase = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';
            _imgMask = '<img src="./imgs/sold_out_mask.png" alt="" width="150" height="' + data[i]["height"] + '" class="imgMask" />';
            _imgSoldOut = '<img src="./imgs/sold_out.png" alt="SOLD OUT" width="130" height="119" class="imgSoldOut" />';
            _imgTags = '<div class="noHeight">' + _imgBase + _imgMask + _imgSoldOut + '</div>';
            _link_order = '';
        } else if (data[i]["fewstock"] == "true") {
            _imgBase = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';
            _imgMask = '<img src="./imgs/few_stock_mask.png" alt="" width="150" height="' + data[i]["height"] + '" class="imgMask" />';
            _imgFewStock = '<img src="./imgs/few_stock.png" alt="Few Stock" width="130" height="119" class="imgSoldOut" />';
            _imgTags = '<div class="noHeight">' + _imgBase + _imgMask + _imgFewStock + '</div>';
        }

        source +=
                '<table class="contents">'
                + '<tr>'
                + '<td class="contentsL">'
                + _imgTags
                + '<div style="width: 47px; margin: 0 0 0 auto;">' + _link_order + '</div>'
                + '</td>'
                + '<td class="midSpace"><br /></td>'
                + '<td class="contentsR">'
                + '<div class="title">' + data[i]["title"] + '</div>'
                + '<div class="supervision">' + data[i]["supervision"] + '</div>'
                + '<div class="index">' + data[i]["index"] + '</div>'
                + '<div class="detail">'
                + data[i]["detail"]
                + '</div>'
                + '<div class="price">'
                + data[i]["price"]
                + '</div>'
                + '</td>'
                + '<td class="rightSpace"><br /></td>'
                + '</tr>'
                + '</table>'
                + '</td>';

        source += (_num % 2 != 0)
                ? ''
                + '<td class="space"><br /></td>'
                + ''
                + '<td>'
                : '</tr>'
                + '<tr>'
                + '<td colspan="3">'
                + '<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>'
                + '</td>'
                + '</tr>';

    }

    while (_num % 2 != 0) {
        /* 空セル生成 */
        _num++;

        source +=
                '<table class="contents">'
                + '<tr>'
                + '<td class="contentsL">'
                + '</td>'
                + '</tr>'
                + '</table>'
                + '</td>'
                + '<td class="rightSpace"><br /></td>'
                + '</tr>'
                + '<tr>'
                + '<td colspan="3">'
                + '<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>'
                + '</td>'
                + '</tr>';
    }

    source +=
            '<tr>'
            + '<td colspan="3"><div style="height: 30px;"><div class="pagetopLinkBlock" style="padding-top: 10px;"><a href="#banner" class="pagetopLink"></a></div></div></td>'
            + '</tr>';

    $("#book_list").html(source);


    $("img.imgMask").each(function () {
        $(this).css({
            top: -$(this).height()
        });
    });

    $("img.imgSoldOut").each(function () {
        $(this).css({
            top: ($(this).siblings("img.imgMask").height() < $(this).height()) ? -$(this).siblings("img.imgMask").height() * 2 : -$(this).siblings("img.imgMask").height() - $(this).height()
        });
    });

    $(".noHeight").each(function () {
        $(this).height(Math.max($(this).children("img.imgMask").height(), $(this).children("img.imgSoldOut").height()));
    });

}

function bookCallback1(data) {
    var source = '';
    var _imgBase = '';
    var _imgMask = '';
    var _imgSoldOut = '';
    var _imgTags = '';
    var _link_order = '';
    var _imgFewStock = '';

    var _num = 0;

    for (var i in data) {

        _imgBase = '';
        _imgMask = '';
        _imgSoldOut = '';
        _imgTags = '';
        _link_order = '';
        _imgFewStock = '';

        _num++;

        if (data[i]["image"] == "--") {
            /* 空きセル */
            source += (_num % 2 == 0) ? '<td></td></tr>' : '</tr>';
            source += '<tr><td colspan="3"><div><img style="padding-top:48px;" src="../common/imgs/subtitle_exhibition.gif" alt="FEATURED" width="750" height="26" /></div></td></tr><tr><td>';
            _num = 0;
            continue;
        }

        source += (_num % 2 == 1)
                ? ''
                + '<tr>'
                + '<td>'
                : '';

        _imgTags = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';

        _link_order = '<a href="../order/index.html?lst=' + data[i]["list_num"] + '" class="button_order">ご注文</a>';

        if (data[i]["soldout"] == "true") {
            _imgBase = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';
            _imgMask = '<img src="./imgs/sold_out_mask.png" alt="" width="150" height="' + data[i]["height"] + '" class="imgMask" />';
            _imgSoldOut = '<img src="./imgs/sold_out.png" alt="SOLD OUT" width="130" height="119" class="imgSoldOut" />';
            _imgTags = '<div class="noHeight">' + _imgBase + _imgMask + _imgSoldOut + '</div>';
            _link_order = '';
        } else if (data[i]["fewstock"] == "true") {
            _imgBase = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';
            _imgMask = '<img src="./imgs/few_stock_mask.png" alt="" width="150" height="' + data[i]["height"] + '" class="imgMask" />';
            _imgFewStock = '<img src="./imgs/few_stock.png" alt="Few Stock" width="130" height="119" class="imgSoldOut" />';
            _imgTags = '<div class="noHeight">' + _imgBase + _imgMask + _imgFewStock + '</div>';
        }

        source +=
                '<table class="contents">'
                + '<tr>'
                + '<td class="contentsL">'
                + _imgTags
                + '<div style="width: 47px; margin: 0 0 0 auto;">' + _link_order + '</div>'
                + '</td>'
                + '<td class="midSpace"><br /></td>'
                + '<td class="contentsR">'
                + '<div class="title">' + data[i]["title"] + '</div>'
                + '<div class="supervision">' + data[i]["supervision"] + '</div>'
                + '<div class="index">' + data[i]["index"] + '</div>'
                + '<div class="detail">'
                + data[i]["detail"]
                + '</div>'
                + '<div class="price">'
                + data[i]["price"]
                + '</div>'
                + '</td>'
                + '<td class="rightSpace"><br /></td>'
                + '</tr>'
                + '</table>'
                + '</td>';

        source += (_num % 2 != 0)
                ? ''
                + '<td class="space"><br /></td>'
                + ''
                + '<td>'
                : '</tr>'
                + '<tr>'
                + '<td colspan="3">'
                + '<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>'
                + '</td>'
                + '</tr>';

    }

    while (_num % 2 != 0) {
        /* 空セル生成 */
        _num++;

        source +=
                '<table class="contents">'
                + '<tr>'
                + '<td class="contentsL">'
                + '</td>'
                + '</tr>'
                + '</table>'
                + '</td>'
                + '<td class="rightSpace"><br /></td>'
                + '</tr>'
                + '<tr>'
                + '<td colspan="3">'
                + '<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>'
                + '</td>'
                + '</tr>';
    }

    source +=
            '<tr>'
            + '<td colspan="3"><div style="height: 30px;"><div class="pagetopLinkBlock" style="padding-top: 10px;"><a href="#banner" class="pagetopLink"></a></div></div></td>'
            + '</tr>';

    $("#book_list1").html(source);


    $("img.imgMask").each(function () {
        $(this).css({
            top: -$(this).height()
        });
    });

    $("img.imgSoldOut").each(function () {
        $(this).css({
            top: ($(this).siblings("img.imgMask").height() < $(this).height()) ? -$(this).siblings("img.imgMask").height() * 2 : -$(this).siblings("img.imgMask").height() - $(this).height()
        });
    });

    $(".noHeight").each(function () {
        $(this).height(Math.max($(this).children("img.imgMask").height(), $(this).children("img.imgSoldOut").height()));
    });

}

function bookCallback2(data) {
    var source = '';
    var _imgBase = '';
    var _imgMask = '';
    var _imgSoldOut = '';
    var _imgTags = '';
    var _link_order = '';
    var _imgFewStock = '';

    var _num = 0;

    for (var i in data) {

        _imgBase = '';
        _imgMask = '';
        _imgSoldOut = '';
        _imgTags = '';
        _link_order = '';
        _imgFewStock = '';

        _num++;

        if (data[i]["image"] == "--") {
            /* 空きセル */
            source += (_num % 2 == 0) ? '<td></td></tr>' : '</tr>';
            source += '<tr><td colspan="3"><div><img style="padding-top:48px;" src="../common/imgs/subtitle_exhibition.gif" alt="FEATURED" width="750" height="26" /></div></td></tr><tr><td>';
            _num = 0;
            continue;
        }

        source += (_num % 2 == 1)
                ? ''
                + '<tr>'
                + '<td>'
                : '';

        _imgTags = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';

        _link_order = '<a href="../order/index.html?lst=' + data[i]["list_num"] + '" class="button_order">ご注文</a>';

        if (data[i]["soldout"] == "true") {
            _imgBase = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';
            _imgMask = '<img src="./imgs/sold_out_mask.png" alt="" width="150" height="' + data[i]["height"] + '" class="imgMask" />';
            _imgSoldOut = '<img src="./imgs/sold_out.png" alt="SOLD OUT" width="130" height="119" class="imgSoldOut" />';
            _imgTags = '<div class="noHeight">' + _imgBase + _imgMask + _imgSoldOut + '</div>';
            _link_order = '';
        } else if (data[i]["fewstock"] == "true") {
            _imgBase = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';
            _imgMask = '<img src="./imgs/few_stock_mask.png" alt="" width="150" height="' + data[i]["height"] + '" class="imgMask" />';
            _imgFewStock = '<img src="./imgs/few_stock.png" alt="Few Stock" width="130" height="119" class="imgSoldOut" />';
            _imgTags = '<div class="noHeight">' + _imgBase + _imgMask + _imgFewStock + '</div>';
        }

        source +=
                '<table class="contents">'
                + '<tr>'
                + '<td class="contentsL">'
                + _imgTags
                + '<div style="width: 47px; margin: 0 0 0 auto;">' + _link_order + '</div>'
                + '</td>'
                + '<td class="midSpace"><br /></td>'
                + '<td class="contentsR">'
                + '<div class="title">' + data[i]["title"] + '</div>'
                + '<div class="supervision">' + data[i]["supervision"] + '</div>'
                + '<div class="index">' + data[i]["index"] + '</div>'
                + '<div class="detail">'
                + data[i]["detail"]
                + '</div>'
                + '<div class="price">'
                + data[i]["price"]
                + '</div>'
                + '</td>'
                + '<td class="rightSpace"><br /></td>'
                + '</tr>'
                + '</table>'
                + '</td>';

        source += (_num % 2 != 0)
                ? ''
                + '<td class="space"><br /></td>'
                + ''
                + '<td>'
                : '</tr>'
                + '<tr>'
                + '<td colspan="3">'
                + '<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>'
                + '</td>'
                + '</tr>';

    }

    while (_num % 2 != 0) {
        /* 空セル生成 */
        _num++;

        source +=
                '<table class="contents">'
                + '<tr>'
                + '<td class="contentsL">'
                + '</td>'
                + '</tr>'
                + '</table>'
                + '</td>'
                + '<td class="rightSpace"><br /></td>'
                + '</tr>'
                + '<tr>'
                + '<td colspan="3">'
                + '<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>'
                + '</td>'
                + '</tr>';
    }

    source +=
            '<tr>'
            + '<td colspan="3"><div style="height: 30px;"><div class="pagetopLinkBlock" style="padding-top: 10px;"><a href="#banner" class="pagetopLink"></a></div></div></td>'
            + '</tr>';

    $("#book_list2").html(source);


    $("img.imgMask").each(function () {
        $(this).css({
            top: -$(this).height()
        });
    });

    $("img.imgSoldOut").each(function () {
        $(this).css({
            top: ($(this).siblings("img.imgMask").height() < $(this).height()) ? -$(this).siblings("img.imgMask").height() * 2 : -$(this).siblings("img.imgMask").height() - $(this).height()
        });
    });

    $(".noHeight").each(function () {
        $(this).height(Math.max($(this).children("img.imgMask").height(), $(this).children("img.imgSoldOut").height()));
    });

}

function bookCallback3(data) {
    var source = '';
    var _imgBase = '';
    var _imgMask = '';
    var _imgSoldOut = '';
    var _imgTags = '';
    var _link_order = '';
    var _imgFewStock = '';

    var _num = 0;

    for (var i in data) {

        _imgBase = '';
        _imgMask = '';
        _imgSoldOut = '';
        _imgTags = '';
        _link_order = '';
        _imgFewStock = '';

        _num++;

        if (data[i]["image"] == "--") {
            /* 空きセル */
            source += (_num % 2 == 0) ? '<td></td></tr>' : '</tr>';
            source += '<tr><td colspan="3"><div><img style="padding-top:48px;" src="../common/imgs/subtitle_exhibition.gif" alt="FEATURED" width="750" height="26" /></div></td></tr><tr><td>';
            _num = 0;
            continue;
        }

        source += (_num % 2 == 1)
                ? ''
                + '<tr>'
                + '<td>'
                : '';

        _imgTags = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';

        _link_order = '<a href="../order/index.html?lst=' + data[i]["list_num"] + '" class="button_order">ご注文</a>';

        if (data[i]["soldout"] == "true") {
            _imgBase = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';
            _imgMask = '<img src="./imgs/sold_out_mask.png" alt="" width="150" height="' + data[i]["height"] + '" class="imgMask" />';
            _imgSoldOut = '<img src="./imgs/sold_out.png" alt="SOLD OUT" width="130" height="119" class="imgSoldOut" />';
            _imgTags = '<div class="noHeight">' + _imgBase + _imgMask + _imgSoldOut + '</div>';
            _link_order = '';
        } else if (data[i]["fewstock"] == "true") {
            _imgBase = '<img src="./imgs/' + data[i]["image"] + '" alt="' + data[i]["alt"] + '" width="150" height="' + data[i]["height"] + '" /><br />';
            _imgMask = '<img src="./imgs/few_stock_mask.png" alt="" width="150" height="' + data[i]["height"] + '" class="imgMask" />';
            _imgFewStock = '<img src="./imgs/few_stock.png" alt="Few Stock" width="130" height="119" class="imgSoldOut" />';
            _imgTags = '<div class="noHeight">' + _imgBase + _imgMask + _imgFewStock + '</div>';
        }

        source +=
                '<table class="contents">'
                + '<tr>'
                + '<td class="contentsL">'
                + _imgTags
                + '<div style="width: 47px; margin: 0 0 0 auto;">' + _link_order + '</div>'
                + '</td>'
                + '<td class="midSpace"><br /></td>'
                + '<td class="contentsR">'
                + '<div class="title">' + data[i]["title"] + '</div>'
                + '<div class="supervision">' + data[i]["supervision"] + '</div>'
                + '<div class="index">' + data[i]["index"] + '</div>'
                + '<div class="detail">'
                + data[i]["detail"]
                + '</div>'
                + '<div class="price">'
                + data[i]["price"]
                + '</div>'
                + '</td>'
                + '<td class="rightSpace"><br /></td>'
                + '</tr>'
                + '</table>'
                + '</td>';

        source += (_num % 2 != 0)
                ? ''
                + '<td class="space"><br /></td>'
                + ''
                + '<td>'
                : '</tr>'
                + '<tr>'
                + '<td colspan="3">'
                + '<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>'
                + '</td>'
                + '</tr>';

    }

    while (_num % 2 != 0) {
        /* 空セル生成 */
        _num++;

        source +=
                '<table class="contents">'
                + '<tr>'
                + '<td class="contentsL">'
                + '</td>'
                + '</tr>'
                + '</table>'
                + '</td>'
                + '<td class="rightSpace"><br /></td>'
                + '</tr>'
                + '<tr>'
                + '<td colspan="3">'
                + '<div class="tr_border"><img src="/common/imgs/spacer.gif" alt="" width="750" height="1" /></div>'
                + '</td>'
                + '</tr>';
    }

    source +=
            '<tr>'
            + '<td colspan="3"><div style="height: 30px;"><div class="pagetopLinkBlock" style="padding-top: 10px;"><a href="#banner" class="pagetopLink"></a></div></div></td>'
            + '</tr>';

    $("#book_list3").html(source);


    $("img.imgMask").each(function () {
        $(this).css({
            top: -$(this).height()
        });
    });

    $("img.imgSoldOut").each(function () {
        $(this).css({
            top: ($(this).siblings("img.imgMask").height() < $(this).height()) ? -$(this).siblings("img.imgMask").height() * 2 : -$(this).siblings("img.imgMask").height() - $(this).height()
        });
    });

    $(".noHeight").each(function () {
        $(this).height(Math.max($(this).children("img.imgMask").height(), $(this).children("img.imgSoldOut").height()));
    });

}


function newsCallback(data) {
    var source = '';

    for (var i in data) {
        source +=
                '<div class="newsContents">'
                + '<div class="newsDate">' + data[i]["newsDate"] + '</div>'
                + '<div class="newsTitle">' + data[i]["newsTitle"] + '</div>'
                + data[i]["contents"]
                + '</div>';
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
            if ((cmp = (c1 - c2)) != 0) {
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
                '<tr>'
                + '<td>'
                + arrList[j]["subtitle"]
                + '</td>'
                + '</tr>'
                + '';

        for (var i = 0; i < arguments[j].length; i++) {
            _num++;

            srcArray[j] += (_num % 2 == 1)
                    ? '<tr>'
                    + '<td>'
                    : '';

            var _imgTags = '<img src="./imgs/' + arguments[j][i]["image"] + '" alt="' + arguments[j][i]["alt"] + '" width="150" height="150" class="photo" /><br />';
            var _link_detail = '<a href="./' + arguments[j][i]["index"] + '.html" class="button_detail_architect">詳細はこちら→</a></div>';

            srcArray[j] +=
                    '<table class="contents">'
                    + '<tr>'
                    + '<td rowspan="2" class="contentsL">'
                    + _imgTags
                    + '</td>'
                    + '<td rowspan="2" class="midSpace"><br /></td>'
                    + '<td class="contentsRU">'
                    + '<div class="name">' + arguments[j][i]["name"] + '</div>'
                    + '<div class="roman">' + arguments[j][i]["roman"] + '</div>'
                    + '</td>'
                    + '<td rowspan="2" class="rightSpace"><br /></td>'
                    + '</tr>'
                    + '<tr>'
                    + '<td class="contentsRL">'
                    + _link_detail
                    + '</td>'
                    + '</tr>'
                    + '</table>'
                    + '</td>';

            srcArray[j] += (_num % 2 != 0)
                    ? '<td>' : '';
        }

        if (srcArray[j] != "") {
            while (_num % 2 != 0) {
                /* 空セル生成 */
                _num++;

                srcArray[j] +=
                        '<table class="contents">'
                        + '<tr>'
                        + '<td class="contentsL">'
                        + '</td>'
                        + '</tr>'
                        + '</table>'
                        + '</td>'
                        + '<td class="rightSpace"><br /></td>'
                        + '</tr>';
            }

            srcArray[j] +=
                    '<tr>'
                    + '<td colspan="2"><div style="height: 30px;"><div class="pagetopLinkBlock"><a href="#banner" class="pagetopLink"></a></div></div></td>'
                    + '</tr>';
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
    $("img.photo").error(function () {
        $(this).attr("src", "./imgs/dummy.jpg");
    });
}
