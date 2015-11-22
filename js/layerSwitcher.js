/**
 * A custom layer switcher for OpenLayers 3
 * Based on Matt Walker's implementation: https://github.com/walkermatt/ol3-layerswitcher
 * @param opt_options
 * @constructor
 */

Ol3test.LayerSwitcher = function(opt_options) {
    var options = opt_options || {};

    var layerSwitcherDiv = document.createElement("div");
    this.hiddenClassName = 'ol-unselectable ol-control layerswitcher';
    this.shownClassName = this.hiddenClassName + ' shown';

    layerSwitcherDiv.className = this.hiddenClassName;
    var button = document.createElement("button");
    layerSwitcherDiv.appendChild(button);

    this.panel = document.createElement("div");
    this.panel.className = "panel";
    layerSwitcherDiv.appendChild(this.panel);

    var that = this;

    button.addEventListener("click", function(e) {
        that.showHidePanel();
    });

    ol.control.Control.call(this, {
        element: layerSwitcherDiv,
        target: options.target
    });
};
ol.inherits(Ol3test.LayerSwitcher, ol.control.Control);

Ol3test.LayerSwitcher.prototype.setMap = function(map) {
    ol.control.Control.prototype.setMap.call(this, map);
    this.renderPanel();
};

Ol3test.LayerSwitcher.prototype.renderPanel = function() {
    var layerArray = this.getMap().getLayers().getArray();
    var numLayers = layerArray.length;

    var ul = document.createElement("ul");
    //adding radiobutton for each layer
    for (var i = 0; i < numLayers; i++) {
        var layerTitle =  layerArray[i].get("title");
        var layerID = layerTitle.toLowerCase().replace(/\s+/g, '_') + '_' + i;
        var li = document.createElement("li");

        var radiobutton = document.createElement("input");
        radiobutton.type = "radio";
        radiobutton.id = layerID;
        //TODO: Set event on radiobutton
        li.appendChild(radiobutton);

        var label = document.createElement("label");
        label.htmlFor = layerID;
        label.innerHTML = layerTitle;

        li.appendChild(label);
        ul.appendChild(li);
    }
    this.panel.appendChild(ul);
};

Ol3test.LayerSwitcher.prototype.showHidePanel = function() {
    this.element.className = this.element.className === this.hiddenClassName ?
        this.shownClassName : this.hiddenClassName;

};