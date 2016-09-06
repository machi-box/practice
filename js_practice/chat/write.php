<?php
// Ajax以外からのアクセスを遮断
$request = isset($_SERVER['HTTP_X_REQUESTED_WITH']) ?
    strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) : '';
if($request !== 'xmlhttprequest') exit;
 
$message = (isset($_POST['message']) && is_string($_POST['message'])) ?
    htmlspecialchars($_POST['message'], ENT_QUOTES) : "";
if($message == "") exit;
 
$max   = 30;        // 行の上限
$count = 0;
$log   = '';
 
$fp = fopen('log.txt', 'r');
if(flock($fp, LOCK_SH)){
    while(!feof($fp)){
        if($count >= $max - 1) break;
        $log .= fgets($fp);
        $count++;
    }
    flock($fp, LOCK_UN);
}
fclose($fp);
 
$log = date("Y-m-d H:i:s") . ' - ' . $message . "\n" . $log;
file_put_contents('log.txt', $log, LOCK_EX);
?>