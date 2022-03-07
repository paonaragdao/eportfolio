
<?php
  $name= $_POST['name'];
  $visitor_email = $POST['email'];
  $subject = $POST['subject'];
  $message = $POST['message'];

  $email_from = "migsuph@gmail.com";

  $email_subject = "New Form Submission";

  $email_body = "Name: $name. \n".
                  "Email: $visitor_email. \n".
                    "Subject: $subject. \n"
                      "Message: $message. \n";

$to = "migsuph@gmail.com"

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject, $email_body,$headers);

header("Location: /views/contact.ejs");


?>
