#!/usr/bin/perl

#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
#\\  Creation company : WEB service DIC (�E�F�u�T�[�r�X �f�B�b�N)
#\\  produce by Manabu_Kimura
#\\  http://www.d-ic.com/
#\\  DIC-Studio. CsvMail_v4 Version:1.62 (2004/02/29)
#\\  Copyright (C) DIC All Rights Reserved. ���̃X�N���v�g�̍Ĕz�z�Ȃǂ��֎~���܂�.
#\\  �o�O�񍐂� studio@d-ic.com ���ɂ��肢���܂��B
#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

##*****<< �ݒu���@ >>******************************************************************************
##
## ���b�f�h�t�@�C���̏����ݒ�����g���̊��ɍ��킹�ăJ�X�^�}�C�Y���Ă��������B
## �����g���̃T�[�o�ɂ���Ă͉��̃t�@�C���\���ł͓��삵�Ȃ��ꍇ������܂��B
##   ���̍ۂ̓T�[�o�Ǘ��҂ɂ��₢���킹���������B
## ��"[]"���̐����̓p�[�~�b�V�����ł��B
## ��"form.html"�́A������"sample.html"���Q�l�ɍ쐬���Ă��������B
## ���b�r�u�G�f�B�^�[���N��������ɂ́Aedit.cgi�ɃA�N�Z�X���Ă��������B
##
## public_html/
##  |         form.html
##  |
##  +-- cgi-bin/
##       |
##       +-- csvmail_v4/
##               |      mail.cgi	[755]	���[�����M�{�̂b�f�h
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
##*****<< �o�[�W�����A�b�v��� >>******************************************************************
##
## 2004/02/29 .....Ver1.62
##   �E���M������CSV�t�@�C���ɋL�q����悤�ɋ@�\�ǉ��B
##
## 2003/07/11 .....Ver1.6
##   �E���̓t�H�[���ɂ�Email���ȗ������ꍇ�G���[���N�����o�O���C���B
##
## 2003/06/02 .....Ver1.50
##   �E�t�H�[���̃y�[�W�� �K�{���ځA���M�����y�[�W�A���M��A���� ���w��ł���悤�ɏC���B
##   �E���M�������ɔC�ӂ̃y�[�W�փW�����v�ł���悤�ɋ@�\�ǉ��B�i�e���v���[�g�Ƃ��ēǂݍ��ނ̂ł͂Ȃ��A�W�����v����悤�ɏC���j
##   �E�e���v���[�g�g�s�l�k�Ȃǂׂ̍����C��
##
## 2003/02/15 .....Ver1.40
##   �E���W�I�{�^���A�`�F�b�N�{�b�N�X���g�p�����ۂ́A�b�r�u�t�@�C���̃f�[�^�̂�����C�����܂����B
##   �E�����ԐM�֌W�̋L�q�ԈႢ���C��
##
## 2002/12/12 .....Ver1.30
##   �E���M��Ƀz�[���y�[�W�ɖ߂��悤�Ƀ����N��\��@�\��ǉ�
##   �E�e���v���[�g�g�s�l�k�Ȃǂׂ̍����C��
##
## 2002/10/03 .....Ver1.20
##   �E�e���v���[�g�g�s�l�k�Ȃǂׂ̍����C��
##
##*************************************************************************************************


##=====================================
##           �����ݒ蕔��             =
##=====================================

# sendmail�̃p�X
$sendmail = '/usr/sbin/sendmail';

# �e���v���[�g�i�����ԐM���[���̖{���j
$remail_txt = './remail.txt';

# �e���v���[�g�g�s�l�k�i���͊m�F�p�j
$template1 = '../check.html';

# �m�F��ʂ̃e�[�u���f�U�C��
$tablewidth = '590';		# �e�[�u���̉���
$bgcolor1 = '#F2F2F2';		# ���ڂ̐F
$bgcolor2 = '#FFFFFF';		# ���e�̐F
$border = '1';				# �g���̑����i�Ȃ�=0�j
$bordercolor = '#999999';	# �g���̐F
$cellpadding = '8';			# cellpadding

