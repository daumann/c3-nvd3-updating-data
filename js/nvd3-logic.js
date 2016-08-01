/**
 * Created by aumann on 01.08.16.
 */
{
    let lineChart, stackedChart, donutChart;

    /** Line Chart **/
    nv.addGraph(() => {
        lineChart = nv.models.lineChart()
                .useInteractiveGuideline(true)
            ;

        lineChart.xAxis
            .axisLabel('Time (ms)')
            .tickFormat(d3.format(',r'))
        ;

        lineChart.yAxis
            .axisLabel('Voltage (v)')
            .tickFormat(d3.format('.02f'))
        ;

        d3.select('#nvd3-lineChart svg')
            .datum(dataLine)
            .transition().duration(500)
            .call(lineChart)
        ;

        lineChart.duration(1000);

        nv.utils.windowResize(lineChart.update);

        return lineChart;
    });

    /** Stacked Chart **/
    nv.addGraph(() => {
        stackedChart = nv.models.stackedAreaChart()
                .x(function(d) { return d[0] })
                .y(function(d) { return d[1] })
                .clipEdge(true)
                .useInteractiveGuideline(true)
            ;

        stackedChart.xAxis
            .showMaxMin(false)
            .tickFormat(function(d) { return d3.time.format('%x')(new Date(d)) });

        stackedChart.yAxis
            .tickFormat(d3.format(',.2f'));

        stackedChart.duration(1000);

        d3.select('#nvd3-stackedChart svg')
            .datum(dataStacked)
            .transition().duration(500).call(stackedChart);

        nv.utils.windowResize(stackedChart.update);

        return stackedChart;
    });

    /** Donut Chart **/
    nv.addGraph(function() {
        donutChart = nv.models.pieChart()
                .x(function(d) { return d.label })
                .y(function(d) { return d.value })
                .showLabels(true)     //Display pie labels
                .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
                .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
                .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
                .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
            ;

        d3.select("#nvd3-donutChart svg")
            .datum(dataDonut)
            .transition().duration(500)
            .call(donutChart);

        nv.utils.windowResize(donutChart.update);

        donutChart.duration(1000);

        return donutChart;
    });

    /** Update Chart Data **/
    let xIterator = 99;
    let tIterator = 1335758400000;
    window.setInterval(() => {

        /** update line data **/

        xIterator++;

        for (let setId in dataLine) {
            dataLine[setId].values.shift();
            if (setId == 0){
                dataLine[setId].values.push({series: setId, x: xIterator, y: Math.sin(xIterator/10)});
            }
            else if (setId == 1){
                dataLine[setId].values.push({series: setId, x: xIterator, y:  .5 * Math.cos(xIterator/10)});
            }

        }
        /*

         for (let setId in dataLine) {
         dataLine[setId].values.shift();
         if (setId == 0){
         dataLine.push([ dataLineC3[setId][0], Math.sin(xIterator/10)]);
         dataLine.push({series: setId, x: xIterator, y: Math.sin(xIterator/10)});
         }
         else if (setId == 1){
         dataLine.push([ dataLineC3[setId][0], .5 * Math.cos(xIterator/10)]);
         dataLine.push({series: setId, x: xIterator, y:  .5 * Math.cos(xIterator/10)});
         }

         }

         */

        lineChart.update();

        /** update stacked data **/

        tIterator += 2592000000;
        for (let setId in dataStacked) {
            dataStacked[setId].values.shift();
            dataStacked[setId].values.push([tIterator,40*Math.random()]);
        }
        stackedChart.update();

        /** update donut data **/
        dataDonut[(new Date().getSeconds()%8)].value = Math.random()*100;
        donutChart.update();

    }, 1000);
}