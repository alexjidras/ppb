export default function(data, options) {
	var chart = new FusionCharts({
	      type: "multiaxisline",
	      renderAt: "chart4",
	      width: "100%",
	      height: "300",
		...options
	});

	chart.update = function(data) {
		this.setJSONData({
			  "chart": {
			  	"captionOnTop": 1,
			  	//drawAnchors: 1,
			    "canvasTopMargin": "30",
			  	"rotateLabels": "1",
			  	"toolTipColor": "black",
			    "bgAlpha": "0",
			    "canvasBgAlpha": "0",
			    "baseFontSize": "14",
			    "baseFont": "Nunito Sans Regular",
			    "baseFontColor": "#000000",
			    //"caption": "Cotațiile bursiere și prețurile medii de import la benzină",
			    //"subcaption": "iunie-septembrie 2018",
			    "showhovereffect": "1",
			    "drawcrossline": "1",
			    "plottooltext": "<b>$dataValue</b> $seriesName",
			    "theme": "fusion"
			  },
			  "categories": [
			    {
			      "category": data.map((el)=> ({label: el["Luna"].capitalize()}))
			    }
			  ],
			  "axis": [
			  {
						"title": "Valoare import lei/tona",
			            "tickWidth": "10",
			            "color": "#5AA9FA",
			            //"numberPrefix": "lei/tona",
			            //axisOnLeft: "0",
						dataset: [
						{
						  "seriesname": "lei/tona",
						  "data": data.map((el)=>({value: el["Pret_Lei"]}))
						}]
					},
			  {
			  	axisOnLeft: "0",
						showAxis: 0,
						"color": "#121212",
			            "numberSuffix": " $/tona",
			            "divlineDashed": "1",
						"dataset": [
						{
						  "seriesname": "Platts",
						  "data": data.map((el)=>({value: el["Platts"]}))
						}]
					},
					
			        {
			        	axisOnLeft: "0",
			            "title": "Valoare import $/tona",
			            "tickWidth": "10",
			            "color": "#9b9b9b",
			            "divlineDashed": "1",
						"dataset": [
						{
						  "seriesname": "$/tona",
						  "data": data.map((el)=>({value: el["Pret_Dolari"]}))
						}
						]
					}
					]

		});
		return this;
	}

	return chart.update(data);

};


