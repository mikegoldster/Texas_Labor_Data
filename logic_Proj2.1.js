// Create a map object
var template = '<form id="popup-form">\
  <table class="popup-table">\
    <tr class="popup-table-row">\
      <td colspan=3>\
    <div id="plot">\
    </div>\
  </td>\
    </tr>\
  </table>\
</form>';

function layerClickHandler(e) {
    var marker = e.target;
    var properties = e.target.feature.properties;
    var cityName = properties.name;
    if (marker.hasOwnProperty('_popup')) {
        marker.unbindPopup();
    }
    console.log(cityName);
    marker.bindPopup(template);
    marker.openPopup();



    function makeplot() {
        Plotly.d3.csv("TX_BLS_DATA_MAY.csv", function (data) {
            data.sort(function (x, y) { return d3.ascending(x.TOT_EMP, y.TOT_EMP); });
            processData(data)
        });
    }
    function processData(allRows) {
        //console.log(allRows);
        var x = [], y = []; //x = category (OCC_TITLE), y = employed (TOT_EMP)
        for (var i = 0; i < allRows.length; i++) {
            var row = allRows[i];
            var cityWithTX = cityName + ', TX';
            if (row['Date'] == "5/1/2018") {
                if (row['AREA_NAME'] === cityWithTX) {
                    if (row['OCC_GROUP'] === 'major') {
                        //console.log(row);
                        /* row.sort(function(a, b) {
                          return b.TOT_EMP - a.TOT_EMP;
                        }); */
                        for (var j = 0; j < 10; j++) {
                            if (x.indexOf(row['OCC_TITLE']) == -1) {
                                x.push(row['OCC_TITLE']);
                                y.push(row['TOT_EMP']);
                            }
                        }
                    }
                }
            }
        }
        console.log('X', x, 'Y', y);
        makePlotly(x, y, cityName);
    }

    function makePlotly(x, y, cityName) {
        var plotDiv = L.DomUtil.get('plot');
        var traces = [{
            x: x,
            y: y,
            type: "bar",
            marker: {
                color: ['OCC_TITLE']
            },
            transforms: [{
                type: 'sort',
                target: 'y',
                order: 'descending'
            }],
            orientation: "v"
        }];
        var layout = {

            xaxis: {
                tickangle: 45,
                tickfont: {
                    size: 14,
                    color: 'rgb(107, 107, 107)'
                }
            },
            yaxis: {
                title: 'Total Employed',
                titlefont: {
                    size: 16,
                    color: 'rgba(107, 107, 107)'
                },
                xaxis: {
                    tickfont: {
                        size: 10,
                        color: 'rgba(107, 107, 107)'
                    }
                }
            },
            title: cityName + ": Burea of Labor Statistics May 2018",
            margin: {
                l: 80,
                r: 40,
                t: 60,
                b: 160
            }
        };

        Plotly.newPlot('plot', traces, layout);
    };
    makeplot();
}

var myMap2 = L.map('map2', {
    'center': [32.79939862, -96.78688493 ],
    'zoom': 6,
    'layers': [
        L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
            attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
            maxZoom: 18,
            id: "mapbox.streets",
            accessToken: API_KEY2
        }),
        L.geoJson({
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-99.74511524, 32.44630185]
                },
                "properties": {
                    "name": "Abilene",
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-101.84469924, 35.19920168]
                },
                "properties": {
                    "name": "Amarillo"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.74696190, 30.30026542]
                },
                "properties": {
                    "name": "Austin-Round Rock"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-94.12647423, 30.07969580]
                },
                "properties": {
                    "name": "Beaumont-Port Arthur"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-96.31422398, 30.60123608]
                },
                "properties": {
                    "name": "College Station-Bryan"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.40165738, 27.74254653]
                },
                "properties": {
                    "name": "Corpus Christi"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-96.78688493, 32.79939862]
                },
                "properties": {
                    "name": "Dallas-Fort Worth-Arlington"

                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-106.42270433, 31.79010101],
                },
                "properties": {
                    "name": "El Paso"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-95.38295619, 29.76266306],
                },
                "properties": {
                    "name": "Houston-The Woodlands-Sugar Land"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-99.49027193, 27.52415022],
                },
                "properties": {
                    "name": "Laredo"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-101.8773465327, 33.56465076],
                },
                "properties": {
                    "name": "Lubbock"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-102.09882120, 32.00494968],
                },
                "properties": {
                    "name": "Midland"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-98.51238604, 29.45130412],
                },
                "properties": {
                    "name": "San Antonio-New Braunfels"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.15564598, 31.55135152],
                },
                "properties": {
                    "name": "Waco"
                }
            },
            ]
        }, {
                onEachFeature: function (feature, layer) {
                    layer.on('click', layerClickHandler);
                }
            })
    ]
});


// An array containing each city's name, location, and occupation




