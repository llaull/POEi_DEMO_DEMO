<?php
include('_header.php');
if(file_exists("tools/Connexion.class.php"))
	include_once("tools/Connexion.class.php");


$db = new Connexion;
var_dump($db);

$con = $db->connect();
var_dump($con);



if(file_exists("tools/CategorieManager.class.php"))
	include_once("tools/CategorieManager.class.php");

// var_dump($con);

$categorieManager = new CategorieManager();
var_dump($categorieManager);
$nbcat = $categorieManager->compteCategorie($con);
var_dump($nbcat);

?>

<section class="gauche">Welcome</section><section class="droite"></section>
<?php include('_footer.php'); ?>