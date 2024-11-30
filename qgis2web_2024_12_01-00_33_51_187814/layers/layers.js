var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: "مناطق المملكة العربية السعودية",
                interactive: false,
                title: '<img src="styles/legend/_0.png" /> مناطق المملكة العربية السعودية'
            });
var format_Export_Output_1 = new ol.format.GeoJSON();
var features_Export_Output_1 = format_Export_Output_1.readFeatures(json_Export_Output_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_1.addFeatures(features_Export_Output_1);
var lyr_Export_Output_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_Output_1, 
                style: style_Export_Output_1,
                popuplayertitle: "Export_Output",
                interactive: true,
    title: 'Export_Output<br />\
    <img src="styles/legend/Export_Output_1_0.png" /> ٢٨ - ٥٥<br />\
    <img src="styles/legend/Export_Output_1_1.png" /> ٥٥ - ٦٨<br />\
    <img src="styles/legend/Export_Output_1_2.png" /> ٦٨ - ٩٢<br />\
    <img src="styles/legend/Export_Output_1_3.png" /> ٩٢ - ١٢٤<br />\
    <img src="styles/legend/Export_Output_1_4.png" /> ١٢٤ - ٢١٤<br />'
        });

lyr__0.setVisible(true);lyr_Export_Output_1.setVisible(true);
var layersList = [lyr__0,lyr_Export_Output_1];
lyr__0.set('fieldAliases', {'Name': 'Name', 'االذك': 'االذك', });
lyr_Export_Output_1.set('fieldAliases', {'A': 'A', 'station': 'station', 'y': 'y', 'x': 'x', 'value': 'value', });
lyr__0.set('fieldImages', {'Name': 'TextEdit', 'االذك': 'TextEdit', });
lyr_Export_Output_1.set('fieldImages', {'A': 'TextEdit', 'station': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'value': 'TextEdit', });
lyr__0.set('fieldLabels', {'Name': 'no label', 'االذك': 'no label', });
lyr_Export_Output_1.set('fieldLabels', {'A': 'hidden field', 'station': 'no label', 'y': 'hidden field', 'x': 'hidden field', 'value': 'no label', });
lyr_Export_Output_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});