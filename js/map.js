var opencacheUrl = 'http://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?';

var initLat = 7000000;
var initLon = 120000;

var sProjection = 'EPSG:32633';
var extent = {
	'EPSG:3857': [20037508.34, 20037508.34, 20037508.34, 20037508.34],
	'EPSG:32633': [-2500000, 3500000, 3045984, 9045984]
};

var projection = new ol.proj.Projection({
  code: sProjection,
  extent: extent[sProjection]
});
ol.proj.addProjection(projection);

var projectionExtent = projection.getExtent(),
size = ol.extent.getWidth(projectionExtent) / 256,
resolutions = [],
matrixIds = [];

for (var z = 0; z < 21; ++z) {//Max 18?
	resolutions[z] = size / Math.pow(2, z);
	matrixIds[z] = sProjection+":"+z;
}

var view = new ol.View({
    projection: projection,
    center: [initLon, initLat],
    zoom: 5
});

var topoNorGraatone = new ol.layer.Tile({
    title: "Topografisk norgeskart gråtone",
    source: new ol.source.WMTS({
        url: opencacheUrl,
        layer: "topo2graatone",
        format: 'image/png',
        projection: projection,
        matrixSet: sProjection,
        tileGrid: new ol.tilegrid.WMTS({
            origin: ol.extent.getTopLeft(projection.getExtent()),
            resolutions: resolutions,
            matrixIds: matrixIds
        }),
        style: 'default'
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
/*        new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'sat'})
        }),*/
        topoNorGraatone
    ],
    view: view
});

/*var scaleLine = new ol.control.ScaleLine();
map.addControl(scaleLine);*/

var mousePosition = new ol.control.MousePosition({
    target: 'mouseposition'
});
map.addControl(mousePosition);

var zoomSlider = new ol.control.ZoomSlider();
map.addControl(zoomSlider);