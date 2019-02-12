<?php
include 'header.php';
include '../connection.php';
$tabel = $_REQUEST['tabel'];
$columns = $conn->query("SHOW columns FROM $tabel");

if(@!$columns) die("Eroare: Tabel invalid!");

echo "<div class='afisare-main'><h1>$tabel</h1><table><tr>";
while($col = $columns->fetch_assoc()) {
	echo "<th>".$col['Field']."</th>";
}
echo "</tr>";

$query= "select * from $tabel";
unset($_POST["tabel"]);
foreach($_POST as $field => $value) {
	if($value) $searches[]=$field."='".$value."'";
}
if(@!$searches) die("Eroare: Cel putin 1 camp trebuie completat!");
$query.=" where ".implode(" and ", $searches);

$result = $conn->query($query);
while($row = $result->fetch_assoc()) {
	echo "<tr>";
	foreach($row as $key => $val) echo "<td>".$val."</td>";
	echo "</tr>";
}
echo "</table></div>";




