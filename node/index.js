import {loadData} from './assets';
import chart1 from './chart1';
import chart2 from './chart2';
import chart3 from './chart3';
import chart4 from './chart4';
import mainchart from './chartmain';
import mountc1list from './mountc1list';
import mountc2list from './mountc2list';
import mountc3list from './mountc3list';
import mountc4list from './mountc4list';


let currentyear = 2018, currentmonth = 12;
let config = {
   "showChartLoadingMessage": false,
    "loadMessageImageAlpha": '0',
    "loadMessageImageScale": '0',
    "containerBackgroundColor": "#ffffff",//"#1d2f57",
    "containerBackgroundAlpha": "100",
    "creditLabel": false,
    "dataFormat": "json",
}


Promise.all([
   loadData('./api.php?g=main'),
   loadData('./api.php?g=1&m='+ currentmonth + "&y=" + currentyear),
   loadData('./api.php?g=2&m='+ currentmonth + "&y=" + currentyear),
   loadData('./api.php?g=3&y=' + currentyear),
   loadData('./api.php?g=4&y=' + currentyear),
   loadData('./api.php?g=all')

]).then(res => {
    FusionCharts.ready(function() {
      var mainc = mainchart(res[0], config).render(),
      c1 = chart1(res[1], config).render(),
      c2 = chart2(res[2], config).render(),
      c3 = chart3(res[3], config).render(),
      c4 = chart4(res[4], config).render();

      mountc1list(res[5][0], currentmonth, currentyear, c1);
      mountc2list(res[5][0], currentmonth, currentyear, c2);
      mountc3list(res[5][1], currentyear, c3);
      mountc4list(res[5][2], currentyear, c4, res[4]);
      
 

  });
}).catch((e)=> alert(e));