var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RisikoRendahBanjir_2 = new ol.format.GeoJSON();
var features_RisikoRendahBanjir_2 = format_RisikoRendahBanjir_2.readFeatures(json_RisikoRendahBanjir_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoRendahBanjir_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoRendahBanjir_2.addFeatures(features_RisikoRendahBanjir_2);
var lyr_RisikoRendahBanjir_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RisikoRendahBanjir_2, 
                style: style_RisikoRendahBanjir_2,
                interactive: true,
                title: '<img src="styles/legend/RisikoRendahBanjir_2.png" /> Risiko Rendah Banjir'
            });
var format_RisikoSedangBanjir_3 = new ol.format.GeoJSON();
var features_RisikoSedangBanjir_3 = format_RisikoSedangBanjir_3.readFeatures(json_RisikoSedangBanjir_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoSedangBanjir_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoSedangBanjir_3.addFeatures(features_RisikoSedangBanjir_3);
var lyr_RisikoSedangBanjir_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RisikoSedangBanjir_3, 
                style: style_RisikoSedangBanjir_3,
                interactive: true,
                title: '<img src="styles/legend/RisikoSedangBanjir_3.png" /> Risiko Sedang Banjir'
            });
var format_RisikoTinggiBanjir_4 = new ol.format.GeoJSON();
var features_RisikoTinggiBanjir_4 = format_RisikoTinggiBanjir_4.readFeatures(json_RisikoTinggiBanjir_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoTinggiBanjir_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoTinggiBanjir_4.addFeatures(features_RisikoTinggiBanjir_4);
var lyr_RisikoTinggiBanjir_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RisikoTinggiBanjir_4, 
                style: style_RisikoTinggiBanjir_4,
                interactive: true,
                title: '<img src="styles/legend/RisikoTinggiBanjir_4.png" /> Risiko Tinggi Banjir'
            });
var format_Sungai_5 = new ol.format.GeoJSON();
var features_Sungai_5 = format_Sungai_5.readFeatures(json_Sungai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_5.addFeatures(features_Sungai_5);
var lyr_Sungai_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_5, 
                style: style_Sungai_5,
                interactive: true,
                title: '<img src="styles/legend/Sungai_5.png" /> Sungai'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_RisikoRendahBanjir_2.setVisible(true);lyr_RisikoSedangBanjir_3.setVisible(true);lyr_RisikoTinggiBanjir_4.setVisible(true);lyr_Sungai_5.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_OpenStreetMap_1,lyr_RisikoRendahBanjir_2,lyr_RisikoSedangBanjir_3,lyr_RisikoTinggiBanjir_4,lyr_Sungai_5];
lyr_RisikoRendahBanjir_2.set('fieldAliases', {'Kelas': 'Kelas', 'Luas': 'Luas', });
lyr_RisikoSedangBanjir_3.set('fieldAliases', {'Kelas': 'Kelas', 'Luas': 'Luas', });
lyr_RisikoTinggiBanjir_4.set('fieldAliases', {'Kerentanan': 'Kerentanan', 'skor_rawan': 'skor_rawan', 'skor_kapst': 'skor_kapst', 'resiko': 'resiko', 'Luas': 'Luas', 'Kelas': 'Kelas', });
lyr_Sungai_5.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'id': 'id', });
lyr_RisikoRendahBanjir_2.set('fieldImages', {'Kelas': 'TextEdit', 'Luas': 'TextEdit', });
lyr_RisikoSedangBanjir_3.set('fieldImages', {'Kelas': 'TextEdit', 'Luas': 'TextEdit', });
lyr_RisikoTinggiBanjir_4.set('fieldImages', {'Kerentanan': 'TextEdit', 'skor_rawan': 'TextEdit', 'skor_kapst': 'TextEdit', 'resiko': 'TextEdit', 'Luas': 'TextEdit', 'Kelas': 'TextEdit', });
lyr_Sungai_5.set('fieldImages', {'Kabupaten': 'TextEdit', 'id': 'TextEdit', });
lyr_RisikoRendahBanjir_2.set('fieldLabels', {'Kelas': 'no label', 'Luas': 'no label', });
lyr_RisikoSedangBanjir_3.set('fieldLabels', {'Kelas': 'no label', 'Luas': 'no label', });
lyr_RisikoTinggiBanjir_4.set('fieldLabels', {'Kerentanan': 'no label', 'skor_rawan': 'no label', 'skor_kapst': 'no label', 'resiko': 'no label', 'Luas': 'no label', 'Kelas': 'no label', });
lyr_Sungai_5.set('fieldLabels', {'Kabupaten': 'no label', 'id': 'no label', });
lyr_Sungai_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});