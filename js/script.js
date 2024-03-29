var colors = ['#EA614A', '#20649B', '#008836', '#6B96CA', '#A38456', '#A87A93', '#D19C95']

var dataAS = [
  [12.4,18.9,19.6,19.7,20.9,22.2,23.3,26.4,28.8,45.1],
  [53.8,56.8,59.3,59,51.3,56,43.7,45.2,63,33.7],
  [33.9,24.4,21.1,21.3,27.8,21.8,33,28.4,8.2,21.2]
];

var stranyAS = ["TOP09","SPD","KDU-ČSL","ODS","Zelení","ANO","STAN","Piráti","ČSSD","KSČM"];

var dataDS = [
  [31.5,23,20.8,20.5,20.1,18.2,16.1,15.1,12.5,9.6],
  [19.8,16.2,25.7,23,43.6,26.2,23.4,18.5,24.1,59.2],
  [30.8,14.8,29.5,21.8,38,20.4,21.4,21.9,17,31.1],
  [23.2,31.9,25.4,27,26.9,27.5,19.5,32.3,22.2,38.5]
];

var stranyDS = ["ODS","SPD","Piráti","STAN","TOP09","ANO","ČSSD","KDU-ČSL","KSČM","Zelení"];

var dataPrijmy = [
  [29.2,21.2,18.4,15.4,13.4],
  [27.8,20.1,22.2,24.1,20.6],
  [32.2,20.4,21.9,19.4,20.5],
  [30.2,28.2,21.7,26.2,17.8]
];

var dataObec = [
  [21.4,18.7,19.8,15.6,19.3],
  [31.8,26,24.6,17.3,13.6],
  [23.1,16.3,13,11.5,45.1],
  [29.9,24.9,24.7,21,15.2]
];

var dataVek = [
  [14.4,22.4,23.3,24.3,19.1,6.8],
  [37.8,22,20.9,18.3,22.6,18.2],
  [34.8,27.1,18.2,24.2,17.4,17.2],
  [30.9,21.8,24.8,22.0,22.6,17.3]
];

var dataVzdelani = [
  [13.3,19.8,17.1,24.1],
  [20.9,17,25.9,26.5],
  [18,15.3,24.3,35],
  [17.2,18.5,26.6,27.7]
];

var prijmy =["Nejvyšší příjmy", "Q2", "Q3", "Q4", "Nejnižší příjmy"];

var obec = ["Do 1000","Do 5000","Do 20000","Do 100000","Nad 100000"];

var vek = ["18-24","25-34","35-44","45-54","55-64","65-79"];

var vzdelani = ["ZŠ","SŠ bez mat.","SŠ s mat.","VŠ"];

$(function () {

    Highcharts.setOptions({
            lang: {
                months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
                shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                thousandsSep: '',
                decimalPoint:',',
                rangeSelectorZoom: 'Zobrazit'
            }
        });

Highcharts.chart('autaStrany', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Vlastnictví auta × volební preference'
    },
    subtitle: {
        text: 'Počet aut v domácnosti'
    },
    xAxis: {
        categories: stranyAS
    },
    yAxis: {
        title: {
            text: 'Podíl voličů strany'
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{point.series.name} v domácnosti: <b>{point.y} %</b> voličů strany<br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: 'Zdroj: Median'
    },
    series: [{
        name: 'Žádné auto',
        data: dataAS[0],
        color: colors[0]
    }, {
        name: 'Jedno auto',
        data: dataAS[1],
        color: colors[1]
    }, {
        name: 'Dvě a více aut',
        data: dataAS[2],
        color: colors[2]
    }]
});

Highcharts.chart('dopravaStrany', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Cestování × volební preference'
    },
    subtitle: {
        text: 'Podíl voličů, kteří v běžném týdnu využívají dopravní prostředek'
    },
    xAxis: {
        categories: stranyDS
    },
    yAxis: {
        title: {
            text: 'Podíl voličů strany'
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{point.series.name} v běžném týdnu využívá <b>{point.y} %</b> voličů strany<br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: 'Zdroj: Median'
    },
    series: [{
        name: 'Automobil',
        data: dataDS[0],
        color: colors[0]
    }, {
        name: 'Vlak',
        data: dataDS[1],
        color: colors[1],
        visible: false
    }, {
        name: 'Tramvaj',
        data: dataDS[2],
        color: colors[2],
        visible: false
    }, {
        name: 'Bicykl',
        data: dataDS[3],
        color: colors[4]
    }]
});

Highcharts.chart('prijmy', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Cestování × příjmy'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: prijmy
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{series.name} v běžném týdnu využívá <b>{point.y} %</b> v kategorii.<br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: ''
    },
    series: [{
        name: 'Automobil',
        data: dataPrijmy[0],
        color: colors[0]
    }, {
        name: 'Vlak',
        data: dataPrijmy[1],
        color: colors[1],
        visible: false
    }, {
        name: 'Tramvaj',
        data: dataPrijmy[2],
        color: colors[2],
        visible: false
    }, {
        name: 'Bicykl',
        data: dataPrijmy[3],
        color: colors[4],
        visible: false
    }]
});

Highcharts.chart('obec', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Cestování × velikost obce'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: obec
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{series.name} v běžném týdnu využívá <b>{point.y} %</b> v kategorii.<br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: ''
    },
    series: [{
        name: 'Automobil',
        data: dataObec[0],
        color: colors[0]
    }, {
        name: 'Vlak',
        data: dataObec[1],
        color: colors[1],
        visible: false
    }, {
        name: 'Tramvaj',
        data: dataObec[2],
        color: colors[2],
        visible: false
    }, {
        name: 'Bicykl',
        data: dataObec[3],
        color: colors[4],
        visible: false
    }]
});

Highcharts.chart('vek', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Cestování × věk'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: vek
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{series.name} v běžném týdnu využívá <b>{point.y} %</b> v kategorii.<br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: ''
    },
    series: [{
        name: 'Automobil',
        data: dataVek[0],
        color: colors[0]
    }, {
        name: 'Vlak',
        data: dataVek[1],
        color: colors[1],
        visible: false
    }, {
        name: 'Tramvaj',
        data: dataVek[2],
        color: colors[2],
        visible: false
    }, {
        name: 'Bicykl',
        data: dataVek[3],
        color: colors[4],
        visible: false
    }]
});

Highcharts.chart('vzdelani', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Cestování × vzdělání'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: vzdelani
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '{series.name} v běžném týdnu využívá <b>{point.y} %</b> v kategorii.<br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: ''
    },
    series: [{
        name: 'Automobil',
        data: dataVzdelani[0],
        color: colors[0]
    }, {
        name: 'Vlak',
        data: dataVzdelani[1],
        color: colors[1],
        visible: false
    }, {
        name: 'Tramvaj',
        data: dataVzdelani[2],
        color: colors[2],
        visible: false
    }, {
        name: 'Bicykl',
        data: dataVzdelani[3],
        color: colors[4],
        visible: false
    }]
});

});