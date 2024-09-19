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
var format_BatasPemetaan_2 = new ol.format.GeoJSON();
var features_BatasPemetaan_2 = format_BatasPemetaan_2.readFeatures(json_BatasPemetaan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasPemetaan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasPemetaan_2.addFeatures(features_BatasPemetaan_2);
var lyr_BatasPemetaan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasPemetaan_2, 
                style: style_BatasPemetaan_2,
                interactive: true,
                title: '<img src="styles/legend/BatasPemetaan_2.png" /> Batas Pemetaan'
            });
var format_Bangunan_3 = new ol.format.GeoJSON();
var features_Bangunan_3 = format_Bangunan_3.readFeatures(json_Bangunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_3.addFeatures(features_Bangunan_3);
var lyr_Bangunan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_3, 
                style: style_Bangunan_3,
                interactive: true,
                title: '<img src="styles/legend/Bangunan_3.png" /> Bangunan'
            });
var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);
var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                interactive: true,
                title: '<img src="styles/legend/Jalan_4.png" /> Jalan'
            });
var format_Kebun_5 = new ol.format.GeoJSON();
var features_Kebun_5 = format_Kebun_5.readFeatures(json_Kebun_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_5.addFeatures(features_Kebun_5);
var lyr_Kebun_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kebun_5, 
                style: style_Kebun_5,
                interactive: true,
                title: '<img src="styles/legend/Kebun_5.png" /> Kebun'
            });
var format_Sawah_6 = new ol.format.GeoJSON();
var features_Sawah_6 = format_Sawah_6.readFeatures(json_Sawah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_6.addFeatures(features_Sawah_6);
var lyr_Sawah_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sawah_6, 
                style: style_Sawah_6,
                interactive: true,
                title: '<img src="styles/legend/Sawah_6.png" /> Sawah'
            });
var format_Sungai_7 = new ol.format.GeoJSON();
var features_Sungai_7 = format_Sungai_7.readFeatures(json_Sungai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_7.addFeatures(features_Sungai_7);
var lyr_Sungai_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_7, 
                style: style_Sungai_7,
                interactive: true,
                title: '<img src="styles/legend/Sungai_7.png" /> Sungai'
            });
var format_Semak_8 = new ol.format.GeoJSON();
var features_Semak_8 = format_Semak_8.readFeatures(json_Semak_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semak_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Semak_8.addFeatures(features_Semak_8);
var lyr_Semak_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semak_8, 
                style: style_Semak_8,
                interactive: true,
                title: '<img src="styles/legend/Semak_8.png" /> Semak'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_BatasPemetaan_2.setVisible(true);lyr_Bangunan_3.setVisible(true);lyr_Jalan_4.setVisible(true);lyr_Kebun_5.setVisible(true);lyr_Sawah_6.setVisible(true);lyr_Sungai_7.setVisible(true);lyr_Semak_8.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_OpenStreetMap_1,lyr_BatasPemetaan_2,lyr_Bangunan_3,lyr_Jalan_4,lyr_Kebun_5,lyr_Sawah_6,lyr_Sungai_7,lyr_Semak_8];
