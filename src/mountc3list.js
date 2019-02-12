import {loadData, empty} from './assets';
export default (data, year, chart) => {
	
    var ansel = document.getElementById("c3an"),
    persel = document.getElementById("c3per"),
    years = data.reduce((prev,el) => prev.includes(el["An"]) ? prev : prev.concat(el["An"]), []);

 
	for(var x in years) {
		var option = document.createElement('option');		
		option.setAttribute('value', years[x]);
		option.innerHTML = years[x];
		ansel.appendChild(option);
	}
	updateper(year);
	

	ansel.addEventListener("change", ()=> {
		updateper(ansel.value);
		loadData('./api.php?g=3&p='+ persel.value + "&y=" + ansel.value ).then((newdata) => {
			chart.update(newdata);

		})	
	})

	persel.addEventListener("change", ()=> {
		loadData('./api.php?g=3&p='+ persel.value + "&y=" + ansel.value ).then((newdata) => {
			chart.update(newdata);

		})
	})

	function updateper(an) {
		empty(persel);
		var per = data.filter((el) => el["An"] == an);
		if(per.length) {
			for(var y in per) {
				var option = document.createElement('option');		
				option.setAttribute('value', per[y]["ID_Perioada"]);
				option.innerHTML = per[y]["Perioada"];
				persel.appendChild(option);
		    }
		    persel.value = per[0]["ID_Perioada"] || "";
		}
			
	}

	  
}