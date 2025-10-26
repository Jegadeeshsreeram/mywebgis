var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_devikulam_1 = new ol.format.GeoJSON();
var features_devikulam_1 = format_devikulam_1.readFeatures(json_devikulam_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_devikulam_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_devikulam_1.addFeatures(features_devikulam_1);
var lyr_devikulam_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_devikulam_1, 
                style: style_devikulam_1,
                popuplayertitle: 'devikulam',
                interactive: true,
    title: 'devikulam<br />\
    <img src="styles/legend/devikulam_1_0.png" /> ARIVIKKAD<br />\
    <img src="styles/legend/devikulam_1_1.png" /> BENMORE<br />\
    <img src="styles/legend/devikulam_1_2.png" /> CHENDUVARA<br />\
    <img src="styles/legend/devikulam_1_3.png" /> CHITTIVARA<br />\
    <img src="styles/legend/devikulam_1_4.png" /> CHOKKANAD<br />\
    <img src="styles/legend/devikulam_1_5.png" /> DEVIKULAM<br />\
    <img src="styles/legend/devikulam_1_6.png" /> GRAHAMSLAND<br />\
    <img src="styles/legend/devikulam_1_7.png" /> GUDARVILA<br />\
    <img src="styles/legend/devikulam_1_8.png" /> GUNDUMALA<br />\
    <img src="styles/legend/devikulam_1_9.png" /> KUNDALA<br />\
    <img src="styles/legend/devikulam_1_10.png" /> LOCKHART<br />\
    <img src="styles/legend/devikulam_1_11.png" /> MATTUPPETTY<br />\
    <img src="styles/legend/devikulam_1_12.png" /> NETTIKKUDY<br />\
    <img src="styles/legend/devikulam_1_13.png" /> SILENTVALLEY<br />\
    <img src="styles/legend/devikulam_1_14.png" /> THEERTHAMALA<br />\
    <img src="styles/legend/devikulam_1_15.png" /> THENMALA<br />\
    <img src="styles/legend/devikulam_1_16.png" /> YELLAPPATTY<br />\
    <img src="styles/legend/devikulam_1_17.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_devikulam_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_devikulam_1];
lyr_devikulam_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_devikulam_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_devikulam_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - always visible', 'Lsgd_Type': 'inline label - visible with data', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_devikulam_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});