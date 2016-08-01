/**
 * Created by aumann on 01.08.16.
 */
{
    let lineChart, stackedChart, donutChart;

    /** Line Chart **/
    lineChart = c3.generate({
        data: {
            x:"x",
            columns: dataLineC3,
            types: {
                'Sine Wave': 'line',
                'Cosine Wave': 'line'
            },
            colors: {
                'Sine Wave': '#ff7f0e',
                'Cosine Wave': '#2ca02c',
            }
        },
        bindto: '#c3-lineChart',
        point: {
            show: false
        }
    });

    /** Stacked Chart **/
    stackedChart = c3.generate({
        data: {
            x:"x",
            columns: dataStackedC3,
            types: {
                'North America': 'area',
                'Asia': 'area',
                'Europe': 'area'
                // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
            },
            groups: [['North America', 'Asia', 'Europe']]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%d/%m/%Y'
                },
            },
        },
        bindto: '#c3-stackedChart',
        point: {
            show: false
        }
    });

    /** Donut Chart **/
    donutChart = c3.generate({
        data: {
            columns: dataDonutC3,
            type : 'donut',
        },
        bindto: '#c3-donutChart'
    });

    /** Update Chart Data **/
    let xIterator = 99;
    let tIterator = 1335758400000;
    window.setInterval(() => {

        /** update line data **/

        xIterator++;
        let newLineData = [ ['x', xIterator] ];
        for (let setId in dataLineC3) {
            if (setId == 1){
                newLineData.push([ dataLineC3[setId][0], Math.sin(xIterator/10)]);
            }
            else if (setId == 2){
                newLineData.push([ dataLineC3[setId][0], .5 * Math.cos(xIterator/10)]);
            }
        }
        console.debug(newLineData)
        lineChart.flow({
            length: 1,
            columns: newLineData,
            duration: 1000
        });


        /** update stacked data **/
        tIterator += 2592000000;
        let newStackedData = [ ['x', tIterator] ];
        for (let setId in dataStackedC3) {
            if (setId != 0){
                console.debug(setId,  dataStackedC3[setId][0])
                newStackedData.push([ dataStackedC3[setId][0], 40*Math.random()]);
            }
        }
        console.debug(newStackedData)
        stackedChart.flow({
            length: 1,
            columns: newStackedData,
            duration: 1000
        });


        /** update donut data **/
        dataDonut[(new Date().getSeconds()%8)].value = Math.random()*100;
        donutChart.load({
            columns: [
                [dataDonutC3[(new Date().getSeconds()%8)][0], 100*Math.random()],
            ]
        });


    }, 1000);
}