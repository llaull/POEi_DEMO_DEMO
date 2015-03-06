<?php include('_header.php'); 
/**
*/
?>
<?php 
//ferme la session
session_destroy();

header ('location: index.php');
?>

<section class="gauche">bye bye admin !</section><section class="droite"><div class="log"></div></section>
<?php echo $msg; ?>
<?php
/*

 */
include('_footer.php'); ?>