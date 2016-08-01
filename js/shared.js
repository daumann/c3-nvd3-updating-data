/**
 * Created by aumann on 01.08.16.
 */

let dataLineGenNVD3 = () => {
    var sin = [],
        cos = [];

    for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.sin(i/10)});
        cos.push({x: i, y: .5 * Math.cos(i/10)});
    }

    return [
        {
            values: sin,
            key: 'Sine Wave',
            color: '#ff7f0e'
        },
        {
            values: cos,
            key: 'Cosine Wave',
            color: '#2ca02c'
        }
    ];
};
let dataStackedGenNVD3 = () => {
    return [
        {
            "key" : "North America" ,
            "values" : [ [ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832] , [ 1030766400000 , 21.02286281168] , [ 1033358400000 , 22.093608385173] , [ 1036040400000 , 25.108079299458] , [ 1038632400000 , 26.982389242348] , [ 1041310800000 , 19.828984957662] , [ 1043989200000 , 19.914055036294] , [ 1046408400000 , 19.436150539916] , [ 1049086800000 , 21.558650338602] , [ 1051675200000 , 24.395594061773] , [ 1054353600000 , 24.747089309384] , [ 1056945600000 , 23.491755498807] , [ 1059624000000 , 23.376634878164] , [ 1062302400000 , 24.581223154533] , [ 1064894400000 , 24.922476843538] , [ 1067576400000 , 27.357712939042] , [ 1070168400000 , 26.503020572593] , [ 1072846800000 , 26.658901244878] , [ 1075525200000 , 27.065704156445] , [ 1078030800000 , 28.735320452588] , [ 1080709200000 , 31.572277846319] , [ 1083297600000 , 30.932161503638] , [ 1085976000000 , 31.627029785554] , [ 1088568000000 , 28.728743674232] , [ 1091246400000 , 26.858365172675] , [ 1093924800000 , 27.279922830032] , [ 1096516800000 , 34.408301211324] , [ 1099195200000 , 34.794362930439] , [ 1101790800000 , 35.609978198951] , [ 1104469200000 , 33.574394968037] , [ 1107147600000 , 31.979405070598] , [ 1109566800000 , 31.19009040297] , [ 1112245200000 , 31.083933968994] , [ 1114833600000 , 29.668971113185] , [ 1117512000000 , 31.490638014379] , [ 1120104000000 , 31.818617451128] , [ 1122782400000 , 32.960314008183] , [ 1125460800000 , 31.313383196209] , [ 1128052800000 , 33.125486081852] , [ 1130734800000 , 32.791805509149] , [ 1133326800000 , 33.506038030366] , [ 1136005200000 , 26.96501697216] , [ 1138683600000 , 27.38478809681] , [ 1141102800000 , 27.371377218209] , [ 1143781200000 , 26.309915460827] , [ 1146369600000 , 26.425199957518] , [ 1149048000000 , 26.823411519396] , [ 1151640000000 , 23.850443591587] , [ 1154318400000 , 23.158355444054] , [ 1156996800000 , 22.998689393695] , [ 1159588800000 , 27.9771285113] , [ 1162270800000 , 29.073672469719] , [ 1164862800000 , 28.587640408904] , [ 1167541200000 , 22.788453687637] , [ 1170219600000 , 22.429199073597] , [ 1172638800000 , 22.324103271052] , [ 1175313600000 , 17.558388444187] , [ 1177905600000 , 16.769518096208] , [ 1180584000000 , 16.214738201301] , [ 1183176000000 , 18.729632971229] , [ 1185854400000 , 18.814523318847] , [ 1188532800000 , 19.789986451358] , [ 1191124800000 , 17.070049054933] , [ 1193803200000 , 16.121349575716] , [ 1196398800000 , 15.141659430091] , [ 1199077200000 , 17.175388025297] , [ 1201755600000 , 17.286592443522] , [ 1204261200000 , 16.323141626568] , [ 1206936000000 , 19.231263773952] , [ 1209528000000 , 18.446256391095] , [ 1212206400000 , 17.822632399764] , [ 1214798400000 , 15.53936647598] , [ 1217476800000 , 15.255131790217] , [ 1220155200000 , 15.660963922592] , [ 1222747200000 , 13.254482273698] , [ 1225425600000 , 11.920796202299] , [ 1228021200000 , 12.122809090924] , [ 1230699600000 , 15.691026271393] , [ 1233378000000 , 14.720881635107] , [ 1235797200000 , 15.387939360044] , [ 1238472000000 , 13.765436672228] , [ 1241064000000 , 14.631445864799] , [ 1243742400000 , 14.292446536221] , [ 1246334400000 , 16.170071367017] , [ 1249012800000 , 15.948135554337] , [ 1251691200000 , 16.612872685134] , [ 1254283200000 , 18.778338719091] , [ 1256961600000 , 16.756026065421] , [ 1259557200000 , 19.385804443146] , [ 1262235600000 , 22.950590240168] , [ 1264914000000 , 23.61159018141] , [ 1267333200000 , 25.708586989581] , [ 1270008000000 , 26.883915999885] , [ 1272600000000 , 25.893486687065] , [ 1275278400000 , 24.678914263176] , [ 1277870400000 , 25.937275793024] , [ 1280548800000 , 29.461381693838] , [ 1283227200000 , 27.357322961861] , [ 1285819200000 , 29.057235285673] , [ 1288497600000 , 28.549434189386] , [ 1291093200000 , 28.506352379724] , [ 1293771600000 , 29.449241421598] , [ 1296450000000 , 25.796838168807] , [ 1298869200000 , 28.740145449188] , [ 1301544000000 , 22.091744141872] , [ 1304136000000 , 25.07966254541] , [ 1306814400000 , 23.674906973064] , [ 1309406400000 , 23.418002742929] , [ 1312084800000 , 23.24364413887] , [ 1314763200000 , 31.591854066817] , [ 1317355200000 , 31.497112374114] , [ 1320033600000 , 26.67238082043] , [ 1322629200000 , 27.297080015495] , [ 1325307600000 , 20.174315530051] , [ 1327986000000 , 19.631084213898] , [ 1330491600000 , 20.366462219461] , [ 1333166400000 , 19.284784434185] , [ 1335758400000 , 19.157810257624]]
        },

        {
            "key" : "Asia" ,
            "values" : [ [ 1025409600000 , 13.153938631352] , [ 1028088000000 , 12.456410521864] , [ 1030766400000 , 12.537048663919] , [ 1033358400000 , 13.947386398309] , [ 1036040400000 , 14.421680682568] , [ 1038632400000 , 14.143238262286] , [ 1041310800000 , 12.229635347478] , [ 1043989200000 , 12.508479916948] , [ 1046408400000 , 12.155368409526] , [ 1049086800000 , 13.335455563994] , [ 1051675200000 , 12.888210138167] , [ 1054353600000 , 12.842092790511] , [ 1056945600000 , 12.513816474199] , [ 1059624000000 , 12.21453674494] , [ 1062302400000 , 11.750848343935] , [ 1064894400000 , 10.526579636787] , [ 1067576400000 , 10.873596086087] , [ 1070168400000 , 11.019967131519] , [ 1072846800000 , 11.235789380602] , [ 1075525200000 , 11.859910850657] , [ 1078030800000 , 12.531031616536] , [ 1080709200000 , 11.360451067019] , [ 1083297600000 , 11.456244780202] , [ 1085976000000 , 11.436991407309] , [ 1088568000000 , 11.638595744327] , [ 1091246400000 , 11.190418301469] , [ 1093924800000 , 11.835608007589] , [ 1096516800000 , 11.540980244475] , [ 1099195200000 , 10.958762325687] , [ 1101790800000 , 10.885791159509] , [ 1104469200000 , 13.605810720109] , [ 1107147600000 , 13.128978067437] , [ 1109566800000 , 13.119012086882] , [ 1112245200000 , 13.003706129783] , [ 1114833600000 , 13.326996807689] , [ 1117512000000 , 13.547947991743] , [ 1120104000000 , 12.807959646616] , [ 1122782400000 , 12.931763821068] , [ 1125460800000 , 12.795359993008] , [ 1128052800000 , 9.6998935538319] , [ 1130734800000 , 9.3473740089131] , [ 1133326800000 , 9.36902067716] , [ 1136005200000 , 14.258619539875] , [ 1138683600000 , 14.21241095603] , [ 1141102800000 , 13.973193618249] , [ 1143781200000 , 15.218233920664] , [ 1146369600000 , 14.382109727451] , [ 1149048000000 , 13.894310878491] , [ 1151640000000 , 15.593086090031] , [ 1154318400000 , 16.244839695189] , [ 1156996800000 , 16.017088850647] , [ 1159588800000 , 14.183951830057] , [ 1162270800000 , 14.148523245696] , [ 1164862800000 , 13.424326059971] , [ 1167541200000 , 12.974450435754] , [ 1170219600000 , 13.232470418021] , [ 1172638800000 , 13.318762655574] , [ 1175313600000 , 15.961407746104] , [ 1177905600000 , 16.287714639805] , [ 1180584000000 , 16.24659058389] , [ 1183176000000 , 17.564505594808] , [ 1185854400000 , 17.872725373164] , [ 1188532800000 , 18.018998508756] , [ 1191124800000 , 15.584518016602] , [ 1193803200000 , 15.480850647182] , [ 1196398800000 , 15.699120036985] , [ 1199077200000 , 19.184281817226] , [ 1201755600000 , 19.691226605205] , [ 1204261200000 , 18.982314051293] , [ 1206936000000 , 18.707820309008] , [ 1209528000000 , 17.459630929759] , [ 1212206400000 , 16.500616076782] , [ 1214798400000 , 18.086324003978] , [ 1217476800000 , 18.929464156259] , [ 1220155200000 , 18.233728682084] , [ 1222747200000 , 16.315776297325] , [ 1225425600000 , 14.632892190251] , [ 1228021200000 , 14.667835024479] , [ 1230699600000 , 13.946993947309] , [ 1233378000000 , 14.394304684398] , [ 1235797200000 , 13.724462792967] , [ 1238472000000 , 10.930879035807] , [ 1241064000000 , 9.8339915513708] , [ 1243742400000 , 10.053858541872] , [ 1246334400000 , 11.786998438286] , [ 1249012800000 , 11.780994901769] , [ 1251691200000 , 11.305889670277] , [ 1254283200000 , 10.918452290083] , [ 1256961600000 , 9.6811395055706] , [ 1259557200000 , 10.971529744038] , [ 1262235600000 , 13.330210480209] , [ 1264914000000 , 14.592637568961] , [ 1267333200000 , 14.605329141157] , [ 1270008000000 , 13.936853794037] , [ 1272600000000 , 12.189480759072] , [ 1275278400000 , 11.676151385046] , [ 1277870400000 , 13.058852800018] , [ 1280548800000 , 13.62891543203] , [ 1283227200000 , 13.811107569918] , [ 1285819200000 , 13.786494560786] , [ 1288497600000 , 14.045162857531] , [ 1291093200000 , 13.697412447286] , [ 1293771600000 , 13.677681376221] , [ 1296450000000 , 19.96151186453] , [ 1298869200000 , 21.049198298156] , [ 1301544000000 , 22.687631094009] , [ 1304136000000 , 25.469010617433] , [ 1306814400000 , 24.88379943712] , [ 1309406400000 , 24.203843814249] , [ 1312084800000 , 22.138760964036] , [ 1314763200000 , 16.034636966228] , [ 1317355200000 , 15.394958944555] , [ 1320033600000 , 12.62564246197] , [ 1322629200000 , 12.973735699739] , [ 1325307600000 , 15.78601833615] , [ 1327986000000 , 15.227368020134] , [ 1330491600000 , 15.899752650733] , [ 1333166400000 , 15.661317319168] , [ 1335758400000 , 15.359891177281]]
        } ,

        {
            "key" : "Europe" ,
            "values" : [ [ 1025409600000 , 9.3433263069351] , [ 1028088000000 , 8.4583069475546] , [ 1030766400000 , 8.0342398154196] , [ 1033358400000 , 8.1538966876572] , [ 1036040400000 , 10.743604786849] , [ 1038632400000 , 12.349366155851] , [ 1041310800000 , 10.742682503899] , [ 1043989200000 , 11.360983869935] , [ 1046408400000 , 11.441336039535] , [ 1049086800000 , 10.897508791837] , [ 1051675200000 , 11.469101547709] , [ 1054353600000 , 12.086311476742] , [ 1056945600000 , 8.0697180773504] , [ 1059624000000 , 8.2004392233445] , [ 1062302400000 , 8.4566434900643] , [ 1064894400000 , 7.9565760979059] , [ 1067576400000 , 9.3764619255827] , [ 1070168400000 , 9.0747664160538] , [ 1072846800000 , 10.508939004673] , [ 1075525200000 , 10.69936754483] , [ 1078030800000 , 10.681562399145] , [ 1080709200000 , 13.184786109406] , [ 1083297600000 , 12.668213052351] , [ 1085976000000 , 13.430509403986] , [ 1088568000000 , 12.393086349213] , [ 1091246400000 , 11.942374044842] , [ 1093924800000 , 12.062227685742] , [ 1096516800000 , 11.969974363623] , [ 1099195200000 , 12.14374574055] , [ 1101790800000 , 12.69422821995] , [ 1104469200000 , 9.1235211044692] , [ 1107147600000 , 8.758211757584] , [ 1109566800000 , 8.8072309258443] , [ 1112245200000 , 11.687595946835] , [ 1114833600000 , 11.079723082664] , [ 1117512000000 , 12.049712896076] , [ 1120104000000 , 10.725319428684] , [ 1122782400000 , 10.844849996286] , [ 1125460800000 , 10.833535488461] , [ 1128052800000 , 17.180932407865] , [ 1130734800000 , 15.894764896516] , [ 1133326800000 , 16.412751299498] , [ 1136005200000 , 12.573569093402] , [ 1138683600000 , 13.242301508051] , [ 1141102800000 , 12.863536342041] , [ 1143781200000 , 21.034044171629] , [ 1146369600000 , 21.419084618802] , [ 1149048000000 , 21.142678863692] , [ 1151640000000 , 26.56848967753] , [ 1154318400000 , 24.839144939906] , [ 1156996800000 , 25.456187462166] , [ 1159588800000 , 26.350164502825] , [ 1162270800000 , 26.478333205189] , [ 1164862800000 , 26.425979547846] , [ 1167541200000 , 28.191461582256] , [ 1170219600000 , 28.930307448808] , [ 1172638800000 , 29.521413891117] , [ 1175313600000 , 28.188285966466] , [ 1177905600000 , 27.704619625831] , [ 1180584000000 , 27.49086242483] , [ 1183176000000 , 28.770679721286] , [ 1185854400000 , 29.06048067145] , [ 1188532800000 , 28.240998844973] , [ 1191124800000 , 33.004893194128] , [ 1193803200000 , 34.075180359928] , [ 1196398800000 , 32.548560664834] , [ 1199077200000 , 30.629727432729] , [ 1201755600000 , 28.642858788159] , [ 1204261200000 , 27.973575227843] , [ 1206936000000 , 27.393351882726] , [ 1209528000000 , 28.476095288522] , [ 1212206400000 , 29.29667866426] , [ 1214798400000 , 29.222333802896] , [ 1217476800000 , 28.092966093842] , [ 1220155200000 , 28.107159262922] , [ 1222747200000 , 25.482974832099] , [ 1225425600000 , 21.208115993834] , [ 1228021200000 , 20.295043095268] , [ 1230699600000 , 15.925754618402] , [ 1233378000000 , 17.162864628346] , [ 1235797200000 , 17.084345773174] , [ 1238472000000 , 22.24600710228] , [ 1241064000000 , 24.530543998508] , [ 1243742400000 , 25.084184918241] , [ 1246334400000 , 16.606166527359] , [ 1249012800000 , 17.239620011628] , [ 1251691200000 , 17.336739127379] , [ 1254283200000 , 25.478492475754] , [ 1256961600000 , 23.017152085244] , [ 1259557200000 , 25.617745423684] , [ 1262235600000 , 24.061133998641] , [ 1264914000000 , 23.223933318646] , [ 1267333200000 , 24.425887263936] , [ 1270008000000 , 35.501471156693] , [ 1272600000000 , 33.775013878675] , [ 1275278400000 , 30.417993630285] , [ 1277870400000 , 30.023598978467] , [ 1280548800000 , 33.327519522436] , [ 1283227200000 , 31.963388450372] , [ 1285819200000 , 30.49896723209] , [ 1288497600000 , 32.403696817913] , [ 1291093200000 , 31.47736071922] , [ 1293771600000 , 31.53259666241] , [ 1296450000000 , 41.760282761548] , [ 1298869200000 , 45.605771243237] , [ 1301544000000 , 39.986557966215] , [ 1304136000000 , 43.84633051005] , [ 1306814400000 , 39.857316881858] , [ 1309406400000 , 37.675127768207] , [ 1312084800000 , 35.775077970313] , [ 1314763200000 , 48.631009702578] , [ 1317355200000 , 42.830831754505] , [ 1320033600000 , 35.611502589362] , [ 1322629200000 , 35.320136981738] , [ 1325307600000 , 31.564136901516] , [ 1327986000000 , 32.074407502433] , [ 1330491600000 , 35.053013769977] , [ 1333166400000 , 33.873085184128] , [ 1335758400000 , 32.321039427046]]
        }
    ]

};
let dataDonutGenNVD3 = () => {
    return  [
        {
            "label": "One",
            "value" : 29.765957771107
        } ,
        {
            "label": "Two",
            "value" : 0
        } ,
        {
            "label": "Three",
            "value" : 32.807804682612
        } ,
        {
            "label": "Four",
            "value" : 196.45946739256
        } ,
        {
            "label": "Five",
            "value" : 0.19434030906893
        } ,
        {
            "label": "Six",
            "value" : 98.079782601442
        } ,
        {
            "label": "Seven",
            "value" : 13.925743130903
        } ,
        {
            "label": "Eight",
            "value" : 5.1387322875705
        }
    ];
};

