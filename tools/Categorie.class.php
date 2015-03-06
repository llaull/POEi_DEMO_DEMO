<?php

class Categorie{

	private $id_categorie;
	private $libelle;

	public function getId_categorie(){
		return $this->id_categorie;
	}

	public function setId_categorie($id_categorie){
		$this->id_categorie = $id_categorie;
	}

	public function getLibelle(){
		return $this->libelle;
	}
	
	public function setLibelle($libelle){
		$this->libelle = $libelle;
	}
}
?>