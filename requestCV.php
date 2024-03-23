<?php

if (isset($_POST['email'])) {
    $to = "zawmay.data.analyst@gmail.com";
    $subject = "Requesting Updated CV";
    $message = $_POST['message'];
    $headers = "From: " . $_POST['email'];

    if (mail($to, $subject, $message, $headers)) {
        echo "Request sent successfully.";
    } else {
        echo "Failed to request CV.";
    }
} else {
    echo "Error: data is not received";
}