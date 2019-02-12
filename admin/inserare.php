<?php
include 'header.php';
include '../connection.php';
if(!$_POST['tabel']) die("Eroare: Tabel invalid!");

$query = "insert into ".$_POST["tabel"]." set ";

unset($_POST["tabel"]);

foreach($_POST as $field => $value) {
	if($value) $inserts[]=$field."='".$value."'";
}
if(!@$inserts) die("Eroare: Cel putin 1 camp trebuie completat!");
$query.=implode(",", $inserts);

if(!$conn->query($query)) die("Eroare: ".$conn->error);
echo "<div class='success'>Succes</div>";
include 'afisare.php';


