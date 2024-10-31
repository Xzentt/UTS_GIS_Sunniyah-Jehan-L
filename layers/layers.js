var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> AMPELDENTO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> AREA KEHUTANAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> BEGAGANLIMO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> BEJI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> BUMIAJI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> DADAPREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> DONOWARIH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> GADING KULON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> GIRIMOYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> GIRIPURNO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> GUMENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> GUNUNGSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> JUNREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> KEHUTANAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> KEL. BULUKERTO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> KEL. NGAGLIK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> KEL. PENCALUKAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> KEL. PESANGGRAHAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> KEL. SISIR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> KEL. SONGGOKERTO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> KEL. TEMAS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> MOJOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> MULYOAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> ORO-OROOMBO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> PANDANREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> PANDESARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> PENDEM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> PESANGGRAHAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> PUNTEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> SIDOMULYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> SONGGOKERTO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> SUMBEREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> SUMBERGONDO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> SUMBERSEKAR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> TAWANGARGO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> TEGALGONDO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> TLEKUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> TORONGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> TOYOMARTO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> TULUNGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> <br />'
        });
var format_ADMINISTRASI_LN_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_2 = format_ADMINISTRASI_LN_25K_2.readFeatures(json_ADMINISTRASI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_2.addFeatures(features_ADMINISTRASI_LN_25K_2);
var lyr_ADMINISTRASI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_25K_2, 
                style: style_ADMINISTRASI_LN_25K_2,
                popuplayertitle: "ADMINISTRASI_LN_25K",
                interactive: true,
    title: 'ADMINISTRASI_LN_25K<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_0.png" /> AREA KEHUTANAN - NGAGLIK<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_1.png" /> AREA KEHUTANAN - SUMBERSEKAR<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_2.png" /> AREA KEHUTANAN - TLEKUNG<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_3.png" /> AREAKEHUTANAN - ORO-OROOMBO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_4.png" /> BATU - BUMIAJI<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_5.png" /> BATU - DAU<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_6.png" /> BATU - JUNREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_7.png" /> BATU - PUJON<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_8.png" /> BEGAGANLIMO - GUMENG<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_9.png" /> BEJI - JUNREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_10.png" /> BEJI - MOJOREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_11.png" /> BEJI - TLEKUNG<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_12.png" /> BEJI - TORONGREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_13.png" /> BULUKERTO - BUMIAJI<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_14.png" /> BUMIAJI - BATU<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_15.png" /> BUMIAJI - GIRIPURNO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_16.png" /> BUMIAJI - JUNREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_17.png" /> BUMIAJI - KARANGPLOSO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_18.png" /> BUMIAJI - PANDANREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_19.png" /> BUMIAJI - PUJON<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_20.png" /> BUMIAJI - SINGOSARI<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_21.png" /> DADAPREJO - PENDEM<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_22.png" /> DAU - JUNREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_23.png" /> DONOWARIH - GIRIMOYO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_24.png" /> GIRIMOYO - AMPELDENTO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_25.png" /> GUNUNGSARI - PUNTEN<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_26.png" /> GUNUNGSARI - TULUNGREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_27.png" /> JUNREJO - DADAPREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_28.png" /> JUNREJO - DAU<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_29.png" /> JUNREJO - KARANGPLOSO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_30.png" /> JUNREJO - MOJOREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_31.png" /> KEHUTANAN - PESANGGRAHAN<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_32.png" /> MALANG - MOJOKERTO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_33.png" /> MALANG - PASURUAN<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_34.png" /> MOJOKERTO - MALANG<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_35.png" /> MOJOREJO - PENDEM<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_36.png" /> NGAGLIK - ORO-OROOMBO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_37.png" /> NGAGLIK - SISIR<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_38.png" /> NGAGLIK - TEMAS<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_39.png" /> PANDANREJO - GIRIPURNO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_40.png" /> PESANGGRAHAN - AREA KEHUTANAN<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_41.png" /> PESANGGRAHAN - NGAGLIK<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_42.png" /> PESANGGRAHAN - SONGGOKERTO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_43.png" /> PUNTEN - BULUKERTO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_44.png" /> PUNTEN - SUMBERGONDO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_45.png" /> SIDOMULYO - SISIR<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_46.png" /> SISIR - TEMAS<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_47.png" /> SONGGOKERTO - PESANGGRAHAN<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_48.png" /> SUMBEREJO - NGAGLIK<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_49.png" /> SUMBEREJO - PESANGGRAHAN<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_50.png" /> SUMBEREJO - SIDOMULYO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_51.png" /> SUMBEREJO - SISIR<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_52.png" /> SUMBEREJO - SONGGOKERTO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_53.png" /> SUMBERGONDO - BULUKERTO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_54.png" /> SUMBERSEKAR - GADING KULON<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_55.png" /> SUMBERSEKAR - MULYOAGUNG<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_56.png" /> TAWANGARGO - DONOWARIH<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_57.png" /> TEMAS - ORO-OROOMBO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_58.png" /> TLEKUNG - JUNREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_59.png" /> TORONGREJO - MOJOREJO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_60.png" /> TORONGREJO - PENDEM<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_61.png" /> TULUNGREJO - GUNUNGSARI<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_62.png" /> TULUNGREJO - PUNTEN<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_63.png" /> TULUNGREJO - SUMBERGONDO<br />\
    <img src="styles/legend/ADMINISTRASI_LN_25K_2_64.png" /> <br />'
        });
