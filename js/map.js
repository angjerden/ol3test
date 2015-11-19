var Ol3test = Ol3test || {};

var extent = Ol3test.extent;
var matrixIds = Ol3test.matrixIds;
var projection = Ol3test.projection;
var projectionName = Ol3test.projectionName;
var resolutions = Ol3test.resolutions;

var statkartWMTSUrl = 'http://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?';
var initLat = 7043000;
var initLon = 270000;

Ol3test.statkartWMTSUrl = statkartWMTSUrl;
Ol3test.initLat = initLat;
Ol3test.initLon = initLon;

var view = new ol.View({
    projection: projection,
    center: [initLon, initLat],
    zoom: 7
});

var topo2graatone = new KartverkLayer(
    "Topografisk norgeskart gråtone",
    "topo2graatone");

var topo2 = new KartverkLayer(
    "Topografisk norgeskart",
    "topo2");

var norgesGrunnkart = new KartverkLayer(
    "Norges grunnkart",
    "norges_grunnkart");

var map = new ol.Map({
    target: 'map',
    layers: [
        topo2graatone,
        topo2,
        norgesGrunnkart
    ],
    view: view
});

Ol3test.map = map;

//Problem using ScaleLine with debug version of OpenLayers
//Error is: Uncaught AssertionError: Assertion failed: transform should be defined
/*var scaleLine = new ol.control.ScaleLine();
map.addControl(scaleLine);*/

var rotate = new ol.control.Rotate();
map.addControl(rotate);

var mousePosition = new ol.control.MousePosition({
    target: 'mouseposition'
});
map.addControl(mousePosition);

var zoomSlider = new ol.control.ZoomSlider();
map.addControl(zoomSlider);