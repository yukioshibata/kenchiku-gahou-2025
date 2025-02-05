#!/usr/bin/perl

#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
#\\  Creation company : WEB service DIC (ウェブサービス ディック)
#\\  produce by Manabu_Kimura
#\\  http://www.d-ic.com/
#\\  DIC-Studio. CsvMail_v4 Version:1.62 (2004/02/29)
#\\  Copyright (C) DIC All Rights Reserved. このスクリプトの再配布などを禁止します.
#\\  バグ報告は studio@d-ic.com 宛にお願いします。
#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

##*****<< 設置方法 >>******************************************************************************
##
## ※ＣＧＩファイルの初期設定をお使いの環境に合わせてカスタマイズしてください。
## ※お使いのサーバによっては下のファイル構成では動作しない場合があります。
##   その際はサーバ管理者にお問い合わせください。
## ※"[]"内の数字はパーミッションです。
## ※"form.html"は、同梱の"sample.html"を参考に作成してください。
## ※ＣＳＶエディターを起動させるには、edit.cgiにアクセスしてください。
##
## public_html/
##  |         form.html
##  |
##  +-- cgi-bin/
##       |
##       +-- csvmail_v4/
##               |      mail.cgi	[755]	メール送信本体ＣＧＩ
##               |      jcode.pl
##               |      stdio.pl
##               |      check.html
##               |      thanks.html
##               |      title.gif
##               |      remail.txt
##               |
##               +-- data/			[777]
##               |      data.cgi	[666]
##               |
##               +-- lock/			[777]
##
##*****<< バージョンアップ情報 >>******************************************************************
##
## 2004/02/29 .....Ver1.62
##   ・送信日時をCSVファイルに記述するように機能追加。
##
## 2003/07/11 .....Ver1.6
##   ・入力フォームにてEmailを省略した場合エラーを起こすバグを修正。
##
## 2003/06/02 .....Ver1.50
##   ・フォームのページで 必須項目、送信完了ページ、送信先、件名 を指定できるように修正。
##   ・送信完了時に任意のページへジャンプできるように機能追加。（テンプレートとして読み込むのではなく、ジャンプするように修正）
##   ・テンプレートＨＴＭＬなどの細かい修正
##
## 2003/02/15 .....Ver1.40
##   ・ラジオボタン、チェックボックスを使用した際の、ＣＳＶファイルのデータのずれを修正しました。
##   ・自動返信関係の記述間違いを修正
##
## 2002/12/12 .....Ver1.30
##   ・送信後にホームページに戻れるようにリンクを貼る機能を追加
##   ・テンプレートＨＴＭＬなどの細かい修正
##
## 2002/10/03 .....Ver1.20
##   ・テンプレートＨＴＭＬなどの細かい修正
##
##*************************************************************************************************


##=====================================
##           初期設定部分             =
##=====================================

# sendmailのパス
$sendmail = '/usr/sbin/sendmail';

# テンプレート（自動返信メールの本文）
$remail_txt = './remail.txt';

# テンプレートＨＴＭＬ（入力確認用）
$template1 = '../check.html';

# 確認画面のテーブルデザイン
$tablewidth = '590';		# テーブルの横幅
$bgcolor1 = '#F2F2F2';		# 項目の色
$bgcolor2 = '#FFFFFF';		# 内容の色
$border = '1';				# 枠線の太さ（なし=0）
$bordercolor = '#999999';	# 枠線の色
$cellpadding = '8';			# cellpadding

# データを保存しておくCSVファイル
# データの漏洩を防ぐ為にCSV形式で保存しますが、拡張子は".cgi"に設定します。
# ローカルＰＣでデータを編集する際には、ダウンロード後に拡張子を".csv"に変えてください。
$csvfile = './data/data.cgi';

# ロックディレクトリ
$lock = './lock/';

# 時差（グリニッジ標準時＝英国ロンドン）を秒単位で指定
$time_difference = '32400';



##=====================================
## サブルーチン                       =
##=====================================
require './jcode.pl';
require './stdio.pl';



