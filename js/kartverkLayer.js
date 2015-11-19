var KartverkLayer = function(title, layer) {
    return new ol.layer.Tile({
       title: title,
       source: new ol.source.WMTS({
           url: Ol3test.statkartWMTSUrl,
           layer: layer,
           format: 'image/png',
           projection: Ol3test.projection,
           matrixSet: Ol3test.projectionName,
           tileGrid: new ol.tilegrid.WMTS({
               origin: ol.extent.getTopLeft(Ol3test.projection.getExtent()),
               resolutions: Ol3test.resolutions,
               matrixIds: Ol3test.matrixIds
           }),
           style: 'default'
       })
   });
};