var wms_layers = [];

var format_Bataswilayah_0 = new ol.format.GeoJSON();
var features_Bataswilayah_0 = format_Bataswilayah_0.readFeatures(json_Bataswilayah_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bataswilayah_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bataswilayah_0.addFeatures(features_Bataswilayah_0);
var lyr_Bataswilayah_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bataswilayah_0, 
                style: style_Bataswilayah_0,
                interactive: true,
                title: '<img src="styles/legend/Bataswilayah_0.png" /> Batas wilayah'
            });
var format_Bangunan_1 = new ol.format.GeoJSON();
var features_Bangunan_1 = format_Bangunan_1.readFeatures(json_Bangunan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_1.addFeatures(features_Bangunan_1);
var lyr_Bangunan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_1, 
                style: style_Bangunan_1,
                interactive: true,
                title: '<img src="styles/legend/Bangunan_1.png" /> Bangunan'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_Kebun_3 = new ol.format.GeoJSON();
var features_Kebun_3 = format_Kebun_3.readFeatures(json_Kebun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_3.addFeatures(features_Kebun_3);
var lyr_Kebun_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kebun_3, 
                style: style_Kebun_3,
                interactive: true,
                title: '<img src="styles/legend/Kebun_3.png" /> Kebun'
            });
var format_Sawah_4 = new ol.format.GeoJSON();
var features_Sawah_4 = format_Sawah_4.readFeatures(json_Sawah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_4.addFeatures(features_Sawah_4);
var lyr_Sawah_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sawah_4, 
                style: style_Sawah_4,
                interactive: true,
                title: '<img src="styles/legend/Sawah_4.png" /> Sawah'
            });
var format_Semak_5 = new ol.format.GeoJSON();
var features_Semak_5 = format_Semak_5.readFeatures(json_Semak_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semak_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Semak_5.addFeatures(features_Semak_5);
var lyr_Semak_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semak_5, 
                style: style_Semak_5,
                interactive: true,
                title: '<img src="styles/legend/Semak_5.png" /> Semak'
            });
var format_Rendah_6 = new ol.format.GeoJSON();
var features_Rendah_6 = format_Rendah_6.readFeatures(json_Rendah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rendah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rendah_6.addFeatures(features_Rendah_6);
var lyr_Rendah_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rendah_6, 
                style: style_Rendah_6,
                interactive: true,
                title: '<img src="styles/legend/Rendah_6.png" /> Rendah'
            });
var format_Sedang_7 = new ol.format.GeoJSON();
var features_Sedang_7 = format_Sedang_7.readFeatures(json_Sedang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sedang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sedang_7.addFeatures(features_Sedang_7);
var lyr_Sedang_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sedang_7, 
                style: style_Sedang_7,
                interactive: true,
                title: '<img src="styles/legend/Sedang_7.png" /> Sedang'
            });
var format_Tinggi_8 = new ol.format.GeoJSON();
var features_Tinggi_8 = format_Tinggi_8.readFeatures(json_Tinggi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tinggi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tinggi_8.addFeatures(features_Tinggi_8);
var lyr_Tinggi_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tinggi_8, 
                style: style_Tinggi_8,
                interactive: true,
                title: '<img src="styles/legend/Tinggi_8.png" /> Tinggi'
            });

        var lyr_GoogleSatellite_9 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_10 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sungai_11 = new ol.format.GeoJSON();
var features_Sungai_11 = format_Sungai_11.readFeatures(json_Sungai_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_11.addFeatures(features_Sungai_11);
var lyr_Sungai_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_11, 
                style: style_Sungai_11,
                interactive: false,
                title: '<img src="styles/legend/Sungai_11.png" /> Sungai'
            });
var format_titikresikolongsortinggi_12 = new ol.format.GeoJSON();
var features_titikresikolongsortinggi_12 = format_titikresikolongsortinggi_12.readFeatures(json_titikresikolongsortinggi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikresikolongsortinggi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikresikolongsortinggi_12.addFeatures(features_titikresikolongsortinggi_12);
var lyr_titikresikolongsortinggi_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titikresikolongsortinggi_12, 
                style: style_titikresikolongsortinggi_12,
                interactive: true,
                title: '<img src="styles/legend/titikresikolongsortinggi_12.png" /> titik resiko longsor tinggi'
            });