var format_TempatIbadah_3 = new ol.format.GeoJSON();
var features_TempatIbadah_3 = format_TempatIbadah_3.readFeatures(json_TempatIbadah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_3.addFeatures(features_TempatIbadah_3);
var lyr_TempatIbadah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_3, 
                style: style_TempatIbadah_3,
                popuplayertitle: "TempatIbadah",
                interactive: true,
    title: 'TempatIbadah<br />\
    <img src="styles/legend/TempatIbadah_3_0.png" /> Klenteng Kwaim Tong<br />\
    <img src="styles/legend/TempatIbadah_3_1.png" /> Masjid Agung An-Nur Kota Batu<br />\
    <img src="styles/legend/TempatIbadah_3_2.png" /> Masjid Al - Asy\'ari<br />\
    <img src="styles/legend/TempatIbadah_3_3.png" /> Masjid Al Amin<br />\
    <img src="styles/legend/TempatIbadah_3_4.png" /> Masjid Al Falah<br />\
    <img src="styles/legend/TempatIbadah_3_5.png" /> Masjid Al Fattah<br />\
    <img src="styles/legend/TempatIbadah_3_6.png" /> Masjid Al Hikmah<br />\
    <img src="styles/legend/TempatIbadah_3_7.png" /> Masjid Al Huda<br />\
    <img src="styles/legend/TempatIbadah_3_8.png" /> Masjid Al Islami<br />\
    <img src="styles/legend/TempatIbadah_3_9.png" /> Masjid At-Taqwa<br />\
    <img src="styles/legend/TempatIbadah_3_10.png" /> Masjid Baitur Rohim<br />\
    <img src="styles/legend/TempatIbadah_3_11.png" /> Masjid Brigjend Soegiono<br />\
    <img src="styles/legend/TempatIbadah_3_12.png" /> Masjid Ibnu Khaldun<br />\
    <img src="styles/legend/TempatIbadah_3_13.png" /> Masjid Iskandar Sulaiman<br />\
    <img src="styles/legend/TempatIbadah_3_14.png" /> Masjid Miftahul Jannah<br />\
    <img src="styles/legend/TempatIbadah_3_15.png" /> Masjid Nurul Ilmi<br />\
    <img src="styles/legend/TempatIbadah_3_16.png" /> Masjid Putih<br />\
    <img src="styles/legend/TempatIbadah_3_17.png" /> Masjid Sabilil Muttaqin<br />\
    <img src="styles/legend/TempatIbadah_3_18.png" /> Musholla Al Asyari<br />\
    <img src="styles/legend/TempatIbadah_3_19.png" /> Musholla Al Mustofa<br />\
    <img src="styles/legend/TempatIbadah_3_20.png" /> Musholla Al-Badru<br />\
    <img src="styles/legend/TempatIbadah_3_21.png" /> Musholla Miftakhul Jannah<br />\
    <img src="styles/legend/TempatIbadah_3_22.png" /> Musholla Nurul Muttaqin<br />\
    <img src="styles/legend/TempatIbadah_3_23.png" /> Musholla Waqaf Darussalam<br />\
    <img src="styles/legend/TempatIbadah_3_24.png" /> Pura Luhur Bhuana Cakti<br />\
    <img src="styles/legend/TempatIbadah_3_25.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_ADMINISTRASI_LN_25K_2.setVisible(true);lyr_TempatIbadah_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_ADMINISTRASI_LN_25K_2,lyr_TempatIbadah_3];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'REMARK': 'REMARK', 'Kecamatan': 'Kecamatan', 'Provinsi': 'Provinsi', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldAliases', {'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TempatIbadah_3.set('fieldAliases', {'id': 'id', 'TIbadah': 'TIbadah', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'Kelurahan': 'TextEdit', 'REMARK': 'TextEdit', 'Kecamatan': 'TextEdit', 'Provinsi': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldImages', {'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_TempatIbadah_3.set('fieldImages', {'id': 'TextEdit', 'TIbadah': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'Kelurahan': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldLabels', {'REMARK': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'SHAPE_Leng': 'no label', });
lyr_TempatIbadah_3.set('fieldLabels', {'id': 'no label', 'TIbadah': 'inline label - always visible', });
lyr_TempatIbadah_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});