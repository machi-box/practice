<?php
    $imageData = $_POST['image'];
    $filename = 'example.png';
    $fp = fopen(, 'w');
    fwrite($fp,base64_decode($imageData));
    fclose($fp);
?>