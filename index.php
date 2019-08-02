<?php
include 'header.php';
?>
<div class="container-fluid">
	<a href="admin/" class="admin">ADMIN</a>
	<div class="navbar">
		<!-- <h1>Prognozarea preturilor la benzina</h1> -->
	</div>
	<div class="row">
		<div class="col-1">
			<div class="chart-wrap chart1-wrap">
				<div class="chart-title">
		    		<p class="chart-title">PRETUL MEDIU, PLAFON SI NR STATIILOR DE ALIMENTARE</p>
		    		<p class="chart-subtitle"><select id="c1mon"></select><select id="c1an"></select></p>
		    	</div>
	            <div id="chart1_1">
	            	<img class="fuelmaximg" src="assets/img/fuelmax.jpg">
	            	<span id="fuelmaxval"></span>
				</div>
				<div id="chart1_2">
					<img class="stationimg" src="assets/img/station2.png">
	            	<span id="stationval"></span>
				</div>	
				<div id="chart1">
				</div>
				
		    </div>
		    <div class="chart-wrap chart2-wrap">
		    	<div class="chart-title">
		    		<p class="chart-title">SCHIMBAREA IN PRET</p>
		    		<p class="chart-subtitle"><select id="c2mon1"></select>-<select id="c2mon2"></select><select id="c2an"></select></p>
		    	</div>
				<div id="chart2">
				</div>
			</div>
		</div>
		<div class="col-2">

			<div class="chartmain-wrap chart-wrap">
				<div id="scrollmain"><div id="scrollcontent"></div></div>
				<div id="chart">
				</div>
				
			</div>
		</div>
		<div class="col-3">
			<div class="chart-wrap chart3-wrap">
                <div class="chart-title">
		    		<p class="chart-title">VOLUMUL IMPORTULUI</p>
		    		<p class="chart-subtitle"><select id="c3per"></select><select id="c3an"></select></p>
		    	</div>
				<div id="chart3">
				</div>
		    </div>
		    <div class="chart-wrap chart4-wrap">
		    	<div class="chart-title chart4-title">
		    		<p class="chart-title">COTATIILE BURSIERE SI PRETURILE MEDII DE IMPORT</p>
		    		<p class="chart-subtitle"><select id="c4mon1"></select>-<select id="c4mon2"></select><select id="c4an"></select></p>
		    	</div>
				<div id="chart4">
				</div>
			</div>
		</div>
	</div>
</div>
<?php include 'footer.php'?>
   
   
