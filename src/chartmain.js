import {randInt} from './assets';
export default function(data, options) {

// function getrandom(n, last) { return data.slice(0, n).reduce((prev,el,i)=> {
//   return prev.concat({Luna: el["Luna"], An: 2019+Math.floor(i/12),"Pret_Prognoza": +(prev[i]["Pret_Prognoza"]) + randInt(-1,1), "Pret_Produs": null})}, [{...last, Pret_Prognoza: last["Pret_Produs"], Pret_Produs: null}]) };

// var randomPredictions = getrandom(24, data[data.length-1]);

// data = data.concat(randomPredictions);

var mainchart =  new FusionCharts({
      type: "line",
      renderAt: "chart",
      width: "100%",
      height: "790",
      ...options
  });

var labelStep = 3, 
labelsperyear = 12/labelStep,
labelsshowed = 15,
numplot = 12*labelsshowed/labelsperyear,
scrollcontent = document.getElementById("scrollcontent"),
scrolldiv = document.getElementById("scrollmain"),
scrolldivsize = +getComputedStyle(scrolldiv).getPropertyValue('width').slice(0,-2),
scrollcontentsize = scrolldivsize*data.length/numplot;


scrollcontent.setAttribute("style", "width:" + scrollcontentsize + "px");

scrolldiv.addEventListener("scroll", ()=> {
	var maxscroll = scrolldiv.scrollWidth - scrolldiv.clientWidth,
	start = Math.round((data.length - numplot)*scrolldiv.scrollLeft/maxscroll),
	end = start + numplot;

	mainchart.setJSONData({
	    "chart": { 
	        caption: "PROGNOZAREA PRETURILOR LA BENZINA",
	        chartTopMargin: 20,
	        captionFontSize: "36",
	        captionAlignment: "left",
	        subCaption: "2018-2020",
	        chartPadding: 0,
	        subCaptionFontSize: "24",
	        captionFontBold: 0,
	        captionFont: "Nunito Sans Light",   	
		    labelStep,
		    labelFontSize: "16",
		    drawAnchors: 0,
		    anchorRadius: 3,
		    anchorBgColor: "#5AE2C2",
		    anchorBorderColor: "#5AE2C2",
	        rotateLabels : 0,
	        "numberSuffix": " lei",
	        "theme": "fusion",
	        "lineColor": "#5AA9FA",
	        "lineThickness": 2,
	        toolTipColor: "black",
	        "bgAlpha": "0",
	        "canvasBgAlpha": "0",
	        "baseFontSize": "14",
	        "baseFont": "Nunito Sans Regular",
	        "baseFontColor": "#000000",
	        yAxisMinValue: 5,
	        yAxisMaxValue: 30,
	        canvasTopMargin: 180,
	        canvasBottomMargin: "0" 
	    },
	    data: data.slice(start,end).map((el, i)=> el["Pret_Produs"] !== null
	    	? ({ label: i%12 === 0 ? [el["Luna"].capitalize().slice(0,3), el["An"]].join("<br><br><br>") : el["Luna"].capitalize().slice(0,3), value: el["Pret_Produs"]}) 
	    	: ({ label: i%12 === 0 ? [el["Luna"].capitalize().slice(0,3), el["An"]].join("<br><br><br>") : el["Luna"].capitalize().slice(0,3),value: el["Pret_Prognoza"], dashed: 1}) )
	       
	});
});

document.getElementById('chart').addEventListener("wheel", (e) => {
	var delta = e.deltaY || e.detail || e.wheelDelta;
	scrolldiv.scrollLeft -= delta;
});

window.addEventListener('resize', ()=> {
	scrolldivsize = +getComputedStyle(scrolldiv).getPropertyValue('width').slice(0,-2);
	scrollcontentsize = scrolldivsize*data.length/numplot;
	scrollcontent.setAttribute("style", "width:" + scrollcontentsize + "px");
	scrolldiv.scrollLeft = scrolldiv.scrollWidth - scrolldiv.clientWidth;
});

//initial scroll
scrolldiv.scrollLeft = scrolldiv.scrollWidth - scrolldiv.clientWidth;

return mainchart;

}
