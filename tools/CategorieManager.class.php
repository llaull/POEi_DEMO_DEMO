<?php
if(file_exists("tools/Categorie.class.php"))
	include_once("tools/Categorie.class.php");
/**
* 
*/
class CategorieManager
{
	
	function compteCategorie($connexion)
	{
		// var_dump($connexion);
		$sql = "select COUNT(*) FROM categories";
		// $sql = "SELECT BIT_LENGTH('text')";

		$pdoStatement = $connexion->prepare($sql);

		$pdoStatement->execute();
// var_dump($pdoStatement);
		return $pdoStatement->fetchColumn();
	}

	function listingCategorie($connexion)
	{
		$sql = "select C.id, C.value FROM categories C";

		$pdoStatement = $connexion->prepare($sql);

		$listingCategories = array();

		$pdoStatement->execute();

		while ($results = $pdoStatement->fetch(PDO::FETCH_OBJ)) {

			$cat = new Categorie();
			$cat->setId_categorie($results->id);
			$cat->setLibelle($results->value);

			$listingCategories[] = $cat;
		}
		return $listingCategories;	

	}

	// function 
}
?>
