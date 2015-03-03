function connectLayerToggles(layers) {
    //Class 4
    dojo.connect(dojo.byId("CondoClass5"), 'change', function () {
        changeLayerVisibility(layers[7]); //condo
    });
    dojo.connect(dojo.byId("HouseClass5"), 'change', function () {
        changeLayerVisibility(layers[11]); //house
    });
    dojo.connect(dojo.byId("VacantClass5"), 'change', function () {
        changeLayerVisibility(layers[3]); //palm
    });

    //Class 3
    dojo.connect(dojo.byId("CondoClass4"), 'change', function () {
        changeLayerVisibility(layers[6]); //condo
    });
    dojo.connect(dojo.byId("HouseClass4"), 'change', function () {
        changeLayerVisibility(layers[10]); //house
    });
    dojo.connect(dojo.byId("VacantClass4"), 'change', function () {
        changeLayerVisibility(layers[2]); //palm
    });

    //Class 2
    dojo.connect(dojo.byId("CondoClass10"), 'change', function () {
        changeLayerVisibility(layers[5]); //condo
    });
    dojo.connect(dojo.byId("HouseClass10"), 'change', function () {
        changeLayerVisibility(layers[9]); //house
    });
    dojo.connect(dojo.byId("VacantClass10"), 'change', function () {
        changeLayerVisibility(layers[1]); //palm
    });

    //Class 1
    dojo.connect(dojo.byId("CondoClass2"), 'change', function () {
        changeLayerVisibility(layers[4]); //condo
    });
    dojo.connect(dojo.byId("HouseClass2"), 'change', function () {
        changeLayerVisibility(layers[8]); //house
    });
    dojo.connect(dojo.byId("VacantClass2"), 'change', function () {
        changeLayerVisibility(layers[0]); //palm
    });
}