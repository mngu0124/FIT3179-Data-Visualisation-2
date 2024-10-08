var vg_1 = "max_temp.vg.json";
vegaEmbed("#bar_chart", vg_1).then(function(result) {
    var view = result.view;
}).catch(console.error);
