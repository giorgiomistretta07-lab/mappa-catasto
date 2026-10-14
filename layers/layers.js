var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Particelle_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https%3A%2F%2Fwms.cartografia.agenziaentrate.gov.it%2Finspire%2Fwms%2Fows01.php",
                              attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Particelle',
                            popuplayertitle: 'Particelle',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Particelle_1, 0]);
var lyr_Fabbricati_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https%3A%2F%2Fwms.cartografia.agenziaentrate.gov.it%2Finspire%2Fwms%2Fows01.php",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fabbricati",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Fabbricati',
                            popuplayertitle: 'Fabbricati',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fabbricati_2, 0]);
var format_qgistestbeni_3 = new ol.format.GeoJSON();
var features_qgistestbeni_3 = format_qgistestbeni_3.readFeatures(json_qgistestbeni_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qgistestbeni_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qgistestbeni_3.addFeatures(features_qgistestbeni_3);
var lyr_qgistestbeni_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qgistestbeni_3, 
                style: style_qgistestbeni_3,
                popuplayertitle: 'qgis test beni',
                interactive: true,
                title: '<img src="styles/legend/qgistestbeni_3.png" /> qgis test beni'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Particelle_1.setVisible(true);lyr_Fabbricati_2.setVisible(true);lyr_qgistestbeni_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Particelle_1,lyr_Fabbricati_2,lyr_qgistestbeni_3];
lyr_qgistestbeni_3.set('fieldAliases', {'Id Bene': 'Id Bene', 'Latitudine': 'Latitudine', 'Longitudine': 'Longitudine', 'tipo': 'tipo', });
lyr_qgistestbeni_3.set('fieldImages', {'Id Bene': '', 'Latitudine': '', 'Longitudine': '', 'tipo': '', });
lyr_qgistestbeni_3.set('fieldLabels', {'Id Bene': 'no label', 'Latitudine': 'no label', 'Longitudine': 'no label', 'tipo': 'no label', });
lyr_qgistestbeni_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});