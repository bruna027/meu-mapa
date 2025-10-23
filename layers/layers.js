var wms_layers = [];

var format_fundo_0 = new ol.format.GeoJSON();
var features_fundo_0 = format_fundo_0.readFeatures(json_fundo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fundo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fundo_0.addFeatures(features_fundo_0);
var lyr_fundo_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fundo_0, 
                style: style_fundo_0,
                popuplayertitle: 'fundo',
                interactive: true,
                title: '<img src="styles/legend/fundo_0.png" /> fundo'
            });
var format_SIRGAS_SHP_distrito_1 = new ol.format.GeoJSON();
var features_SIRGAS_SHP_distrito_1 = format_SIRGAS_SHP_distrito_1.readFeatures(json_SIRGAS_SHP_distrito_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIRGAS_SHP_distrito_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIRGAS_SHP_distrito_1.addFeatures(features_SIRGAS_SHP_distrito_1);
var lyr_SIRGAS_SHP_distrito_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIRGAS_SHP_distrito_1, 
                style: style_SIRGAS_SHP_distrito_1,
                popuplayertitle: 'SIRGAS_SHP_distrito',
                interactive: true,
                title: '<img src="styles/legend/SIRGAS_SHP_distrito_1.png" /> SIRGAS_SHP_distrito'
            });
var format_p_2 = new ol.format.GeoJSON();
var features_p_2 = format_p_2.readFeatures(json_p_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p_2.addFeatures(features_p_2);
var lyr_p_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_p_2, 
                style: style_p_2,
                popuplayertitle: 'p',
                interactive: true,
                title: '<img src="styles/legend/p_2.png" /> p'
            });
var format_Outputpointlayer_3 = new ol.format.GeoJSON();
var features_Outputpointlayer_3 = format_Outputpointlayer_3.readFeatures(json_Outputpointlayer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputpointlayer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputpointlayer_3.addFeatures(features_Outputpointlayer_3);
var lyr_Outputpointlayer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outputpointlayer_3, 
                style: style_Outputpointlayer_3,
                popuplayertitle: 'Output point layer',
                interactive: true,
                title: '<img src="styles/legend/Outputpointlayer_3.png" /> Output point layer'
            });
var format_SIRGAS_SHP_distrito_4 = new ol.format.GeoJSON();
var features_SIRGAS_SHP_distrito_4 = format_SIRGAS_SHP_distrito_4.readFeatures(json_SIRGAS_SHP_distrito_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIRGAS_SHP_distrito_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIRGAS_SHP_distrito_4.addFeatures(features_SIRGAS_SHP_distrito_4);
var lyr_SIRGAS_SHP_distrito_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIRGAS_SHP_distrito_4, 
                style: style_SIRGAS_SHP_distrito_4,
                popuplayertitle: 'SIRGAS_SHP_distrito',
                interactive: true,
                title: '<img src="styles/legend/SIRGAS_SHP_distrito_4.png" /> SIRGAS_SHP_distrito'
            });

lyr_fundo_0.setVisible(true);lyr_SIRGAS_SHP_distrito_1.setVisible(true);lyr_p_2.setVisible(true);lyr_Outputpointlayer_3.setVisible(true);lyr_SIRGAS_SHP_distrito_4.setVisible(true);
var layersList = [lyr_fundo_0,lyr_SIRGAS_SHP_distrito_1,lyr_p_2,lyr_Outputpointlayer_3,lyr_SIRGAS_SHP_distrito_4];
lyr_fundo_0.set('fieldAliases', {'id': 'id', });
lyr_SIRGAS_SHP_distrito_1.set('fieldAliases', {'ds_nome': 'ds_nome', 'ds_codigo': 'ds_codigo', 'ds_cd_sub': 'ds_cd_sub', 'ds_subpref': 'ds_subpref', 'ds_sigla': 'ds_sigla', 'ds_areamt': 'ds_areamt', 'ds_areakm': 'ds_areakm', });
lyr_p_2.set('fieldAliases', {});
lyr_Outputpointlayer_3.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'COLETIVO_A': 'COLETIVO_A', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_callouts_originx': 'auxiliary_storage_callouts_originx', 'auxiliary_storage_callouts_originy': 'auxiliary_storage_callouts_originy', 'auxiliary_storage_callouts_destinationx': 'auxiliary_storage_callouts_destinationx', 'auxiliary_storage_callouts_destinationy': 'auxiliary_storage_callouts_destinationy', });
lyr_SIRGAS_SHP_distrito_4.set('fieldAliases', {'ds_codigo': 'ds_codigo', 'ds_nome': 'ds_nome', 'ds_sigla': 'ds_sigla', 'ds_areakm': 'ds_areakm', 'ds_areamt': 'ds_areamt', });
lyr_fundo_0.set('fieldImages', {'id': 'TextEdit', });
lyr_SIRGAS_SHP_distrito_1.set('fieldImages', {'ds_nome': 'TextEdit', 'ds_codigo': 'TextEdit', 'ds_cd_sub': 'TextEdit', 'ds_subpref': 'TextEdit', 'ds_sigla': 'TextEdit', 'ds_areamt': 'TextEdit', 'ds_areakm': 'TextEdit', });
lyr_p_2.set('fieldImages', {});
lyr_Outputpointlayer_3.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'COLETIVO_A': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_callouts_originx': 'TextEdit', 'auxiliary_storage_callouts_originy': 'TextEdit', 'auxiliary_storage_callouts_destinationx': 'TextEdit', 'auxiliary_storage_callouts_destinationy': 'TextEdit', });
lyr_SIRGAS_SHP_distrito_4.set('fieldImages', {'ds_codigo': 'TextEdit', 'ds_nome': 'TextEdit', 'ds_sigla': 'TextEdit', 'ds_areakm': 'TextEdit', 'ds_areamt': 'TextEdit', });
lyr_fundo_0.set('fieldLabels', {'id': 'no label', });
lyr_SIRGAS_SHP_distrito_1.set('fieldLabels', {'ds_nome': 'no label', 'ds_codigo': 'no label', 'ds_cd_sub': 'no label', 'ds_subpref': 'no label', 'ds_sigla': 'no label', 'ds_areamt': 'no label', 'ds_areakm': 'no label', });
lyr_p_2.set('fieldLabels', {});
lyr_Outputpointlayer_3.set('fieldLabels', {'name': 'no label', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'COLETIVO_A': 'no label', 'auxiliary_storage_callouts_originx': 'no label', 'auxiliary_storage_callouts_originy': 'no label', 'auxiliary_storage_callouts_destinationx': 'no label', 'auxiliary_storage_callouts_destinationy': 'no label', });
lyr_SIRGAS_SHP_distrito_4.set('fieldLabels', {'ds_codigo': 'no label', 'ds_nome': 'no label', 'ds_sigla': 'no label', 'ds_areakm': 'no label', 'ds_areamt': 'no label', });
lyr_SIRGAS_SHP_distrito_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});