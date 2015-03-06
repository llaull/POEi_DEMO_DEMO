<?php 
if(file_exists("tools/Connexion.class.php"))
	include_once("tools/Connexion.class.php");

$db = new Connexion;
// var_dump($db);

$con = $db->connect();
// var_dump($con);


if(file_exists("tools/CategorieManager.class.php"))
	include_once("tools/CategorieManager.class.php");

// var_dump($con);

$categorieManager = new CategorieManager();
// var_dump($categorieManager);
$nbcat = $categorieManager->compteCategorie($con);
// var_dump($nbcat);


$categories = $categorieManager->listingCategorie($con);
// var_dump($categories);
?>
<?php echo 'nombre de categories :'.$nbcat; ?>

<table>
<tr>
   <td>id</td>
   <td>non</td>
   <td>action</td>
</tr>
<?php
foreach ($categories as $v) {
	var_dump($v);
	echo "<tr>";
	echo "<td>".$v->getId_categorie()."</td>";
	echo "<td>".$v->getLibelle()."</td>";
	echo '<td><a href="test.php?action=2&id='.$v->getId_categorie().'">modif</a> - <a href="test.php?action=1&id='.$v->getId_categorie().'">del</a></td>';
	echo "</tr>";
}
?>
</table>