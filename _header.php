<?php
if(file_exists("tools/session.inc.php"))
	include_once("tools/session.inc.php");
	
if(file_exists("tools/param.inc.php"))
	include_once("tools/param.inc.php");
?>
<!DOCTYPE html>
<html>
<head>
<title>demo PiHiPi</title>
<link rel="stylesheet" href="css/normalize.css"/>
<link rel="stylesheet" href="css/default.css"/>
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
<header><img src="img/logo.jpg"><h1>Titre mon site</h1><h2><?php echo $_SESSION['login']; ?></h2></header>
<!-- menu -->
<nav>
<?php 
// SUX MODE !
//echo ($section == 0)?'class="selected"':''; ?>

<?php //if (empty($_SESSION['login'])): ?>
<ul><li><a href="index.php"><p>accueil</p></a></li><li><a href="canvas.php"><p>canvas</p></a></li><li><a href="php.php"><p>php</p></a></li><?php if (!empty($_SESSION['login'])): ?><li class="admin" ><a href="index_admin.php"><p>accueil Admin</p></a></li><li class="admin"><a href="deco.php"><p>deco</p></a></li><li class="admin"><a href="cate_admin.php"><p>categories</p></a></li>
<?php endif ?></ul>

</nav><main>