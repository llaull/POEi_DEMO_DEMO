<?php
/**
* 
*/
class Connexion
{
	private $user = "laul";
	private $pass = "27SbSpCb58BnFUfZ";
    private $dns = 'mysql:host=172.20.0.180;dbname=news';
	// private $dns = "mysql:host=172.20.0.180:12322;dbname=news";

	
	function connect()
	{
		try {

			return new PDO($this->dns, $this->user, $this->pass);
            // return new PDO('mysql:host=172.20.0.180;port:3306;dbname=test;charset=utf8', 'root', '1234');
			
		} catch (PDOException $e) {
			
			die("echec t moches !". $e->getMessage());
		}
	}

	function close(&$con)
	{
		$con = null;
	}

}

?>