# �f�[�^��ۑ����Ă���CSV�t�@�C��
# �f�[�^�̘R�k��h���ׂ�CSV�`���ŕۑ����܂����A�g���q��".cgi"�ɐݒ肵�܂��B
# ���[�J���o�b�Ńf�[�^��ҏW����ۂɂ́A�_�E�����[�h��Ɋg���q��".csv"�ɕς��Ă��������B
$csvfile = './data/data.cgi';

# ���b�N�f�B���N�g��
$lock = './lock/';

# �����i�O���j�b�W�W�������p�������h���j��b�P�ʂŎw��
$time_difference = '32400';



##=====================================
## �T�u���[�`��                       =
##=====================================
require './jcode.pl';
require './stdio.pl';



#������������������������ �������牺���C�������ꍇ�ɂ̓T�|�[�g�ΏۊO�ɂȂ�܂��B�����ӂ��������B ����������������������

##=====================================
## �f�[�^���󂯎��                   =
##=====================================
%param = ();
@key_list = stdio::getFormData(\%param,0,sjis,1," \/ ",);


##=====================================
## �ϐ��ɃZ�b�g
##=====================================
if(!$param{'to'}){ &error('�V�X�e���G���[','���M��d���[�����w�肳��Ă���܂���B'); }
$mailaddress = $param{'to'};

if(!$param{'subject'}){ &error('�V�X�e���G���[','Subject���w�肳��Ă���܂���B'); }
$subject = $param{'subject'};

if(!$param{'subject_sys'}){ &error('�V�X�e���G���[','subject_sys���w�肳��Ă���܂���B'); }
$subject_sys = $param{'subject_sys'};

if($param{'thanks_page'}){ $thank_page = $param{'thanks_page'}; }



