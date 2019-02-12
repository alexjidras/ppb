export default (data, options) => {
	var chart = new FusionCharts({
	     type: "doughnut2d",
	     creditLabel: false,
	     className: "fc-doughnut2d", 
	     dataFormat: "JSON",
	     width: "100%",
	     height:"300",
	     renderAt: "chart3",
		  ...options
	})

	chart.update = function(data) {
		this.setJSONData({
		    "chart": {
		      "showBorder": "0",
		      "showShadow": "0",
		      "use3DLighting": "0",
		      "showLabels": "0",
		      "showValues": "1",
		      "showpercentvalues": "1",
		      "paletteColors": "#000000, #5AA9FA, #cecece",
		      "bgAlpha": "0",
		      "canvasBgAlpha": "0",
		      "doughnutRadius": "70",
		      "pieRadius": "95",
		      //"pieRadius": "100",
		      "numberSuffix": " tone ",
		      "plotBorderAlpha": "1",
		      "toolTipBgcolor": "#484E69",
		      "toolTipPadding": "7",
		      "toolTipBorderRadius": "3",
		      "toolTipBorderAlpha": "30",
		      "tooltipBorderThickness": "0.7",
		      "toolTipColor": "#FDFDFD",
		      "baseFont": "Nunito Sans",
		      "baseFontSize": "14",
		      "baseFontColor": "#000000",
		      "showLegend": "1",
		      "legendShadow": "0",
		      "legendBorderAlpha": "0",
		      "drawCustomLegendIcon": "1",
		      "legendBgAlpha": "0",
		      "chartTopMargin": "-10",
		      "canvasTopMargin": "-10",
		      "chartBottomMargin": "20",
		      "canvasBottomMargin": "20",
		     //"legendNumColumns": "3",
		      "legendPosition": "bottom",
		      "startingAngle": "15",
		      "defaultCenterLabel": "Total <br>"+(data.reduce((prev,el)=> prev+ +el["Cantitate"], 0)/1000).toFixed(2) + "K tone",
		      "centerLabel": "$label<br>$value",
		      "centerLabelBold": "1",
		      "centerLabelFontSize": "20",
		      "enableRotation": "1",
		      "transposeAnimation":"1",
		      "plotToolText": "<div>$label<br>$dataValue ($percentValue)<div>",
		      
		    
		    },

		    // "annotations": {
		    //   "groups": [{
		    //     "autoscale":"1",
		    //     "items": [{
		    //       "id": "1",
		    //       "type": "text",
		    //       "text": "ddd",
		    //       "align": "left",
		    //       "font": "Nunito Sans",
		    //       "bold": "0",
		    //       "fontSize": "14",
		    //       "color": "#FDFDFD",
		    //       "x": "$chartStartX + 15",
		    //       "y": "$chartEndY - 20"
		    //     }]
		    //   }]
		    // },

		    "data": data.map((el)=> ({label: el["Nume_Produs"], value: el["Cantitate"]}))
		  })
		return this;
	}

	return chart.update(data);
	//return chart;

}