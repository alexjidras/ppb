import {loadData, empty} from './assets';
export default (data, month, year, chart, chartdata) => {
	
    var ansel = document.getElementById("c2an"),
    monsel1 = document.getElementById("c2mon1"),
    monsel2 = document.getElementById("c2mon2"),
    years = data.reduce((prev,el) => el["An"]<=year && !prev.includes(el["An"]) ? prev.concat(el["An"]) : prev, []);

 console.log(data);
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
		loadData('./api.php?g=2&m='+ monsel1.value + "&m2=" + monsel2.value + "&y=" + ansel.value ).then((newdata) => {
			chart.update(newdata);

		})	
	})

	monsel1.addEventListener("change", ()=> {
	
		loadData('./api.php?g=2&m='+ monsel2.value + "&m2=" + monsel1.value +  "&y=" + ansel.value ).then((newdata) => {
			chart.update(newdata);

		})
	})
	monsel2.addEventListener("change", ()=> {
	
		loadData('./api.php?g=2&m='+ monsel2.value + "&m2=" + monsel1.value +  "&y=" + ansel.value ).then((newdata) => {
			chart.update(newdata);

		})
	})

	function updatemon(an, month) {
		
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
		    
		    monsel2.value = month || mon[mon.length-1]["ID_Luna"];
		    monsel1.value = monsel2.value-3>0 ? monsel2.value-3 : 1;
		}
		
	}

	  
}