import {loadData, empty} from './assets';
export default (data, year, chart, chartdata) => {
	
    var ansel = document.getElementById("c4an"),
    monsel1 = document.getElementById("c4mon1"),
    monsel2 = document.getElementById("c4mon2"),
    years = data.reduce((prev,el) => prev.includes(el["An"]) ? prev : prev.concat(el["An"]), []);

	for(var x in years) {
		var option = document.createElement('option');		
		option.setAttribute('value', years[x]);
		option.innerHTML = years[x];
		ansel.appendChild(option);
	}
	
	updatemon(year);
	

	ansel.addEventListener("change", ()=> {
		updatemon(ansel.value);
		loadData('./api.php?g=4&y=' + ansel.value).then((newdata) => {
			chartdata = newdata;
			chart.update(chartdata);

		})	
	})

	monsel1.addEventListener("change", ()=> {	
		chart.update(chartdata.slice(monsel1.value-1, monsel2.value));

	})
	monsel2.addEventListener("change", ()=> {	
		chart.update(chartdata.slice(monsel1.value-1, monsel2.value));
        
	})

	function updatemon(an) {
		empty(monsel1);
		empty(monsel2);
		var mon = data.filter((el) => el["An"] == an);
		if(mon.length) {
			for(var y in mon) {
			var option = document.createElement('option');		
			option.setAttribute('value', mon[y]["ID_Luna"]);
			option.innerHTML = mon[y]["Luna"];
			monsel1.appendChild(option);
			
		    }
	        for(var y in mon) {
				var option = document.createElement('option');		
				option.setAttribute('value', mon[y]["ID_Luna"]);
				option.innerHTML = mon[y]["Luna"];
				monsel2.appendChild(option);
				
		    }

		    monsel1.value = mon[0]["ID_Luna"] || "";
		    monsel2.value = mon[mon.length-1]["ID_Luna"] || "";  
		}
			
	}
}