let dataLineGenC3 = () => {
    let x = [ 'x'],
        sin = [ 'Sine Wave'],
        cos = ['Cosine Wave'];

    for (var i = 0; i < 100; i++) {
        x.push(i);
        sin.push(Math.sin(i/10));
        cos.push(.5 * Math.cos(i/10));
    }

    return [
        x,
        sin,
        cos
    ];
};
let dataStackedGenC3 = () => {
    return [
        ['x', 1025409600000,1028088000000,1030766400000,1033358400000,1036040400000,1038632400000,1041310800000,1043989200000,1046408400000,1049086800000,1051675200000,1054353600000,1056945600000,1059624000000,1062302400000,1064894400000,1067576400000,1070168400000,1072846800000,1075525200000,1078030800000,1080709200000,1083297600000,1085976000000,1088568000000,1091246400000,1093924800000,1096516800000,1099195200000,1101790800000,1104469200000,1107147600000,1109566800000,1112245200000,1114833600000,1117512000000,1120104000000,1122782400000,1125460800000,1128052800000,1130734800000,1133326800000,1136005200000,1138683600000,1141102800000,1143781200000,1146369600000,1149048000000,1151640000000,1154318400000,1156996800000,1159588800000,1162270800000,1164862800000,1167541200000,1170219600000,1172638800000,1175313600000,1177905600000,1180584000000,1183176000000,1185854400000,1188532800000,1191124800000,1193803200000,1196398800000,1199077200000,1201755600000,1204261200000,1206936000000,1209528000000,1212206400000,1214798400000,1217476800000,1220155200000,1222747200000,1225425600000,1228021200000,1230699600000,1233378000000,1235797200000,1238472000000,1241064000000,1243742400000,1246334400000,1249012800000,1251691200000,1254283200000,1256961600000,1259557200000,1262235600000,1264914000000,1267333200000,1270008000000,1272600000000,1275278400000,1277870400000,1280548800000,1283227200000,1285819200000,1288497600000,1291093200000,1293771600000,1296450000000,1298869200000,1301544000000,1304136000000,1306814400000,1309406400000,1312084800000,1314763200000,1317355200000,1320033600000,1322629200000,1325307600000,1327986000000,1330491600000,1333166400000,1335758400000],
        ['North America', 23.041422681023,19.854291255832,21.02286281168,22.093608385173,25.108079299458,26.982389242348,19.828984957662,19.914055036294,19.436150539916,21.558650338602,24.395594061773,24.747089309384,23.491755498807,23.376634878164,24.581223154533,24.922476843538,27.357712939042,26.503020572593,26.658901244878,27.065704156445,28.735320452588,31.572277846319,30.932161503638,31.627029785554,28.728743674232,26.858365172675,27.279922830032,34.408301211324,34.794362930439,35.609978198951,33.574394968037,31.979405070598,31.19009040297,31.083933968994,29.668971113185,31.490638014379,31.818617451128,32.960314008183,31.313383196209,33.125486081852,32.791805509149,33.506038030366,26.96501697216,27.38478809681,27.371377218209,26.309915460827,26.425199957518,26.823411519396,23.850443591587,23.158355444054,22.998689393695,27.9771285113,29.073672469719,28.587640408904,22.788453687637,22.429199073597,22.324103271052,17.558388444187,16.769518096208,16.214738201301,18.729632971229,18.814523318847,19.789986451358,17.070049054933,16.121349575716,15.141659430091,17.175388025297,17.286592443522,16.323141626568,19.231263773952,18.446256391095,17.822632399764,15.53936647598,15.255131790217,15.660963922592,13.254482273698,11.920796202299,12.122809090924,15.691026271393,14.720881635107,15.387939360044,13.765436672228,14.631445864799,14.292446536221,16.170071367017,15.948135554337,16.612872685134,18.778338719091,16.756026065421,19.385804443146,22.950590240168,23.61159018141,25.708586989581,26.883915999885,25.893486687065,24.678914263176,25.937275793024,29.461381693838,27.357322961861,29.057235285673,28.549434189386,28.506352379724,29.449241421598,25.796838168807,28.740145449188,22.091744141872,25.07966254541,23.674906973064,23.418002742929,23.24364413887,31.591854066817,31.497112374114,26.67238082043,27.297080015495,20.174315530051,19.631084213898,20.366462219461,19.284784434185,19.157810257624],
        ['Asia', 13.153938631352,12.456410521864,12.537048663919,13.947386398309,14.421680682568,14.143238262286,12.229635347478,12.508479916948,12.155368409526,13.335455563994,12.888210138167,12.842092790511,12.513816474199,12.21453674494,11.750848343935,10.526579636787,10.873596086087,11.019967131519,11.235789380602,11.859910850657,12.531031616536,11.360451067019,11.456244780202,11.436991407309,11.638595744327,11.190418301469,11.835608007589,11.540980244475,10.958762325687,10.885791159509,13.605810720109,13.128978067437,13.119012086882,13.003706129783,13.326996807689,13.547947991743,12.807959646616,12.931763821068,12.795359993008,9.6998935538319,9.3473740089131,9.36902067716,14.258619539875,14.21241095603,13.973193618249,15.218233920664,14.382109727451,13.894310878491,15.593086090031,16.244839695189,16.017088850647,14.183951830057,14.148523245696,13.424326059971,12.974450435754,13.232470418021,13.318762655574,15.961407746104,16.287714639805,16.24659058389,17.564505594808,17.872725373164,18.018998508756,15.584518016602,15.480850647182,15.699120036985,19.184281817226,19.691226605205,18.982314051293,18.707820309008,17.459630929759,16.500616076782,18.086324003978,18.929464156259,18.233728682084,16.315776297325,14.632892190251,14.667835024479,13.946993947309,14.394304684398,13.724462792967,10.930879035807,9.8339915513708,10.053858541872,11.786998438286,11.780994901769,11.305889670277,10.918452290083,9.6811395055706,10.971529744038,13.330210480209,14.592637568961,14.605329141157,13.936853794037,12.189480759072,11.676151385046,13.058852800018,13.62891543203,13.811107569918,13.786494560786,14.045162857531,13.697412447286,13.677681376221,19.96151186453,21.049198298156,22.687631094009,25.469010617433,24.88379943712,24.203843814249,22.138760964036,16.034636966228,15.394958944555,12.62564246197,12.973735699739,15.78601833615,15.227368020134,15.899752650733,15.661317319168,15.359891177281],
        ['Europe', 9.3433263069351,8.4583069475546,8.0342398154196,8.1538966876572,10.743604786849,12.349366155851,10.742682503899,11.360983869935,11.441336039535,10.897508791837,11.469101547709,12.086311476742,8.0697180773504,8.2004392233445,8.4566434900643,7.9565760979059,9.3764619255827,9.0747664160538,10.508939004673,10.69936754483,10.681562399145,13.184786109406,12.668213052351,13.430509403986,12.393086349213,11.942374044842,12.062227685742,11.969974363623,12.14374574055,12.69422821995,9.1235211044692,8.758211757584,8.8072309258443,11.687595946835,11.079723082664,12.049712896076,10.725319428684,10.844849996286,10.833535488461,17.180932407865,15.894764896516,16.412751299498,12.573569093402,13.242301508051,12.863536342041,21.034044171629,21.419084618802,21.142678863692,26.56848967753,24.839144939906,25.456187462166,26.350164502825,26.478333205189,26.425979547846,28.191461582256,28.930307448808,29.521413891117,28.188285966466,27.704619625831,27.49086242483,28.770679721286,29.06048067145,28.240998844973,33.004893194128,34.075180359928,32.548560664834,30.629727432729,28.642858788159,27.973575227843,27.393351882726,28.476095288522,29.29667866426,29.222333802896,28.092966093842,28.107159262922,25.482974832099,21.208115993834,20.295043095268,15.925754618402,17.162864628346,17.084345773174,22.24600710228,24.530543998508,25.084184918241,16.606166527359,17.239620011628,17.336739127379,25.478492475754,23.017152085244,25.617745423684,24.061133998641,23.223933318646,24.425887263936,35.501471156693,33.775013878675,30.417993630285,30.023598978467,33.327519522436,31.963388450372,30.49896723209,32.403696817913,31.47736071922,31.53259666241,41.760282761548,45.605771243237,39.986557966215,43.84633051005,39.857316881858,37.675127768207,35.775077970313,48.631009702578,42.830831754505,35.611502589362,35.320136981738,31.564136901516,32.074407502433,35.053013769977,33.873085184128,32.321039427046]
    ]

};
let dataDonutGenC3 = () => {
    return  [
        [
            "One",
            29.765957771107
        ] ,
        [
            "Two",
            0
        ] ,
        [
             "Three",
            32.807804682612
        ] ,
        [
             "Four",
            196.45946739256
        ] ,
        [
             "Five",
            0.19434030906893
        ] ,
        [
             "Six",
            98.079782601442
        ] ,
        [
             "Seven",
            13.925743130903
        ] ,
        [
             "Eight",
            5.1387322875705
        ]
    ];
};

let dataLine = dataLineGenNVD3();
let dataStacked = dataStackedGenNVD3();
let dataDonut = dataDonutGenNVD3();

let dataLineC3 = dataLineGenC3();
let dataStackedC3 = dataStackedGenC3();
let dataDonutC3 = dataDonutGenC3();