var wms_layers = [];

var format_Bangunan_0 = new ol.format.GeoJSON();
var features_Bangunan_0 = format_Bangunan_0.readFeatures(json_Bangunan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_0.addFeatures(features_Bangunan_0);
var lyr_Bangunan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_0, 
                style: style_Bangunan_0,
                interactive: true,
                title: '<img src="styles/legend/Bangunan_0.png" /> Bangunan'
            });
var format_Sawah_1 = new ol.format.GeoJSON();
var features_Sawah_1 = format_Sawah_1.readFeatures(json_Sawah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_1.addFeatures(features_Sawah_1);
var lyr_Sawah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sawah_1, 
                style: style_Sawah_1,
                interactive: true,
                title: '<img src="styles/legend/Sawah_1.png" /> Sawah'
            });
var format_Semak_2 = new ol.format.GeoJSON();
var features_Semak_2 = format_Semak_2.readFeatures(json_Semak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Semak_2.addFeatures(features_Semak_2);
var lyr_Semak_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semak_2, 
                style: style_Semak_2,
                interactive: true,
                title: '<img src="styles/legend/Semak_2.png" /> Semak'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                interactive: true,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });
var format_longsor_sedang2_4 = new ol.format.GeoJSON();
var features_longsor_sedang2_4 = format_longsor_sedang2_4.readFeatures(json_longsor_sedang2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_longsor_sedang2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_longsor_sedang2_4.addFeatures(features_longsor_sedang2_4);
var lyr_longsor_sedang2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_longsor_sedang2_4, 
                style: style_longsor_sedang2_4,
                interactive: true,
                title: '<img src="styles/legend/longsor_sedang2_4.png" /> longsor_sedang2'
            });
var format_longsor_tinggi2_5 = new ol.format.GeoJSON();
var features_longsor_tinggi2_5 = format_longsor_tinggi2_5.readFeatures(json_longsor_tinggi2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_longsor_tinggi2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_longsor_tinggi2_5.addFeatures(features_longsor_tinggi2_5);
var lyr_longsor_tinggi2_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_longsor_tinggi2_5, 
                style: style_longsor_tinggi2_5,
                interactive: true,
                title: '<img src="styles/legend/longsor_tinggi2_5.png" /> longsor_tinggi2'
            });
var format_longsor_rendah2_6 = new ol.format.GeoJSON();
var features_longsor_rendah2_6 = format_longsor_rendah2_6.readFeatures(json_longsor_rendah2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_longsor_rendah2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_longsor_rendah2_6.addFeatures(features_longsor_rendah2_6);
var lyr_longsor_rendah2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_longsor_rendah2_6, 
                style: style_longsor_rendah2_6,
                interactive: true,
                title: '<img src="styles/legend/longsor_rendah2_6.png" /> longsor_rendah2'
            });

        var lyr_GoogleSatellite_7 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_8 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TitikRisikoLongsorTinggi_9 = new ol.format.GeoJSON();
var features_TitikRisikoLongsorTinggi_9 = format_TitikRisikoLongsorTinggi_9.readFeatures(json_TitikRisikoLongsorTinggi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikRisikoLongsorTinggi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikRisikoLongsorTinggi_9.addFeatures(features_TitikRisikoLongsorTinggi_9);
var lyr_TitikRisikoLongsorTinggi_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikRisikoLongsorTinggi_9, 
                style: style_TitikRisikoLongsorTinggi_9,
                interactive: true,
                title: '<img src="styles/legend/TitikRisikoLongsorTinggi_9.png" /> Titik Risiko Longsor Tinggi'
            });
var format_TitikRisikoLongsorSedang_10 = new ol.format.GeoJSON();
var features_TitikRisikoLongsorSedang_10 = format_TitikRisikoLongsorSedang_10.readFeatures(json_TitikRisikoLongsorSedang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikRisikoLongsorSedang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikRisikoLongsorSedang_10.addFeatures(features_TitikRisikoLongsorSedang_10);
var lyr_TitikRisikoLongsorSedang_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikRisikoLongsorSedang_10, 
                style: style_TitikRisikoLongsorSedang_10,
                interactive: true,
                title: '<img src="styles/legend/TitikRisikoLongsorSedang_10.png" /> Titik Risiko Longsor Sedang'
            });
var group_Risiko = new ol.layer.Group({
                                layers: [lyr_longsor_sedang2_4,lyr_longsor_tinggi2_5,lyr_longsor_rendah2_6,],
                                title: "Risiko"});
var group_PenggunaanLahan = new ol.layer.Group({
                                layers: [lyr_Bangunan_0,lyr_Sawah_1,lyr_Semak_2,lyr_Jalan_3,],
                                title: "Penggunaan Lahan"});