#□□□□□□□□□□□□ ここから下を修正した場合にはサポート対象外になります。ご注意ください。 □□□□□□□□□□□

##=====================================
## データを受け取る                   =
##=====================================
%param = ();
@key_list = stdio::getFormData(\%param,0,sjis,1," \/ ",);


##=====================================
## 変数にセット
##=====================================
if(!$param{'to'}){ &error('システムエラー','送信先Ｅメールが指定されておりません。'); }
$mailaddress = $param{'to'};

if(!$param{'subject'}){ &error('システムエラー','Subjectが指定されておりません。'); }
$subject = $param{'subject'};

if(!$param{'subject_sys'}){ &error('システムエラー','subject_sysが指定されておりません。'); }
$subject_sys = $param{'subject_sys'};

if($param{'thanks_page'}){ $thank_page = $param{'thanks_page'}; }



#□□□□□□□□□□□□□□□□□□□ モード指定 "なし" □□□□□□□□□□□□□□□□□□□□□□□
if(!$param{'mode'}){
##=====================================
## 必須項目の入力チェック             =
##=====================================
$necessary = $param{'necessary_k'};

if ($param{'お客様種別'} eq 'dic_dummy / 法人') {
	$necessary = $param{'necessary_h'};
}

@hissu1 = split(/\,/,$necessary);
foreach(@hissu1){
	if (!$param{$_}) {
		if ($_ eq '個人_お名前') {
			$err_idx = 'お名前';
		} elsif ($_ eq '個人_住所1') {
			$err_idx = 'お届け先住所';
		} elsif ($_ eq '個人_TEL') {
			$err_idx = 'お届け先電話番号';
		} elsif ($_ eq '個人_MAIL') {
			$err_idx = 'e-mail';
		} elsif ($_ eq '法人_会社名') {
			$err_idx = '会社名';
		} elsif ($_ eq '法人_ご担当者名') {
			$err_idx = 'ご担当者名';
		} elsif ($_ eq '法人_住所1') {
			$err_idx = '住所';
		} elsif ($_ eq '法人_TEL') {
			$err_idx = '電話番号';
		} elsif ($_ eq '法人_MAIL') {
			$err_idx = 'e-mail';
		}

		$hissu_check .= '・ '.$err_idx.'<br>';
	}
}
if($hissu_check) {
	&error('入力エラー',"以下の必須項目に入力がありませんでした。<br><br>$hissu_check");
}


#=====================================
# Eメール入力のチェック              =
#=====================================
if (($param{'お客様種別'} eq 'dic_dummy / 個人') && ($param{'個人_郵便番号1'})) {
	if($param{'個人_郵便番号1'} =~ /^\d{0,10}/){ ; }
	else{ &error('入力エラー','郵便番号の入力を間違えています。<br>半角数字を使用してください。'); }
}

if (($param{'お客様種別'} eq 'dic_dummy / 個人') && ($param{'個人_郵便番号2'})) {
	if($param{'個人_郵便番号2'} =~ /^\d{0,11}/){ ; }
	else{ &error('入力エラー','郵便番号の入力を間違えています。<br>半角数字を使用してください。'); }
}

if (($param{'お客様種別'} eq 'dic_dummy / 個人') && ($param{'個人_TEL'})) {
	if($param{'個人_TEL'} =~ /^(\d+-?)+$/){ ; }
	else{ &error('入力エラー','お届け先電話番号の入力を間違えています。<br>半角数字を使用してください。'); }
}

if (($param{'お客様種別'} eq 'dic_dummy / 法人') && ($param{'法人_郵便番号1'})) {
	if($param{'法人_郵便番号1'} =~ /^\d{0,10}/){ ; }
	else{ &error('入力エラー','郵便番号の入力を間違えています。<br>半角数字を使用してください。'); }
}

if (($param{'お客様種別'} eq 'dic_dummy / 法人') && ($param{'法人_郵便番号2'})) {
	if($param{'法人_郵便番号2'} =~ /^\d{0,11}/){ ; }
	else{ &error('入力エラー','郵便番号の入力を間違えています。<br>半角数字を使用してください。'); }
}

if (($param{'お客様種別'} eq 'dic_dummy / 法人') && ($param{'法人_TEL'})) {
	if($param{'法人_TEL'} =~ /^(\d+-?)+$/){ ; }
	else{ &error('入力エラー','電話番号の入力を間違えています。<br>半角数字を使用してください。'); }
}

if (($param{'お客様種別'} eq 'dic_dummy / 個人') && ($param{'個人_MAIL'})) {
	if($param{'個人_MAIL'} =~ /^\S+@\S+\.\S+/){ ; }
	else{ &error('入力エラー','Eメールアドレスの入力を間違えています。'); }
	if($param{'個人_MAIL'} =~ /Ａ|Ｂ|Ｃ|Ｄ|Ｅ|Ｆ|Ｇ|Ｈ|Ｉ|Ｊ|Ｋ|Ｌ|Ｍ|Ｎ|Ｏ|Ｐ|Ｑ|Ｒ|Ｓ|Ｔ|Ｕ|Ｖ|Ｗ|Ｘ|Ｙ|Ｚ/){ &error('入力エラー',"Eメールアドレスの入力が間違えています。<br>半角英数字を使用してください。"); }
	if($param{'個人_MAIL'} =~ /ａ|ｂ|ｃ|ｄ|ｅ|ｆ|ｇ|ｈ|ｉ|ｊ|ｋ|ｌ|ｍ|ｎ|ｏ|ｐ|ｑ|ｒ|ｓ|ｔ|ｕ|ｖ|ｗ|ｘ|ｙ|ｚ/){ &error('入力エラー',"Eメールアドレスの入力が間違えています。<br>半角英数字を使用してください。"); }
}

if (($param{'お客様種別'} eq 'dic_dummy / 法人') && ($param{'法人_MAIL'})) {
	if($param{'法人_MAIL'} =~ /^\S+@\S+\.\S+/){ ; }
	else{ &error('入力エラー','Eメールアドレスの入力を間違えています。'); }
	if($param{'法人_MAIL'} =~ /Ａ|Ｂ|Ｃ|Ｄ|Ｅ|Ｆ|Ｇ|Ｈ|Ｉ|Ｊ|Ｋ|Ｌ|Ｍ|Ｎ|Ｏ|Ｐ|Ｑ|Ｒ|Ｓ|Ｔ|Ｕ|Ｖ|Ｗ|Ｘ|Ｙ|Ｚ/){ &error('入力エラー',"Eメールアドレスの入力が間違えています。<br>半角英数字を使用してください。"); }
	if($param{'法人_MAIL'} =~ /ａ|ｂ|ｃ|ｄ|ｅ|ｆ|ｇ|ｈ|ｉ|ｊ|ｋ|ｌ|ｍ|ｎ|ｏ|ｐ|ｑ|ｒ|ｓ|ｔ|ｕ|ｖ|ｗ|ｘ|ｙ|ｚ/){ &error('入力エラー',"Eメールアドレスの入力が間違えています。<br>半角英数字を使用してください。"); }
}


##=====================================
## 特殊記号を変換する                 =
##=====================================
foreach (@key_list) {
	$param{$_} =~ s/&/&amp;/g;
	$param{$_} =~ s/"/&quot;/g;
	$param{$_} =~ s/</&lt;/g;
	$param{$_} =~ s/>/&gt;/g;
	$param{$_} =~ s/,/、/g;
	$param{$_} =~ s/'/&quot;/g;
	$param{$_} =~ s/\n/<br>/g;
}


##=====================================
## 入力確認画面の一部                 =
##=====================================
foreach(@key_list){
	if($_ eq $key){ next; }
	elsif($_ eq 'necessary_k'){ $mail_table .= qq|<input type="hidden" name="necessary_k" value="$param{'necessary_k'}">|; next; }
	elsif($_ eq 'necessary_h'){ $mail_table .= qq|<input type="hidden" name="necessary_h" value="$param{'necessary_h'}">|; next; }
	elsif($_ eq 'thanks_page'){ $mail_table .= qq|<input type="hidden" name="thanks_page" value="$param{'thanks_page'}">|; next; }
	elsif($_ eq 'to'){ $mail_table .= qq|<input type="hidden" name="to" value="$param{'to'}">|; next; }
	elsif($_ eq 'subject'){ $mail_table .= qq|<input type="hidden" name="subject" value="$param{'subject'}">|; next; }
	elsif($_ eq 'subject_sys'){ $mail_table .= qq|<input type="hidden" name="subject_sys" value="$param{'subject_sys'}">|; next; }
	elsif($_ eq 'submit'){ next; }

	if ($param{'お客様種別'} eq 'dic_dummy / 個人') {
		if($_ =~ /^法人_/){ next; }
	}
	elsif ($param{'お客様種別'} eq 'dic_dummy / 法人') {
		if($_ =~ /^個人_/){ next; }
	}

	if($param{$_}){
		$dummy = '0';
		@val2 = ();
		@val = split(/\s\/\s/,$param{$_});
		foreach(@val){
			if($_ eq 'dic_dummy'){
				$_ = '';
				$dummy = '1';
			}else{ push(@val2,$_); }
		}
		if($dummy){
			$param = join " \/ ", @val2;
			if(!$param){ $param = '　'; }
		}
		else{
			$param = $param{$_};
		}
	}
	else{ $param = ''; }
	$mail_table .= "<tr><td bgcolor='$bgcolor1' style='width: 200px; padding: 0 3px;'>$_</td><td bgcolor='$bgcolor2'><div class='wordBreak'>$param</div><input type='hidden' name='$_' value='$param'></td></tr>\n";
	$key = $_;
}

$mail = qq|
<input type="hidden" name="mode" value="mailsend">
<table width="$tablewidth" cellpadding="0" cellspacing="0">
 <tr>
  <td bgcolor="$bordercolor">
   <table border="0" cellpadding="$cellpadding" cellspacing="$border" width="100%">
   $mail_table
   </table>
  </td>
 </tr>
</table>
|;


##=====================================
## 確認テンプレートファイルをオープン =
##=====================================
if(!open(HTML,$template1)){ &error('システムエラー',"テンプレートファイル ( $template1 ) がオープンできません。");}
@html = <HTML>;
close(HTML);


##=====================================
## 特殊文字を置き換え                 =
##=====================================
foreach(@html){
	if($_ =~ /_%copyright%_/){ $flag = '1'; }
}
if(!$flag){ &error('システムエラー','著作権表示が削除されています。'); }

$dic = qq|<div align="right" class="copyright">- <a href="http://www.d-ic.com/" target="_top">メール送信プログラム： DIC-Studio</a> -</div>|;
foreach(@html){
	s/_%mail%_/$mail/g;
	s/_%Email%_/$mailaddress/g;
	s/_%copyright%_/$dic/g;
}


##=====================================
## 確認画面表示                       =
##=====================================
print <<"EOF";
Content-type: text/html

@html
EOF
exit;
}	# モード指定 なし ここまで





