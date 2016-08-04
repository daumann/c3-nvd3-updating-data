var lineChart = dc.seriesChart("#dc-lineChart"),
    pieChart = dc.pieChart("#dc-donutChart"),
    stackedChart = dc.lineChart("#dc-stackedChart");

var s_lineChart = window.getComputedStyle(document.getElementById("dc-lineChart"), null);
var s_pieChart = window.getComputedStyle(document.getElementById("dc-donutChart"), null);
var s_stackedChart = window.getComputedStyle(document.getElementById("dc-stackedChart"), null);

console.debug("widths!!!", s_lineChart.getPropertyValue("width"),s_pieChart.getPropertyValue("width"),s_stackedChart.getPropertyValue("width"))
console.debug("heights!!!", s_lineChart.getPropertyValue("height"),s_pieChart.getPropertyValue("height"),s_stackedChart.getPropertyValue("height"))

let dataStackedDC = [];
let tmp = [
    ['x', 1025409600000,1028088000000,1030766400000,1033358400000,1036040400000,1038632400000,1041310800000,1043989200000,1046408400000,1049086800000,1051675200000,1054353600000,1056945600000,1059624000000,1062302400000,1064894400000,1067576400000,1070168400000,1072846800000,1075525200000,1078030800000,1080709200000,1083297600000,1085976000000,1088568000000,1091246400000,1093924800000,1096516800000,1099195200000,1101790800000,1104469200000,1107147600000,1109566800000,1112245200000,1114833600000,1117512000000,1120104000000,1122782400000,1125460800000,1128052800000,1130734800000,1133326800000,1136005200000,1138683600000,1141102800000,1143781200000,1146369600000,1149048000000,1151640000000,1154318400000,1156996800000,1159588800000,1162270800000,1164862800000,1167541200000,1170219600000,1172638800000,1175313600000,1177905600000,1180584000000,1183176000000,1185854400000,1188532800000,1191124800000,1193803200000,1196398800000,1199077200000,1201755600000,1204261200000,1206936000000,1209528000000,1212206400000,1214798400000,1217476800000,1220155200000,1222747200000,1225425600000,1228021200000,1230699600000,1233378000000,1235797200000,1238472000000,1241064000000,1243742400000,1246334400000,1249012800000,1251691200000,1254283200000,1256961600000,1259557200000,1262235600000,1264914000000,1267333200000,1270008000000,1272600000000,1275278400000,1277870400000,1280548800000,1283227200000,1285819200000,1288497600000,1291093200000,1293771600000,1296450000000,1298869200000,1301544000000,1304136000000,1306814400000,1309406400000,1312084800000,1314763200000,1317355200000,1320033600000,1322629200000,1325307600000,1327986000000,1330491600000,1333166400000,1335758400000],
    ['North America', 23.041422681023,19.854291255832,21.02286281168,22.093608385173,25.108079299458,26.982389242348,19.828984957662,19.914055036294,19.436150539916,21.558650338602,24.395594061773,24.747089309384,23.491755498807,23.376634878164,24.581223154533,24.922476843538,27.357712939042,26.503020572593,26.658901244878,27.065704156445,28.735320452588,31.572277846319,30.932161503638,31.627029785554,28.728743674232,26.858365172675,27.279922830032,34.408301211324,34.794362930439,35.609978198951,33.574394968037,31.979405070598,31.19009040297,31.083933968994,29.668971113185,31.490638014379,31.818617451128,32.960314008183,31.313383196209,33.125486081852,32.791805509149,33.506038030366,26.96501697216,27.38478809681,27.371377218209,26.309915460827,26.425199957518,26.823411519396,23.850443591587,23.158355444054,22.998689393695,27.9771285113,29.073672469719,28.587640408904,22.788453687637,22.429199073597,22.324103271052,17.558388444187,16.769518096208,16.214738201301,18.729632971229,18.814523318847,19.789986451358,17.070049054933,16.121349575716,15.141659430091,17.175388025297,17.286592443522,16.323141626568,19.231263773952,18.446256391095,17.822632399764,15.53936647598,15.255131790217,15.660963922592,13.254482273698,11.920796202299,12.122809090924,15.691026271393,14.720881635107,15.387939360044,13.765436672228,14.631445864799,14.292446536221,16.170071367017,15.948135554337,16.612872685134,18.778338719091,16.756026065421,19.385804443146,22.950590240168,23.61159018141,25.708586989581,26.883915999885,25.893486687065,24.678914263176,25.937275793024,29.461381693838,27.357322961861,29.057235285673,28.549434189386,28.506352379724,29.449241421598,25.796838168807,28.740145449188,22.091744141872,25.07966254541,23.674906973064,23.418002742929,23.24364413887,31.591854066817,31.497112374114,26.67238082043,27.297080015495,20.174315530051,19.631084213898,20.366462219461,19.284784434185,19.157810257624],
    ['Europe', 13.153938631352,12.456410521864,12.537048663919,13.947386398309,14.421680682568,14.143238262286,12.229635347478,12.508479916948,12.155368409526,13.335455563994,12.888210138167,12.842092790511,12.513816474199,12.21453674494,11.750848343935,10.526579636787,10.873596086087,11.019967131519,11.235789380602,11.859910850657,12.531031616536,11.360451067019,11.456244780202,11.436991407309,11.638595744327,11.190418301469,11.835608007589,11.540980244475,10.958762325687,10.885791159509,13.605810720109,13.128978067437,13.119012086882,13.003706129783,13.326996807689,13.547947991743,12.807959646616,12.931763821068,12.795359993008,9.6998935538319,9.3473740089131,9.36902067716,14.258619539875,14.21241095603,13.973193618249,15.218233920664,14.382109727451,13.894310878491,15.593086090031,16.244839695189,16.017088850647,14.183951830057,14.148523245696,13.424326059971,12.974450435754,13.232470418021,13.318762655574,15.961407746104,16.287714639805,16.24659058389,17.564505594808,17.872725373164,18.018998508756,15.584518016602,15.480850647182,15.699120036985,19.184281817226,19.691226605205,18.982314051293,18.707820309008,17.459630929759,16.500616076782,18.086324003978,18.929464156259,18.233728682084,16.315776297325,14.632892190251,14.667835024479,13.946993947309,14.394304684398,13.724462792967,10.930879035807,9.8339915513708,10.053858541872,11.786998438286,11.780994901769,11.305889670277,10.918452290083,9.6811395055706,10.971529744038,13.330210480209,14.592637568961,14.605329141157,13.936853794037,12.189480759072,11.676151385046,13.058852800018,13.62891543203,13.811107569918,13.786494560786,14.045162857531,13.697412447286,13.677681376221,19.96151186453,21.049198298156,22.687631094009,25.469010617433,24.88379943712,24.203843814249,22.138760964036,16.034636966228,15.394958944555,12.62564246197,12.973735699739,15.78601833615,15.227368020134,15.899752650733,15.661317319168,15.359891177281],
    ['Asia', 9.3433263069351,8.4583069475546,8.0342398154196,8.1538966876572,10.743604786849,12.349366155851,10.742682503899,11.360983869935,11.441336039535,10.897508791837,11.469101547709,12.086311476742,8.0697180773504,8.2004392233445,8.4566434900643,7.9565760979059,9.3764619255827,9.0747664160538,10.508939004673,10.69936754483,10.681562399145,13.184786109406,12.668213052351,13.430509403986,12.393086349213,11.942374044842,12.062227685742,11.969974363623,12.14374574055,12.69422821995,9.1235211044692,8.758211757584,8.8072309258443,11.687595946835,11.079723082664,12.049712896076,10.725319428684,10.844849996286,10.833535488461,17.180932407865,15.894764896516,16.412751299498,12.573569093402,13.242301508051,12.863536342041,21.034044171629,21.419084618802,21.142678863692,26.56848967753,24.839144939906,25.456187462166,26.350164502825,26.478333205189,26.425979547846,28.191461582256,28.930307448808,29.521413891117,28.188285966466,27.704619625831,27.49086242483,28.770679721286,29.06048067145,28.240998844973,33.004893194128,34.075180359928,32.548560664834,30.629727432729,28.642858788159,27.973575227843,27.393351882726,28.476095288522,29.29667866426,29.222333802896,28.092966093842,28.107159262922,25.482974832099,21.208115993834,20.295043095268,15.925754618402,17.162864628346,17.084345773174,22.24600710228,24.530543998508,25.084184918241,16.606166527359,17.239620011628,17.336739127379,25.478492475754,23.017152085244,25.617745423684,24.061133998641,23.223933318646,24.425887263936,35.501471156693,33.775013878675,30.417993630285,30.023598978467,33.327519522436,31.963388450372,30.49896723209,32.403696817913,31.47736071922,31.53259666241,41.760282761548,45.605771243237,39.986557966215,43.84633051005,39.857316881858,37.675127768207,35.775077970313,48.631009702578,42.830831754505,35.611502589362,35.320136981738,31.564136901516,32.074407502433,35.053013769977,33.873085184128,32.321039427046]
];

