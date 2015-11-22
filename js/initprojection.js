window.Ol3test = Ol3test || {};
var Ol3test = window.Ol3test;

var projectionName = 'EPSG:32633';
var extent = {
	'EPSG:3857': [20037508.34, 20037508.34, 20037508.34, 20037508.34],
	'EPSG:32633': [-2500000, 3500000, 3045984, 9045984]
};

var projection = new ol.proj.Projection({
  code: projectionName,
  extent: extent[projectionName],
  units: 'm'
});
ol.proj.addProjection(projection);

var projectionExtent = projection.getExtent(),
size = ol.extent.getWidth(projectionExtent) / 256,
resolutions = [],
matrixIds = [];

for (var z = 0; z < 21; ++z) {//Max 18?
	resolutions[z] = size / Math.pow(2, z);
	matrixIds[z] = projectionName+":"+z;
}

Ol3test.projectionName = projectionName;
Ol3test.extent = extent;
Ol3test.projection = projection;
Ol3test.resolutions = resolutions;
Ol3test.matrixIds = matrixIds;