#�������������������������������������� ���[�h�w�� "�Ȃ�" ����������������������������������������������
if(!$param{'mode'}){
##=====================================
## �K�{���ڂ̓��̓`�F�b�N             =
##=====================================
$necessary = $param{'necessary_k'};

if ($param{'���q�l���'} eq 'dic_dummy / �@�l') {
	$necessary = $param{'necessary_h'};
}

@hissu1 = split(/\,/,$necessary);
foreach(@hissu1){
	if (!$param{$_}) {
		if ($_ eq '�l_�����O') {
			$err_idx = '�����O';
		} elsif ($_ eq '�l_�Z��1') {
			$err_idx = '���͂���Z��';
		} elsif ($_ eq '�l_TEL') {
			$err_idx = '���͂���d�b�ԍ�';
		} elsif ($_ eq '�l_MAIL') {
			$err_idx = 'e-mail';
		} elsif ($_ eq '�@�l_��Ж�') {
			$err_idx = '��Ж�';
		} elsif ($_ eq '�@�l_���S���Җ�') {
			$err_idx = '���S���Җ�';
		} elsif ($_ eq '�@�l_�Z��1') {
			$err_idx = '�Z��';
		} elsif ($_ eq '�@�l_TEL') {
			$err_idx = '�d�b�ԍ�';
		} elsif ($_ eq '�@�l_MAIL') {
			$err_idx = 'e-mail';
		}

		$hissu_check .= '�E '.$err_idx.'<br>';
	}
}
if($hissu_check) {
	&error('���̓G���[',"�ȉ��̕K�{���ڂɓ��͂�����܂���ł����B<br><br>$hissu_check");
}


#=====================================
# E���[�����͂̃`�F�b�N              =
#=====================================
if (($param{'���q�l���'} eq 'dic_dummy / �l') && ($param{'�l_�X�֔ԍ�1'})) {
	if($param{'�l_�X�֔ԍ�1'} =~ /^\d{0,10}/){ ; }
	else{ &error('���̓G���[','�X�֔ԍ��̓��͂��ԈႦ�Ă��܂��B<br>���p�������g�p���Ă��������B'); }
}

if (($param{'���q�l���'} eq 'dic_dummy / �l') && ($param{'�l_�X�֔ԍ�2'})) {
	if($param{'�l_�X�֔ԍ�2'} =~ /^\d{0,11}/){ ; }
	else{ &error('���̓G���[','�X�֔ԍ��̓��͂��ԈႦ�Ă��܂��B<br>���p�������g�p���Ă��������B'); }
}

if (($param{'���q�l���'} eq 'dic_dummy / �l') && ($param{'�l_TEL'})) {
	if($param{'�l_TEL'} =~ /^(\d+-?)+$/){ ; }
	else{ &error('���̓G���[','���͂���d�b�ԍ��̓��͂��ԈႦ�Ă��܂��B<br>���p�������g�p���Ă��������B'); }
}

if (($param{'���q�l���'} eq 'dic_dummy / �@�l') && ($param{'�@�l_�X�֔ԍ�1'})) {
	if($param{'�@�l_�X�֔ԍ�1'} =~ /^\d{0,10}/){ ; }
	else{ &error('���̓G���[','�X�֔ԍ��̓��͂��ԈႦ�Ă��܂��B<br>���p�������g�p���Ă��������B'); }
}

if (($param{'���q�l���'} eq 'dic_dummy / �@�l') && ($param{'�@�l_�X�֔ԍ�2'})) {
	if($param{'�@�l_�X�֔ԍ�2'} =~ /^\d{0,11}/){ ; }
	else{ &error('���̓G���[','�X�֔ԍ��̓��͂��ԈႦ�Ă��܂��B<br>���p�������g�p���Ă��������B'); }
}

if (($param{'���q�l���'} eq 'dic_dummy / �@�l') && ($param{'�@�l_TEL'})) {
	if($param{'�@�l_TEL'} =~ /^(\d+-?)+$/){ ; }
	else{ &error('���̓G���[','�d�b�ԍ��̓��͂��ԈႦ�Ă��܂��B<br>���p�������g�p���Ă��������B'); }
}

if (($param{'���q�l���'} eq 'dic_dummy / �l') && ($param{'�l_MAIL'})) {
	if($param{'�l_MAIL'} =~ /^\S+@\S+\.\S+/){ ; }
	else{ &error('���̓G���[','E���[���A�h���X�̓��͂��ԈႦ�Ă��܂��B'); }
	if($param{'�l_MAIL'} =~ /�`|�a|�b|�c|�d|�e|�f|�g|�h|�i|�j|�k|�l|�m|�n|�o|�p|�q|�r|�s|�t|�u|�v|�w|�x|�y/){ &error('���̓G���[',"E���[���A�h���X�̓��͂��ԈႦ�Ă��܂��B<br>���p�p�������g�p���Ă��������B"); }
	if($param{'�l_MAIL'} =~ /��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��/){ &error('���̓G���[',"E���[���A�h���X�̓��͂��ԈႦ�Ă��܂��B<br>���p�p�������g�p���Ă��������B"); }
}

if (($param{'���q�l���'} eq 'dic_dummy / �@�l') && ($param{'�@�l_MAIL'})) {
	if($param{'�@�l_MAIL'} =~ /^\S+@\S+\.\S+/){ ; }
	else{ &error('���̓G���[','E���[���A�h���X�̓��͂��ԈႦ�Ă��܂��B'); }
	if($param{'�@�l_MAIL'} =~ /�`|�a|�b|�c|�d|�e|�f|�g|�h|�i|�j|�k|�l|�m|�n|�o|�p|�q|�r|�s|�t|�u|�v|�w|�x|�y/){ &error('���̓G���[',"E���[���A�h���X�̓��͂��ԈႦ�Ă��܂��B<br>���p�p�������g�p���Ă��������B"); }
	if($param{'�@�l_MAIL'} =~ /��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��|��/){ &error('���̓G���[',"E���[���A�h���X�̓��͂��ԈႦ�Ă��܂��B<br>���p�p�������g�p���Ă��������B"); }
}


##=====================================
## ����L����ϊ�����                 =
##=====================================
foreach (@key_list) {
	$param{$_} =~ s/&/&amp;/g;
	$param{$_} =~ s/"/&quot;/g;
	$param{$_} =~ s/</&lt;/g;
	$param{$_} =~ s/>/&gt;/g;
	$param{$_} =~ s/,/�A/g;
	$param{$_} =~ s/'/&quot;/g;
	$param{$_} =~ s/\n/<br>/g;
}


##=====================================
## ���͊m�F��ʂ̈ꕔ                 =
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

	if ($param{'���q�l���'} eq 'dic_dummy / �l') {
		if($_ =~ /^�@�l_/){ next; }
	}
	elsif ($param{'���q�l���'} eq 'dic_dummy / �@�l') {
		if($_ =~ /^�l_/){ next; }
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
			if(!$param){ $param = '�@'; }
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
## �m�F�e���v���[�g�t�@�C�����I�[�v�� =
##=====================================
if(!open(HTML,$template1)){ &error('�V�X�e���G���[',"�e���v���[�g�t�@�C�� ( $template1 ) ���I�[�v���ł��܂���B");}
@html = <HTML>;
close(HTML);


##=====================================
## ���ꕶ����u������                 =
##=====================================
foreach(@html){
	if($_ =~ /_%copyright%_/){ $flag = '1'; }
}
if(!$flag){ &error('�V�X�e���G���[','���쌠�\�����폜����Ă��܂��B'); }

$dic = qq|<div align="right" class="copyright">- <a href="http://www.d-ic.com/" target="_top">���[�����M�v���O�����F DIC-Studio</a> -</div>|;
foreach(@html){
	s/_%mail%_/$mail/g;
	s/_%Email%_/$mailaddress/g;
	s/_%copyright%_/$dic/g;
}


##=====================================
## �m�F��ʕ\��                       =
##=====================================
print <<"EOF";
Content-type: text/html

@html
EOF
exit;
}	# ���[�h�w�� �Ȃ� �����܂�





#�������������������������������������� ���[�h�w�� "mailsend" ����������������������������������������������
if($param{'mode'} eq 'mailsend'){
##=====================================
## ����L�������Ƃɂ��ǂ�             =
##=====================================
foreach (@key_list) {
	$param{$_} =~ s/&amp;/&/g;
	$param{$_} =~ s/&quot;/"/g;
	$param{$_} =~ s/&lt;/</g;
	$param{$_} =~ s/&gt;/>/g;
	$param{$_} =~ s/<br>//g;
}


##=====================================
## CSV�t�@�C���ɏ�������              =
##=====================================
$nowtime = stdio::getTime("yyyy/mm/dd (ww2) hh:nn:ss", $time_difference);
$newdata = "$nowtime,";

if(!stdio::lock($lock)){ error('�V�X�e���G���[','�������ݍ����Ă���܂�.'); }	# ���b�N
if(!open(CSV,"+<$csvfile")){ stdio::unlock($lock); &error('�V�X�e���G���[',"CSV�t�@�C�� ( $csvfile ) ���I�[�v���ł��܂���ł����B"); }
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
stdio::unlock($lock);	# �A�����b�N


##=====================================
## ���[���{��                         =
##=====================================
## �V�X�e���ɑ��M����郁�[���{��
$mailbody = "";

## ���Е\���p
@sys_books = ();
$sys_books[0] = "";

foreach(@key_list){
	if($_ eq 'mode'){ next; }
	elsif($_ eq 'necessary_k'){ next; }
	elsif($_ eq 'necessary_h'){ next; }
	elsif($_ eq 'thanks_page'){ next; }
	elsif($_ eq 'to'){ next; }
	elsif($_ eq 'subject'){ next; }

	## �����ԐM�p
	$remailbody .= "\n��$_\n$param{$_}\n";

	if ($_ eq '�l_�����O') {
		if ($param{$_} ne '') {
			$order_name = $param{$_};
		}
	} elsif ($_ eq '�@�l_��Ж�') {
		if ($param{$_} ne '') {
			$order_name = $param{$_};
		}
	}

	if ($_ eq '�@�l_���S���Җ�') {
		if ($param{$_} ne '') {
			$order_name .= "\n".$param{$_};
		}
	}

	## �V�X�e���p
##	$mailbody .= "��$_\n$param{$_}\n\n";

	if ($_ =~ /��������/) {
		$sys_orderdate = $param{$_};

	} elsif ($_ =~ /���q�l���/) {
		$sys_kind = $param{$_};

	} elsif ($_ =~ /�X�֔ԍ�1/) {
		$sys_yubin_pre = $param{$_};

	} elsif ($_ =~ /�X�֔ԍ�2/) {
		$sys_yubin_aft = $param{$_};

	} elsif ($_ =~ /�s���{��$/) {
		$sys_capital = $param{$_};

	} elsif ($_ =~ /�Z��([0-9]{1,2})/) {
		if ($param{$_} ne "") {
			$sys_address .= '�@'.$param{$_};
		}

	} elsif ($_ =~ /TEL$/) {
		$sys_telnum = $param{$_};

	} elsif ($_ =~ /MAIL$/) {
		if ($param{$_}) {
			$sys_mail = $param{$_};
		} else {
			$sys_mail = '(no input Email)';
		}

	} elsif ($_ =~ /����([0-9]{1,2})$/) {
		if ($param{$_} ne "") {
			$idx = $1 + 0;
			$sys_books[$idx] .= $param{$_};
		}

	} elsif ($_ =~ /([0-9]{1,2})�̂���������$/) {
		if ($param{$_} != 0) {
			$idx = $1 + 0;
			$sys_books[$idx] .= "�@".$param{$_}."��\n";
		}

	} elsif ($_ =~ /���z������w�ǊJ�n��/) {
		$sys_start = $param{$_};

	} elsif ($_ =~ /���̑��A������/) {
		$sys_renraku = $param{$_};
	}
}

## �V�X�e���p�ْ̍���
	if ($sys_start) {
		$sys_parts = "�����z������w�ǊJ�n��\n".$sys_start;
	} else {
		for ($ii = 1; $ii <= $#sys_books + 1; $ii++) {
			$sys_books_all .= $sys_books[$ii];
		}

		$sys_parts = "���\\�����ݏ���\n".$sys_books_all;
	}


$mailbody .=
	"========================================\n".
	"$subject_sys\n".
	"========================================\n\n".
	"����������\n".$sys_orderdate."\n\n".
	"�����q�l���\n".$sys_kind."\n\n".
	"�������O\n".$order_name."\n\n".
	"���Z��\n��".$sys_yubin_pre."�|".$sys_yubin_aft."\n".$sys_capital.$sys_address."\n\n".
	"���d�b�ԍ�\n".$sys_telnum."\n\n".
	"��E���[��\n".$sys_mail."\n\n".
	"$sys_parts\n\n".
	"�����̑��A������\n".$sys_renraku."\n";



##=====================================
## �V�X�e�����[�����M                 =
##=====================================
## ���̎��_�� dic_dummy�͍폜����Ă���

if ($param{'���q�l���'} eq '�l') {
	$mailfrom = $param{'�l_MAIL'};
} elsif ($param{'���q�l���'} eq '�@�l') {
	$mailfrom = $param{'�@�l_MAIL'};
}

if (!$mailfrom) {
	$mailfrom = '(no input Email)';
}

%header = (
    'To'      => $mailaddress,
    'From'    => $mailfrom,
    'Subject' => qq|��$subject_sys��|
);
$result = stdio::sendmail($sendmail, \%header, $mailbody, 0, 0,);
if(!$result){ &error('�V�X�e���G���[',"���[���̑��M�Ɏ��s���܂����B"); }


##=====================================
## �����ԐM���[���̃e���v���[�g���J�� =
##=====================================
if(!open(TXT,$remail_txt)){ &error('�V�X�e���G���[',"�t�@�C�� ( $remail_txt ) ���I�[�v���ł��܂���B"); }
@txt = <TXT>;
close(TXT);

foreach(@txt){
	s/_%remail_body%_/$remailbody/g;
	s/_%order_name%_/$order_name/g;
	$re_mailbody .= $_;
}

##=====================================
## �����ԐM���[���̑��M               =
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
if(!$result){ &error('�V�X�e���G���[',"���[���̑��M�Ɏ��s���܂����B"); }
}

##=====================================
## ���[�����M�����\��                 =
##=====================================
if($thank_page){
	print "Location: $thank_page\n\n";
}else{
	print <<"EOF";
Content-type: text/html

<html>
<head>
<title>���M����</title>
<meta http-equiv="Content-Type" content="text/html; charset=Shift_JIS">
</head>
<body>
<h2>���M����</h2>
���L�����ꂽ���̂�<a href="mailto:$mailaddress">$mailaddress</a>���Ăɓd�q���[������܂����B<br>
<br>
<br>
<a href="javascript:history.go(-2)">�߂�</a>
</body>
</html>
EOF
exit;
}
}	# ���[�h�w�� mailsend �����܂�





##=====================================
## �G���[�\��                         =
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
    <p><a href="JavaScript:history.back()">��������N���b�N���đO�̉�ʂɈړ����Ă��������B</a>
   </blockquote>
  </td>
 </tr>
</table>
</body></html>
END
exit;
}
