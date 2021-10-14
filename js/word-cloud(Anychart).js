// <!-- chart code will be here -->
anychart.onDocumentReady(function() {
    // code to create a word cloud chart will be here
            
        anychart.data.loadCsvFile("https://raw.githubusercontent.com/sushii2001/Data-Visualization-2/master/sources/hastag-count.csv", function (data) {
            // create chart from loaded data
            var chart = anychart.tagCloud(data);
            

            // set a chart title
            chart.title('Most used Hashtags');
            chart.title().fontColor("white");
            chart.title().fontSize(18)

            // set an array of angles at which the words will be laid out
            chart.angles([0]);

            // set color range
            var colorScale = anychart.scales.linearColor("#ffdf9e", "#e56969", "#c1558b", "#a33b92", "#8a49a1");
            chart.colorScale(colorScale);
            var colorRange = chart.colorRange();
            colorRange.enabled(true);

            // set the color range length
            chart.colorRange().length('80%');
            chart.colorRange().labels().fontColor("white");
            chart.colorRange().labels().fontSize(8)
            
            // Chart background colour
            chart.background().fill("#302c54");
            chart.background().cornerType('round').corners(15);
            
            // Select
            chart.selected().fill("white");

            // enable HTML for tooltips
            // chart.tooltip().useHtml(true);
            // tooltip settings
            var tooltip = chart.tooltip();
            tooltip.positionMode("point");
            tooltip.format("Count: {%value}");
            tooltip.fontSize(10)
            tooltip.title().fontSize(10)

            
            // chart id:
            chart.container("wordcloud");
            // chart sizing

            // draw chart
            chart.container("wordcloud").draw();
        });
        
});