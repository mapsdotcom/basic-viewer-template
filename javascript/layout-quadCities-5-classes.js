function connectLayerToggles(layers) {
    //Class 5 (least expensive-green)
    dojo.connect(dojo.byId("CondoClass5"), 'change', function () {
        changeLayerVisibility(layers[9]); //condo
    });
    dojo.connect(dojo.byId("HouseClass5"), 'change', function () {
        changeLayerVisibility(layers[14]); //house
    });
    dojo.connect(dojo.byId("VacantClass5"), 'change', function () {
        changeLayerVisibility(layers[4]); //palm
    });

    //Class 4 - blue
    dojo.connect(dojo.byId("CondoClass4"), 'change', function () {
        changeLayerVisibility(layers[8]); //condo
    });
    dojo.connect(dojo.byId("HouseClass4"), 'change', function () {
        changeLayerVisibility(layers[13]); //house
    });
    dojo.connect(dojo.byId("VacantClass4"), 'change', function () {
        changeLayerVisibility(layers[3]); //palm
    });

    //Class 10 - orange
    dojo.connect(dojo.byId("CondoClass10"), 'change', function () {
        changeLayerVisibility(layers[7]); //condo
    });
    dojo.connect(dojo.byId("HouseClass10"), 'change', function () {
        changeLayerVisibility(layers[12]); //house
    });
    dojo.connect(dojo.byId("VacantClass10"), 'change', function () {
        changeLayerVisibility(layers[2]); //palm
    });

    //Class 1 - red
    dojo.connect(dojo.byId("CondoClass1"), 'change', function () {
        changeLayerVisibility(layers[6]); //condo
    });
    dojo.connect(dojo.byId("HouseClass1"), 'change', function () {
        changeLayerVisibility(layers[11]); //house
    });
    dojo.connect(dojo.byId("VacantClass1"), 'change', function () {
        changeLayerVisibility(layers[1]); //palm
    });

    //Class 2 (most expensive - purple)
    dojo.connect(dojo.byId("CondoClass2"), 'change', function () {
        changeLayerVisibility(layers[5]); //condo
    });
    dojo.connect(dojo.byId("HouseClass2"), 'change', function () {
        changeLayerVisibility(layers[10]); //house
    });
    dojo.connect(dojo.byId("VacantClass2"), 'change', function () {
        changeLayerVisibility(layers[0]); //palm
    });
}