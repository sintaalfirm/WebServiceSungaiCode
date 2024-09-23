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
var format_tinggi_6 = new ol.format.GeoJSON();
var features_tinggi_6 = format_tinggi_6.readFeatures(json_tinggi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tinggi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tinggi_6.addFeatures(features_tinggi_6);
var lyr_tinggi_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tinggi_6, 
                style: style_tinggi_6,
                interactive: true,
                title: '<img src="styles/legend/tinggi_6.png" /> tinggi'
            });
var format_sedang_7 = new ol.format.GeoJSON();
var features_sedang_7 = format_sedang_7.readFeatures(json_sedang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sedang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sedang_7.addFeatures(features_sedang_7);
var lyr_sedang_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sedang_7, 
                style: style_sedang_7,
                interactive: true,
                title: '<img src="styles/legend/sedang_7.png" /> sedang'
            });
var format_rendah_8 = new ol.format.GeoJSON();
var features_rendah_8 = format_rendah_8.readFeatures(json_rendah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rendah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rendah_8.addFeatures(features_rendah_8);
var lyr_rendah_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rendah_8, 
                style: style_rendah_8,
                interactive: true,
                title: '<img src="styles/legend/rendah_8.png" /> rendah'
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
var format_Sungai_fix_11 = new ol.format.GeoJSON();
var features_Sungai_fix_11 = format_Sungai_fix_11.readFeatures(json_Sungai_fix_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_fix_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_fix_11.addFeatures(features_Sungai_fix_11);
var lyr_Sungai_fix_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_fix_11, 
                style: style_Sungai_fix_11,
                interactive: false,
                title: '<img src="styles/legend/Sungai_fix_11.png" /> Sungai'
            });
var format_titikresikobanjirrendah_12 = new ol.format.GeoJSON();
var features_titikresikobanjirrendah_12 = format_titikresikobanjirrendah_12.readFeatures(json_titikresikobanjirrendah_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikresikobanjirrendah_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikresikobanjirrendah_12.addFeatures(features_titikresikobanjirrendah_12);
var lyr_titikresikobanjirrendah_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titikresikobanjirrendah_12, 
                style: style_titikresikobanjirrendah_12,
                interactive: true,
                title: '<img src="styles/legend/titikresikobanjirrendah_12.png" /> titik resiko banjir rendah'
            });
var format_titikresikobanjirsedang_13 = new ol.format.GeoJSON();
var features_titikresikobanjirsedang_13 = format_titikresikobanjirsedang_13.readFeatures(json_titikresikobanjirsedang_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikresikobanjirsedang_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikresikobanjirsedang_13.addFeatures(features_titikresikobanjirsedang_13);
var lyr_titikresikobanjirsedang_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titikresikobanjirsedang_13, 
                style: style_titikresikobanjirsedang_13,
                interactive: true,
                title: '<img src="styles/legend/titikresikobanjirsedang_13.png" /> titik resiko banjir sedang'
            });
var format_titikresikobanjirtinggi_14 = new ol.format.GeoJSON();
var features_titikresikobanjirtinggi_14 = format_titikresikobanjirtinggi_14.readFeatures(json_titikresikobanjirtinggi_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikresikobanjirtinggi_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikresikobanjirtinggi_14.addFeatures(features_titikresikobanjirtinggi_14);
var lyr_titikresikobanjirtinggi_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titikresikobanjirtinggi_14, 
                style: style_titikresikobanjirtinggi_14,
                interactive: true,
                title: '<img src="styles/legend/titikresikobanjirtinggi_14.png" /> titik resiko banjir tinggi'
            });
var group_ResikoBanjir = new ol.layer.Group({
                                layers: [lyr_tinggi_6,lyr_sedang_7,lyr_rendah_8,],
                                title: "Resiko Banjir"});