var format_titikresikolongsorsedang_13 = new ol.format.GeoJSON();
var features_titikresikolongsorsedang_13 = format_titikresikolongsorsedang_13.readFeatures(json_titikresikolongsorsedang_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikresikolongsorsedang_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikresikolongsorsedang_13.addFeatures(features_titikresikolongsorsedang_13);
var lyr_titikresikolongsorsedang_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titikresikolongsorsedang_13, 
                style: style_titikresikolongsorsedang_13,
                interactive: true,
                title: '<img src="styles/legend/titikresikolongsorsedang_13.png" /> titik resiko longsor sedang'
            });
var group_ResikoLongsor = new ol.layer.Group({
                                layers: [lyr_Rendah_6,lyr_Sedang_7,lyr_Tinggi_8,],
                                title: "Resiko Longsor"});
var group_Penggunaanlahan = new ol.layer.Group({
                                layers: [lyr_Bataswilayah_0,lyr_Bangunan_1,lyr_Jalan_2,lyr_Kebun_3,lyr_Sawah_4,lyr_Semak_5,],
                                title: "Penggunaan lahan"});

lyr_Bataswilayah_0.setVisible(false);lyr_Bangunan_1.setVisible(false);lyr_Jalan_2.setVisible(false);lyr_Kebun_3.setVisible(false);lyr_Sawah_4.setVisible(false);lyr_Semak_5.setVisible(false);lyr_Rendah_6.setVisible(true);lyr_Sedang_7.setVisible(true);lyr_Tinggi_8.setVisible(true);lyr_GoogleSatellite_9.setVisible(false);lyr_OpenStreetMap_10.setVisible(true);lyr_Sungai_11.setVisible(true);lyr_titikresikolongsortinggi_12.setVisible(true);lyr_titikresikolongsorsedang_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_9,lyr_OpenStreetMap_10,group_Penggunaanlahan,group_ResikoLongsor,lyr_Sungai_11,lyr_titikresikolongsortinggi_12,lyr_titikresikolongsorsedang_13];
lyr_Bataswilayah_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', });
lyr_Bangunan_1.set('fieldAliases', {'FID_Pemuki': 'FID_Pemuki', 'Id': 'Id', 'bgn': 'bgn', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', 'FID_Bangun': 'FID_Bangun', 'Id_1': 'Id_1', });
lyr_Jalan_2.set('fieldAliases', {'FID_jalan_': 'FID_jalan_', 'FID_jalan1': 'FID_jalan1', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_jala_1': 'FID_jala_1', 'Id_1': 'Id_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'FID_jalan': 'FID_jalan', 'id_12': 'id_12', 'id_2': 'id_2', 'FID_Jala_2': 'FID_Jala_2', 'Id_12_13': 'Id_12_13', });
lyr_Kebun_3.set('fieldAliases', {'FID_Kebun_': 'FID_Kebun_', 'id': 'id', 'Jenis': 'Jenis', 'layer': 'layer', 'path': 'path', 'luas': 'luas', 'FID_Kebun': 'FID_Kebun', 'Id_1': 'Id_1', });
lyr_Sawah_4.set('fieldAliases', {'FID_Sawah_': 'FID_Sawah_', 'LCODE': 'LCODE', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Jenis': 'Jenis', 'Luas_m2': 'Luas_m2', 'FID_Sawah': 'FID_Sawah', 'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE_1': 'LCODE_1', 'METADATA': 'METADATA', 'TNMSWH_1': 'TNMSWH_1', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', });
lyr_Semak_5.set('fieldAliases', {'FID_Semak_': 'FID_Semak_', 'id': 'id', 'layer': 'layer', 'path': 'path', 'FID_Vegeta': 'FID_Vegeta', 'Id_1': 'Id_1', });
lyr_Rendah_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sedang_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Tinggi_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sungai_11.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'id': 'id', });
lyr_titikresikolongsortinggi_12.set('fieldAliases', {'nomor': 'nomor', 'lokasi': 'lokasi', 'nama': 'nama', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'nofoto': 'nofoto', 'linkfoto': 'linkfoto', 'linkfoto2': 'linkfoto2', });
lyr_titikresikolongsorsedang_13.set('fieldAliases', {'nomor': 'nomor', 'lokasi': 'lokasi', 'nama': 'nama', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'nofoto': 'nofoto', 'linkfoto': 'linkfoto', 'linkfoto2': 'linkfoto2', });
lyr_Bataswilayah_0.set('fieldImages', {'Kabupaten': '', });
lyr_Bangunan_1.set('fieldImages', {'FID_Pemuki': '', 'Id': '', 'bgn': '', 'OBJECTID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'layer': '', 'path': '', 'FID_Bangun': '', 'Id_1': '', });
lyr_Jalan_2.set('fieldImages', {'FID_jalan_': '', 'FID_jalan1': '', 'Id': '', 'Shape_Leng': '', 'Shape_Area': '', 'FID_jala_1': '', 'Id_1': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', 'FID_jalan': '', 'id_12': '', 'id_2': '', 'FID_Jala_2': '', 'Id_12_13': '', });
lyr_Kebun_3.set('fieldImages', {'FID_Kebun_': '', 'id': '', 'Jenis': '', 'layer': '', 'path': '', 'luas': '', 'FID_Kebun': '', 'Id_1': '', });
lyr_Sawah_4.set('fieldImages', {'FID_Sawah_': '', 'LCODE': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'Jenis': '', 'Luas_m2': '', 'FID_Sawah': '', 'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE_1': '', 'METADATA': '', 'TNMSWH_1': '', 'SHAPE_Le_1': '', 'SHAPE_Ar_1': '', });
lyr_Semak_5.set('fieldImages', {'FID_Semak_': '', 'id': '', 'layer': '', 'path': '', 'FID_Vegeta': '', 'Id_1': '', });
lyr_Rendah_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sedang_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Tinggi_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sungai_11.set('fieldImages', {'Kabupaten': '', 'id': '', });
lyr_titikresikolongsortinggi_12.set('fieldImages', {'nomor': '', 'lokasi': '', 'nama': '', 'X': '', 'Y': '', 'Z': '', 'nofoto': '', 'linkfoto': '', 'linkfoto2': '', });
lyr_titikresikolongsorsedang_13.set('fieldImages', {'nomor': '', 'lokasi': '', 'nama': '', 'X': '', 'Y': '', 'Z': '', 'nofoto': '', 'linkfoto': '', 'linkfoto2': '', });
lyr_Bataswilayah_0.set('fieldLabels', {});
lyr_Bangunan_1.set('fieldLabels', {});
lyr_Jalan_2.set('fieldLabels', {});
lyr_Kebun_3.set('fieldLabels', {});
lyr_Sawah_4.set('fieldLabels', {});
lyr_Semak_5.set('fieldLabels', {});
lyr_Rendah_6.set('fieldLabels', {});
lyr_Sedang_7.set('fieldLabels', {});
lyr_Tinggi_8.set('fieldLabels', {});
lyr_Sungai_11.set('fieldLabels', {'Kabupaten': 'no label', 'id': 'no label', });
lyr_titikresikolongsortinggi_12.set('fieldLabels', {'nomor': 'inline label', 'lokasi': 'no label', 'nama': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'nofoto': 'no label', 'linkfoto': 'no label', 'linkfoto2': 'no label', });
lyr_titikresikolongsorsedang_13.set('fieldLabels', {'nomor': 'no label', 'lokasi': 'no label', 'nama': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'nofoto': 'no label', 'linkfoto': 'no label', 'linkfoto2': 'no label', });
lyr_titikresikolongsorsedang_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});