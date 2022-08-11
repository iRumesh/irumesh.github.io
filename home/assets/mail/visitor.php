<?php

// set your e-mail address first, where you'll receive the notifications
$yourEmailAddress = "ganeshv0123@gmail.com";

$emailSubject = "New Visitor on Webpage";
$remoteIpAddress = $_SERVER['REMOTE_ADDR'];
$line = date('Y-m-d H:i:s') . " - $_SERVER[REMOTE_ADDR]";
file_put_contents('visitors1.log', $line . PHP_EOL, FILE_APPEND);
$emailContent = "Someone visited your webpage. IP address:".$remoteIpAddress "in" $line;

// send the message
mail($yourEmailAddress, $emailSubject, $emailContent);


?>



















