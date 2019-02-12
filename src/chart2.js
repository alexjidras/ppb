export default (data, options) => {
    

    var chart = new FusionCharts({
        id: "mychart",
        type: "Column2d",
        renderAt: "chart2",
        dataFormat: "JSON",
        width: "100%",
        height: "295",
        ...options
    });

    chart.update = function(data) {
        if(data.length<2) return;
        var firstPrice = data[0]["Pret_Produs"], secondPrice = data[1]["Pret_Produs"], firstLuna=data[0]["Luna"].capitalize(), secondLuna = data[1]["Luna"].capitalize();
        var percentage = (Math.abs(secondPrice-firstPrice)*100/secondPrice).toFixed(2);
        this.setJSONData({
            "chart": {
                "showBorder": "0",
                "showCanvasBorder": "0",
                "showAlternateHGridColor": "0",
                "bgAlpha": "0",
                "canvasBgAlpha": "0",
                "baseFontSize": "16",
                "baseFont": "Nunito Sans Regular",
                "baseFontColor": "#000000",
                "divLineThickness": "2",
                "numberSuffix": " lei ",
                "showLimits": "0",
                "showDivLineValues": "0",
                "paletteColors": "#000000",
                "usePlotGradientColor": "0",
                "divLineColor": "#979797",
                divLineThickness: 1,
                "divLineDashed": "1",
                "divLineDashLen": "5",
                "valueFontSize": "15",
                "canvasRightMargin": "200",
                "canvasLeftMargin": "35",
                "canvasBottomMargin": "65",
                "canvasTopMargin": "50",
                "placeValuesInside": "0",
                "yAxisMaxValue": "25",
                "toolTipBgcolor": "#484E69",
                "toolTipPadding": "7",
                "toolTipBorderRadius": "3",
                "toolTipBorderAlpha": "30",
                "tooltipBorderThickness": "0.7",
                "toolTipColor": "#FDFDFD",
                "decimals": "1",
                "transposeAnimation":"1",
                "formatNumberScale": "0"
            },

            "annotations": {
                "groups": [{
                    "autoscale": "1",
                    "items": [{
                        "id": "indicator",
                        "type": "text",
                        "text": (secondPrice<firstPrice ? "▼ " : "▲ ") + percentage + " %",
                        "color": secondPrice<firstPrice ? "#00f300" : "#ff4545",
                        "fontSize": "30",
                        "x": "$canvasEndX + 100",
                        "y": "$canvasheight - 40"
                    }, {
                        "id": "indicator",
                        "type": "text",
                        "text": secondPrice<firstPrice ? "SCADERE IN PRET" : "CRESTERE IN PRET",
                        "color": "#000000",
                        "fontSize": "16",
                        "x": "$canvasEndX + 100",
                        "y": "$canvasheight - 10"
                    }]
                }]
            },

            "data": [{
                "label": firstLuna,
                "value": firstPrice,
                "alpha": "75"
            }, {
                "label": secondLuna,
                "value": secondPrice
            }]
        });
        return this;
    }



    return chart.update(data);
}