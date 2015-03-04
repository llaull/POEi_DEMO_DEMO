<?php include('_header.php'); 
/**
*/
?>
<?php 
	$login = null;
	$pwd = null;
	$paiement = array();

	// print_r($_POST);

if (isset($_POST['login'])) {
	$login = $_POST['login'];


}
if (isset($_POST['pwd'])) {
	$pwd = $_POST['pwd'];
}
if (isset($_POST['paiement'])) {
	$paiement = $_POST['paiement'];
}

// verification des données de connexion 
if (($login == 'laul') && ($pwd == '1234')){

	$_SESSION['login'] = $login;
	header ('location: index_admin.php');

} else {

	$msg = "non !";

}

?>

<section class="gauche">
<form method="POST" action="php.php" name="MyForm" id="MyForm">
<fieldset>
	<legend>text</legend>
	<p>
		<label for="login">login</label>
		<input type="text" id="login" name="login" value="!!">		
	</p>
	<p>
		<label for="pwd">password</label>
		<input type="password" id="pwd" name="pwd" value="">		
	</p>
		<p>
		<label for="paiement">paiement ?</label>
		<select name="paiement[]">
			<option value="-1">...svp...</option>
			<option value="0">CB</option>
			<option value="1">PayPal</option>
		</select>
	</p>
</fieldset>	
<input type="submit" id="bt" value="send !" />
</form></section><section class="droite"><div class="log"></div></section>
<?php echo $msg; ?>
<?php
/*

 */
include('_footer.php'); ?>