#□□□□□□□□□□□□□□□□□□□ モード指定 "mailsend" □□□□□□□□□□□□□□□□□□□□□□□
if($param{'mode'} eq 'mailsend'){
##=====================================
## 特殊記号をもとにもどす             =
##=====================================
foreach (@key_list) {
	$param{$_} =~ s/&amp;/&/g;
	$param{$_} =~ s/&quot;/"/g;
	$param{$_} =~ s/&lt;/</g;
	$param{$_} =~ s/&gt;/>/g;
	$param{$_} =~ s/<br>//g;
}


##=====================================
## CSVファイルに書き込み              =
##=====================================
$nowtime = stdio::getTime("yyyy/mm/dd (ww2) hh:nn:ss", $time_difference);
$newdata = "$nowtime,";

if(!stdio::lock($lock)){ error('システムエラー','只今混み合っております.'); }	# ロック
if(!open(CSV,"+<$csvfile")){ stdio::unlock($lock); &error('システムエラー',"CSVファイル ( $csvfile ) をオープンできませんでした。"); }
@csv = <CSV>;

foreach(@key_list){
	if($_ eq 'mode'){ next; }
	elsif($_ eq 'necessary_k'){ next; }
	elsif($_ eq 'necessary_h'){ next; }
	elsif($_ eq 'thanks_page'){ next; }
	elsif($_ eq 'to'){ next; }
	elsif($_ eq 'subject'){ next; }
	elsif($_ eq 'subject_sys'){ next; }
	$param{$_} =~ s/dic_dummy;//g;
	$param{$_} =~ s/dic_dummy//g;
	$newdata .= $param{$_}.",";
	if($_ eq $key_list[-1]){ $newdata .= "\n"; }
}
push(@csv,$newdata);

seek(CSV,0,0);
print CSV @csv;
truncate(CSV,tell(CSV));
close(CSV);
stdio::unlock($lock);	# アンロック


##=====================================
## メール本文                         =
##=====================================
## システムに送信されるメール本文
$mailbody = "";

## 書籍表示用
@sys_books = ();
$sys_books[0] = "";

foreach(@key_list){
	if($_ eq 'mode'){ next; }
	elsif($_ eq 'necessary_k'){ next; }
	elsif($_ eq 'necessary_h'){ next; }
	elsif($_ eq 'thanks_page'){ next; }
	elsif($_ eq 'to'){ next; }
	elsif($_ eq 'subject'){ next; }

	## 自動返信用
	$remailbody .= "\n■$_\n$param{$_}\n";

	if ($_ eq '個人_お名前') {
		if ($param{$_} ne '') {
			$order_name = $param{$_};
		}
	} elsif ($_ eq '法人_会社名') {
		if ($param{$_} ne '') {
			$order_name = $param{$_};
		}
	}

	if ($_ eq '法人_ご担当者名') {
		if ($param{$_} ne '') {
			$order_name .= "\n".$param{$_};
		}
	}

	## システム用
##	$mailbody .= "■$_\n$param{$_}\n\n";

	if ($_ =~ /ご注文日/) {
		$sys_orderdate = $param{$_};

	} elsif ($_ =~ /お客様種別/) {
		$sys_kind = $param{$_};

	} elsif ($_ =~ /郵便番号1/) {
		$sys_yubin_pre = $param{$_};

	} elsif ($_ =~ /郵便番号2/) {
		$sys_yubin_aft = $param{$_};

	} elsif ($_ =~ /都道府県$/) {
		$sys_capital = $param{$_};

	} elsif ($_ =~ /住所([0-9]{1,2})/) {
		if ($param{$_} ne "") {
			$sys_address .= '　'.$param{$_};
		}

	} elsif ($_ =~ /TEL$/) {
		$sys_telnum = $param{$_};

	} elsif ($_ =~ /MAIL$/) {
		if ($param{$_}) {
			$sys_mail = $param{$_};
		} else {
			$sys_mail = '(no input Email)';
		}

	} elsif ($_ =~ /書籍([0-9]{1,2})$/) {
		if ($param{$_} ne "") {
			$idx = $1 + 0;
			$sys_books[$idx] .= $param{$_};
		}

	} elsif ($_ =~ /([0-9]{1,2})のご注文冊数$/) {
		if ($param{$_} != 0) {
			$idx = $1 + 0;
			$sys_books[$idx] .= "　".$param{$_}."冊\n";
		}

	} elsif ($_ =~ /建築画報定期購読開始号/) {
		$sys_start = $param{$_};

	} elsif ($_ =~ /その他連絡事項/) {
		$sys_renraku = $param{$_};
	}
}

## システム用体裁調整
	if ($sys_start) {
		$sys_parts = "■建築画報定期購読開始号\n".$sys_start;
	} else {
		for ($ii = 1; $ii <= $#sys_books + 1; $ii++) {
			$sys_books_all .= $sys_books[$ii];
		}

		$sys_parts = "■申\し込み書籍\n".$sys_books_all;
	}


$mailbody .=
	"========================================\n".
	"$subject_sys\n".
	"========================================\n\n".
	"■ご注文日\n".$sys_orderdate."\n\n".
	"■お客様種別\n".$sys_kind."\n\n".
	"■お名前\n".$order_name."\n\n".
	"■住所\n〒".$sys_yubin_pre."－".$sys_yubin_aft."\n".$sys_capital.$sys_address."\n\n".
	"■電話番号\n".$sys_telnum."\n\n".
	"■Eメール\n".$sys_mail."\n\n".
	"$sys_parts\n\n".
	"■その他連絡事項\n".$sys_renraku."\n";



##=====================================
## システムメール送信                 =
##=====================================
## この時点で dic_dummyは削除されている

if ($param{'お客様種別'} eq '個人') {
	$mailfrom = $param{'個人_MAIL'};
} elsif ($param{'お客様種別'} eq '法人') {
	$mailfrom = $param{'法人_MAIL'};
}

if (!$mailfrom) {
	$mailfrom = '(no input Email)';
}

%header = (
    'To'      => $mailaddress,
    'From'    => $mailfrom,
    'Subject' => qq|■$subject_sys■|
);
$result = stdio::sendmail($sendmail, \%header, $mailbody, 0, 0,);
if(!$result){ &error('システムエラー',"メールの送信に失敗しました。"); }


##=====================================
## 自動返信メールのテンプレートを開く =
##=====================================
if(!open(TXT,$remail_txt)){ &error('システムエラー',"ファイル ( $remail_txt ) がオープンできません。"); }
@txt = <TXT>;
close(TXT);

foreach(@txt){
	s/_%remail_body%_/$remailbody/g;
	s/_%order_name%_/$order_name/g;
	$re_mailbody .= $_;
}

##=====================================
## 自動返信メールの送信               =
##=====================================
if($mailfrom ne '(no input Email)'){

$now_times = time();
($now_mday, $now_month, $now_year) = (localtime($now_times))[3..5];
$now_year += 1900;
$now_month += 1;
$re_subject = $subject."_".sprintf("%04d%02d%02d", $now_year, $now_month, $now_mday);

%header = (
    'To'      => $mailfrom,
    'From'    => $mailaddress,
    'Subject' => $re_subject
);
$result = stdio::sendmail($sendmail, \%header,$re_mailbody, 0, 0,);
if(!$result){ &error('システムエラー',"メールの送信に失敗しました。"); }
}

##=====================================
## メール送信完了表示                 =
##=====================================
if($thank_page){
	print "Location: $thank_page\n\n";
}else{
	print <<"EOF";
Content-type: text/html

<html>
<head>
<title>送信完了</title>
<meta http-equiv="Content-Type" content="text/html; charset=Shift_JIS">
</head>
<body>
<h2>送信完了</h2>
ご記入されたものは<a href="mailto:$mailaddress">$mailaddress</a>宛てに電子メールされました。<br>
<br>
<br>
<a href="javascript:history.go(-2)">戻る</a>
</body>
</html>
EOF
exit;
}
}	# モード指定 mailsend ここまで





##=====================================
## エラー表示                         =
##=====================================
sub error {
print <<"END";
Content-type: text/html

<html><head><title>!ERROR!</title>
<meta http-equiv="Content-Type" content="text/html; charset=Shift_JIS">
<style type="text/css">
<!--
td {  font-size: 14px}
a {  color: #003399}
a:hover {  color: #CC0000}
-->
</style>
</head>
<body bgcolor="#FFFFFF" text="#000000">
<table width="500" border="2" bordercolor="#CC0000" cellpadding="3" cellspacing="0" align="center">
 <tr>
  <td bgcolor="#CC0000"><font color="#FFFFFF"><b>$_[0]</b></font></td>
 </tr>
 <tr>
  <td>
   <br>
   <blockquote>
    <b>$_[1]</b>
    <p><a href="JavaScript:history.back()">こちらをクリックして前の画面に移動してください。</a>
   </blockquote>
  </td>
 </tr>
</table>
</body></html>
END
exit;
}
