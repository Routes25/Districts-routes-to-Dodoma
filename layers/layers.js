ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([29.329787, -10.291248, 41.461759, -0.958962]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_countr_border_1 = new ol.format.GeoJSON();
var features_countr_border_1 = format_countr_border_1.readFeatures(json_countr_border_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_countr_border_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_countr_border_1.addFeatures(features_countr_border_1);
var lyr_countr_border_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_countr_border_1, 
                style: style_countr_border_1,
                popuplayertitle: 'countr_border',
                interactive: false,
                title: '<img src="styles/legend/countr_border_1.png" /> countr_border'
            });
var format_Road_2 = new ol.format.GeoJSON();
var features_Road_2 = format_Road_2.readFeatures(json_Road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_2.addFeatures(features_Road_2);
var lyr_Road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_2, 
                style: style_Road_2,
                popuplayertitle: 'Road',
                interactive: true,
                title: '<img src="styles/legend/Road_2.png" /> Road'
            });
var format_DistrictOffice_3 = new ol.format.GeoJSON();
var features_DistrictOffice_3 = format_DistrictOffice_3.readFeatures(json_DistrictOffice_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DistrictOffice_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictOffice_3.addFeatures(features_DistrictOffice_3);
var lyr_DistrictOffice_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictOffice_3, 
                style: style_DistrictOffice_3,
                popuplayertitle: 'District Office',
                interactive: true,
                title: '<img src="styles/legend/DistrictOffice_3.png" /> District Office'
            });
var format_HQ_4 = new ol.format.GeoJSON();
var features_HQ_4 = format_HQ_4.readFeatures(json_HQ_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HQ_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HQ_4.addFeatures(features_HQ_4);
var lyr_HQ_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HQ_4, 
                style: style_HQ_4,
                popuplayertitle: 'H/Q',
                interactive: true,
                title: '<img src="styles/legend/HQ_4.png" /> H/Q'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_countr_border_1.setVisible(true);lyr_Road_2.setVisible(true);lyr_DistrictOffice_3.setVisible(true);lyr_HQ_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_countr_border_1,lyr_Road_2,lyr_DistrictOffice_3,lyr_HQ_4];
lyr_countr_border_1.set('fieldAliases', {'country_co': 'country_co', });
lyr_Road_2.set('fieldAliases', {'Name': 'Name', 'Distance': 'Distance', });
lyr_DistrictOffice_3.set('fieldAliases', {'Name': 'Name', });
lyr_HQ_4.set('fieldAliases', {'Name': 'Name', 'x': 'x', 'y': 'y', });
lyr_countr_border_1.set('fieldImages', {'country_co': 'TextEdit', });
lyr_Road_2.set('fieldImages', {'Name': 'TextEdit', 'Distance': 'TextEdit', });
lyr_DistrictOffice_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_HQ_4.set('fieldImages', {'Name': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_countr_border_1.set('fieldLabels', {'country_co': 'no label', });
lyr_Road_2.set('fieldLabels', {'Name': 'no label', 'Distance': 'no label', });
lyr_DistrictOffice_3.set('fieldLabels', {'Name': 'no label', });
lyr_HQ_4.set('fieldLabels', {'Name': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_HQ_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});