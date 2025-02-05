/* 本の詳細 */

$(document).ready(function(){

var book400 = function() {
  /* 画像名称 小 */		this.imgname='400.jpg';
  /* 画像名称 大 */		this.imgname2='400l.jpg';
  /* 本タイトル */		this.title='カーボンニュートラル、その先へ...';
  /* サブタイトル */	this.subtitle='ZEB/ZEH-M特集　izumi CONSULTING';
  /* 紹介テキスト */	this.texts='　建築業界の今を伝える建築画報、2025年初頭のテーマは「ZEB/ZEH-M」。カーボンニュートラルへの通過点にあり、環境施策が叫ばれる現在、建物のZEB/ZEH-M化がいかなる様相を呈しているのか、ZEB/ZEH-Mが建築の手法として時代の要請をどのように叶えつつあるのか、その実例を見ていく一冊。';
  /* 紹介テキスト長 */	this.textl=this.texts+'2023年に50周年を迎えたイズミコンサルティングの関わった実例から、設計、設備、施工、さらには建築主、事業主などの協力をもとに30有余のプロジェクト詳細を掲載する。　<br><br>';
  /* 本情報 */			this.attr='Architectural Focus 400, 2025 01<br />建築画報 No.400<br />発刊　2025年1月23日<br />本文　144ページ<br />仕様　A4変形判/オールカラー<br />定価　4,180円（税込）<br />ISBN　978-4-909154-30-9　C9452<br /><br />';
  /* 目次 */            this.listindex='/back_number/list/index400.html';
};   
      
var book0 = function() {
  this.imgname='comingsoon.jpg';
  this.imgname2='comingsoon.jpg';
  this.title=' ';
  this.subtitle='';
  this.texts='';
  this.textl='';
  this.attr='';
};

/* ここで、書籍を設定する */

var comingsoon = new book0();
var nowon = new book400();

$('#ComingsoonImage').html('<img src="/back_number/imgs/' + comingsoon.imgname + '" class="shadow" alt="coming soon" width="240" /><br />');
var striptitle=comingsoon.title.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
$('#ComingsoonImage2').html('<a href="/back_number/imgs/' + comingsoon.imgname2 + '" data-lightbox="' + striptitle + '"  data-title="' + striptitle + '"> <img src="/back_number/imgs/' + comingsoon.imgname + '" alt="coming soon" class="shadow" width="246" /></a><br />');
$('#ComingsoonTitle').html(comingsoon.title);
$('#ComingsoonSubTitle').html(comingsoon.subtitle);
$('#ComingsoonTextS').html(comingsoon.texts);
$('#ComingsoonTextL').html(comingsoon.textl);
$('#ComingsoonAttr').html(comingsoon.attr);

$('#NowOnImage').html('<img class="shadow" src="/back_number/imgs/' + nowon.imgname + '" alt="NowOnSale" width="246" /><br />');
$('#NowOnImage2').html('<img class="shadow" src="/back_number/imgs/' + nowon.imgname + '" alt="NowOnSale" width="246" /><br />');
striptitle=nowon.title.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
$('#NowOnImage2').html('<a href="/back_number/imgs/' + nowon.imgname2 + '" data-lightbox="' + striptitle + '"  data-title="' + striptitle + '"> <img class="shadow" src="/back_number/imgs/' + nowon.imgname + '" alt="' + striptitle + '" width="246" /></a><br />');

$('#NowOnTitle').html(nowon.title);
$('#NowOnSubTitle').html(nowon.subtitle);
$('#NowOnTextS').html(nowon.texts);
$('#NowOnTextL').html(nowon.textl);
$('#NowOnAttr').html(nowon.attr);

if( typeof(nowon2) != "undefined" ){ //
  $('#NowOnImage2').html('<img class="shadow" src="/back_number/imgs/' + nowon2.imgname + '" alt="NowOnSale" width="246" /><br />');
  $('#NowOnTitle2').html(nowon2.title);
  $('#NowOnSubTitle2').html(nowon2.subtitle);
  $('#NowOnTextS2').html(nowon2.texts);
  $('#NowOnTextL2').html(nowon2.textl);
  $('#NowOnAttr2').html(nowon2.attr);
  $('#NowOn2').css('display','block');
}

if( typeof(nowon.listindex) != "undefined" ){
  $("#listindex").load(nowon.listindex);
}

if( typeof(comingsoon.listindex) != "undefined" ){
  $("#nextindex").load(comingsoon.listindex);
}


});