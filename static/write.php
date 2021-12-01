<?php
$myfile = fopen("data.txt", "a") or die("Unable to open file!");
fwrite($myfile, $_GET['num'] . PHP_EOL);
fclose($myfile);
echo $_GET["num"];
?>
