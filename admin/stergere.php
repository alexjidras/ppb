<?php
include 'header.php';
include '../connection.php';
if(!$_POST['tabel']) die("Eroare: Tabel invalid!");

$query = "delete from ".$_POST["tabel"];

unset($_POST["tabel"]);

foreach($_POST as $field => $value) {
	if($value) $deletes[]=$field."='".$value."'";
}
if(@$deletes) $query.=" where ".implode(" and ", $deletes);

if(!$conn->query($query)) die("Eroare: ".$conn->error);
echo "<div class='success'>Succes</div>";
include 'afisare.php';