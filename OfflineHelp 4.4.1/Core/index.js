var DK = DK || {};
DK.options = {};
DK.options.title = "Kaba exos 9300 core API";
DK.jsonPrefix = "/ExosCore/Help/";
if (!location.pathname.toLowerCase().includes("exoscore")) {
    DK.jsonPrefix = "/Help/";
}
DK.helpFiles = [
    {
        name: "Core Open Api",
        url: DK.jsonPrefix + "Help/CoreOpenApi.json",
    },
    {
        name: "OData (Staff)",
        url: DK.jsonPrefix + "Help/OData/Staff.json",
    },
];