lyr_Bangunan_0.setVisible(false);lyr_Sawah_1.setVisible(false);lyr_Semak_2.setVisible(false);lyr_Jalan_3.setVisible(false);lyr_longsor_sedang2_4.setVisible(true);lyr_longsor_tinggi2_5.setVisible(true);lyr_longsor_rendah2_6.setVisible(true);lyr_GoogleSatellite_7.setVisible(false);lyr_OSMStandard_8.setVisible(true);lyr_TitikRisikoLongsorTinggi_9.setVisible(true);lyr_TitikRisikoLongsorSedang_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_7,lyr_OSMStandard_8,group_PenggunaanLahan,group_Risiko,lyr_TitikRisikoLongsorTinggi_9,lyr_TitikRisikoLongsorSedang_10];
lyr_Bangunan_0.set('fieldAliases', {'FID_Pemuki': 'FID_Pemuki', 'Id': 'Id', 'bgn': 'bgn', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', 'FID_Bangun': 'FID_Bangun', 'Id_1': 'Id_1', });
lyr_Sawah_1.set('fieldAliases', {'FID_Sawah_': 'FID_Sawah_', 'LCODE': 'LCODE', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Jenis': 'Jenis', 'Luas_m2': 'Luas_m2', 'FID_Sawah': 'FID_Sawah', 'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE_1': 'LCODE_1', 'METADATA': 'METADATA', 'TNMSWH_1': 'TNMSWH_1', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', });
lyr_Semak_2.set('fieldAliases', {'FID_Semak_': 'FID_Semak_', 'id': 'id', 'layer': 'layer', 'path': 'path', 'FID_Vegeta': 'FID_Vegeta', 'Id_1': 'Id_1', });
lyr_Jalan_3.set('fieldAliases', {'FID_jalan_': 'FID_jalan_', 'FID_jalan1': 'FID_jalan1', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_jala_1': 'FID_jala_1', 'Id_1': 'Id_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'FID_jalan': 'FID_jalan', 'id_12': 'id_12', 'id_2': 'id_2', 'FID_Jala_2': 'FID_Jala_2', 'Id_12_13': 'Id_12_13', });
lyr_longsor_sedang2_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_longsor_tinggi2_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_longsor_rendah2_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TitikRisikoLongsorTinggi_9.set('fieldAliases', {'Nama Foto': 'Nama Foto', 'Foto360': 'Foto360', 'Risiko': 'Risiko', });
lyr_TitikRisikoLongsorSedang_10.set('fieldAliases', {'Nama Foto': 'Nama Foto', 'Foto360': 'Foto360', 'Risiko': 'Risiko', });
lyr_Bangunan_0.set('fieldImages', {'FID_Pemuki': '', 'Id': '', 'bgn': '', 'OBJECTID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'layer': '', 'path': '', 'FID_Bangun': '', 'Id_1': '', });
lyr_Sawah_1.set('fieldImages', {'FID_Sawah_': '', 'LCODE': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'Jenis': '', 'Luas_m2': '', 'FID_Sawah': '', 'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE_1': '', 'METADATA': '', 'TNMSWH_1': '', 'SHAPE_Le_1': '', 'SHAPE_Ar_1': '', });
lyr_Semak_2.set('fieldImages', {'FID_Semak_': '', 'id': '', 'layer': '', 'path': '', 'FID_Vegeta': '', 'Id_1': '', });
lyr_Jalan_3.set('fieldImages', {'FID_jalan_': '', 'FID_jalan1': '', 'Id': '', 'Shape_Leng': '', 'Shape_Area': '', 'FID_jala_1': '', 'Id_1': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', 'FID_jalan': '', 'id_12': '', 'id_2': '', 'FID_Jala_2': '', 'Id_12_13': '', });
lyr_longsor_sedang2_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_longsor_tinggi2_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_longsor_rendah2_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TitikRisikoLongsorTinggi_9.set('fieldImages', {'Nama Foto': 'TextEdit', 'Foto360': 'TextEdit', 'Risiko': 'TextEdit', });
lyr_TitikRisikoLongsorSedang_10.set('fieldImages', {'Nama Foto': 'TextEdit', 'Foto360': 'TextEdit', 'Risiko': 'TextEdit', });
lyr_Bangunan_0.set('fieldLabels', {});
lyr_Sawah_1.set('fieldLabels', {});
lyr_Semak_2.set('fieldLabels', {});
lyr_Jalan_3.set('fieldLabels', {});
lyr_longsor_sedang2_4.set('fieldLabels', {});
lyr_longsor_tinggi2_5.set('fieldLabels', {});
lyr_longsor_rendah2_6.set('fieldLabels', {});
lyr_TitikRisikoLongsorTinggi_9.set('fieldLabels', {'Nama Foto': 'header label', 'Foto360': 'no label', 'Risiko': 'no label', });
lyr_TitikRisikoLongsorSedang_10.set('fieldLabels', {'Nama Foto': 'header label', 'Foto360': 'no label', 'Risiko': 'no label', });
lyr_TitikRisikoLongsorSedang_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});