for (var i = 1; i < tmp[0].length; i++) {

    dataStackedDC.push({
        "Expt": tmp[1][0],
        "Run": tmp[0][i],
        "Speed": tmp[1][i]
    });
    dataStackedDC.push({
        "Expt": tmp[2][0],
        "Run": tmp[0][i],
        "Speed": tmp[2][i]
    });
    dataStackedDC.push({
        "Expt": tmp[3][0],
        "Run": tmp[0][i],
        "Speed": tmp[3][i]
    });
}

let uniqueKeys = [tmp[1][0],tmp[2][0],tmp[3][0]];

var ndx, runDimension, runGroup;

var currMax = 10;

let dataLineGenDC = [];

for (var i = 0; i < 100; i++) {

    dataLineGenDC.push({
        "Expt": 'Sine Wave',
        "Run": i,
        "Speed": (Math.sin(i/10))
    })
    dataLineGenDC.push({
        "Expt":  'Cosine Wave',
        "Run": i,
        "Speed": ( Math.cos(i/10))
    })
}

ndx = crossfilter(dataLineGenDC),
    ndx2 = crossfilter(dataStackedDC),

    runDimension = ndx.dimension(function(d) {
        if (currMax<parseInt(d.Run)) currMax = parseInt(+d.Run);
        return [d.Expt, +d.Run]; });

