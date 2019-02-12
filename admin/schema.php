<?php
include_once '../connection.php';

$tabels = $conn->query("select table_name from information_schema.tables where table_schema='$db'");

$dbSchema = [];
while($tab = $tabels->fetch_assoc()['table_name']) {
	$tabel = $conn->query("show columns from ".$tab);
	while($row = $tabel->fetch_assoc()) {
	    $dbSchema[$tab][$row['Field']] = convert_type($row['Type']); 
	}
}


function convert_type($type) {
	return preg_match('/(int|float|year)[(]\d+[)]/', $type) ? "number" : "text";
}