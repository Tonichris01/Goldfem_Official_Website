<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Set the recipient email address
    $recipient = "chineduokatta1000@gmail.com";

    $name = htmlspecialchars($_POST['contactName']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $subject = "Message from $name";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    if (mail($recipient, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}else {
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
