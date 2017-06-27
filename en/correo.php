<?php

require 'vendor/phpmailer/phpmailer/PHPMailerAutoload.php';

if (!is_null($_POST)) {
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $comentario = $_POST['comentarios'];
}

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'alexis.970991@gmail.com';                 // SMTP username
$mail->Password = 'americanista.791';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom($correo, $nombre);
$mail->addAddress('alexis.970991@gmail.com', 'Alexis Delgado');     // Add a recipient
// $mail->addAddress('ellen@example.com');               // Name is optional
// $mail->addReplyTo('info@example.com', 'Information');
// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');

// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Te contactaron de tu sitio '.$nombre;
$mail->Body    = '<b>'.$comentario.'</b><br>'.$nombre.' '.$correo;
// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Error al enviar correo.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Gracias, '.$nombre.' por contactarme. En breve respondere a su comentario. Saludos!';
}

 ?>
