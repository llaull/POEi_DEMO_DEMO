<?php include('_header.php'); 
/**
*/
?>
<div class="log"></div>
<form method="POST" action="" name="MyForm" id="MyForm">
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
</fieldset>	
<fieldset>
	<legend>radio/checkbox</legend>
	<p>
		<label for="r">taille ?</label>
		<input type="radio" name="r" value="1" checked="checked" />Petite
		<input type="radio" name="r" value="2"/>moyenne
		<input type="radio" name="r" value="3"/>grande
	</p>
	<p>
		<label for="ingredients">ingredients ?</label>
		<input type="checkbox" name="ingredients[]" value="1" checked="checked" />oeuf
		<input type="checkbox" name="ingredients[]" value="2"/>tomate
		<input type="checkbox" name="ingredients[]" value="3"/>fromage
	</p>
	<p>
		<label for="paiement">paiement ?</label>
		<select name="paiement">
			<option value="-1">...svp...</option>
			<option value="0">CB</option>
			<option value="1">PayPal</option>
		</select>
	</p>
</fieldset>	
<fieldset>
	<legend>select</legend>
	<p>
		<label for="multiple">multi choix ?</label>
		<select name="style" size="4" multiple="multiple">
			<option value="-1">...svp...</option>
			<option value="0">sauvage</option>
			<option value="1">geek total</option>
			<option value="2">urb1</option>
		</select>
	</p>
	<br>
	<textarea name="comments" id="" cols="30" rows="10">what ?</textarea>
</fieldset>
<input type="button" id="go" value="send !">
</form>
<?php
/*
*
 */
include('_footer.php'); ?>