<?php
if(!isset($_SESSION['AUTH']) || $_SESSION['AUTH'] != session_id()) {
	//header ('location: http://172.20.0.180/demo/');
}
?>