var size = 0;
var placement = 'point';

var style_TitikRisikoLongsorSedang_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [64, 64],
                  scale: 0.234375,
                  anchor: [7, 7],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 3.1415940000000004,
                  src: "styles/oil_25k.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
