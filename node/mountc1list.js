import {loadData, empty} from './assets';
export default (data, month, year, chart) => {
	
    var ansel = document.getElementById("c1an"),
    monsel = document.getElementById("c1mon"),
    years = data.reduce((prev,el) => prev.includes(el["An"]) ? prev : prev.concat(el["An"]), []);

 
	for(var x in years) {
		var option = document.createElement('option');		
		option.setAttribute('value', years[x]);
		option.innerHTML = years[x];
		ansel.appendChild(option);
	}
	
	ansel.value = year;
	updatemon(year, month);
	

	ansel.addEventListener("change", ()=> {
		updatemon(ansel.value);
		loadData('./api.php?g=1&m='+ monsel.value + "&y=" + ansel.value ).then((newdata) => {
			chart.update(newdata);

		})	
	})

	monsel.addEventListener("change", ()=> {
		loadData('./api.php?g=1&m='+ monsel.value + "&y=" + ansel.value ).then((newdata) => {
			chart.update(newdata);

		})
	})

	function updatemon(an, month) {
		empty(monsel);
		var mon = data.filter((el) => el["An"] == an);
		if(mon.length) {
			for(var y in mon) {
				var option = document.createElement('option');		
				option.setAttribute('value', mon[y]["ID_Luna"]);
				option.innerHTML = mon[y]["Luna"];
				monsel.appendChild(option);
		    }
		    monsel.value = month || mon[0]["ID_Luna"] || "";

		}
	 	
	}

	  
}