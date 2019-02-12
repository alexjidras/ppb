<?php
include 'header.php';
include '../connection.php';
if(!$_POST['tabel']) die("Eroare: Tabel invalid!");

$query = "update ".$_POST["tabel"]." set ";

unset($_POST["tabel"]);

foreach($_POST['result'] as $field => $value) {
	if($value) $updates[]=$field."='".$value."'";
}
if(@!$updates) die("Eroare: Cel putin 1 camp trebuie completat!");

$query.=implode(",", $updates);

foreach($_POST['search'] as $field => $value) {
	if($value) $searches[]=$field."='".$value."'";
}
if(@$searches) $query.=" where ".implode(" and ", $searches);

if(!$conn->query($query)) die("Eroare: ".$conn->error);
echo "<div class='success'>Succes</div>";
include 'afisare.php';