var group_Penggunaanlahan = new ol.layer.Group({
                                layers: [lyr_Bataswilayah_0,lyr_Bangunan_1,lyr_Jalan_2,lyr_Kebun_3,lyr_Sawah_4,lyr_Semak_5,],
                                title: "Penggunaan lahan"});

lyr_Bataswilayah_0.setVisible(false);lyr_Bangunan_1.setVisible(false);lyr_Jalan_2.setVisible(false);lyr_Kebun_3.setVisible(false);lyr_Sawah_4.setVisible(false);lyr_Semak_5.setVisible(false);lyr_tinggi_6.setVisible(true);lyr_sedang_7.setVisible(true);lyr_rendah_8.setVisible(true);lyr_GoogleSatellite_9.setVisible(false);lyr_OpenStreetMap_10.setVisible(true);lyr_Sungai_fix_11.setVisible(true);lyr_titikresikobanjirrendah_12.setVisible(true);lyr_titikresikobanjirsedang_13.setVisible(true);lyr_titikresikobanjirtinggi_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_9,lyr_OpenStreetMap_10,group_Penggunaanlahan,group_ResikoBanjir,lyr_Sungai_fix_11,lyr_titikresikobanjirrendah_12,lyr_titikresikobanjirsedang_13,lyr_titikresikobanjirtinggi_14];
lyr_Bataswilayah_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', });
lyr_Bangunan_1.set('fieldAliases', {'FID_Pemuki': 'FID_Pemuki', 'Id': 'Id', 'bgn': 'bgn', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', 'FID_Bangun': 'FID_Bangun', 'Id_1': 'Id_1', });
lyr_Jalan_2.set('fieldAliases', {'FID_jalan_': 'FID_jalan_', 'FID_jalan1': 'FID_jalan1', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_jala_1': 'FID_jala_1', 'Id_1': 'Id_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'FID_jalan': 'FID_jalan', 'id_12': 'id_12', 'id_2': 'id_2', 'FID_Jala_2': 'FID_Jala_2', 'Id_12_13': 'Id_12_13', });
lyr_Kebun_3.set('fieldAliases', {'FID_Kebun_': 'FID_Kebun_', 'id': 'id', 'Jenis': 'Jenis', 'layer': 'layer', 'path': 'path', 'luas': 'luas', 'FID_Kebun': 'FID_Kebun', 'Id_1': 'Id_1', });
lyr_Sawah_4.set('fieldAliases', {'FID_Sawah_': 'FID_Sawah_', 'LCODE': 'LCODE', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Jenis': 'Jenis', 'Luas_m2': 'Luas_m2', 'FID_Sawah': 'FID_Sawah', 'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE_1': 'LCODE_1', 'METADATA': 'METADATA', 'TNMSWH_1': 'TNMSWH_1', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', });
lyr_Semak_5.set('fieldAliases', {'FID_Semak_': 'FID_Semak_', 'id': 'id', 'layer': 'layer', 'path': 'path', 'FID_Vegeta': 'FID_Vegeta', 'Id_1': 'Id_1', });
lyr_tinggi_6.set('fieldAliases', {'Kerentanan': 'Kerentanan', 'skor_rawan': 'skor_rawan', 'skor_kapst': 'skor_kapst', 'resiko': 'resiko', 'Kriteria': 'Kriteria', });
lyr_sedang_7.set('fieldAliases', {'Kerentanan': 'Kerentanan', 'skor_rawan': 'skor_rawan', 'skor_kapst': 'skor_kapst', 'resiko': 'resiko', 'Kriteria': 'Kriteria', });
lyr_rendah_8.set('fieldAliases', {'Kerentanan': 'Kerentanan', 'skor_rawan': 'skor_rawan', 'skor_kapst': 'skor_kapst', 'resiko': 'resiko', 'Kriteria': 'Kriteria', });
lyr_Sungai_fix_11.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'id': 'id', });
lyr_titikresikobanjirrendah_12.set('fieldAliases', {'no titik': 'no titik', 'foto360': 'foto360', });
lyr_titikresikobanjirsedang_13.set('fieldAliases', {'No titik': 'No titik'});
lyr_titikresikobanjirtinggi_14.set('fieldAliases', {'No titik': 'No titik'});
lyr_Bataswilayah_0.set('fieldImages', {'Kabupaten': '', });
lyr_Bangunan_1.set('fieldImages', {'FID_Pemuki': '', 'Id': '', 'bgn': '', 'OBJECTID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'layer': '', 'path': '', 'FID_Bangun': '', 'Id_1': '', });
lyr_Jalan_2.set('fieldImages', {'FID_jalan_': '', 'FID_jalan1': '', 'Id': '', 'Shape_Leng': '', 'Shape_Area': '', 'FID_jala_1': '', 'Id_1': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', 'FID_jalan': '', 'id_12': '', 'id_2': '', 'FID_Jala_2': '', 'Id_12_13': '', });
lyr_Kebun_3.set('fieldImages', {'FID_Kebun_': '', 'id': '', 'Jenis': '', 'layer': '', 'path': '', 'luas': '', 'FID_Kebun': '', 'Id_1': '', });
lyr_Sawah_4.set('fieldImages', {'FID_Sawah_': '', 'LCODE': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'Jenis': '', 'Luas_m2': '', 'FID_Sawah': '', 'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE_1': '', 'METADATA': '', 'TNMSWH_1': '', 'SHAPE_Le_1': '', 'SHAPE_Ar_1': '', });
lyr_Semak_5.set('fieldImages', {'FID_Semak_': '', 'id': '', 'layer': '', 'path': '', 'FID_Vegeta': '', 'Id_1': '', });
lyr_tinggi_6.set('fieldImages', {'Kerentanan': 'TextEdit', 'skor_rawan': 'TextEdit', 'skor_kapst': 'TextEdit', 'resiko': 'TextEdit', 'Kriteria': 'TextEdit', });
lyr_sedang_7.set('fieldImages', {'Kerentanan': 'TextEdit', 'skor_rawan': 'TextEdit', 'skor_kapst': 'TextEdit', 'resiko': 'TextEdit', 'Kriteria': 'TextEdit', });
lyr_rendah_8.set('fieldImages', {'Kerentanan': 'TextEdit', 'skor_rawan': 'TextEdit', 'skor_kapst': 'TextEdit', 'resiko': 'TextEdit', 'Kriteria': 'TextEdit', });
lyr_Sungai_fix_11.set('fieldImages', {'Kabupaten': '', 'id': '', });
lyr_titikresikobanjirrendah_12.set('fieldImages', {'no titik': 'TextEdit', 'foto360': ''});
lyr_titikresikobanjirsedang_13.set('fieldImages', {'No titik': ''});
lyr_titikresikobanjirtinggi_14.set('fieldImages', {'No titik': ''});
lyr_Bataswilayah_0.set('fieldLabels', {});
lyr_Bangunan_1.set('fieldLabels', {});
lyr_Jalan_2.set('fieldLabels', {});
lyr_Kebun_3.set('fieldLabels', {});
lyr_Sawah_4.set('fieldLabels', {});
lyr_Semak_5.set('fieldLabels', {});
lyr_tinggi_6.set('fieldLabels', {});
lyr_sedang_7.set('fieldLabels', {});
lyr_rendah_8.set('fieldLabels', {});
lyr_Sungai_fix_11.set('fieldLabels', {'Kabupaten': 'no label', 'id': 'no label', });
lyr_titikresikobanjirrendah_12.set('fieldLabels', {'no titik': 'header label', 'foto360': 'no label'});
lyr_titikresikobanjirsedang_13.set('fieldLabels', {'No titik': 'header label'});
lyr_titikresikobanjirtinggi_14.set('fieldLabels', {'No titik': 'header label'});
lyr_titikresikobanjirtinggi_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});