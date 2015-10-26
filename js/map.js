var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'sat'})
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([7.41, 58.82]),
        zoom: 7
    })
});

var scaleLine = new ol.control.ScaleLine();
map.addControl(scaleLine);

var mousePosition = new ol.control.MousePosition({
    target: 'mouseposition'
});
map.addControl(mousePosition);

var zoomSlider = new ol.control.ZoomSlider();
map.addControl(zoomSlider);