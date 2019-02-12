<?php
include './header.php';
include_once './schema.php';
?>
<div id="root">
	<a class="logout" href="./logout.php">Log out</a>
	<h3>Tabel</h3>

	<form action="afisare.php">
		<select name="tabel">
		<?php foreach($dbSchema as $key => $val) echo "<option value='$key'>".$key."</option>"; ?>
		</select>
		<button type="submit">Afișează</button>
	</form>
	<h4>Inserare</h4>
	<form action="inserare.php" method="POST" name="f">
	<?php foreach(current($dbSchema) as $name => $type) echo "<label>$name</label><input name='$name' type='$type'>";  
		echo '<button type="submit">Inserează</button>'; ?>
	</form>
	<h4>Modificare</h4>
	<form action="modificare.php" method="POST" name="f-modify">
		<?php foreach(current($dbSchema) as $name => $type) echo "<label>$name</label><input name='search[$name]' type='$type'>"; 
		echo "<br>";
		foreach(current($dbSchema) as $name => $type) echo "<label>$name</label><input name='result[$name]' type='$type'>"; 
		echo '<button type="submit">Modifica</button>'; ?>
	</form>
	<h4>Stergere</h4>
	<form action="stergere.php" method="POST" name="f">
		<?php foreach(current($dbSchema) as $name => $type) echo "<label>$name</label><input name='$name' type='$type'>"; 
		echo '<button type="submit">Sterge</button>'; ?>
	</form>
	<h4>Caută</h4>
	<form action="cauta.php" method="POST" name="f">
		<?php foreach(current($dbSchema) as $name => $type) echo "<label>$name</label><input name='$name' type='$type'>";
		echo '<button type="submit">Caută</button>'; ?>'
	</form>
	<h4>Sorteaza</h4>
	<form action="sortare.php" method="POST" name="f-sort">
		<?php foreach(current($dbSchema) as $name => $type) echo "<label>$name</label><select name='$name'><option value=''>niciuna</option><option value='asc'>crescator</option><option value='desc'>descrescator</option></select>"; 
		echo "<button type='submit'>Sorteaza</button>"; ?>
	</form>
</div>
<?php include './footer.php'?>