lyr_BatasPemetaan_2.set('fieldAliases', {'Gabung': 'Gabung', 'Luas': 'Luas', });
lyr_Bangunan_3.set('fieldAliases', {'FID_Pemuki': 'FID_Pemuki', 'Id': 'Id', 'bgn': 'bgn', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', 'FID_Bangun': 'FID_Bangun', 'Id_1': 'Id_1', });
lyr_Jalan_4.set('fieldAliases', {'FID_jalan_': 'FID_jalan_', 'FID_jalan1': 'FID_jalan1', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_jala_1': 'FID_jala_1', 'Id_1': 'Id_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'FID_jalan': 'FID_jalan', 'id_12': 'id_12', 'id_2': 'id_2', 'FID_Jala_2': 'FID_Jala_2', 'Id_12_13': 'Id_12_13', });
lyr_Kebun_5.set('fieldAliases', {'FID_Kebun_': 'FID_Kebun_', 'id': 'id', 'Jenis': 'Jenis', 'layer': 'layer', 'path': 'path', 'luas': 'luas', 'FID_Kebun': 'FID_Kebun', 'Id_1': 'Id_1', });
lyr_Sawah_6.set('fieldAliases', {'FID_Sawah_': 'FID_Sawah_', 'LCODE': 'LCODE', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Jenis': 'Jenis', 'Luas_m2': 'Luas_m2', 'FID_Sawah': 'FID_Sawah', 'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE_1': 'LCODE_1', 'METADATA': 'METADATA', 'TNMSWH_1': 'TNMSWH_1', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', });
lyr_Sungai_7.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'id': 'id', });
lyr_Semak_8.set('fieldAliases', {'FID_Semak_': 'FID_Semak_', 'id': 'id', 'layer': 'layer', 'path': 'path', 'FID_Vegeta': 'FID_Vegeta', 'Id_1': 'Id_1', });
lyr_BatasPemetaan_2.set('fieldImages', {'Gabung': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Bangunan_3.set('fieldImages', {'FID_Pemuki': 'TextEdit', 'Id': 'TextEdit', 'bgn': 'TextEdit', 'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'FID_Bangun': 'TextEdit', 'Id_1': 'Range', });
lyr_Jalan_4.set('fieldImages', {'FID_jalan_': 'TextEdit', 'FID_jalan1': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'FID_jala_1': 'TextEdit', 'Id_1': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'FID_jalan': 'TextEdit', 'id_12': 'TextEdit', 'id_2': 'TextEdit', 'FID_Jala_2': 'TextEdit', 'Id_12_13': 'Range', });
lyr_Kebun_5.set('fieldImages', {'FID_Kebun_': 'TextEdit', 'id': 'TextEdit', 'Jenis': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'luas': 'TextEdit', 'FID_Kebun': 'TextEdit', 'Id_1': 'Range', });
lyr_Sawah_6.set('fieldImages', {'FID_Sawah_': 'TextEdit', 'LCODE': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Jenis': 'TextEdit', 'Luas_m2': 'TextEdit', 'FID_Sawah': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE_1': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH_1': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Ar_1': 'TextEdit', });
lyr_Sungai_7.set('fieldImages', {'Kabupaten': 'TextEdit', 'id': 'TextEdit', });
lyr_Semak_8.set('fieldImages', {'FID_Semak_': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'FID_Vegeta': 'TextEdit', 'Id_1': 'Range', });
lyr_BatasPemetaan_2.set('fieldLabels', {'Gabung': 'no label', 'Luas': 'no label', });
lyr_Bangunan_3.set('fieldLabels', {'FID_Pemuki': 'no label', 'Id': 'no label', 'bgn': 'no label', 'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'layer': 'no label', 'path': 'no label', 'FID_Bangun': 'no label', 'Id_1': 'no label', });
lyr_Jalan_4.set('fieldLabels', {'FID_jalan_': 'no label', 'FID_jalan1': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'FID_jala_1': 'no label', 'Id_1': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', 'FID_jalan': 'no label', 'id_12': 'no label', 'id_2': 'no label', 'FID_Jala_2': 'no label', 'Id_12_13': 'no label', });
lyr_Kebun_5.set('fieldLabels', {'FID_Kebun_': 'no label', 'id': 'no label', 'Jenis': 'no label', 'layer': 'no label', 'path': 'no label', 'luas': 'no label', 'FID_Kebun': 'no label', 'Id_1': 'no label', });
lyr_Sawah_6.set('fieldLabels', {'FID_Sawah_': 'no label', 'LCODE': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Jenis': 'no label', 'Luas_m2': 'no label', 'FID_Sawah': 'no label', 'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE_1': 'no label', 'METADATA': 'no label', 'TNMSWH_1': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Ar_1': 'no label', });
lyr_Sungai_7.set('fieldLabels', {'Kabupaten': 'no label', 'id': 'no label', });
lyr_Semak_8.set('fieldLabels', {'FID_Semak_': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'FID_Vegeta': 'no label', 'Id_1': 'no label', });
lyr_Semak_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});