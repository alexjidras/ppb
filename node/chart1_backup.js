export default (data, options) => {
    //var {Pret_Produs} = data[0] || 0;
	var chart = new FusionCharts({
		"type": "angulargauge",
	    "renderAt": "chart1",
	    "width": "100%",
	    "height": "185",
	    "dataFormat": "json",
	     ...options
	    });

	chart.update = function(data) {
		var {Pret_Produs} = data[0] || 0;
		this.setJSONData({
			"chart": {
			  "baseFont": "Nunito Sans",
			  "setAdaptiveMin": "1",
			  "baseFontColor": "#000000",
			  "chartTopMargin": "0",
			  "canvasTopMargin": "0",
			  "chartBottomMargin": "10",
			  "chartLeftMargin": "10",
			  "chartRightMargin": "10",
			  "showTickMarks": "0",
			  "showTickValues": "0",
			  "showLimits": "0",
			  "majorTMAlpha": "0",
			  "minorTMAlpha": "0",
			  "pivotFillAlpha": "0",
			  "pivotRadius": "0",
			  "showPivotBorder": "0",
			  "gaugeouterradius": "150",
			  "gaugeInnerradius": "125",
			  "gaugeouterradius": "160",
			  "gaugeInnerradius": "130",
			  "showGaugeBorder": "0",
			  "gaugeFillMix": "{light+0}",
			  "showBorder": "0",
			  //"bgColor": "#1d2f57",
			  "bgAlpha" : "0",
			  "canvasBgAlpha": "0",
			  "transposeAnimation":"1"
			},

			"annotations": {
			  "groups": [{
			      "items": [
			      //     {
			      //     "id": "1",
			      //     "type": "html",
			      //     "text": "<select><option>a</option></select>",
			      //     "align": "left",
			      //     "font": "Nunito Sans",
			      //     "bold": "0",
			      //     "fontSize": "14",
			      //     "color": "#FDFDFD",
			      //     "x": "$chartStartX + 15",
			      //     "y": "$chartEndY - 20"
			      // },
			       {
			          "id": "2",
			          "type": "text",
			          "text": Pret_Produs,
			          "align": "center",
			          "font": "Nunito Sans",
			          "bold": "1",
			          "fontSize": "48",
			          "color": "#444444",
			          "x": "$chartcenterX",
			          "y": "$chartCenterY+25"
			      }, {
			          "id": "3",
			          "type": "text",
			          "text": "lei",
			          "align": "center",
			          "font": "Nunito Sans",
			          "bold": "0",
			          "fontSize": "25",
			          "color": "#444444",
			          "x": "$chartcenterX",
			          "y": "$chartCenterY + 65"
			      }]
			  }]
			},

			"colorRange": {
			  "color": [{
			      "minValue": "0",
			      "maxValue": Pret_Produs,
			      "code": "#000000"
			    }
			  // },
			  // {
			  //     "minValue": Pret_Produs,
			  //     "maxValue": Pret_Plafon,
			  //     "code": "#49516f"
			  // }
			  ]
			},

			"dials": {
			  "dial": [{
			      "value": Pret_Produs,
			      "alpha": "0",
			      "borderAlpha": "0",
			      "radius": "0",
			      "baseRadius": "0",
			      "rearExtension": "0",
			      "baseWidth": "0",
			      "showValue": "0"
			  }]
			}
		});
		secondaryCharts(data[0]);
		return this;
	}


	return chart.update(data);
}

function secondaryCharts(data) {
	document.getElementById("fuelmaxval").innerHTML = data["Pret_Plafon"] ? data["Pret_Plafon"] + " lei" : "-";
	document.getElementById("stationval").innerHTML = data["Nr_Statii"] || "-";
	document.getElementById("chart1_1").style.opacity = 1;
	document.getElementById("chart1_2").style.opacity = 1;

}

