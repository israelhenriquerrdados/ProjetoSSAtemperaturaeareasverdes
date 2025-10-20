var wms_layers = [];

var lyr_Densidadedereasverdessetembro2024_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Densidade de áreas verdes setembro 2024<br />\
    <img src="styles/legend/Densidadedereasverdessetembro2024_0_0.png" /> <= 0,0500<br />\
    <img src="styles/legend/Densidadedereasverdessetembro2024_0_1.png" /> 0,0500 - 0,1000<br />\
    <img src="styles/legend/Densidadedereasverdessetembro2024_0_2.png" /> 0,1000 - 0,2500<br />\
    <img src="styles/legend/Densidadedereasverdessetembro2024_0_3.png" /> 0,2500 - 0,4000<br />\
    <img src="styles/legend/Densidadedereasverdessetembro2024_0_4.png" /> > 0,4000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Densidadedereasverdessetembro2024_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-4307963.642944, -1461726.174664, -4264009.306382, -1429269.872346]
        })
    });
var lyr_Temperaturasetembro2024_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Temperatura setembro 2024<br />\
    <img src="styles/legend/Temperaturasetembro2024_1_0.png" /> <= 24,0000<br />\
    <img src="styles/legend/Temperaturasetembro2024_1_1.png" /> 24,0000 - 27,0000<br />\
    <img src="styles/legend/Temperaturasetembro2024_1_2.png" /> 27,0000 - 30,0000<br />\
    <img src="styles/legend/Temperaturasetembro2024_1_3.png" /> 30,0000 - 32,0000<br />\
    <img src="styles/legend/Temperaturasetembro2024_1_4.png" /> 32,0000 - 34,0000<br />\
    <img src="styles/legend/Temperaturasetembro2024_1_5.png" /> > 34,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Temperaturasetembro2024_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-4307963.642944, -1461726.174664, -4264009.306382, -1429269.872346]
        })
    });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 0.502000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

lyr_Densidadedereasverdessetembro2024_0.setVisible(true);lyr_Temperaturasetembro2024_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);
var layersList = [lyr_Densidadedereasverdessetembro2024_0,lyr_Temperaturasetembro2024_1,lyr_GoogleMaps_2];