runGroup = runDimension.group().reduceSum(function(d) { return +d.Speed; });

runDimensionP = ndx2.dimension(function(d) {return d.Expt;}),
    runDimensionS = ndx2.dimension(function(d) {return d.Run;}),

    speedSumGroup = runDimensionS.group().reduce(function(p, v) {
        p[v.Expt] = (p[v.Expt] || 0) + v.Speed;
        return p;
    }, function(p, v) {
        p[v.Expt] = (p[v.Expt] || 0) - v.Speed;
        return p;
    }, function() {
        return {};
    }),
    runGroupP = runDimensionP.group().reduceSum(function(d) {
        return +d.Speed; });



function sel_stack(i) {
    return function(d) {
        return d.value[i];
    };
}

lineChart
    .width(s_lineChart.getPropertyValue("width").slice(0, - 2))
    .height(s_lineChart.getPropertyValue("height").slice(0, - 2))
    .chart(function(c) { return dc.lineChart(c).interpolate('basis'); })
    .x(d3.scale.linear().domain([0,currMax]))
    .brushOn(false)
    .elasticY(true)
    .dimension(runDimension)
    .group(runGroup)
    .mouseZoomable(true)
    .renderHorizontalGridLines(true)
    .seriesAccessor(function(d) {return d.key[0];})
    .keyAccessor(function(d) {return +d.key[1];})
    .valueAccessor(function(d) {return +d.value;})
    .legend(dc.legend().x(150).y(0).itemHeight(13).gap(224).horizontal(1).legendWidth(140).itemWidth(100));
