<!--
// class zprice で囲まれた金額を10％税込で計算し、表示を変更する
// <span class="zprice">定価　2,200円（税込）</span>
// <span class="zprice">定価　2,200円（税込）</span>
-->

$(function () {

         $(".zprice").each(function (i, o) {
            var $s='',$r='';
            var $n=0;
            $s = $(o).text();
            $n = parseInt($s.replace(/[^0-9]/g, ''));
            $n = parseInt($n * 1.1);
            $r = "定価　" + $n.toLocaleString() + "円（税込）";
            $(o).text($r);
//            console.log($r);
         });

         // 数字のみ
         $(".zpricen").each(function (i, o) {
            var $s='',$r='';
            var $n=0;
            $s = $(o).text();
            $n = parseInt($s.replace(/[^0-9]/g, ''));
            $n = parseInt($n * 1.1);
            $r = $n.toLocaleString();
            $(o).text($r);
//            console.log($r);
         });

});
