<?php
// Check for empty fields
if(empty($_POST['name'])  	||
   empty($_POST['email']) 	||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'contact@rahmanieddy.esy.es'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Contact depuis formulaire Portfolio:  $name";
$email_body = "Vous avez reçu un message depuis votre portfolio.\n\n"."Voici les détails:\n\nNom: $name\n\nEmail: $email_address\n\nTelephone: $phone\n\nMessage:\n$message";
$headers = "De: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Répondre à: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>