lineChart.yAxis().tickFormat(function(d) {return d3.format(',d')(d);});

pieChart
    .width(s_pieChart.getPropertyValue("width").slice(0, - 2))
    .height(s_pieChart.getPropertyValue("height").slice(0, - 2))
    .innerRadius(50)
    .dimension(runDimensionP)
    .group(runGroupP)
    .colors(d3.scale.category10())
    .externalLabels(30)
    .externalRadiusPadding(35)
    .drawPaths(true)
    .legend(dc.legend().x(150).y(0).itemHeight(13).gap(250).horizontal(1).legendWidth(300).itemWidth(100))
    // workaround for #703: not enough data is accessible through .label() to display percentages
    .on('pretransition', function(chart) {
        pieChart.selectAll('text.pie-slice').text(function(d) {
            return d.data.key + ' ' + dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%';
        })
    })

    .innerRadius(50);

stackedChart
    .width(s_stackedChart.getPropertyValue("width").slice(0, - 2))
    .height(s_stackedChart.getPropertyValue("height").slice(0, - 2))
    .renderHorizontalGridLines(true)
    .x(d3.scale.linear().domain([1025409600000,1335758400000]))
    .xUnits(d3.time.months)
    .renderArea(true)
    .brushOn(false)
    .renderDataPoints(false)
    .clipPadding(10)
    .elasticY(true)
    .yAxisLabel("")
    .dimension(runDimensionP)
    .group(speedSumGroup, uniqueKeys[0], sel_stack(uniqueKeys[0])) // initial stack
    .legend(dc.legend().x(150).y(0).itemHeight(13).gap(250).horizontal(1).legendWidth(300).itemWidth(100));
    for(var i = 1; i<uniqueKeys.length; ++i)
        stackedChart.stack(speedSumGroup, uniqueKeys[i], sel_stack(uniqueKeys[i]));

stackedChart.xAxis().tickFormat(
    function (v) { return new Date(v).toDateString(); })
stackedChart.render();

dc.renderAll();

var it = 101;
var itTs = 1335758400000;


var dcinterval;
function changeDCUpdate (time){
    if (typeof dcinterval !== "undefined")
        clearInterval(dcinterval);
    dcinterval = setInterval(DCupdate, time);
}

function DCupdate () {
    itTs += 2592000000;

    dataStackedDC.shift();
    dataStackedDC.shift();
    dataStackedDC.shift();

    dataStackedDC.push({
        "Expt": tmp[1][0],
        "Run": itTs,
        "Speed": 37*Math.random()
    });

    dataStackedDC.push({
        "Expt": tmp[2][0],
        "Run": itTs,
        "Speed": 37*Math.random()
    });

    dataStackedDC.push({
        "Expt": tmp[3][0],
        "Run": itTs,
        "Speed": 37*Math.random()
    });

    dataLineGenDC.shift();
    dataLineGenDC.shift();

    dataLineGenDC.push({Expt: 'Sine Wave', Run: it, Speed: Math.sin(it/10)});
    dataLineGenDC.push({Expt: 'Cosine Wave', Run: it, Speed: Math.cos(it/10)});

    var pieChartFilters = pieChart.filters();
    var stackedChartFilters = stackedChart.filters();
    pieChart.filter(null);
    // stackedChart.filter(null);
    ndx.remove();
    ndx2.remove();
    ndx2.add(dataStackedDC);
    ndx.add(dataLineGenDC);
    lineChart.x(d3.scale.linear().domain([it-100,it]))
    stackedChart.x(d3.scale.linear().domain([itTs-(120 * 2592000000),itTs]))
    pieChart.filter([pieChartFilters]);




    dc.redrawAll();
    it += 1;

};