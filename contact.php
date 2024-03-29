<?php

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv -> load();

$g_username = getenv('G_USERNAME');
$g_password = getenv('G_PASSWORD');

if ($_SERVER["REQUIRED_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mail = new PHPMailer(true);

    try {
        $mail -> isSMTP();
        $mail -> Host = 'smtp.gmail.com';
        $mail -> SMTPAuth = true;
        $mail -> Username = $g_username;
        $mail -> Password = $g_password;
        $mail -> SMTPSecure = "tls";
        $mail -> Port = 587;

        $mail -> setFrom($email, $name);
        $mail -> addAddress("zawmay.data.analyst@gmail.com", "Zak");

        $mail -> isHTML(false);
        $mail -> Subject = $subject;
        $mail -> Body = "Name: $name\nEmail: $email\n\n$message";

        $mail -> send();

        echo "Message sent successfully.";
    } catch (Exception $e) {
        echo "Error sending message. Error: {$mail -> ErrorInfo}";
    }
}