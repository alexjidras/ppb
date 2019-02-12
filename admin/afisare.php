<?php
include_once 'header.php';
include_once '../connection.php';
$tabel = $_REQUEST['tabel'];
$columns = $conn->query("SHOW columns FROM $tabel");

if(@!$columns) die("Eroare: Tabel invalid!");

echo "<div class='afisare-main'><h1>$tabel</h1><table><tr>";
while($col = $columns->fetch_assoc()) {
	echo "<th>".$col['Field']."</th>";
}
echo "</tr>";
$result = $conn->query("select * from $tabel");
while($row = $result->fetch_assoc()) {
	echo "<tr>";
	foreach($row as $key => $val) echo "<td>".$val."</td>";
	echo "</tr>";
}
echo "</table></div>";
echo "<script>setTimeout(()=>$('.success').css('margin-top','-54px'),3000)</script>";