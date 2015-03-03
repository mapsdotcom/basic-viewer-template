function connectLayerToggles(layers) {
    //Class 6
    dojo.connect(dojo.byId("CondoClass6"), 'change', function () {
        changeLayerVisibility(layers[11]); //condo
    });
    dojo.connect(dojo.byId("HouseClass6"), 'change', function () {
        changeLayerVisibility(layers[17]); //house
    });
    dojo.connect(dojo.byId("VacantClass6"), 'change', function () {
        changeLayerVisibility(layers[5]); //palm
    });

    //Class 5
    dojo.connect(dojo.byId("CondoClass5"), 'change', function () {
        changeLayerVisibility(layers[10]); //condo
    });
    dojo.connect(dojo.byId("HouseClass5"), 'change', function () {
        changeLayerVisibility(layers[16]); //house
    });
    dojo.connect(dojo.byId("VacantClass5"), 'change', function () {
        changeLayerVisibility(layers[4]); //palm
    });

    //Class 4
    dojo.connect(dojo.byId("CondoClass4"), 'change', function () {
        changeLayerVisibility(layers[9]); //condo
    });
    dojo.connect(dojo.byId("HouseClass4"), 'change', function () {
        changeLayerVisibility(layers[15]); //house
    });
    dojo.connect(dojo.byId("VacantClass4"), 'change', function () {
        changeLayerVisibility(layers[3]); //palm
    });

    //Class 3
    dojo.connect(dojo.byId("CondoClass3"), 'change', function () {
        changeLayerVisibility(layers[8]); //condo
    });
    dojo.connect(dojo.byId("HouseClass3"), 'change', function () {
        changeLayerVisibility(layers[14]); //house
    });
    dojo.connect(dojo.byId("VacantClass3"), 'change', function () {
        changeLayerVisibility(layers[2]); //palm
    });

    //Class 2
    dojo.connect(dojo.byId("CondoClass2"), 'change', function () {
        changeLayerVisibility(layers[7]); //condo
    });
    dojo.connect(dojo.byId("HouseClass2"), 'change', function () {
        changeLayerVisibility(layers[13]); //house
    });
    dojo.connect(dojo.byId("VacantClass2"), 'change', function () {
        changeLayerVisibility(layers[1]); //palm
    });

    //Class 1
    dojo.connect(dojo.byId("CondoClass1"), 'change', function () {
        changeLayerVisibility(layers[6]); //condo
    });
    dojo.connect(dojo.byId("HouseClass1"), 'change', function () {
        changeLayerVisibility(layers[12]); //house
    });
    dojo.connect(dojo.byId("VacantClass1"), 'change', function () {
        changeLayerVisibility(layers[0]); //palm
    });
}