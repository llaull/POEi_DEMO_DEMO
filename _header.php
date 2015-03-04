<?php
session_start();
if(file_exists("tools/param.inc.php"))
	include_once("tools/param.inc.php");

?>
<!DOCTYPE html>
<html>
<head>
<title>demo PiHiPi</title>
<link rel="stylesheet" href="<?php echo _WWW_; ?>css/normalize.css"/>
<link rel="stylesheet" href="<?php echo _WWW_; ?>css/default.css"/>
<script src="js/object.js"></script>
<script src="js/myBiblio.js"></script>
<!-- <script src="js/form.js"></script> -->
<!-- <script src="js/fraisomatic.js"></script> -->
<!-- <script src="js/ajax.js"></script> -->
<!-- <script src="js/xml.js"></script> -->
<!-- <script src="js/timer.js"></script> -->
<!-- <script src="js/canvas.js"></script> -->
</head>
<body>
<div class="content">
<!-- header -->
<header><img src="<?php echo _IMG_; ?>logo.jpg"><h1>Titre mon site</h1><h2><?php echo $_SESSION['login']; ?></h2></header>
<!-- menu -->
<nav>
<?php 
// SUX MODE !
//echo ($section == 0)?'class="selected"':''; ?>

<?php if (empty($_SESSION['login'])): ?>
<ul><li><a href="<?php echo _WWW_; ?>index.php"><p>accueil</p></a></li><li><a href="<?php echo _WWW_; ?>second.php"><p>accueil 2</p></a></li><li><a href="<?php echo _WWW_; ?>form.php"><p>formulaire</p></a></li><li><a href="<?php echo _WWW_; ?>fraisomatic.php"><p>fraisomatic</p></a></li><li><a href="<?php echo _WWW_; ?>ajax.php"><p>ajax</p></a></li><li><a href="<?php echo _WWW_; ?>ajaxXML.php"><p>ajax XML</p></a></li><li><a href="<?php echo _WWW_; ?>timer.php"><p>timer</p></a></li><li><a href="<?php echo _WWW_; ?>canvas.php"><p>canvas</p></a></li><li><a href="<?php echo _WWW_; ?>php.php"><p>php</p></a></li></ul>
<?php endif ?>	


<?php if (!empty($_SESSION['login'])): ?>
<ul><li><a href="<?php echo _WWW_; ?>index_admin.php"><p>accueil Admin</p></a></li><li><a href="<?php echo _WWW_; ?>deco.php"><p>deco</p></a></li></ul>
<?php endif ?>	

</nav><main>