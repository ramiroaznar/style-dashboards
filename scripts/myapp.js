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

            cdb.$('#red').click(function() {
              cdb.$('.CDB-Dashboard-menuInner').css({'background':'#f24440'});
              cdb.$('.CDB-Widget').css({'background-color':'#f24440', 'color': 'white'});
              cdb.$('.u-secondaryTextColor').css({'color': 'white'});
              cdb.$('.CDB-Dashboard-canvas').css({'background': 'white'});
              cdb.$('.CDB-Chart-bar').css({'fill':'white'});
              cdb.$('.CDB-Widget-progressState').css({'background-color': 'white'});
              cdb.$('.u-actionTextColor, a').css({'color': 'white'});
              cdb.$('.CDB-Size-large').css({'font-weight': 'bold'});
              cdb.$('.CDB-Chart-axis CDB-Text CDB-Size-small').css({'color': 'white'});

            });

            cdb.$('#dark').click(function() {
              cdb.$('.CDB-Dashboard-menuInner').css({'background':'#2e3c43'});
              cdb.$('.CDB-Widget').css({'background-color':'#2e3c43', 'color': 'white'});
              cdb.$('.u-secondaryTextColor').css({'color': 'white'});
              cdb.$('.CDB-Dashboard-canvas').css({'background': '#282c2f'});
              cdb.$('.js-textInfo').css({'color': '#979ea1'});
              cdb.$('.CDB-Shape-threePoints').removeClass('is-blue').addClass('is-white');
              cdb.$('.CDB-Widget--light .CDB-Widget-progressBar').css({'background': '#414D54'});
            });

            cdb.$('#default').click(function() {
              cdb.$('.CDB-Dashboard-menuInner').css({'background':''});
              cdb.$('.CDB-Widget').css({'background-color':'', 'color': ''});
              cdb.$('.u-secondaryTextColor').css({'color': ''});
              cdb.$('.CDB-Dashboard-canvas').css({'background': ''});
              cdb.$('.CDB-Chart-bar').css({'fill':''});
              cdb.$('.CDB-Widget-progressState').css({'background-color': ''});
              cdb.$('.u-actionTextColor, a').css({'color': ''});
              cdb.$('.CDB-Size-large').css({'font-weight': ''});
              cdb.$('.CDB-Chart-axis CDB-Text CDB-Size-small').css({'color': '!important white'});

            });


        });
    }

})();