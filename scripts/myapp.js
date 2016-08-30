(function () {

    window.myapp = window.myapp || {};

    window.onload = function () {

        // the URL to your viz.json
        var diJSON = 'https://team.carto.com/u/ramirocartodb/api/v3/viz/c90bbe09-3174-4609-ac21-ad667dd52993/viz.json';

        // username
        var username = 'ramirocartodb';

        // SQL client, inf needed
        myapp.sqlclient = new cartodb.SQL({
            user: username,
            protocol: "https",
            sql_api_template: "https://{user}.cartodb.com:443"
        });

        cartodb.deepInsights.createDashboard('#dashboard', diJSON, {
            no_cdn: false
        }, function (err, dashboard) {

            myapp.dashboard = dashboard;

            // DI map
            myapp.map = dashboard.getMap();

            // CARTO map to add layers and so
            myapp.Cmap = myapp.map.map;

            // CARTO layers
            myapp.layers = myapp.map.getLayers();


            // Array of widgets views
            myapp.widgets = dashboard.getWidgets();



        });
    }

})();
