var Ol3test = Ol3test || {};

var extent = Ol3test.extent;
var matrixIds = Ol3test.matrixIds;
var projection = Ol3test.projection;
var projectionName = Ol3test.projectionName;
var resolutions = Ol3test.resolutions;

var opencacheUrl = 'http://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?';
var initLat = 7043000;
var initLon = 270000;

var view = new ol.View({
    projection: projection,
    center: [initLon, initLat],
    zoom: 7
});

var topoNorGraatone = new ol.layer.Tile({
    title: "Topografisk norgeskart gråtone",
    source: new ol.source.WMTS({
        url: opencacheUrl,
        layer: "topo2graatone",
        format: 'image/png',
        projection: projection,
        matrixSet: projectionName,
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
        topoNorGraatone
    ],
    view: view
});

var scaleLine = new ol.control.ScaleLine();
map.addControl(scaleLine);

var rotate = new ol.control.Rotate();
map.addControl(rotate);

var mousePosition = new ol.control.MousePosition({
    target: 'mouseposition'
});
map.addControl(mousePosition);

var zoomSlider = new ol.control.ZoomSlider();
map.addControl(zoomSlider);